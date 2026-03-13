import defaultListIcon from "../images/default-list.svg";
import {data} from "./exports";


function addCategory(id,category){
    data[id]={
        name:category,
        tasks:[],
    };
}

function newListAdd(input){

    function finalize(){
        const heading=document.querySelector("header").querySelector(".tab-name");
        const tab=input.closest(".tabs");
        tab.id=crypto.randomUUID();
        
        const container=document.createElement("div");
        container.classList.add("tab-name");

        input.value.trim();

        if(input.value===""){
            container.innerText="Untitled";
            heading.innerText="Untitled";
        }
        else{
            if(input.value.length > 20) container.innerText=`${input.value.substring(0,20)}...`;
            else container.innerText=input.value;
            heading.innerText=input.value; 
        }

        addCategory(tab.id,input.value);

        tab.querySelector("input").remove();
        tab.append(container);
    }


    input.addEventListener("blur",finalize);

    input.addEventListener("keydown",(e)=>{
        if(e.key==="Enter") input.blur();
    });
}

export function newListCreate(){
    const custom=document.querySelector(".custom");

    const tabs=document.createElement("div");
    tabs.classList.add("tabs");
    tabs.classList.add("new");

    const image=document.createElement("div");
    image.classList.add("image");

    const img=document.createElement("img");
    img.setAttribute("src",defaultListIcon);
    image.append(img);

    const input=document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("maxLength","60");
    input.value="Untitled";
    input.classList.add("tab-name");
    
    tabs.append(image);
    tabs.append(input);

    custom.append(tabs);

    input.focus();
    input.select();
    tabs.click();

    newListAdd(input);
}