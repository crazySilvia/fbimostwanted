import "./Card.css"

export default function Card(props){
    return(
        <div className="card">
            <h3>{props.title}</h3>

            <ul>
                <li>{props.aliases}</li>
                <li>{props.reward_text}</li>

            </ul>
        </div>
    )
}