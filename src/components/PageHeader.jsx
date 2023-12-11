export const PageHeader = ({text}) => {
    return (
        <div className={"text-6xl text-center leading-[1]"}>{text}</div>
    )
}

export const PageSubHeader = ({text, id=""}) => {
    return <div id={id} className={"text-3xl pt-12"}>{text}</div>
}