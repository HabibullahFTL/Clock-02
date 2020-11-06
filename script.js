setInterval(function(){
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let hour = document.getElementById("hr");
    let minute = document.getElementById("min");
    let second = document.getElementById("sec");

    hour.style.transform = "rotate("+hr*30+"deg)";
    minute.style.transform = "rotate("+min*6+"deg)";
    second.style.transform = "rotate("+sec*6+"deg)";

},1000)