const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

var count = new Date('Jan 1, 2026 00:00:00').getTime();

function counting(){
    var now = new Date().getTime();
    gap = count - now;

    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;

    var d = Math.floor(gap/day);
    var h = Math.floor((gap%day)/hour);
    var m = Math.floor((gap%hour)/minute);
    var s = Math.floor((gap%minute)/second);

    days.innerHTML='<h1>'+d+'</h1>'
    hours.innerHTML='<h1>'+h+'</h1>'
    minutes.innerHTML='<h1>'+m+'</h1>'
    seconds.innerHTML='<h1>'+s+'</h1>'
}

setInterval(function() {
    counting();
},1000)