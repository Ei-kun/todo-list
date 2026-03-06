import {tabChange} from "./exports";

export function tabClick(tab){
    document.querySelectorAll(".tabs").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    tabChange(tab);
}