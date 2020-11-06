// Write your Character component here
import Axios from "axios"
import React,{ useEffect, useState }from "react"
import '../App.css'
export default function Character (props) {
    const[details, setDetails]= useState([])
    useEffect(() => {
        Axios
            .get(`${props.url}`)
            .then((res) => {
                console.log(res.data);
            })
            .catch((fuzz) => {
                console.log(fuzz);
            })
        },[Character])
    
    return(
        <div className="Char-Container">
            <h1>{props.name}</h1>
            <button>Expand Details</button>
        </div>
    )
}