export default function Social(props) {
    return(
        <div className="">
            <a href={props.link}>
                <img src={props.icon}></img>
            </a>
        </div>
    )
}