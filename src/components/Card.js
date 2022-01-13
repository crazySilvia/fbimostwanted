import "./Card.css"

export default function Card(props){
    return(
        <div className="card">
            <h3>{props.title}</h3>
            <img src={props.thumb} alt="Bild vom Verdächtigen"/>
            <ul>
                <li>{props.reward_text}</li>
            </ul>
        </div>
    )
}