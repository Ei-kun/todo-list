import {tabChange} from "./exports";
import "./styles.css";


document.querySelectorAll(".tabs").forEach(tab =>{
    tab.addEventListener("click",()=>{
        document.querySelectorAll(".tabs").forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        tabChange(tab);
    });
});