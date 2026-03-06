import {newList,tabClick} from "./exports";
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

document.querySelector(".today").click();