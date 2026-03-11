import {inputIcon,newListCreate,tabClick,popUpShow,popUpBlur,addTask,addHoverEffect,removeHoverEffect, markIt} from "./scripts/exports";
import "./styles.css";
import "flatpickr/dist/themes/dark.css";


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