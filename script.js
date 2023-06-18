import data from './data.json' assert { type: 'json' };;
console.log(data);
console.log(data[0].amount);

document.getElementById("mon").style.height = data[0].amount + 70 +"px";
document.getElementById("tue").style.height = data[1].amount + 70 +"px";
document.getElementById("wed").style.height = data[2].amount + 70 +"px";
document.getElementById("thu").style.height = data[3].amount + 70 +"px";
document.getElementById("fri").style.height = data[4].amount + 70 +"px";
document.getElementById("sat").style.height = data[5].amount + 70 +"px";
document.getElementById("sun").style.height = data[6].amount + 70 +"px";


document.getElementById("b-mon").innerHTML = "$" + data[0].amount;
document.getElementById("b-tue").innerHTML = "$" + data[1].amount;
document.getElementById("b-wed").innerHTML = "$" + data[2].amount;
document.getElementById("b-thu").innerHTML = "$" + data[3].amount;
document.getElementById("b-fri").innerHTML = "$" + data[4].amount;
document.getElementById("b-sat").innerHTML = "$" + data[5].amount;
document.getElementById("b-sun").innerHTML = "$" + data[6].amount;
