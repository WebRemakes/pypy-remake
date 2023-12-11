import { Link, useNavigation } from "react-router-dom";
import { useCallback, useEffect, useRef, useState } from "react";
import useTokenData from "../helpers/tokenData";
import NavBar from "../components/NavBar";
import { ListApps } from "../pages/loaders/appLoaders";
import HomeCarousel from "../components/HomeCarousel";
import Banner from "../components/Banner";
import Benchmarks from "../components/Benchmarks";
import HomeQuote from "../components/HomeQuote";
import Advantages from "../components/Advantages";
import Footer from "../components/Footer";

export async function appLoader() {
    const apps = await ListApps();
    return { apps };
}
function Home() {
    const navigation = useNavigation();
    const accessToken = window.localStorage.getItem('nine_login');
    const scrollContainerRef = useRef(null);
    const [latestAppsCount, setLatestAppsCount] = useState(10);
    const [isFetchingLatestApps, setIsFetchingLatestApps] = useState(false);
    const [fetchMoreLatestApps, setFetchMoreLatestApps] = useState(false);

    const { rawToken, isLoggedIn, tokenData } = useTokenData();

    useEffect(() => {
        // handle Scroll check
        const scrollContainerElem = scrollContainerRef.current;
        const handleScroll = () => {
            // Get the last container height as on offset for the scroll calculation.
            if (document.getElementById('id-latest-apps-container') !== null) {
                const lastElement = document.getElementById('id-latest-apps-container').lastElementChild;
                const lastElementHeight = lastElement.clientHeight;
                if (scrollContainerElem.scrollHeight - scrollContainerElem.scrollTop - lastElementHeight <= scrollContainerElem.clientHeight) {
                    // we've reached the bottom of the scrollContainerElem
                    console.log("Reached the bottom of the page.");
                    setFetchMoreLatestApps(true);
                }
            }
        };

        scrollContainerElem.addEventListener("scroll", handleScroll);
        return () => { scrollContainerElem.removeEventListener("scroll", handleScroll) }
    }, []);

    const handleScroll = useCallback(() => {
        const scrollContainerElem = scrollContainerRef.current;
        if (scrollContainerElem.scrollHeight - scrollContainerElem.scrollTop === scrollContainerElem.clientHeight) {
            // we've reached the bottom of the scrollContainerElem
            console.log("Reached the bottom of the page.");
        }
    }, [isFetchingLatestApps]);

    const handleFetchData = useCallback(() => {
        // const data = useFetch(`${process.env.REACT_APP_BASE_URL}/app/`);
        setIsFetchingLatestApps(false);
        setFetchMoreLatestApps(false);
        // return data;
    }, []);

    const resendVerificationCode = () => {
        const resendVerificationCodeFormData = new FormData()
        resendVerificationCodeFormData.append("email", tokenData?.email);
        const resendVerifyUserCodeURL = `${process.env.REACT_APP_BASE_URL}/user/resend-registration-code/`;
        const headers = {
            'Accept': '*/*',
            // 'Origin': '*',
        };
        const fetchInit = {
            method: 'POST',
            headers: headers,
            mode: 'cors',
            body: resendVerificationCodeFormData,
            cache: 'default',
        };

        fetch(resendVerifyUserCodeURL, fetchInit)
            .then(response => {
                if (!response.ok) { }
                return response.json();
            })
            .then(() => null)
            .catch(() => null);
    };

    return (
        <div className="" ref={scrollContainerRef}>
            {/* {navigation.state === "loading" && <PageLoader />} */}
            {
                isLoggedIn && tokenData?.is_verified !== undefined && !tokenData?.is_verified
                    ? <div className={"sticky px:top-80 flex flex-row align-items-center pad-1 bg-yellow-inverse bg-mica z-90 lg:justify-center"}>
                        <span>Your account is not yet verified.</span>
                        <Link
                            to={"/verify-user"}
                            onClick={resendVerificationCode}
                            className={"d-block h-5 lh-5 mg-l2 pad-x2 bg-yellow color-black text-center radius decoration-none"}>
                            Verify account
                        </Link>
                    </div>
                    : null
            }
            <Banner />
            <Benchmarks />
            <HomeQuote />
            <Advantages />
        </div>
    )
}

export default Home;