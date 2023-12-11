import { Link } from "react-router-dom";
import ExternalLink from "./ExternalLink";

const NavBar = ({ header, showAddAppButton = false, showSearch, showProfile, hideVerifiedButton, children }) => {
    return (
        <section className="navbar bg-base-100">
            <div className="flex-1">
                <Link to={"/"} className="btn btn-ghost normal-case text-xl">{header || "UI"}</Link>
            </div>
            <div className="flex-none gap-2">
                {
                    !showSearch
                    && <div className="form-control">
                        <div className="flex flex-row items-center input input-bordered">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            <input type="text" placeholder="Search" className="input input-ghost w-24 md:w-auto bg-transparent" />
                        </div>
                    </div>
                }
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="btn btn-ghost m-1 capitalize">Features</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={"/features"} className={"py-5"}>What is PyPy?</Link></li>
                        <li><Link to={"/compat"} className={"py-5"}>Compatibility</Link></li>
                        <li><Link to={"/performance"} className={"py-5"}>Performance</Link></li>
                    </ul>
                </div>
                <div className="btn btn-ghost capitalize"><Link to={"/download"}>Download</Link></div>
                <div className="btn btn-ghost capitalize"><ExternalLink url={"http://doc.pypy.org/"}>Dev Docs</ExternalLink></div>
                <div className="dropdown dropdown-hover dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost m-1 capitalize">Blog</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={""} className={"py-5"}>Index</Link></li>
                        <li><Link to={""} className={"py-5"}>Tags</Link></li>
                        <li><Link to={""} className={"py-5"}>Archive by Year</Link></li>
                        <li><Link to={""} className={"py-5"}>RSS Feed</Link></li>
                        <li><Link to={""} className={"py-5"}>Old Site</Link></li>
                    </ul>
                </div>
                <div className="dropdown dropdown-hover dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost m-1 capitalize">About</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><ExternalLink url={"https://twitter.com/pypyproject"} className={"block py-5"}>Twitter</ExternalLink></li>
                        <li><ExternalLink url={"https://libera.irclog.whitequark.org/pypy"} className={"block py-5"}>IRC Logs</ExternalLink></li>
                        <li><ExternalLink url={"https://www.youtube.com/playlist?list=PLADqad94yVqDRQXuqxKrPS5QnVqbDLlRt"} className={"block py-5"}>YouTube</ExternalLink></li>
                        <li><ExternalLink url={"https://www.twitch.tv/pypyproject"} className={"block py-5"}>Twitch</ExternalLink></li>
                        <li><Link to={"/sponsors"} className={"py-5"}>Sponsors</Link></li>
                        <li><Link to={"/howtohelp"} className={"py-5"}>How to Help?</Link></li>
                        <li><Link to={"/contact"} className={"py-5"}>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default NavBar;