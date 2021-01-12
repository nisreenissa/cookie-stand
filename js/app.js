'use strict';

var hour = [];
for (var i = 6; i < 12; i++) {
    hour.push(i + 'am');
}
hour.push(12 + 'pm');
for (var j = 1; j <= 7; j++) {
    hour.push(j + 'pm');
}
var shop = [];


function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Constructor function
function Branches(BranchesName, minCusPerHour, maxCusPerHour, avgCookiePerCus) {
    this.BranchesName = BranchesName;
    this.minCusPerHour = minCusPerHour;
    this.maxCusPerHour = maxCusPerHour;
    this.avgCookiePerCus = avgCookiePerCus;
    this.avgCusPerHour = [];
    this.avgCookiesPerHour = [];
    this.totalCookies = 0;
    shop.push(this);
}

Branches.prototype.calcCusPerHour = function () {
    for (var m = 0; m < hour.length; m++) {
        this.avgCusPerHour.push(randomNum(this.minCusPerHour, this.maxCusPerHour));
    }
}

Branches.prototype.calcAvgCookiesPerHour = function () {
    for (var k = 0; k < hour.length; k++) {
        this.avgCookiesPerHour.push(Math.ceil(this.avgCusPerHour[k] * this.avgCookiePerCus));
        this.totalCookies = this.totalCookies + this.avgCookiesPerHour[k];
    }
}

var seattle = new Branches('Seattle', 23, 65, 6.3);
var tokyo = new Branches('Tokyo', 3, 24, 1.2);
var dubai = new Branches('Dubai', 11, 38, 3.7);
var paris = new Branches('Paris', 20, 38, 2.3);
var lima = new Branches('Lima', 2, 16, 4.6);



var parentSec = document.getElementById('mainId');
var locationSection = document.createElement('section');
parentSec.appendChild(locationSection);
var tableName = document.createElement('h3');
tableName.textContent = 'Sales table';
locationSection.appendChild(tableName);
var locationTable = document.createElement('table');
locationSection.appendChild(locationTable);

header();
tabledata();



for (var i = 0; i < shop.length; i++) {
    shop[i].calcCusPerHour();
    shop[i].calcAvgCookiesPerHour();
    shop[i].render();
}




function header() {
    var headRow = document.createElement('thead');
    locationTable.appendChild(headRow);
    var tableRow = document.createElement('tr');
    headRow.appendChild(tableRow);
    var emptyCell = document.createElement('th');
    tableRow.appendChild(emptyCell);
    var headRowCells = [emptyCell];
    for (var j = 1; j <= hour.length; j++) {
        headRowCells.push(document.createElement('th'));
        headRowCells[j].textContent = hour[j - 1];
        tableRow.appendChild(headRowCells[j]);
    }
    var totalDaily = document.createElement('th');
    totalDaily.textContent = 'Daily Location Total';
    tableRow.appendChild(totalDaily);
}

function tabledata() {
    var tableBody = document.createElement('tbody');
    locationTable.appendChild(tableBody);
    Branches.prototype.render = function () {
        var tableRow = document.createElement('tr');
        tableBody.appendChild(tableRow);
        var shopTitleCell = document.createElement('td');
        shopTitleCell.textContent = this.BranchesName;
        tableRow.appendChild(shopTitleCell);
        var cellData = [];
        for (var i = 0; i < hour.length; i++) {
            cellData.push(document.createElement('td'));
            cellData[i].textContent = this.avgCookiesPerHour[i];
            tableRow.appendChild(cellData[i]);
        }
        var dailyLocationTotal = document.createElement('td');
        dailyLocationTotal.textContent = this.totalCookies;
        tableRow.appendChild(dailyLocationTotal);
    }
}


