import React, {useState} from "react";
import "./Style.css";
import Subject from "./SubjectAPI.js";
import SubCard from "./SubCard";
import Navbar from "./Navbar";

const uniqueList = [
    ...new Set(
        Subject.map((curElem) => {
            return curElem.category;
        })
    ),
    "All",
];

console.log(uniqueList);

const Card = () => {

     const [subjectData, setsubjectData] = useState(Subject);
     const [subjectList,] = useState(uniqueList);

     const filterItem = (category) => {
        const updatedList = Subject.filter((curElem) => {
            return curElem.category === category;
        });

        setsubjectData(updatedList);
     };

    return (
        <div>
            <Navbar filterItem = {filterItem} subjectList = {subjectList}/>
            <SubCard subjectData = {subjectData} />
        </div>
        
    );

};

export default Card;