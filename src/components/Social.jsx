export default function Social(props) {
    return(
        <div className="rounded shadow-xl bg-purple-400 p-1 hover:bg-purple-300">
            <a href={props.link}>
                <img src={props.icon}></img>
            </a>
        </div>
    )
}