import React,{useState} from "react";
import { useSelector } from "react-redux";


const CompCounter = () => {
    const count= useSelector(state => state);
    return (
        <div>
        <h1> count is {count} </h1>
        </div>
    )
}
export default CompCounter;