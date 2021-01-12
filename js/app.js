'use strict';

var hour = [];
for (var i = 6; i < 12; i++) {
    hour.push(i + 'am');
}
hour.push(12 + 'pm');
for (var j = 1; j <= 7; j++) {
    hour.push(j + 'pm');
}
var shop = [Seattle, Tokyo, Dubai, Paris, Lima];

//  constructer function 
function Branches(BranchesName, minCustomer, maxCustomer, avgCookies) {
    this.name = BranchesName;
    this.minCusPerHour  = minCustomer;
    this.maxCusPerHour = maxCustomer;
    this.avgCookiePerCus= avgCookies;
    this.avgCusPerHour = [];
    this.avgCookiesPerHour = [];
    this.totalCokiesPerHour= [];
    this.totalCookies = 0;
}
Branches.prototype.calcCusPerHour = function () {
    for (var i = 0; i < hour.length; i++) {
        this.avgCusPerHour.push(randomNumber(this.minCusPerHour , this.maxCusPerHour));
       
    }
};

Branches.prototype.calcAvgCookiesPerHour = function () {
    for (var j = 0; j < hour.length; j++) {
        this.avgCookiesPerHour.push(Math.ceil(multipacation(this.avgCusPerHour[j], this.avgCookiePerCus)));
        
    }
};

Branches.prototype.getTheTotal = function () {
    for (var c = 0; c < this.avgCookiesPerHour.length; c++) {
        this.totalCookies = this.totalCookies + this.avgCookiesPerHour[c];

    }
    return this.totalCookies;
};



var parentMain = document.getElementById('mainId');
var title = document.createElement('h1');
parentMain.appendChild(title);
title.textContent = 'Sales table';

var table = document.createElement('table');
parentMain.appendChild(table);
var theHours = document.createElement('tr');
table.appendChild(theHours);

var tableRow1 = document.createElement('th');
theHours.appendChild(tableRow1);
tableRow1.textContent = '';
for (var i = 0; i <= hour.length; i++) {
    var tableRow = document.createElement('th');
    theHours.appendChild(tableRow);
    tableRow.textContent = hour[i];

}
var tableRow3 = document.createElement('th');
theHours.appendChild(tableRow3);
tableRow3.textContent = 'Daily Branches Totals';


Branches.prototype.render = function () {

    var tableHeading = document.createElement('tr');
    
    table.appendChild(tableHeading);

    var dataBranchname = document.createElement('td');
    tableHeading.appendChild(dataBranchname);
    dataBranchname.textContent = this.name;

       
    for (var i = 0; i < this.avgCookiesPerHour.length; i++) {
        var tableData = document.createElement('td');
        tableHeading.appendChild(tableData);
        tableData.textContent = this.avgCookiesPerHour[i];
    }

     var tableRow2 = document.createElement('td');
     tableHeading.appendChild(tableRow2);
     tableRow2.textContent = this.getTheTotal();

}




var Seattle = new Branches('Seattle', 23, 65, 6.3);

Seattle.calcCusPerHour();
Seattle.calcAvgCookiesPerHour();
Seattle.totalCookies;
Seattle.render();




var Tokyo = new Branches('Tokyo', 3, 24, 1.2);

Tokyo.calcCusPerHour();
Tokyo.calcAvgCookiesPerHour();
Tokyo.totalCookies;
Tokyo.render();


var Dubai = new Branches('Dubai', 11, 38, 3.7);

Dubai.calcCusPerHour();
Dubai.calcAvgCookiesPerHour();
Dubai.totalCookies;
Dubai.render();



var Paris = new Branches('Paris', 20, 38, 2.3);

Paris.calcCusPerHour();
Paris.calcAvgCookiesPerHour();
Paris.totalCookies;
Paris.render();


var Lima = new Branches('Lima', 2, 16, 4.6);

Lima.calcCusPerHour();
Lima.calcAvgCookiesPerHour();
Lima.totalCookies;
Lima.render();


var tableRow1 = document.createElement('th');
table.appendChild(tableRow1);
tableRow1.textContent = 'Total';


var total0 = [];
var a=0;
var totalOfTotal= Seattle.totalCookies+ Tokyo.totalCookies+ Dubai.totalCookies+ Paris.totalCookies+ Lima.totalCookies;
for (var i=0; i<hour.length; i++){
a= Seattle.avgCookiesPerHour[i]+ Tokyo.avgCookiesPerHour[i]+ Dubai.avgCookiesPerHour[i]+ Paris.avgCookiesPerHour[i]+ Lima.avgCookiesPerHour[i];
total0.push(a);
}

total0.push(totalOfTotal);


for (var i = 0; i < total0.length; i++) {
    var totalData = document.createElement('td');
    table.appendChild(totalData);
    totalData.textContent = total0[i];
}



function randomNumber(minCusPerHour , maxCusPerHour) {
    return Math.floor(Math.random() * (maxCusPerHour - minCusPerHour  + 1) + minCusPerHour );
}

function multipacation(avgCusPerHour, cookie) {
    var avgCusPerHour;
    var cookie;
    return avgCusPerHour * cookie;
}

function sum(){
    var a;
    var b;
    return a+b;
}






