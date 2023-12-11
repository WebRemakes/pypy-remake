import {PageBodyContainer, PageContainer} from "../components/PageContainer";
import {PageHeader, PageSubHeader} from "../components/PageHeader";
import ExternalLink from "../components/ExternalLink";
import {Link} from "react-router-dom";
import {NoteBlock} from "../components/NoteBlock";
import PyPyLatest from "../components/PyPyLatest";

const Download = () => {
    return (
        <PageContainer>
            <PageHeader text={"Download"} />
            <div>
                We provide pre-compiled binaries for many platforms and OSes. There are also pre-compiled binaries available on conda-forge. We have found conda-forge a convenient and cooperative community for distributing not only the interpreter, but many packages like SciPy that are difficult to build and which do not yet have binary PyPy builds available on PyPI.
            </div>
            <NoteBlock>
                <div>
                    Our <ExternalLink url={"https://buildbot.pypy.org/nightly/"}>nightly binary builds</ExternalLink> have the most recent bugfixes and performance improvements, though they can be less stable than the official releases. See these links for <ExternalLink url={"https://downloads.python.org/pypy/"}>other versions</ExternalLink> or <ExternalLink url={"https://www.pypy.org/download_advanced.html"}>more information</ExternalLink> including other platforms.
                </div>
            </NoteBlock>
            <PageBodyContainer>
                <PyPyLatest />
                <NoteBlock>
                    <div className={"leading-[4]"}>SSL Certificates</div>
                    <div>
                        While the linux binaries ship an OpenSSL library, they do not ship a certificate store for SSL certificates. If you wish to use SSL module, you will need a valid certificate store. You can use the <ExternalLink url={"https://pypi.org/project/certifi/"}>certifi</ExternalLink> package and set SSL_CERT_FILE to certifi.where() or install your platform certificates which should be discovered by the _ssl module.
                    </div>
                </NoteBlock>
            </PageBodyContainer>
            <PageBodyContainer>
                <PageSubHeader id={"download-source"} text={"Source"}/>
                <div className={"space-y-4"}>
                    <ul className="marker:text-green-600 list-disc ps-5 space-y-2 text-sm text-gray-600 dark:text-gray-400 leading-10">
                        <li>
                            <a className="reference external" href="https://downloads.python.org/pypy/pypy3.10-v7.3.13-src.tar.bz2">3.10 Source (tar.bz2)</a>
                        </li>
                        <li>
                            <a className="reference external" href="https://downloads.python.org/pypy/pypy3.10-v7.3.13-src.zip">3.10 Source (zip)</a>
                        </li>
                        <li>
                            <a className="reference external" href="https://downloads.python.org/pypy/pypy3.9-v7.3.13-src.tar.bz2">3.9 Source (tar.bz2)</a>
                        </li>
                        <li>
                            <a className="reference external" href="https://downloads.python.org/pypy/pypy3.9-v7.3.13-src.zip">3.9 Source (zip)</a>.
                        </li>
                        <li>
                            <a className="reference external" href="https://downloads.python.org/pypy/pypy2.7-v7.3.13-src.tar.bz2">2.7 Source (tar.bz2)</a>
                        </li>
                        <li>
                            <a className="reference external" href="https://downloads.python.org/pypy/pypy2.7-v7.3.13-src.zip">2.7 Source (zip)</a>
                        </li>
                    </ul>
                </div>
            </PageBodyContainer>
            <PageBodyContainer>
                <PageSubHeader id={"more-information"} text={"More information"}/>
                <div className={"space-y-4"}>
                    Visit the <Link to={"/download-advanced"}>more information</Link> page for other platforms, information about running PyPy, STM, instructions on building from source and more.
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

export default Download;