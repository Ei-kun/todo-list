import {inputIcon,newListCreate,tabClick,popUpShow,popUpBlur} from "./scripts/exports";
import "./styles.css";
import "flatpickr/dist/themes/dark.css";


document.querySelectorAll(".default").forEach((container)=>{
    container.addEventListener("click",(e)=>{
        const tab=e.target.closest(".tabs");
        if(tab!==null)tabClick(tab);
    });
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

document.querySelector(".today").click();