import {PageBodyContainer, PageContainer} from "../components/PageContainer";
import {PageHeader, PageSubHeader} from "../components/PageHeader";
import ExternalLink from "../components/ExternalLink";
import {Link} from "react-router-dom";
import {NoteBlock} from "../components/NoteBlock";
import PyPyLatest from "../components/PyPyLatest";
import {CodeBlock} from "../components/CodeBlock";

const DownloadAdvanced = () => {
    return (
        <PageContainer>
            <PageHeader text={"Download Advanced"} />
            <div className={"space-y-8"}>
                <div className={"space-y-4"}>
                    <div>Contents</div>
                    <ul className="marker:text-green-600 list-disc ps-5 space-y-2 text-sm text-gray-600 dark:text-gray-400 leading-10">
                        <li>
                            <Link to={"#jit-compiler"} className="">"JIT Compiler" version</Link>
                        </li>
                        <li>
                            <Link to={"#linux-binaries"} className="">Linux binaries and common distributions</Link>
                        </li>
                        <li>
                            <Link to={"#pypy-stm"} className="">PyPy-STM 2.5.1</Link>
                        </li>
                        <li>
                            <Link to={"#other-versions"} className="">Other versions</Link>
                        </li>
                        <li>
                            <Link to={"#installing"} className="">Installing</Link>
                        </li>
                        <li>
                            <Link to={"#installing-more-modules"} className="">Installing more modules</Link>
                        </li>
                        <li>
                            <Link to={"#building-from-source"} className="">Building from source</Link>
                        </li>
                        <li>
                            <Link to={"#packaging"} className="">Packaging</Link>
                        </li>
                        <li>
                            <Link to={"#checksums"} className="">Checksums</Link>
                        </li>
                    </ul>
                </div>
                <div className={"space-y-4"}>
                    <div>We provide pre-compiled binaries for many platforms and OSes:</div>
                    <ul className="marker:text-green-600 list-disc ps-5 space-y-2 text-sm text-gray-600 dark:text-gray-400 leading-10">
                        <li>
                            the Python2.7 compatible release — <strong>PyPy2.7 v7.3.13</strong>
                        </li>
                        <li>
                            the Python3.9 compatible release — <strong>PyPy3.9 v7.3.13</strong>
                        </li>
                        <li>
                            the Python3.10 compatible release — <strong>PyPy3.10 v7.3.13</strong>
                        </li>
                    </ul>
                    <NoteBlock>
                        <div>Our <ExternalLink url={"https://buildbot.pypy.org/nightly/"}>nightly binary builds</ExternalLink> have the most recent bugfixes and performance improvements, though they can be less stable than the official releases. See this link for <ExternalLink url={"https://downloads.python.org/pypy/"}>older versions.</ExternalLink></div>
                    </NoteBlock>
                </div>
            </div>
            <PageBodyContainer>
                <PyPyLatest />
            </PageBodyContainer>
            <PageBodyContainer>
                <div>
                    <Link to={""}>Other Platforms</Link>
                </div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>OS</th>
                                <th>PyPy3.10</th>
                                <th>PyPy3.9</th>
                                <th>PyPy2.7</th>
                                <th>Notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>Linux x86 32 bit</th>
                                <td>
                                    <Link to={""}>
                                        Download
                                    </Link>
                                </td>
                                <td>
                                    <Link to={""}>
                                        Download
                                    </Link>
                                </td>
                                <td>
                                    <Link to={""}>
                                        Download
                                    </Link>
                                </td>
                                <td>compatible with CentOS7 and later.</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <th>S390x</th>
                                <td>
                                    <Link to={""}>
                                        Download
                                    </Link>
                                </td>
                                <td>
                                    <Link to={""}>
                                        Download
                                    </Link>
                                </td>
                                <td>
                                    <Link to={""}>
                                        Download
                                    </Link>
                                </td>
                                <td>built on Redhat Linux 7.2</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>Linux binaries are provided for the distributions listed here. If your distribution is not exactly this one, it won't work, you will probably see: <pre>pypy: error while loading shared libraries: ....</pre></div>
            </PageBodyContainer>
            <PageBodyContainer>
                <PageSubHeader id={"jit-compiler"} text={'"JIT Compiler" version'}/>
                <div>The binaries above include a Just-in-Time compiler. On x86-32, they only work on CPUs that have the SSE2 instruction set (most of them do, nowadays).. They also contain stackless extensions, like greenlets.</div>
            </PageBodyContainer>
            <PageBodyContainer>
                <PageSubHeader id={"linux-binaries"} text={"Linux binaries and common distributions"}/>
                <div className={"space-y-4"}>
                    <div>
                        Since version 7.3, the linux x86 binaries ship with versions of OpenSSL, SQLite3, libffi, expat, and TCL/TK binary libraries linked in. This make the binaries "portable" so that they should run on any current glibc-based linux platform. The ideas were adopted from the <ExternalLink url={"https://github.com/squeaky-pl/portable-pypy#portable-pypy-distribution-for-linux"}>portable-pypy</ExternalLink> package.
                    </div>
                    <div>This solution to the portability problem means that the versions of the packaged libraries are frozen to the version shipped, so updating your system libraries will not affect this installation of PyPy. Also see the note about SSL certificates below.</div>
                    <div>
                        For s390x, and ppc64, the binaries target a specific operating system. These binaries are dynamically linked, and thus might not be usable due to the sad story of linux binary compatibility. This means that <strong>Linux binaries are only usable on the distributions written next to them</strong> unless you're ready to hack your system by adding symlinks to the libraries it tries to open. There are better solutions:
                    </div>
                </div>
                <div className={"space-y-4"}>
                    <ul className="marker:text-green-600 list-disc ps-5 space-y-2 text-sm text-gray-600 dark:text-gray-400 leading-10">
                        <li>
                            download PyPy from your release vendor (usually an outdated version): <ExternalLink url={"https://packages.ubuntu.com/search?keywords=pypy&searchon=names"}>Ubuntu (PPA)</ExternalLink>, <ExternalLink url={"https://packages.debian.org/sid/pypy"}>Debian</ExternalLink>, <ExternalLink url={"https://github.com/Homebrew/homebrew-core/blob/master/Formula/pypy.rb"}>Homebrew</ExternalLink>, MacPorts, <ExternalLink url={"https://fedoraproject.org/wiki/Features/PyPyStack"}>Fedora</ExternalLink>, <ExternalLink url={"https://packages.gentoo.org/package/dev-python/pypy"}>Gentoo</ExternalLink> and <ExternalLink url={"https://wiki.archlinux.org/index.php/PyPy"}>Arch</ExternalLink> are known to package PyPy, with various degrees of being up-to-date. <ExternalLink url={"https://www.freshports.org/lang/pypy"}>FreshPorts</ExternalLink> packages for FreeBSD.
                        </li>
                        <li>
                            use <ExternalLink url={"https://www.pypy.org/posts/2022/11/pypy-and-conda-forge.html"}>conda</ExternalLink>, which will also enable installing binary-compiled packages.
                        </li>
                        <li>
                            <ExternalLink>recompile the CFFI-based</ExternalLink> TCL/TK, OpenSSL, or sqlite3 modules, using system libraries and the scripts in pypy/lib_pypy/pypy_tools. This solution will not solve compatibility issues with libffi, since that is baked into PyPy.
                        </li>
                        <li>
                            or <ExternalLink url={"https://doc.pypy.org/en/latest/build.html"}>translate</ExternalLink> your own PyPy.
                        </li>
                        <li>
                            <a className="reference external" href="https://downloads.python.org/pypy/pypy2.7-v7.3.13-src.tar.bz2">2.7 Source (tar.bz2)</a>
                        </li>
                        <li>
                            <a className="reference external" href="https://downloads.python.org/pypy/pypy2.7-v7.3.13-src.zip">2.7 Source (zip)</a>
                        </li>
                    </ul>
                </div>
                <NoteBlock>
                    <div className={"leading-[4]"}>SSL Certificates</div>
                    <div>
                        While the linux binaries ship an OpenSSL library, they do not ship a certificate store for SSL certificates. If you wish to use SSL module, you will need a valid certificate store. You can use the <ExternalLink url={"https://pypi.org/project/certifi/"}>certifi</ExternalLink> package and set SSL_CERT_FILE to certifi.where() or install your platform certificates which should be discovered by the _ssl module.
                    </div>
                </NoteBlock>
                <div>
                    Previous version can be downloaded from <ExternalLink url={"https://downloads.python.org/pypy/"}>here</ExternalLink>, or directly from the buildbot's <ExternalLink url={"https://buildbot.pypy.org/mirror/"}>mirror</ExternalLink>.
                </div>
                <div>
                    If your CPU is really, really old, it may be a x86-32 without SSE2. There is untested support for manually translating PyPy's JIT without SSE2 <pre>(--jit-backend=x86-without-sse2)</pre> but note that your machine is probably low-spec enough that running CPython on it is a better idea in the first place.
                </div>
            </PageBodyContainer>
            <PageBodyContainer>
                <PageSubHeader id={"pypy-stm"} text={"PyPy-STM 2.5.1"}/>
                <div className={"space-y-4"}>
                    <div>This is a special version of PyPy! See the <ExternalLink url={"https://doc.pypy.org/en/latest/stm.html"}>Software Transactional Memory</ExternalLink> (STM) documentation.</div>
                    <ul className="marker:text-green-600 list-disc ps-5 space-y-2 text-sm text-gray-600 dark:text-gray-400 leading-10">
                        <li>
                            <ExternalLink url={"https://downloads.python.org/pypy/pypy-stm-2.5.1-linux64.tar.bz2"}>PyPy-STM Linux x86-64 binary (64bit, tar.bz2 built on Ubuntu 12.04 - 16.04)</ExternalLink>
                        </li>
                    </ul>
                </div>
            </PageBodyContainer>
            <PageBodyContainer>
                <PageSubHeader id={"other-versions"} text={"Other versions"}/>
                <div className={"space-y-4"}>
                    <div>The other versions of PyPy are:</div>
                    <ul className="marker:text-green-600 list-disc ps-5 space-y-2 text-sm text-gray-600 dark:text-gray-400 leading-10">
                        <li>
                            Try the most up-to-date <ExternalLink url={"https://buildbot.pypy.org/nightly/"}>nightly binary builds</ExternalLink> , if the official release is too old for what you want to do.
                        </li>
                        <li>
                            Reverse debugger: This version enables debugging your Python programs by going forward and backward in time. See the <ExternalLink url={"https://foss.heptapod.net/pypy/revdb/"}>RevDB documentation.</ExternalLink>
                        </li>
                        <li>
                            Old-style sandboxing: A special safe version. This is NOT the version announced in-development during 2019! Read the docs about <Link to={"/features#sandboxing"}>sandboxing</Link>. This version is not supported and not actively maintained. You will likely have to fix some issues yourself, or checkout an old version, or otherwise play around on your own. We provide this documentation only for historical reasons. Please do not use in production. For reference, there are some very old, unmaintained binaries for Linux (<ExternalLink url={"https://downloads.python.org/pypy/pypy-1.8-sandbox-linux64.tar.bz2"}>32bit</ExternalLink>, <ExternalLink url={"https://downloads.python.org/pypy/pypy-1.8-sandbox-linux.tar.bz2"}>64bit</ExternalLink>).
                        </li>
                    </ul>
                </div>
            </PageBodyContainer>
            <PageBodyContainer>
                <PageSubHeader id={"installing"} text={"Installing"}/>
                <div className={"space-y-4"}>
                    <div>All binary versions are packaged in a <i>tar.bz2 or zip file</i>. When uncompressed, they run in-place. You can uncompress them either somewhere in your home directory or, say, in <i>/opt</i>. If you want, put a symlink from somewhere like <i>/usr/local/bin/pypy</i> to <i>/path/to/pypy_expanded/bin/pypy</i>. Do not move or copy the executable pypy outside the tree --- put a symlink to it, otherwise it will not find its libraries.</div>
                </div>
            </PageBodyContainer>
            <PageBodyContainer>
                <PageSubHeader id={"installing-more-modules"} text={"Installing more modules"}/>
                <div className={"space-y-4"}>
                    <div>Using <ExternalLink url={"https://www.pypy.org/posts/2022/11/pypy-and-conda-forge.html"}>conda</ExternalLink> is the easiest way to get binary packages with a minimum of compilation. The tpyical pip workflow for packages with binary extensions requires that the package maintainers provide a wheel for PyPy, which is sometimes too much work for the overburdened maintainers. For more information see the installation documentation_</div>
                    <div>If you use your distribution's PyPy package we recommend you install packages into a virtualenv. If you try to build a module and the build process complains about "missing Python.h", you may need to install the pypy-dev package.</div>
                    <ul className="marker:text-green-600 list-disc ps-5 space-y-2 text-sm text-gray-600 dark:text-gray-400 leading-10">
                        <li>
                            Try the most up-to-date <ExternalLink url={"https://buildbot.pypy.org/nightly/"}>nightly binary builds</ExternalLink> , if the official release is too old for what you want to do.
                        </li>
                        <li>
                            Reverse debugger: This version enables debugging your Python programs by going forward and backward in time. See the <ExternalLink url={"https://foss.heptapod.net/pypy/revdb/"}>RevDB documentation.</ExternalLink>
                        </li>
                        <li>
                            Old-style sandboxing: A special safe version. This is NOT the version announced in-development during 2019! Read the docs about <Link to={"/features#sandboxing"}>sandboxing</Link>. This version is not supported and not actively maintained. You will likely have to fix some issues yourself, or checkout an old version, or otherwise play around on your own. We provide this documentation only for historical reasons. Please do not use in production. For reference, there are some very old, unmaintained binaries for Linux (<ExternalLink url={"https://downloads.python.org/pypy/pypy-1.8-sandbox-linux64.tar.bz2"}>32bit</ExternalLink>, <ExternalLink url={"https://downloads.python.org/pypy/pypy-1.8-sandbox-linux.tar.bz2"}>64bit</ExternalLink>).
                        </li>
                    </ul>
                </div>
            </PageBodyContainer>
            <PageBodyContainer>
                <PageSubHeader id={"building-from-source"} text={"Building from source"}/>
                <div className={"space-y-4"}>
                    <div>(see more build <ExternalLink url={"https://pypy.readthedocs.org/en/latest/build.html"}>instructions</ExternalLink>)</div>
                    <div>If you use your distribution's PyPy package we recommend you install packages into a virtualenv. If you try to build a module and the build process complains about "missing Python.h", you may need to install the pypy-dev package.</div>
                    <ol className="marker:text-green-600 list-decimal ps-5 space-y-2 text-sm text-gray-600 dark:text-gray-400 leading-10">
                        <li>
                            Get the source code. The preferred way is to checkout the current trunk using <ExternalLink url={"https://www.mercurial-scm.org/"}>Mercurial</ExternalLink>. The trunk usually works and is of course more up-to-date:
                            <pre>hg clone https://foss.heptapod.net/pypy/pypy</pre>
                            <div>The trunk contains PyPy 2. For PyPy 3, switch to the correct branch:</div>
                            <CodeBlock>                                
                                <pre>
                                    # switch to the branch that implements Python 3.8
                                    <div>hg update py3.8</div>
                                </pre>
                            </CodeBlock>
                            <div>Alternatively, get one of the following smaller packages for the source at the same revision as the above binaries:</div>
                            <ul className="marker:text-green-600 list-disc ps-5 space-y-2 text-sm text-gray-600 dark:text-gray-400 leading-10">
                                <li>
                                    <a class="reference external" href="https://downloads.python.org/pypy/pypy2.7-v7.3.13-src.tar.bz2">pypy2.7-v7.3.13-src.tar.bz2</a> (sources, PyPy 2.7 only)
                                </li>
                                <li>
                                    <a class="reference external" href="https://downloads.python.org/pypy/pypy3.9-v7.3.13-src.tar.bz2">pypy3.9-v7.3.13-src.tar.bz2</a> (sources, PyPy 3.9 only)
                                </li>
                                <li>
                                    <a class="reference external" href="https://downloads.python.org/pypy/pypy3.10-v7.3.13-src.tar.bz2">pypy3.10-v7.3.13-src.tar.bz2</a> (sources, PyPy 3.10 only)
                                </li>
                            </ul>
                        </li>
                        <li>
                            Make sure you installed the dependencies. See the list <ExternalLink url={"https://pypy.readthedocs.org/en/latest/build.html#install-build-time-dependencies"}>here.</ExternalLink>
                        </li>
                        <li>
                            Enter the goal directory:
                            <CodeBlock>
                                <pre>
                                    cd pypy/pypy/goal
                                </pre>
                            </CodeBlock>
                        </li>
                        <li>
                            Run the rpython script. Here are the common combinations of options (works also with python instead of pypy; requires CPython 2.7 or PyPy 2, even to build PyPy 3):
                            <CodeBlock>
                                <pre>
                                    <div># get the JIT version</div>
                                    <div>pypy ../../rpython/bin/rpython -Ojit targetpypystandalone</div>
                                    <div># get the no-jit version</div>
                                    <div>pypy ../../rpython/bin/rpython -O2 targetpypystandalone</div>
                                    <div># get the sandbox version</div>
                                    <div>pypy ../../rpython/bin/rpython -O2 --sandbox targetpypystandalone</div>
                                </pre>
                            </CodeBlock>
                        </li>
                        <li>
                            Enjoy Mandelbrot :-) It takes on the order of half an hour to finish the translation, and about 3GB of RAM on a 32-bit system and about 5GB on 64-bit systems. (Do not start a translation on a machine with insufficient RAM! It will just swap forever. See notes below in that case.)
                        </li>
                        <li>
                            If you want to install this PyPy as root, please read the next section, Packaging.
                        </li>
                    </ol>
                    <div>Notes:</div>
                    <div>
                        <ul className="marker:text-green-600 list-disc ps-5 space-y-2 text-sm text-gray-600 dark:text-gray-400 leading-10">
                            <li>
                                It is recommended to use PyPy to do translations, instead of using CPython, because it is twice as fast. You should just start by downloading an official release of PyPy (with the JIT). If you really have to use CPython then note that we are talking about CPython 2.7 here, not CPython 3.x. (Older versions like 2.6 are out.)
                            </li>
                            <li>
                                On some 32-bit systems, the address space limit of 2 or 3 GB of RAM can be an issue. More generally you may be just a little bit low of RAM. First note that 2 GB is really not enough nowadays; on Windows you first need to refer to the <ExternalLink url={"https://doc.pypy.org/en/latest/windows.html#preparing-windows-for-the-large-build"}>Windows build instructions</ExternalLink>. More precisely, translation on 32-bit takes at this point 2.7 GB if PyPy is used and 2.9 GB if CPython is used. There are two workarounds:
                                <ul className="marker:text-green-600 list-decimal ps-5 space-y-2 text-sm text-gray-600 dark:text-gray-400 leading-10">
                                    <li>
                                        use PyPy, not CPython. If you don't have any PyPy so far, not even an older version, then you need to build one first, with some parts removed. So, first translate with:
                                        <CodeBlock>
                                            <pre>cpython2 rpython -Ojit targetpypystandalone \</pre>
                                            <pre>--withoutmod-micronumpy --withoutmod-cpyext</pre>
                                        </CodeBlock>
                                        <div>
                                            then copy pypy-c and libpypy_c.so somewhere else, and finally call it with <pre>...pypy-c ../../rpython/bin/rpython -Ojit.</pre>
                                        </div>
                                    </li>
                                    <li>
                                        if even using PyPy instead of CPython is not enough, try to tweak some internal parameters. Example (slower but saves around 400MB):
                                        <CodeBlock>
                                            <pre>PYPY_DONT_RUN_SUBPROCESS=1 PYPY_GC_MAX_DELTA=200MB \</pre>
                                            <pre>pypy --jit loop_longevity=300 ../../rpython/bin/rpython \</pre>
                                            <pre>-Ojit --source</pre>
                                            <pre># then read the next point about --source</pre>
                                        </CodeBlock>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                You can run translations with --source, which only builds the C source files (and prints at the end where). Then you can cd there and execute make. This is another way to reduce memory usage. Note that afterwards, you have to run manually pypy-c
                                <pre>.../pypy/tool/build_cffi_imports.py if you want to be able to import the cffi-based modules.</pre>
                            </li>
                            <li>
                                Like other JITs, PyPy doesn't work out of the box on some Linux distributions that trade full POSIX compliance for extra security features. E.g. with PAX, you have to run PyPy with paxctl -cm. This also applies to translation (unless you use CPython to run the translation and you specify --source).
                            </li>
                        </ul>
                    </div>
                </div>
            </PageBodyContainer>
            <PageBodyContainer>
                <PageSubHeader id={"packaging"} text={"Packaging"}/>
                <div className={"space-y-4"}>
                    <div>Once PyPy is translated from source, a binary package similar to those provided in the section <Link to={"#jit-compiler"}>Default (with a JIT Compiler)</Link> above can be created with the package.py script:</div>
                    <CodeBlock>
                        <pre>
                            <div>cd ./pypy/pypy/tool/release/</div>
                            <div>python package.py --help  <i># for information</i></div>
                            <div>python package.py --archive-name pypy-my-own-package-name</div>
                        </pre>
                    </CodeBlock>
                    <div>It is recommended to use package.py because custom scripts will invariably become out-of-date. If you want to write custom scripts anyway, note an easy-to-miss point: some modules are written with CFFI, and require some compilation. If you install PyPy as root without pre-compiling them, normal users will get errors:</div>
                    <ul className="marker:text-green-600 list-disc ps-5 space-y-2 text-sm text-gray-600 dark:text-gray-400 leading-10">
                        <li>
                            PyPy 2.5.1 or earlier: normal users would see permission errors. Installers need to run pypy -c "import gdbm" and other similar commands at install time; the exact list is in <ExternalLink url={"https://foss.heptapod.net/pypy/pypy/-/blob/release-pypy3.9-v7.3.13/pypy/tool/release/package.py"}>package.py</ExternalLink>. Users seeing a broken installation of PyPy can fix it after-the-fact if they have sudo rights, by running once e.g. sudo pypy -c "import gdbm.
                        </li>
                        <li>
                            PyPy 2.6 and later: anyone would get ImportError: no module named
                            _gdbm_cffi. Installers need to run pypy _gdbm_build.py in the lib_pypy directory during the installation process (plus others; see the exact list in <ExternalLink url={"https://foss.heptapod.net/pypy/pypy/-/blob/release-pypy3.9-v7.3.13/pypy/tool/release/package.py"}>package.py</ExternalLink>). Users seeing a broken installation of PyPy can fix it after-the-fact, by running pypy
                            <pre>/path/to/lib_pypy/_gdbm_build.py.</pre> This command produces a file called _gdbm_cffi.pypy-41.so locally, which is a C extension module for PyPy. You can move it at any place where modules are normally found: e.g. in your project's main directory, or in a directory that you add to the env var PYTHONPATH.
                        </li>
                    </ul>
                </div>
            </PageBodyContainer>
            <PageBodyContainer>
                <PageSubHeader id={"checksums"} text={"Checksums"}/>
                <div className={"space-y-4"}>
                    Checksums for the downloads are <Link to={"/checksums"}>here</Link>
                </div>
            </PageBodyContainer>
        </PageContainer>
        )
}

export default DownloadAdvanced;