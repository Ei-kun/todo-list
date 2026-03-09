import {today,tomorrow,nextWeek,selectDate} from "./myDay";

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
        const dateInput = btn.querySelector(".date-input");

        setTimeout(() => {
            if (dateInput.showPicker) {
                dateInput.showPicker();
            } else {
                dateInput.click();
            }
        }, 10);

        dateInput.onchange = () => {
            if (dateInput.value) {
                selectedOption.innerText = selectDate(dateInput.value);
            }
        }
    }
    else if(btn.classList.contains("next-week")){
        selectedOption.innerText=nextWeek();
    }
    else if(!btn.classList.contains("delete")) selectedOption.innerText=btn.querySelector(".button-value").innerText;

    triggerDeleteIcon(popup,btn);
}

function triggerDeleteIcon(popup,btn){
    const selectedOption=popup.previousElementSibling.querySelector("div");

    if(btn.classList.contains("delete")){
        selectedOption.innerText="";
        btn.classList.toggle("hidden");
    }
    else{
        popup.querySelector(".delete").classList.remove("hidden");
    }
}