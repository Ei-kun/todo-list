import {dayAndMonth} from "./exports"

export function tabChange(tab){
    const image= tab.querySelector(".image");
    const heading= tab.querySelector(".tab-name");

    const head=document.querySelector(".content").querySelector("header");
    head.innerHTML="";
    if(heading.innerText!=="My Day")head.append(image.cloneNode(true));
    head.append(heading.cloneNode(true));

    const time=document.querySelector(".content").querySelector(".time");
    time.innerText="";
    
    const placeholder=document.querySelector(".add-task").querySelector("input");
    if(heading.innerText==="Home") placeholder.setAttribute("placeholder","Try typing 'Pay electricity bill'");
    else placeholder.setAttribute("placeholder","Add a Task");

    if(heading.innerText==="My Day") dayAndMonth(time);
};