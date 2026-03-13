const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

export function dayAndMonth(time){
    const today=new Date();

    const day=days[today.getDay()];
    const date=today.getDate();
    const month=months[today.getMonth()];
    time.innerText=`${day}, ${month} ${date}`;
};

export function today(time){
    const today=new Date();

    const day=days[today.getDay()];
    time.innerText=day.substring(0,3);
};

export function tomorrow(time){
    const today=new Date();

    const day=days[(today.getDay()+1)%7];
    time.innerText=day.substring(0,3);
};

export function nextWeek(){
    const now=new Date();
    const next_week = new Date();
    next_week.setDate(now.getDate() + 7);
    selectDate(`${next_week.getFullYear()}-${next_week.getMonth()}-${next_week.getDate()}`);
}

export function selectDate(input,changeTab=false){
    if(input==="") return;
    const selectedDate=document.querySelector(".due").querySelector("div");

    const parts = input.split("-");
    const y = parseInt(parts[0]);
    const m = parseInt(parts[1]) - 1;
    const d = parseInt(parts[2]);

    const dateInput = new Date(y, m, d);
    const now=new Date();
    const tomorrow = new Date();
    tomorrow.setDate(now.getDate() + 1);

    const date=dateInput.getDate();
    const day=days[dateInput.getDay()];
    const month=months[dateInput.getMonth()];
    const year=dateInput.getFullYear();

    if(changeTab){
        if(dateInput.toDateString()===now.toDateString()) return "Today";
        else if (dateInput.toDateString() === tomorrow.toDateString()) return "Tomorrow";
        else if(now.getFullYear()===year) return `${day.substring(0,3)}, ${month.substring(0,3)} ${date}`;
        else return `${day.substring(0,3)}, ${month.substring(0,3)} ${date}, ${year}`;
    }
    else{
        if(dateInput.toDateString()===now.toDateString()) selectedDate.innerText= "Today";
        else if (dateInput.toDateString() === tomorrow.toDateString()) selectedDate.innerText= "Tomorrow";
        else if(now.getFullYear()===year) selectedDate.innerText= `${day.substring(0,3)}, ${month.substring(0,3)} ${date}`;
        else selectedDate.innerText= `${day.substring(0,3)}, ${month.substring(0,3)} ${date}, ${year}`;
    }
}