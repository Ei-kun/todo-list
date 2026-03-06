import {addTaskInput, newList,tabClick} from "./exports";
import "./styles.css";


document.querySelectorAll(".default").forEach((container)=>{
    container.addEventListener("click",(e)=>{
        const tab=e.target.closest(".tabs");
        if(tab!==null)tabClick(tab);
    });
});

document.querySelector(".new-list").addEventListener("click",()=>{
    newList();
});

const input=document.querySelector(".add-task").querySelector("input");

input.addEventListener("input",()=>{
    addTaskInput(input);
});

document.querySelector(".today").click();