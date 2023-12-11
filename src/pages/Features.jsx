import {Link} from "react-router-dom";
import {PageHeader} from "../components/PageHeader";
import {PageContainer} from "../components/PageContainer";

const Features = () => {
    return (
        <PageContainer>
            <PageHeader text={"PyPy Features"} />
            <div>
                PyPy is a replacement for CPython. It is built using the RPython language that was co-developed with it. The main reason to use it instead of CPython is speed: it runs generally faster (see next section).
            </div>
            <div className={""}>
                PyPy implements Python 2.7.18, 3.9.15, and 3.8.15. It supports all of the core language. It supports most of the commonly used Python standard library modules. For known differences with CPython, see our <Link to={"/compatibility"}>compatibility</Link> page.
            </div>
            <div className={""}>
                The following CPU architectures are supported and maintained:
                <ul className="marker:text-green-600 list-disc ps-5 space-y-2 text-sm text-gray-600 dark:text-gray-400 leading-10">
                    <li>
                        <a href="http://en.wikipedia.org/wiki/IA-32">x86 (IA-32)</a> and <a href="http://en.wikipedia.org/wiki/X86_64">x86_64</a>
                    </li>
                    <li>
                        <a href="http://en.wikipedia.org/wiki/ARM">ARM</a> platforms (ARMv6 and ARMv7, with VFPv3, and Apple Silicon arm64)
                    </li>
                    <li>
                        <a href="http://en.wikipedia.org/wiki/AArch64">AArch64</a>
                    </li>
                    <li>
                        <a href="https://en.wikipedia.org/wiki/PowerPC">PowerPC</a> x64bit both little and big endian 
                    </li>
                    <li>
                        <a href="https://en.wikipedia.org/wiki/IBM_System/390">System Z (s390x)</a>
                    </li>
                </ul>
            </div>
            <div className={""}>
                PyPy's x86 version runs on several operating systems, such as Linux (32/64 bits), MacOS (64 bits), Windows (32 bits), OpenBSD, FreeBSD. Non-x86 versions are supported on Linux, and ARM64 is supported on MacOS.
            </div>
            <div>If you are interested in helping, see our <Link to={"/howtohelp"}>howtohelp page.</Link></div>
            
            <section className={"space-y-8"}>
                <div className={"text-3xl pt-12"}>The main features of PyPy</div>
                <section className={"space-y-5"}>
                    <div className={"font-bold"}>Speed</div>
                    <div>
                        <Link to={"/download"}>Our main executable</Link> comes with a Just-in-Time compiler. It is <a href="http://speed.pypy.org/" target="_blank" rel="noreferrer">really fast</a> in running most benchmarks—including very large and complicated Python applications, not just 10-liners.
                    </div>
                    <div>
                        <div>There are two cases that you should be aware where PyPy will not be able to speed up your code:</div>
                        <ul className="marker:text-green-600 list-disc ps-5 space-y-2 text-sm text-gray-600 dark:text-gray-400 leading-10">
                            <li>
                                Short-running processes: if it doesn't run for at least a few seconds, then the JIT compiler won't have enough time to warm up.
                            </li>
                            <li>
                                If all the time is spent in run-time libraries (i.e. in C functions), and not actually running Python code, the JIT compiler will not help.
                            </li>
                        </ul>
                    </div>
                    <div>So the case where PyPy works best is when executing long-running programs where a significant fraction of the time is spent executing Python code. This is the case covered by the majority of <a href="http://speed.pypy.org/">our benchmarks</a>, but not all of them --- the goal of PyPy is to get speed but still support (ideally) any Python program.</div>
                </section>
                <section className={"space-y-5"}>
                    <div className={"font-bold"}>Memory Usage</div>
                    <div>
                        Memory-hungry Python programs (several hundreds of MBs or more) might end up taking less space than they do in CPython. It is not always the case, though, as it depends on a lot of details. Also note that the baseline is higher than CPython's.
                    </div>
                </section>
                <section className={"space-y-5"}>
                    <div className={"font-bold"}>Stackless</div>
                    <div>
                        Support for <a href="http://www.stackless.com/">Stackless</a> and greenlets are now integrated in the normal PyPy. More detailed information is available here.
                    </div>
                </section>
                <section className={"space-y-5"}>
                    <div className={"font-bold"}>Other features</div>
                    <div>
                        PyPy has many secondary features and semi-independent projects. We will mention here:
                    </div>
                    <div>
                        <div>There are two cases that you should be aware where PyPy will not be able to speed up your code:</div>
                        <ul className="marker:text-green-600 list-disc ps-5 space-y-2 text-sm text-gray-600 dark:text-gray-400 leading-10">
                            <li>
                                <b>Other languages:</b> we also implemented other languages that makes use of our RPython toolchain: <a href="https://github.com/cosmoharrigan/pyrolog" target="_blank" rel="noreferrer">Prolog</a> (almost complete), as well as <a href="https://bitbucket-archive.softwareheritage.org/projects/py/pypy/lang-smalltalk.html" target="_blank" rel="noreferrer">Smalltalk</a>, <a href="https://bitbucket-archive.softwareheritage.org/projects/py/pypy/lang-js.html" target="_blank" rel="noreferrer">JavaScript</a>, <a href="https://bitbucket-archive.softwareheritage.org/projects/py/pypy/lang-io.html" target="_blank" rel="noreferrer">Io</a>, <a href="https://bitbucket-archive.softwareheritage.org/projects/py/pypy/lang-scheme.html" target="_blank" rel="noreferrer">Scheme</a> and <a href="https://bitbucket-archive.softwareheritage.org/projects/py/pypy/lang-gameboy.html" target="_blank" rel="noreferrer">Gameboy</a>.
                            </li>
                        </ul>
                            <div>
                                There is also a Ruby implementation called <a href="https://github.com/topazproject/topaz" target="_blank" rel="noreferrer">Topaz</a> and a PHP implementation called <a href="http://www.hippyvm.com/" target="_blank" rel="noreferrer">HippyVM</a>.
                            </div>
                    </div>
                </section>
                <section className={"space-y-5"}>
                    <div className={"font-bold"}>Sandboxing</div>
                    <div>
                        PyPy's sandboxing is a working prototype for the idea of running untrusted user programs. Unlike other sandboxing approaches for Python, PyPy's does not try to limit language features considered "unsafe". Instead we replace all calls to external libraries (C or platform) with a stub that communicates with an external process handling the policy.
                    </div>
                    <div className={"border-2 border-base-300 bg-base-300 w-11/12 mx-auto p-8 rounded-md space-y-4"}>
                        <div><b>Note</b></div>

                        <div>
                            <b>Please be aware that it is a prototype only.</b> It needs work to become more complete, and you are welcome to help. In particular, almost none of the extension modules work (not even time ), and pypy_interact is merely a demo. Also, a more complete system would include a way to do the same as pypy_interact from other languages than Python, to embed a sandboxed interpreter inside programs written in other languages.
                        </div>
                    </div>
                    <div>
                        To run the sandboxed process, you need to get the full sources and build pypy-sandbox from it (see <a href="https://www.pypy.org/download.html#building-from-source" target="_blank" rel="noreferrer">Building from source</a>). These instructions give you a pypy-c that you should rename to pypy-sandbox to avoid future confusion.
                    </div>
                    <section className={"space-y-4"}>
                        <div>Then run:</div>
                        <div className="mockup-code">
                            <pre data-prefix="$"><code>cd pypy/sandbox</code></pre> 
                            <pre data-prefix="$" className="text-warning"><code>pypy_interact.py path/to/pypy-sandbox</code></pre> 
                            <pre data-prefix="#" className="text-neutral-content/40"><code>don't confuse it with pypy/goal/pyinteractive.py!</code></pre>
                        </div>
                    </section>
                    <section className={"space-y-4"}>
                        <div>You get a fully sandboxed interpreter, in its own filesystem hierarchy (try os.listdir('/')). For example, you would run an untrusted script as follows:</div>
                        <div className="mockup-code">
                            <pre data-prefix="$"><code>mkdir virtualtmp</code></pre> 
                            <pre data-prefix="$" className=""><code>cp untrusted.py virtualtmp/</code></pre> 
                            <pre data-prefix="$" className=""><code>pypy_interact.py --tmp=virtualtmp pypy-sandbox /tmp/untrusted.py</code></pre>
                        </div>
                    </section>
                </section>
                <div>
                    Note that the path /tmp/untrusted.py is a path inside the sandboxed filesystem. You don't have to put untrusted.py in the real /tmp directory at all.
                </div>
                <div>To read more about its features, try pypy_interact.py --help or go to <a href="http://pypy.readthedocs.org/en/latest/sandbox.html" target="_blank" rel="noreferrer">our documentation site.</a></div>
            </section>
        </PageContainer>
    )
}

export default Features;