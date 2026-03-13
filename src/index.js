import {inputIcon,newListCreate,tabClick,popUpShow,popUpBlur,addTask,addHoverEffect,removeHoverEffect, markIt} from "./scripts/exports";
import "./styles.css";
import "flatpickr/dist/themes/dark.css";

export const data={
    "a6ca0ab5-49e6-4d9c-9415-582b74af796d":{
        name:"My day",
        tasks:[],
    },
    "0d7f884c-9f8f-4a88-a9a6-07b9ab9b16b6":{
        name:"Important",
        tasks:[],
    },
    "46394a68-b3b8-4703-a0b7-6fa283a9f2ba":{
        name:"Completed",
        tasks:[],
    },
    "ea2ad110-82d8-405e-9f74-9d6a8bd8c5b8":{
        name:"Tasks",
        tasks:[],
    },
    "e61a5224-efa7-4271-b430-63bec29fa043":{
        name:"Home",
        tasks:[],
    },
}

document.querySelectorAll(".default").forEach((container)=>{
    container.addEventListener("click",(e)=>{
        const tab=e.target.closest(".tabs");
        if(tab!==null)tabClick(tab);
    });
});

document.querySelector(".add-task > input").addEventListener("keydown",(e)=>{
    if(e.key=="Enter") addTask(e.target);
});

document.querySelector(".new-list").addEventListener("click",()=>{
    newListCreate();
});

const input=document.querySelector(".add-task").querySelector("input");

input.addEventListener("input",()=>{
    inputIcon(input);
});

document.querySelectorAll(".option").forEach(btn => {
    btn.addEventListener("click", () => {
        popUpShow(btn);
    });
});

document.querySelectorAll(".option").forEach(btn => {
    btn.addEventListener("blur", (e) => {
        popUpBlur(btn,e.relatedTarget);
    });
});

const taskContainer = document.querySelector(".taskContainer");

taskContainer.addEventListener("mouseover", (e) => {
    addHoverEffect(e);
});

taskContainer.addEventListener("mouseout", (e) => {
    removeHoverEffect(e);
});

taskContainer.addEventListener("click", (e) => {
    markIt(e);
});

document.querySelector(".today").click();