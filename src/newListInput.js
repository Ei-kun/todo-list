export function newListInput(input){

    function finalize(){
        const heading=document.querySelector("header").querySelector(".tab-name");
        const tab=input.closest(".tabs");
        
        const container=document.createElement("div");
        container.classList.add("tab-name");

        input.value.trim();

        if(input.value===""){
            container.innerText="Untitled";
            heading.innerText="Untitled";
        }
        else{
            container.innerText=input.value;
            heading.innerText=input.value; 
        }

        tab.querySelector("input").remove();
        tab.append(container);
    }


    input.addEventListener("blur",finalize);

    input.addEventListener("keydown",(e)=>{
        if(e.key==="Enter") input.blur();
    });
}