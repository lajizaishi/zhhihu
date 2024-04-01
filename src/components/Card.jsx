export default function card(props) {
    return (
        <div className={'bg-white border border-gray-200 m-2 rounded-sm w-2/3 ' + props.className}>
            {props.children}
        </div>
    )
}