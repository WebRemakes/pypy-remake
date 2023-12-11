import {PageBodyContainer, PageContainer} from "../components/PageContainer";
import {PageHeader, PageSubHeader} from "../components/PageHeader";
import ExternalLink from "../components/ExternalLink";

const Compat = () => {
    return (
        <PageContainer>
            <PageHeader text={"Python Compatibility"} />
            <div>The goal of this page is to point out some of the differences between running python with PyPy and with CPython</div>
            <PageBodyContainer>
                <PageSubHeader text={"TL;DR"}/>
                <div>
                    Pure python code works, but there are a few differences with object lifetime management. Modules that use the <ExternalLink url="http://docs.python.org/c-api/">CPython C API</ExternalLink> will probably work, but will not achieve a speedup via the JIT. We encourage library authors to use <ExternalLink url={"http://cffi.readthedocs.org/"}>CFFI</ExternalLink> and <ExternalLink url={"https://hpyproject.org/"}>HPy</ExternalLink> instead.
                </div>
                <div>
                    If you are looking for how to use PyPy with the scientific python ecosystem, we encourage you to use <ExternalLink url={"https://conda-forge.org/blog/posts/2020-03-10-pypy/"}>conda</ExternalLink>, since they repackage common libraries like scikit-learn and SciPy for PyPy.</div>
            </PageBodyContainer>
            <PageBodyContainer>
                <PageSubHeader text={"Refcounting, __del__, and resource use"}/>
                <div>
                    The main difference in pure-python code that is not going to be fixed is that PyPy does not support refcounting semantics for "automatically" releasing state when an object's __del__ is called. The following code won't fill the file immediately, but only after a certain period of time, when the GC does a collection and flushes the output, since the file is only closed when the __del__ method is called:
                </div>
                <div className="mockup-code">
                    <pre><code>open("filename", "w").write("stuff")</code></pre>
                </div>
                <div>The proper fix is</div>
                <div className="mockup-code">
                    <pre className="whitespace-pre">
                        <code>
                            with open("filename", "w") as f:
                        </code>
                    </pre>
                    <pre>
                        <code>
                            {"    "}f.write("stuff")
                        </code>
                    </pre>
                </div>
                <div>
                    The same problem---not closing your files---can also show up if your program opens a large number of files without closing them explicitly. In that case, you can easily hit the system limit on the number of file descriptors that are allowed to be opened at the same time.
                </div>
                <div>
                    PyPy can be run with the command-line option -X track-resources (as in, pypy -X track-resources myprogram.py). This produces a ResourceWarning when the GC closes a non-closed file or socket. The traceback for the place where the file or socket was allocated is given as well, which aids finding places where close() is missing.
                </div>
                <div>
                    Similarly, remember that you must close() a non-exhausted generator in order to have its pending finally or with clauses executed immediately:
                </div>
                <div className="mockup-code">
                    <pre><code>
                        def mygen():
                    </code></pre> 
                    <pre><code>{"\t"}with foo:</code></pre>
                    <pre><code>{"\t\t"}yield 42</code></pre>
                    <br/>
                    <pre><code>
                        for x in mygen():
                    </code></pre>
                    <pre><code>{"\t"}if x == 42:</code></pre>
                    <pre><code>{"\t\t"}break    # foo.__exit__ is not run immediately!</code></pre>
                    <br/>
                    <pre><code># fixed version</code></pre>
                    <pre><code>gen = mygen()</code></pre>
                    <pre><code>try:</code></pre>
                    <pre><code>{"\t"}for x in gen</code></pre>
                    <pre><code>{"\t\t"}if x == 42:</code></pre>
                    <pre><code>{"\t\t\t"}break</code></pre>
                    <pre><code>finally:</code></pre>
                    <pre><code>{"\t"}gen.close()</code></pre>
                </div>
                <div>More generally, __del__() methods are not executed as predictively as on CPython: they run "some time later" in PyPy (or not at all if the program finishes running in the meantime). <ExternalLink url={"http://pypy.readthedocs.org/en/latest/cpython_differences.html#differences-related-to-garbage-collection-strategies"}>See more details here.</ExternalLink></div>
            </PageBodyContainer>
            <PageBodyContainer>
                <PageSubHeader text={"Why is memory usage so high?"} />
                <div>
                    Note that PyPy returns unused memory to the operating system only after a madvise() system call (at least Linux, OS X, BSD) or on Windows. It is important to realize that you may not see this in top. The unused pages are marked with MADV_FREE, which tells the system "if you need more memory at some point, grab this page". As long as memory is plentiful, the RES column in top might remains high. (Exceptions to this rule are systems with no MADV_FREE, where we use MADV_DONTNEED, which forcefully lowers the RES. This includes Linux {"<="} 4.4.)
                </div>
            </PageBodyContainer>
            <PageBodyContainer>
                <PageSubHeader text={"More Info"} />
                <div>
                    A more complete list of known differences is available at <ExternalLink url={"http://pypy.readthedocs.org/en/latest/cpython_differences.html"}>our dev site</ExternalLink>.
                </div>
            </PageBodyContainer>
        </PageContainer>
    )
}

export default Compat;