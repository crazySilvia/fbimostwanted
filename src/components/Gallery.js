import "./Gallery.css"
import Card from "./Card";
import {useEffect, useState} from "react";
import {getVillain} from "../services/ApiService";

export default function Gallery(props){
    const [chars, setChars] = useState()

    useEffect(() => {
        setupChars().catch(e => console.log(e.message()))
    }, [])

    const setupChars = () => getVillain().then(data => setChars(data.items))

    if(!chars){
        return<div className="gallery">
            <h1>loading...</h1>
        </div>
    }

    return(
        <div className="gallery">
            {chars.filter(char => char.subjects.includes("Violent Crime - Murders"))
                .map(filteredChar =>(
                <Card
                    key = {filteredChar.uid}
                    title = {filteredChar.title}
                    thumb = {filteredChar.images[0].thumb}
                    reward_text = {filteredChar.reward_text ? filteredChar.reward_text : "no offering"}
                />
            ))}
        </div>)
}