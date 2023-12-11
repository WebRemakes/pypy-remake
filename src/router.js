import Home, { appLoader } from './pages/Home';
import Features from './pages/Features';
import { loader as meLoader } from "./pages/Root";


import { ErrorBoundary, ErrorFallback } from "./helpers/utils";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import Search from "./pages/Search";
import CreatePage from './pages/CreatePage';
import NoPage from './pages/NoPage';
import Compat from "./pages/Compat";
import Performance from './pages/Performance';
import Sponsors from "./pages/Sponsors";
import HowToHelp from "./pages/HowToHelp";
import Contact from "./pages/Contact";
import Download from "./pages/Download";
import DownloadAdvanced from "./pages/DownloadAdvanced";
import Checksums from "./pages/Checksums";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route id={"root"} path="/" element={<Root />} errorElement={<ErrorPage />} loader={meLoader}>
            <Route index element={<Home />} loader={appLoader} />
            <Route id={"features"} path={"features"} element={<Features />} />
            <Route id={"compat"} path={"compat"} element={<Compat />} />
            <Route id={"performance"} path={"performance"} element={<Performance />} />
            <Route id={"sponsors"} path={"sponsors"} element={<Sponsors />} />
            <Route id={"howtohelp"} path={"howtohelp"} element={<HowToHelp />} />
            <Route id={"contact"} path={"contact"} element={<Contact />} />
            <Route id={"download"} path={"download"} element={<Download />} />
            <Route id={"download-advanced"} path={"download-advanced"} element={<DownloadAdvanced />} />
            <Route id={"checksums"} path={"checksums"} element={<Checksums />} />
            <Route id={"createApp"} path="new" element={<CreatePage />} />
            <Route id={"search"} path="search" element={<Search />} />
            {/*<Route id={"userDetail"} path="user/:id" element={<UserDetail />} render={props => <UserDetail {...props.match.params} />} loader={userDetailLoader} />*/}
            <Route id={"noPage"} path="*" element={<NoPage />} />
        </Route>
    )
)

export default function NineRoutes() {
    return (
        <ErrorBoundary fallbackComponent={ErrorFallback}>
            <RouterProvider router={router} />
        </ErrorBoundary>
    )
}