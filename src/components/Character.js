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
                console.log(setDetails(res.data))
                
            })
            .catch((fuzz) => {
                console.log(fuzz);
            })
        },[Character])
    
    return(
        <div className="Char-Container">
            <div className="Char-Img">
                {/* <img src=/> */}
            </div>
            <h1>{props.name}</h1>
            <button>+</button>
        </div>
    )
}