import defaultListIcon from "./images/default-list.svg";
import { newListInput } from "./exports";

export function newList(){
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

    newListInput(input);
}