export function dayAndMonth(time){
    const today=new Date();

    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const day=days[today.getDay()];

    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const month=months[today.getMonth()];

    const date=today.getDate();

    time.innerText=`${day}, ${month} ${date}`;
};