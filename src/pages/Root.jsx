import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import { getProfile } from "./loaders/appLoaders";
import { PageLoader } from "../helpers/elements";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import React from "react";

export async function loader() {
    const me = await getProfile();
    return { me };
}

export default function Root() {
    const navigation = useNavigation();
    return (
        // <ErrorBoundary fallbackComponent={ErrorFallback}>
        <div className="flex flex-col flex-nowrap w-inherit vh:h-screen font-sans">
            <NavBar header={"PyPy"} showAddAppButton={true} />
            {navigation.state === "loading" && <PageLoader />}
            <ScrollRestoration
                getKey={(location, matches) => {
                    return location.pathname;
                }}
            />
            <Outlet />
            <Footer />
        </div>
        // </ErrorBoundary>
    )
}