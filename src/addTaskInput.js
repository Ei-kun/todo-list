export function addTaskInput(input){
    if(input.value!==""){
        document.querySelector(".add-task").querySelectorAll("button").forEach(button => {
            if(button.classList.contains("hidden")){
                button.classList.remove("hidden");
                button.classList.add("hide");
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