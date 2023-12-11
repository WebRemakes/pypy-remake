const ExternalLink = ({url, className, children}) => {
    return <a href={url} className={className} target={"_blank"} rel="noreferrer">{children}</a>
}

export default ExternalLink;