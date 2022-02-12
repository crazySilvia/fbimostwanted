import "./Gallery.css"
import Card from "./Card";
import {useEffect, useState} from "react";
import {getVillain} from "../services/ApiService";

export default function Gallery(){
    //sagt, dass die Variable "chars" geändert werden kann, useState sagt, was es sein soll
    const [chars, setChars] = useState([])

    const setupChars = async () => {
        let allItems = []
        for (let i = 1; i < 48; i++) {

            await getVillain(i).then(data => {

                    if (data && data.items ) {
                        console.log(data.items)
                        allItems = allItems.concat(data.items)
                    }
                }
            )
            console.log(allItems.length)
        }
        setChars(allItems)
    }

    useEffect(() => {
        setupChars()//.catch(e => console.log(e.message()))
    }, [])



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