export const NoteBlock = ({header, children}) => {
    return (
        <div className={"border-2 border-base-300 bg-base-300 w-11/12 mx-auto p-8 rounded-md space-y-4"}>
            <div><b>{header || "Note"}</b></div>

            <div>
                {children}
            </div>
        </div>
    )
}