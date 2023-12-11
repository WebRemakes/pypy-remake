const Advantages = () => {
    return (
        <section className={"py-24 mx-auto space-y-10"}>
            <header className={"text-4xl text-center"}>Advantages and Distinct Features</header>
            <ul className="space-y-3 text-sm w-8/12 mx-auto">
                <li className="flex space-x-3">
                    <span className="h-5 w-5 flex justify-center items-center rounded-full bg-blue-600 text-white dark:bg-blue-500">
                        <svg className="flex-shrink-0 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span className="text-gray-800 dark:text-gray-400">
                        <b>Speed:</b> thanks to its Just-in-Time compiler, Python programs often run faster on PyPy. <a href="http://en.wikipedia.org/wiki/Just-in-time_compilation" className={""}>(What is a JIT compiler?)</a>
                    </span>
                </li>
    
                <li className="flex space-x-3">
                    <span className="h-5 w-5 flex justify-center items-center rounded-full bg-blue-600 text-white dark:bg-blue-500">
                        <svg className="flex-shrink-0 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span className="text-gray-800 dark:text-gray-400">
                        <b>Memory usage:</b> memory-hungry Python programs (several hundreds of MBs or more) might end up taking less space than they do in CPython.
                    </span>
                </li>
    
                <li className="flex space-x-3">
                    <span className="h-5 w-5 flex justify-center items-center rounded-full bg-blue-600 text-white dark:bg-blue-500">
                        <svg className="flex-shrink-0 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span className="text-gray-800 dark:text-gray-400 text-left">
                        <b>Compatibility:</b> PyPy is highly compatible with existing python code. It supports cffi, cppyy, and can run popular python libraries like twisted, and django. It can also run NumPy, Scikit-learn and more via a c-extension compatibility layer.
                    </span>
                </li>

                <li className="flex space-x-3">
                    <span className="h-5 w-5 flex justify-center items-center rounded-full bg-blue-600 text-white dark:bg-blue-500">
                        <svg className="flex-shrink-0 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span className="text-gray-800 dark:text-gray-400">
                        <b>Stackless:</b> PyPy comes by default with support for stackless mode, providing micro-threads for massive concurrency
                    </span>
                </li>

                <li className="flex space-x-3">
                    <span className="h-5 w-5 flex justify-center items-center rounded-full bg-blue-600 text-white dark:bg-blue-500">
                        <svg className="flex-shrink-0 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span className="text-gray-800 dark:text-gray-400">
                        <b>Others:</b> As well as other <a href="https://www.pypy.org/features.html">Features</a>
                    </span>
                </li>
            </ul>
        </section>
    )
}

export default Advantages;