import {PageBodyContainer, PageContainer} from "../components/PageContainer";
import {PageHeader} from "../components/PageHeader";
import ExternalLink from "../components/ExternalLink";
import {Link} from "react-router-dom";

const Contact = () => {
    return (
        <PageContainer>
            <PageHeader text={"Contact"} />
            <PageBodyContainer>
                <div className={"space-y-4"}>
                    <ul className="marker:text-green-600 list-disc ps-5 space-y-2 text-sm text-gray-600 dark:text-gray-400 leading-10">
                        <li>
                            irc: #pypy on irc.libera.chat
                        </li>
                        <li>
                            mailing list: <ExternalLink url={"https://mail.python.org/mailman/listinfo/pypy-dev"}>pypy-dev at python.org</ExternalLink>
                        </li>
                        <li>
                            for security related issues, non-public funding enquiries etc. please contact <a href={"mailto:pypy-z@python.org"}>pypy-z@python.org</a>
                        </li>
                        <li>
                            the <ExternalLink url={"https://foss.heptapod.net/pypy/pypy/-/issues"}>issue tracker</ExternalLink> (registration required to open new issues or to comment)
                        </li>
                        <li>
                            more on our <ExternalLink url={"https://doc.pypy.org/"}>dev site.</ExternalLink>
                        </li>
                        <li>
                            code on <ExternalLink url={"https://foss.heptapod.net/pypy/pypy"}>https://foss.heptapod.net/pypy/pypy</ExternalLink>
                        </li>
                        <li>
                            Reach out to our <Link to={"sponsors"}>consultants</Link> for specific projects
                        </li>
                    </ul>
                </div>
            </PageBodyContainer>
        </PageContainer>
        )
}

export default Contact;