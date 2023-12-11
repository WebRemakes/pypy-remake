import {PageBodyContainer, PageContainer} from "../components/PageContainer";
import {PageHeader, PageSubHeader} from "../components/PageHeader";
import ExternalLink from "../components/ExternalLink";

const ContentContainer = ({headerText, children}) => {
    return (
        <div className={"space-y-4"}>
            <header className={"text-2xl"}>{headerText}</header>
            <div className={"leading-8"}>
                {children}
            </div>
        </div>
    )
};

const Performance = () => {
    return (
        <PageContainer>
            <PageHeader text={"Performance"} />
            <div className={"space-y-4"}>
                <div>Contents</div>
                <ul className="marker:text-green-600 list-disc ps-5 space-y-2 text-sm text-gray-600 dark:text-gray-400 leading-10">
                    <li>
                        <a href={"#profiling-vmprof"}>Profiling: vmprof</a>
                    </li>
                    <li>
                        <a href={"#optimization-strategy"}>Optimization strategy</a>
                    </li>
                    <li>
                        <a href={"#micro-tuning-tips"}>Micro-tuning tips</a>
                    </li>
                </ul>
            </div>
            <PageBodyContainer>
                <PageSubHeader id={"profiling-vmprof"} text={"Profiling vmprof"}/>
                <div>
                    As a general rule, when considering performance issues, follow these three points: first measure them (it is counter-productive to fight imaginary performance issues); then profile your code (it is useless to optimize the wrong parts). Only optimize then.

                    PyPy 2.6 introduced <ExternalLink url={"https://vmprof.readthedocs.org/"}>vmprof</ExternalLink>, a very-low-overhead statistical profiler. The standard, non-statistical cProfile is also supported, and can be enabled without turning off the JIT. We do recommend vmprof anyway because turning on cProfile can distort the result (sometimes massively, though hopefully this should not be too common).
                </div>
            </PageBodyContainer>
            <PageBodyContainer>
                <PageSubHeader id={"optimization-strategy"} text={"Optimization Strategy"}/>
                <div>
                    These suggestions apply to all computer languages. They're here as reminders of things to try before any Python or PyPy-specific tweaking.
                </div>
                <ContentContainer headerText={"Build a regression-test suite"}>
                    <div>Before you start tuning, build a regression-test suite for your code. This front-loads a significant amount of work, but it means you can try lots of optimizations without worrying so much about introducing functional bugs.</div>
                </ContentContainer>
                <ContentContainer headerText={"Measure, don't guess"}>
                    <div className={"space-y-6"}>
                        <div>
                            Human beings are bad at guessing or intuiting where the hotspots in code are. Measure, don't guess; use a profiler to pin down the 20% of the code where the code is spending 80% of its time, then speed-tune that.
                        </div>
                        <div>
                            Measuring will save you a lot of effort wasted on tuning parts of the code that aren't actually bottlenecks.
                        </div>
                        <div>
                            As you tune, re-profile frequently so you can see how the hottest spots are shifting around.
                        </div>
                    </div>
                </ContentContainer>
                <ContentContainer headerText={"I/O-bound is different from compute-bound"}>
                    <div className={"space-y-6"}>
                        <div>
                            Be aware of the difference between code that is compute-bound (slow because it's doing a huge number of instructions) and code that is I/O bound (slow because of disk or network delays).
                        </div>
                        <div>
                            Expect to get most of your gains from optimizing compute-bound code. It's usually (though not always) a sign that you're near the end of worthwhile tuning when profiling shows that the bulk of the application's time is spent on network and disk I/O.
                        </div>
                    </div>
                </ContentContainer>
                <ContentContainer headerText={"Tune your algorithms first"}>
                    <div className={"space-y-6"}>
                        <div>
                            Generally, when your code is doing things that are O(n**2) or larger in the size of your data set, the cost of those operations is going to swamp any small gains you can pick up with the tricks we describe here.
                        </div>
                        <div>
                            Tune your algorithms first. It's time to think about applying our list of micro-tuning tips after you think you've optimized out intrinsically expensive operations.
                        </div>
                        <div>
                            That said, be prepared for the possibility that you will discover better-hidden algorithmic problems as you micro-tune. Likely you will go through this cycle more than once.
                        </div>
                    </div>
                </ContentContainer>
                <ContentContainer headerText={"Focus on tight loops"}>
                    <div className={"space-y-6"}>
                        <div>
                            It's extremely common for high time costs to lurk within some innocuous-looking code inside a tight loop - especially in code that does something like a searching/matching/lookup operation or any kind of graph traversal.
                        </div>
                        <div>
                            Probably the most common kind of performance-killer in compute-bound code is an O(n**2) operation that is disguised by being some sort of O(n) lookup or match inside an O(n) loop.
                        </div>
                        <div>
                            Another common time-sink is relatively expensive common-setup operations that are performed inside tight loops but could be moved to before they start. (For a representative case of this, see the micro-tuning tip on regexp compilation.)
                        </div>
                    </div>
                </ContentContainer>
                <ContentContainer headerText={"Smaller is faster"}>
                    <div className={"space-y-6"}>
                        <div>
                            Modern computers have multiple levels of memory caching, some directly on the processor chip. Causing a cache miss at any level incurs a performance penalty proportional to random-access time for the next outward (and much slower) layer of cache.
                        </div>
                        <div>
                        Accordingly, smaller is faster. Programs or routines with a small enough working set to fit inside a fast cache will be as fast as that cache is. To make your code fast, reduce the length of the series of Python or JIT-compiler opcodes it generates by making it simpler.
                        </div>
                        <div>
                        The tradeoff here is that algorithmic tuning often trades time for space - that is, it increases the size of an algorithm's working set by including pre-computations or tables or reverse maps in order to avoid O(n**2) operations.
                        </div>
                        <div>
                        It's impossible to predict in advance where the sweet spot in that tradeoff will be. You have to try different things and measure - which takes us right back to "Measure, don't guess". And another function of your regression test suite can be as a speed benchmark
                        </div>
                    </div>
                </ContentContainer>
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
                <PageSubHeader id={"micro-tuning-tips"} text={"Micro-tuning tips"} />
                <div>
                    These are in no particular order.
                </div>
                <ContentContainer headerText={"Keep it simple"}>
                    <div className={"space-y-6"}>
                        <div>
                            Simple is better than complex. The PyPy JIT is not very smart; the simpler your code is the better it will run. Here again, though, you face a tradeoff: you may need to pay with more algorithmic complexity in order to avoid brute-force operations that are O(n**2) or worse.
                        </div>
                        <div>
                            Write plain-vanilla code in plain-vanilla ways. The PyPy JIT has many productions that optimize a common usage pattern against an uncommon usage pattern.
                        </div>
                    </div>
                </ContentContainer>
                <ContentContainer headerText={"Global variables"}>
                    <div className={"space-y-6"}>
                        <div>
                            In CPython, global variables and functions (including package imports) are much more expensive to reference than locals; avoid them. (This is also good modularity practice).
                        </div>
                        <div>
                            The cost of CPython global references is high enough that, for example, if you have code in a frequently-visited inner loop that uses int() a lot, it may be worthwhile to create a local copy of the reference with "int = int" in an enclosing block.
                        </div>
                        <div>
                            However, this in not true in JITted PyPy code. The "int = int" hack won't buy you performance, it's just an extra copy. The modularity reason for avoiding globals are still valid.
                        </div>
                    </div>
                </ContentContainer>
                <ContentContainer headerText={"Regular expressions"}>
                    <div className={"space-y-6"}>
                        <div>
                            Regular-expression compilation is expensive. If the regexp pattern in a search, match, or replace operation is static (doesn't mutate at runtime) refactor so it's only done once.
                        </div>
                        <div>
                            If the regexp compilation is in a class method, consider doing it as the initializer of a regexp-valued static (shared) class member and using that class member in your operation.
                        </div>
                        <div>
                            If the regexp compilation is in a free function, consider moving it to module level and referencing the resulting regexp object (but see the warning above about global variables).
                        </div>
                    </div>
                </ContentContainer>
                <ContentContainer headerText={"Old vs. new-style classes"}>
                    <div className={"space-y-6"}>
                        <div>
                            New-style classes allow faster attribute access and take up less core per instance than old-style classes. Much of this advantage may be lost, however, if attribute names are not constant. For example: x.a = y or even setattr(x, 'a', y) will be much faster than a dynamic version: setattr(x, 'a' + some_variable, y).
                        </div>
                        <div>
                            Classes that inherit from both new- and old-style classes are extremely slow; avoid at all costs.
                        </div>
                        <div>
                            In PyPy, isinstance() called against an old-style class was very slow until 2.0.
                        </div>
                    </div>
                </ContentContainer>
                <ContentContainer headerText={"String concatenation is expensive"}>
                    <div className={"space-y-6"}>
                        <div>
                            In CPython, you may want to replace:
                        </div>
                        <div className="mockup-code">
                            <pre><code>s = head + body + maybe + tail</code></pre>
                        </div>
                        <div>
                            with the admittedly less readable:
                        </div>
                        <div className="mockup-code">
                            <pre><code>s = "%(head)s%(body)s%(maybe)s%(tail)s" % locals()</code></pre>
                        </div>
                        <div>
                            or even:
                        </div>
                        <div className="mockup-code">
                            <pre><code>s = "{`${"{head}{body}{maybe}{tail}"}`}".format(**locals())</code></pre>
                        </div>
                        <div>
                            Both of the latter forms avoid multiple-allocation overhead. But PyPy's JIT makes the overhead of intermediate concatenations go away in linear code that keeps the number of concatenations small, bound and constant. (And locals() is rather slow with PyPy's JIT.)
                        </div>
                        <div>On the other hand, in code like this with a string-valued foo() function:</div>
                        <div className="mockup-code">
                            <pre><code>for x in mylist:</code></pre>
                            <pre><code>{"\t"}s += foo(x)</code></pre>
                        </div>
                        <div>
                            the JIT cannot optimize out intermediate copies. This code is actually quadratic in the total size of the mylist strings due to repeated string copies of ever-larger prefix segments. (Such code is always fine for bytearrays, because in this case += is an in-place operation.)
                        </div>
                        <div>This</div>
                        <div className="mockup-code">
                            <pre><code>parts = []</code></pre>
                            <pre><code>for x in mylist:</code></pre>
                            <pre><code>{"\t"}parts.append(foo(x))</code></pre>
                            <pre><code>s = "".join(parts)</code></pre>
                        </div>
                        <div>
                            can be much faster because all the string concatenation in the last line creates exactly one new string object with one C-level copy sequence (and list operations are relatively cheap).
                        </div>
                    </div>
                </ContentContainer>
                <ContentContainer headerText={"Frame introspection and tracing are slow"}>
                    <div className={"space-y-6"}>
                        <div>
                            Certain function calls can disable PyPy's speed options over stretches of surrounding code called "JIT scopes".
                        </div>
                        <div>
                            A JIT like PyPy's works based on the assumption that the only thing worth optimizing are loops that are executed often. Whenever the interpreter enters a loop in the interpreted program, the JIT records what the interpreter does, creating a trace. This trace is optimized, compiled to machine code and executed when the loop is hit with the conditions observed during tracing. This trace is one kind of JIT scope.
                        </div>
                        <div>
                            Another kind of JIT scope that matters is a function, considered as a unit for inlining.
                        </div>
                        <div>
                            Note that a JIT scope is a run-time phenomenon, not a compile-time one. It's not confined by source-code module boundaries. A library- or foreign-module call in a frequently-called loop or inlined function will be part of its JIT scope.
                        </div>
                        <div>
                            locals(), globals(), sys._getframe(), sys.exc_info(), and sys.settrace work in PyPy, but they incur a performance penalty that can be huge by disabling the JIT over the enclosing JIT scope.
                        </div>
                        <div>
                            (Thanks Eric S. Raymond for the text above)
                        </div>
                    </div>
                </ContentContainer>
                <ContentContainer headerText={"Insider's point of view"}>
                    <div className={"space-y-6"}>
                        <div>
                            This section describes performance issues from the point of view of insiders of the project; it should be particularly interesting if you plan to contribute in that area.
                        </div>
                        <div>
                            One of the goals of the PyPy project is to provide a fast and compliant python interpreter. Some of the ways we achieve this are by providing a high-performance garbage collector (GC) and a high-performance Just-in-Time compiler (JIT). Results of comparing PyPy and CPython can be found on the <ExternalLink url={"http://speed.pypy.org/"}>speed website</ExternalLink>. Those benchmarks are not a random collection: they are a combination of real-world Python programs --- benchmarks originally included with the (now dead) Unladen Swallow project --- and benchmarks for which we found PyPy to be slow (and improved). Consult the descriptions of each for details.
                        </div>
                        <div>
                            The JIT, however, is not a magic bullet. There are several characteristics that might surprise people who are not used to JITs in general or to the PyPy JIT in particular. The JIT is generally good at speeding up straight-forward Python code that spends a lot of time in the bytecode dispatch loop, i.e., running actual Python code --- as opposed to running things that only are invoked by Python code. Good examples include numeric calculations or any kind of heavily object-oriented program. Bad examples include doing computations with large longs --- which is performed by unoptimizable support code. When the JIT cannot help, PyPy is generally slower than CPython.
                        </div>
                        <div>
                            <div className={"space-y-4"}>
                                <div>More specifically, the JIT is known not to work on:</div>
                                <ul className="marker:text-green-600 list-disc ps-5 space-y-2 text-sm text-gray-600 dark:text-gray-400 leading-10">
                                    <li>
                                        <strong>Tests</strong>: The ideal unit tests execute each piece of tested code once. This leaves no time for the JIT to warm up.
                                    </li>
                                    <li>
                                        <strong>Really short-running scripts</strong>: A rule of thumb is if something runs below 0.2s the JIT has no chance, but it depends a lot on the program in question. In general, make sure you warm up your program before running benchmarks, if you're measuring something long-running like a server. The time required to warm up the JIT varies; give it at least a couple of seconds. (PyPy's JIT takes an especially long time to warm up.)
                                    </li>
                                    <li>
                                        <strong>Long-running runtime functions</strong>: These are the functions provided by the runtime of PyPy that do a significant amount of work. PyPy's runtime is generally not as optimized as CPython's and we expect those functions to take somewhere between the same time as CPython to twice as long. This includes, for example, computing with longs, or sorting large lists. A counterexample is regular expressions: although they take time, they come with their own JIT.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className={"space-y-4"}>
                                <div>Unrelated things that we know PyPy to be slow at (note that we're probably working on it):</div>
                                <ul className="marker:text-green-600 list-disc ps-5 space-y-2 text-sm text-gray-600 dark:text-gray-400 leading-10">
                                    <li>
                                        <strong>CPython C extension modules</strong>: Any C extension module recompiled with PyPy takes a very large hit in performance. PyPy supports C extension modules solely to provide basic functionality. If the extension module is for speedup purposes only, then it makes no sense to use it with PyPy at the moment. Instead, remove it and use a native Python implementation, which also allows opportunities for JIT optimization. If the extension module is both performance-critical and an interface to some C library, then it might be worthwhile to consider rewriting it as a pure Python version that uses <ExternalLink url={"http://cffi.readthedocs.org/"}>CFFI</ExternalLink> for the interface.
                                    </li>
                                    <li>
                                        <strong>Missing RPython modules</strong>: A few modules of the standard library (like csv and cPickle) are written in C in CPython, but written natively in pure Python in PyPy. Sometimes the JIT is able to do a good job on them, and sometimes not. In most cases (like csv and cPickle), we're slower than CPython, with the notable exception of json and heapq.
                                    </li>
                                    <li>
                                        <strong>Abuse of itertools</strong>: The itertools module is often "abused" in the sense that it is used for the wrong purposes. From our point of view, itertools is great if you have iterations over millions of items, but not for most other cases. It gives you 3 lines in functional style that replace 10 lines of Python loops (longer but arguably much easier to read). The pure Python version is generally not slower even on CPython, and on PyPy it allows the JIT to work much better --- simple Python code is fast. The same argument also applies to filter(), reduce(), and to some extend map() (although the simple case is JITted), and to all usages of the operator module we can think of.
                                    </li>
                                    <li>
                                        <strong>Ctypes:</strong>: Ctypes is slower than on CPython. Consider <ExternalLink url={"http://cffi.readthedocs.org/"}>CFFI</ExternalLink> or <ExternalLink url={"https://hpyproject.org/"}>HPy</ExternalLink> instead which have special paths inside the JIT.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            We generally consider things that are slower on PyPy than CPython to be bugs of PyPy. If you find some issue that is not documented here, please report it to our bug tracker for investigation.
                        </div>
                    </div>
                </ContentContainer>
            </PageBodyContainer>
        </PageContainer>
    );
}

export default Performance;