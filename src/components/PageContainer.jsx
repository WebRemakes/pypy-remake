export const PageContainer = ({children}) => {
    return (
        <section className={"w-8/12 text-left mx-auto py-20 space-y-10"}>
            {children}
        </section>
    )
}

export const PageBodyContainer = ({children}) => {
    return <section className={"space-y-8"}>{children}</section>
}
