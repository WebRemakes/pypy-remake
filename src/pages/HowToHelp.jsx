import {PageBodyContainer, PageContainer} from "../components/PageContainer";
import {PageHeader, PageSubHeader} from "../components/PageHeader";
import ExternalLink from "../components/ExternalLink";
import {Link} from "react-router-dom";

const HowToHelp = () => {
    return (
        <PageContainer>
            <PageHeader text={"How to help?"} />
            <PageBodyContainer>
                <PageSubHeader text={"How to help PyPy?"}/>
                <div className={"space-y-4"}>
                    <div>Here are some ideas to help PyPy move forward::</div>
                    <ul className="marker:text-green-600 list-disc ps-5 space-y-2 text-sm text-gray-600 dark:text-gray-400 leading-10">
                        <li>
                            use pypy for your projects and provide detailed <Link to={"contact"}>feedback</Link>
                        </li>
                        <li>
                            talk to us about how to support Python 3.x
                        </li>
                        <li>
                            write blog posts or tweets about your experiences
                        </li>
                        <li>
                            help porting to new platforms
                        </li>
                        <li>
                            <Link to={"contact"}>Contact</Link> us and get involved
                        </li>
                        <li>
                            <ExternalLink url={"https://opencollective.com/pypy"}>donate</ExternalLink> some money to enable others to help
                        </li>
                        <li>
                            take on our <Link to={"sponsors"}>consultants</Link> and make PyPy work better for your
                        </li>
                    </ul>
                </div>
            </PageBodyContainer>
        </PageContainer>
    )
}

export default HowToHelp;