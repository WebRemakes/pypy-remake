import {pypySpeedGraph} from "../assets";

const Benchmarks = () => {
    return (
        <section className={"pb-24"}>
            <section className={"flex flex-row space-x-16 w-9/12 mx-auto px-16 py-40"}>
                <div className={"flex-1 text-3xl text-left w-6/12 leading-[3]"}>
                    <div className={"italic"}>On average,</div>
                    <div className={"text-5xl leading-[1.4]"}>PyPy is <b>4.8 times</b> faster than CPython 3.7.</div>
                    <div className={"text-3xl italic pt-5"}>We currently support python 3.10, 3.9, and 2.7.</div>
                </div>
                <img
                    src={pypySpeedGraph}
                    alt={"pypy_speed_graph"}
                    className="mx-auto h-96 dark:invert"
                />
            </section>
            <div className={""}>PyPy (with JIT) benchmark times normalized to CPython. Smaller is better. Based on the geometric average of all benchmarks</div>
        </section>
    )
}

export default Benchmarks;