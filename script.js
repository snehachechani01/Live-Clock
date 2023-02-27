function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var mins = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('session');

    if(hrs>=12){
        session.innerHTML='PM';

    }
    else{
        session.innerHTML='AM';
    }

        document.getElementById('Hours').innerHTML=hrs;
        document.getElementById('Minutes').innerHTML=mins;
        document.getElementById('Seconds').innerHTML=sec;

    }



setInterval(displayTime, 10);
 