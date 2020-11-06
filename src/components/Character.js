// Write your Character component here
import Axios from "axios"
import React,{ useEffect, useState }from "react"
import '../App.css'
export default function Character (props) {
    const[details, setDetails]= useState([])
    const[isOpen, setIsOpen]= useState(false)
    useEffect(() => {
        Axios
            .get(`${props.url}`)
            .then((res) => {
                setDetails(res.data)
            })
            .catch((fuzz) => {
                console.log(fuzz);
            })
        },[props.url])
    return(
        <div className="Char-Container">
            <div className="Char-Img">
                <img src={details.sprites?.other["official-artwork"].front_default} alt="pokemon artwork"/>
            </div>
            <h1>{details.name}</h1>
            {isOpen ? <button onClick={() => { setIsOpen(false) }}>-</button> : <button onClick={() => {setIsOpen(true)}}>+</button> }
        </div>
    )
}