export default function Social(props) {
    return(
        <div className="rounded shadow-xl bg-accent-1 p-1 transition duration-300 ease-in-out hover:bg-accent-3 hover:shadow-accent-2 hover:-translate-y-1">
            <a href={props.link}>
                <img src={props.icon}></img>
            </a>
        </div>
    )
}