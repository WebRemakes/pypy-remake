import {Link} from "react-router-dom";
import ExternalLink from "./ExternalLink";

const PyPyLatest = () => {
    return (
        <>
            <div>
                <Link to={""}>PyPy Latest</Link>
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
                            <th>Linux x86 64 bit</th>
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
                            <th>Windows 64 bit</th>
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
                            <td>compatible with any windows 64-bit you might need the VC runtime library installer <ExternalLink url={"https://www.microsoft.com/en-us/download/details.aspx?id=52685"}>vcredist.x64.exe</ExternalLink></td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>MacOS arm64</th>
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
                            <td>MacOS >= 11. Not signed, for signed packages use <ExternalLink url={"https://www.pypy.org/posts/2022/11/pypy-and-conda-forge.html"}>conda</ExternalLink>. <ExternalLink url={"https://github.com/Homebrew/homebrew-core/blob/master/Formula/pypy.rb"}>Homebrew</ExternalLink> does not yet provide PyPy3.9+.</td>
                        </tr>
                        {/* row 4 */}
                        <tr>
                            <th>MacOS x86_64</th>
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
                            <td>MacOS >= 10.15, not for Mojave and below. Not signed, for signed packages or older versions use <ExternalLink url={"https://www.pypy.org/posts/2022/11/pypy-and-conda-forge.html"}>conda</ExternalLink>. <ExternalLink url={"https://github.com/Homebrew/homebrew-core/blob/master/Formula/pypy.rb"}>Homebrew</ExternalLink> does not yet provide PyPy3.9+.</td>
                        </tr>
                        {/* row 5 */}
                        <tr>
                            <th>Linux ARM64</th>
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
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default PyPyLatest;