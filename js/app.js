'use strict';

var hour = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM',
    '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'];

var shop = [];

var tableData;

function Branches(bName, minCustomer, maxCustomer, avgCookies) {
    this.name = bName;
    this.minCusPerHour = minCustomer;
    this.maxCusPerHour = maxCustomer;
    this.avgCookiessPerHour = avgCookies;
    this.avgCustPerHour = [];
    this.avgCookiesPerHour = [];
    this.totalCokiesPerHour = [];
    this.totalCokiesPerHour = 0;
    shop.push(this);
}

Branches.prototype.calcCusPerHour = function () {
    for (var i = 0; i < hour.length; i++) {
        this.avgCustPerHour.push(randomNumber(this.minCusPerHour, this.maxCusPerHour));
    }
};

Branches.prototype.calcAvgCookiesPerHour = function () {
    for (var j = 0; j < hour.length; j++) {
        this.avgCookiesPerHour.push(Math.ceil(multipacation(this.avgCustPerHour[j], this.avgCookiessPerHour)));
    }
};

Branches.prototype.getTotal = function () {
    for (var c = 0; c < this.avgCookiesPerHour.length; c++) {
        this.totalCokiesPerHour = this.totalCokiesPerHour + this.avgCookiesPerHour[c];

    }
    return this.totalCokiesPerHour;
};



var parentMain;

var table;

createTable();
createHedeing();

Branches.prototype.render = function () {

    var tableHeading = document.createElement('tr');

    table.appendChild(tableHeading);

    var dataBranchname = document.createElement('td');
    tableHeading.appendChild(dataBranchname);
    dataBranchname.textContent = this.name;


    for (var i = 0; i < this.avgCookiesPerHour.length; i++) {
        tableData = document.createElement('td');
        tableHeading.appendChild(tableData);
        tableData.textContent = this.avgCookiesPerHour[i];
    }

    var tableRow2 = document.createElement('td');
    tableHeading.appendChild(tableRow2);
    tableRow2.textContent = this.getTotal();

}



var Seattle = new Branches('Seattle', 23, 65, 6.3);

Seattle.calcCusPerHour();
Seattle.calcAvgCookiesPerHour();
Seattle.totalCokiesPerHour;
Seattle.render();

var Tokyo = new Branches('Tokyo', 3, 24, 1.2);

Tokyo.calcCusPerHour();
Tokyo.calcAvgCookiesPerHour();
Tokyo.totalCokiesPerHour;
Tokyo.render();

var Dubai = new Branches('Dubai', 11, 38, 3.7);

Dubai.calcCusPerHour();
Dubai.calcAvgCookiesPerHour();
Dubai.totalCokiesPerHour;
Dubai.render();

var Paris = new Branches('Paris', 20, 38, 2.3);

Paris.calcCusPerHour();
Paris.calcAvgCookiesPerHour();
Paris.totalCokiesPerHour;
Paris.render();

var Lima = new Branches('Lima', 2, 16, 4.6);

Lima.calcCusPerHour();
Lima.calcAvgCookiesPerHour();
Lima.totalCokiesPerHour;
Lima.render();



var tableRow1 = document.createElement('th');
table.appendChild(tableRow1);
tableRow1.textContent = 'Total';


var total0 = [];
var totalOfTotal = 0;

for (var x = 0; x < shop.length; x++) {
    totalOfTotal = totalOfTotal + shop[x].totalCokiesPerHour;
}

for (var i = 0; i < hour.length; i++) {
    var a = 0;
    for (var x = 0; x < shop.length; x++) {
        a = a + shop[x].avgCookiesPerHour[i];
    }
    total0.push(a);
    
}

total0.push(totalOfTotal);


for (var i = 0; i < total0.length; i++) {
    var totalData = document.createElement('td');
    table.appendChild(totalData);
    totalData.textContent = total0[i];
}



function randomNumber(minCusPerHour, maxCusPerHour) {
    return Math.floor(Math.random() * (maxCusPerHour - minCusPerHour + 1) + minCusPerHour);
}


function multipacation(avgCustPerHour, cookie) {
    var avgCustPerHour;
    var cookie;
    return avgCustPerHour * cookie;
}

function sum() {
    var a;
    var b;
    return a + b;
}

function createTable() {
    parentMain = document.getElementById('main-id');
    
    table = document.createElement('table');
    parentMain.appendChild(table);

}

function createHedeing() {
    var theHoursRow = document.createElement('tr');
    table.appendChild(theHoursRow);
    var cell = document.createElement('th');
    theHoursRow.appendChild(cell);
    cell.textContent = '';
    var hourRow;

    for (var i = 0; i < hour.length; i++) {
        hourRow = document.createElement('th');
        theHoursRow.appendChild(hourRow);
        hourRow.textContent = hour[i];
    }
    var totalCell = document.createElement('th');
    theHoursRow.appendChild(totalCell);
    totalCell.textContent = 'daily Location Total';
}


function newBranches(event) {
    event.preventDefault();
    var bName = event.target.branchName.value;
    var minCustomer = parseInt(event.target.min_customer.value);
    var maxCustomer = parseInt(event.target.max_customer.value);
    var avgCookies = parseInt(event.target.avg_cookies.value);
    table.innerHTML= '';
    createTable();
    createHedeing();
    addBranches(bName, minCustomer, maxCustomer, avgCookies); 
    
    for (var i=0; i<shop.length; i++){
        shop[i].avgCookiesPerHour=[];
        shop[i].calcCusPerHour();
        shop[i].calcAvgCookiesPerHour();
        shop[i].totalCokiesPerHour;
        shop[i].render();
    }

    var tableRow1 = document.createElement('th');
    table.appendChild(tableRow1);
    tableRow1.textContent = 'Total';

        var total0 = [];
    var totalOfTotal = 0;

    for (var x = 0; x < shop.length; x++) {
        totalOfTotal = totalOfTotal + shop[x].totalCokiesPerHour;
    }

    for (var i = 0; i < hour.length; i++) {
        var a = 0;
        for (var x = 0; x < shop.length; x++) {
            a = a + shop[x].avgCookiesPerHour[i];
            
        }
        total0.push(a);
        
    }

    total0.push(totalOfTotal);


    for (var i = 0; i < total0.length; i++) {
        var totalData = document.createElement('td');
        table.appendChild(totalData);
        totalData.textContent = total0[i];
    }
      

}

function addBranches(bName, minCustomer, maxCustomer, avgCookies) {
    var newBranch = new Branches(bName, minCustomer, maxCustomer, avgCookies);
    
}

var sub = document.getElementById('form-id');
sub.addEventListener('submit', newBranches);