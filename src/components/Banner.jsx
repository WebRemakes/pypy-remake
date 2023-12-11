import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <section className="flex flex-col justify-center items-center gap-10 h-[800px] bg-base-200">
            <header className="font-bold text-9xl py-4">PyPy</header>
            <div>
                A <a href={"speed.pypy.org"} target={"_blank"} rel="noreferrer">fast</a>, <a href="https://www.pypy.org/compat.html" target="_blank" rel="noreferrer">compliant</a> alternative implementation of <a href="http://python.org/">Python</a>
            </div>
            <Link to={"/download"}>
                <button className="btn btn-lg btn-wide btn-accent">
                    Download PyPy
                </button>
            </Link>
            <div className="my-4 space-x-4">
                <Link to={"/features"}>
                    <button className="btn btn-neutral">What is PyPy?</button>
                </Link>
                <a href={"https://doc.pypy.org"} target={"_blank"} rel="noreferrer">
                    <button className="btn btn-ghost hover:btn-neutral">Documentation</button>
                </a>
            </div>
        </section>
    )
}

export default Banner;