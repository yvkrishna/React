var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var ctx = document.getElementById('concepts').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['IoT', 'Radio Communication', 'Arduino', 'Zigbee', 'Wifi', 'Antenna'],
        datasets: [{
            label: '# of Votes',
            data: [40, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});



document.getElementById("myChart").style.width="670px";

function opennav() {
  document.getElementById("myleft").style.width = "185px";
}

function closenav() {
  document.getElementById("myleft").style.width = "0";
}

function openuser() {
  document.getElementById("myright").style.width = "325px";
}

function closeuser() {
  document.getElementById("myright").style.width = "0";
}
function arrmove(){
    var arrow=document.querySelector(".arr");
    arrow.style.animationName="arrin";
    arrow.style.animationDuration="1s";
}
function arrrem(){
    var arrow=document.querySelector(".arr");
    arrow.style.animationName="arrrem"; // there is no animation name like this ...
    arrow.style.animationDuration="1s";
}
function openinptag(){
    document.querySelector(".inptasks").style.display="block";
}
function add(){
    var list=document.querySelector(".list");
    if(document.getElementById("input-task").value.length>0){
    var labels = document.createElement('label');
    var input = document.createElement('input');
    input.type='checkbox';
    var i=document.createElement('i');
    var span=document.createElement('span');
    span.textContent = document.getElementById("input-task").value
    list.appendChild(labels);
    labels.appendChild(input);
    labels.appendChild(i);
    labels.appendChild(span);
}
}
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth()).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

var theMonths = ["January", "February", "March", "April", "May",
  "June", "July", "August", "September", "October", "November", "December"];
var amonth = parseInt(mm);
var i;
var month = theMonths[amonth];
document.querySelector(".date-title").innerHTML=month+" "+dd+","+" "+yyyy;