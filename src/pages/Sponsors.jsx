import {PageBodyContainer, PageContainer} from "../components/PageContainer";
import {PageHeader, PageSubHeader} from "../components/PageHeader";
import ExternalLink from "../components/ExternalLink";

const Sponsors = () => {
    return (
        <PageContainer>
            <PageHeader text={"PyPy Sponsors and Consultants"} />
            <div>Keeping a project as ambitious as PyPy requires resources. Sometimes the problems encoutered are general, like updating python versions or supporting various c-extensions. Sometimes the problems are specific and require precise solutions that may not generalize to all users. Likewise, sponsorship of PyPy can be general or specific.</div>
            <PageBodyContainer>
                <PageSubHeader text={"General PyPy Sponsorship"}/>
                <div className={"space-y-4"}>
                    <div>PyPy has had many financial contributors in the past. We are grateful to them, and to the following current sponsors:</div>
                    <ul className="marker:text-green-600 list-disc ps-5 space-y-2 text-sm text-gray-600 dark:text-gray-400 leading-10">
                        <li>
                            <ExternalLink url={"https://baroquesoftware.com/"}>Baroque Software</ExternalLink> who hosts the <ExternalLink url={"https://buildbot.pypy.org/"}>buildbot master</ExternalLink> as well as our <ExternalLink url={"https://speed.pypy.org/about/"}>benchmark runner</ExternalLink>
                        </li>
                        <li>
                            The recurring and once-off fiscal sponsors via <ExternalLink url={"https://opencollective.com/pypy#section-top-financial-contributors"}>OpenCollective</ExternalLink>
                        </li>
                        <li>
                            Others providing buildbot workers
                        </li>
                    </ul>
                </div>
            </PageBodyContainer>
            <PageBodyContainer>
                <PageSubHeader text={"PyPy Consulting Work"}/>
                <div className={"space-y-4"}>
                    <ul className="marker:text-green-600 list-disc ps-5 space-y-2 text-sm text-gray-600 dark:text-gray-400 leading-10">
                        <li>
                            <ExternalLink url={"https://baroquesoftware.com/"}>Baroque Software</ExternalLink> is an innovative company that has been doing performance oriented consulting for a variety of biggest players on the market since 2007. Please reach out to their team for help making PyPy fulfill its potential in your application.
                        </li>
                        <li>
                            <ExternalLink url={"https://github.com/mattip"}>Matti Picus</ExternalLink>, the PyPy release manager, has been pushing PyPy into the Python ecosystem since 2016: dealing with packaging, compatibility, and performance. He works at <ExternalLink url={"https://quansight.com/consulting"}>Quansight</ExternalLink> and is available for projects.
                        </li>
                    </ul>
                </div>
            </PageBodyContainer>
        </PageContainer>
    )
}

export default Sponsors;