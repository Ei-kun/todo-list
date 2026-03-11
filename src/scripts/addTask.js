import {today,tomorrow,nextWeek,selectDate} from "./myDay";
import flatpickr from "flatpickr";
import starImage from "../images/star.svg";
import emptyCheckBox from "../images/emptyCheckBox.svg";
import tickedCheckBox from "../images/tickedCheckBox.svg";
import markedCheckBox from "../images/markedCheckBox.svg";
import star from "../images/star.svg";
import highlightstar from "../images/highlightStar.svg";
import markedStar from "../images/markedStar.svg";


const calendar=flatpickr(".date-input",{
    position:"above",
    positionElement:document.querySelector(".due"),
    dateFormat: "Y-m-d",
    onChange:function(selectedDates, dateStr, instance){
        selectDate(dateStr);
    }
});

export function inputIcon(input){
    if(input.value!==""){
        document.querySelector(".add-task").querySelectorAll(".option").forEach(option => {
            if(option.classList.contains("hidden")){
                option.classList.remove("hidden");
                option.classList.add("hide");
            }
        });
    }
    else{
        document.querySelector(".add-task").querySelectorAll("button").forEach(button => {
            if(button.classList.contains("hide")){
                button.classList.remove("hide");
                button.classList.add("hidden");
            }
        });
    }
}

export function popUpShow(btn){
    btn.nextElementSibling.classList.toggle("hidden");
    if(btn.classList.contains("due")){
        today(document.querySelector(".currentday"));
        tomorrow(document.querySelector(".nextday"));
        today(document.querySelector(".nextweek"));
    }
}

export function popUpBlur(btn,element){
    if(element!==null){
        const popup=element.closest(".popup");
        const optionBtn = element.closest("button");
        if(popup && optionBtn) selectOption(popup,optionBtn);
    }

    btn.nextElementSibling.classList.add("hidden");
}

function selectOption(popup,btn){
    const selectedOption=popup.previousElementSibling.querySelector("div");

    if(btn.classList.contains("pickDate")){
        calendar.open();
    }
    else if(btn.classList.contains("next-week")){
        nextWeek();
    }
    else if(!btn.classList.contains("delete")) selectedOption.innerText=btn.querySelector(".button-value").innerText;

    triggerDeleteIcon(popup,btn);
}

function triggerDeleteIcon(popup,btn){
    const selectedOption=popup.previousElementSibling.querySelector("div");

    if(btn.classList.contains("delete")){
        selectedOption.innerText="";
        btn.classList.add("hidden");
    }
    else if(selectedOption.innerText!==""){
        popup.querySelector(".delete").classList.remove("hidden");
    }
}

export function addTask(input){
    const taskContainer=document.querySelector(".taskContainer");

    const task=document.createElement("div");
    task.classList.add("task");

    const checkBoxContainer=document.createElement("div");
    const checkBox=document.createElement("img");
    checkBoxContainer.classList.add("image");
    checkBoxContainer.classList.add("checkBox");
    checkBox.src=emptyCheckBox;
    checkBoxContainer.append(checkBox);

    const taskDetail=document.createElement("div");
    taskDetail.classList.add("task-detail");
    taskDetail.innerText=input.value;

    const starContainer=document.createElement("div");
    const star=document.createElement("img");
    starContainer.classList.add("image");
    starContainer.classList.add("star");
    star.src=starImage;
    starContainer.append(star);

    task.append(checkBoxContainer);
    task.append(taskDetail);
    task.append(starContainer);
    
    taskContainer.append(task);

    input.value="";
}

export function addHoverEffect(e){
    if (e.target.closest(".checkBox")) {
        const img = e.target.closest(".checkBox").querySelector("img");
        img.src = tickedCheckBox;
    }
    if (e.target.closest(".star")) {
        const img = e.target.closest(".star").querySelector("img");
        img.src = highlightstar;
    }
}

export function removeHoverEffect(e){
    if (e.target.closest(".checkBox")) {
        const img = e.target.closest(".checkBox").querySelector("img");
        img.src = emptyCheckBox;
    }
    if (e.target.closest(".star")) {
        const img = e.target.closest(".star").querySelector("img");
        img.src = star;
    }
}

export function markIt(e){
    if (e.target.closest(".checkBox")) {
        const img = e.target.closest(".checkBox").querySelector("img");
        img.src = markedCheckBox;
        e.target.closest(".checkBox").classList.add("markedCheckBox");
        e.target.closest(".checkBox").classList.remove("checkBox");
    }
    else if (e.target.closest(".star")) {
        const img = e.target.closest(".star").querySelector("img");
        img.src = markedStar;
        e.target.closest(".star").classList.add("markedStar");
        e.target.closest(".star").classList.remove("star");
    }
    else if (e.target.closest(".markedCheckBox")) {
        const img = e.target.closest(".markedCheckBox").querySelector("img");
        img.src = emptyCheckBox;
        e.target.closest(".markedCheckBox").classList.add("checkBox");
        e.target.closest(".markedCheckBox").classList.remove("markedCheckBox");
    }
    else if (e.target.closest(".markedStar")) {
        const img = e.target.closest(".markedStar").querySelector("img");
        img.src = star;
        e.target.closest(".markedStar").classList.add("star");
        e.target.closest(".markedStar").classList.remove("markedStar");
    }
}