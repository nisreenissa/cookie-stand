'use strict';
var shop = [];

var hour = [];
for (var i = 6; i < 12; i++) {
    hour.push(i + 'am');
}
hour.push(12 + 'pm');
for (var j = 1; j <= 7; j++) {
    hour.push(j + 'pm');
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function multi(customer, cookie) {

    return customer * cookie;
}



//the constructor 

function Branches(name, minCastPerHour, maxCastPerHour, avgCookiesPerSale) {
    this.name = name;
    this.minCastPerHour = minCastPerHour;
    this.maxCastPerHour = maxCastPerHour;
    this.avgCookiesPerSale = avgCookiesPerSale;
    this.total = 0;
    this.customerPerHour = [];
    this.avgCookiesPerhour = [];
    shop.push(this);


}
Branches.prototype.calcgetCusPerHour=function(){
    for (var m = 0; m < hour.length; m++) {
        
        this.customerPerHour.push(random(this.minCastPerHour, this.maxCastPerHour));

  }
}





Branches.prototype.calcAvgCookiesPerHour = function () {
    for (var x = 0; x < hour.length; x++) {
        console.log(this.customerPerHour[x]);
        console.log(this.avgCookiesPerSale);
        this.avgCookiesPerhour.push(Math.ceil(multi(this.customerPerHour[x], this.avgCookiesPerSale)));
        console.log(this.avgCookiesPerhour);
    }

}
Branches.prototype.getTotal = function () {
    for (var j = 0; j < this.avgCookiesPerhour.length; j++) {
        this.total = this.total + this.avgCookiesPerhour[j];
    }

}

Branches.prototype.render = function(){
    var branchRow = document.createElement('tr');
    var branchName=document.createElement('td');
    branchName.textContent=this.name;
    branchRow.appendChild(branchName);
    table.appendChild(branchRow);

    for (var i=0 ; i<this.avgCookiesPerhour.length ; i++){
        var numberOfCookie=document.createElement('td');
        numberOfCookie.textContent=this.avgCookiesPerhour[i];
        branchRow.appendChild(numberOfCookie);
        

    }
    var total=document.createElement('td');
    total.textContent=this.total;
    branchRow.appendChild(total);


}
var parentMain = document.getElementById('mainId');


var table=document.createElement('table');
parentMain.appendChild(table);
  var headerRow =document.createElement('th');
  headerRow.textContent=hour;
  headerRow.textContent='';
  table.appendChild(headerRow);
for (var i=0 ; i <=hour.length ; i++){
     headerRow =document.createElement('th');
    headerRow.textContent=hour[i];
    table.appendChild(headerRow);
}
headerRow.textContent='Total';

var Seattle = new Branches('Seattle', 23, 65, 6.3);
Seattle.calcgetCusPerHour();
Seattle.calcAvgCookiesPerHour();
Seattle.getTotal();
Seattle.render();


var Tokyo = new Branches('Tokyo', 3, 24, 1.2);
Tokyo.calcgetCusPerHour();
Tokyo.calcAvgCookiesPerHour();
Tokyo.getTotal();
Tokyo.render();


var Dubai = new Branches('Dubai', 11, 38, 3.7);
Dubai.calcgetCusPerHour();
Dubai.calcAvgCookiesPerHour();
Dubai.getTotal();
Dubai.render();



var Paris = new Branches('Paris', 20, 38, 2.3);
Paris.calcgetCusPerHour();
Paris.calcAvgCookiesPerHour();
Paris.getTotal();
Paris.render();



var Lima = new Branches('Lima', 2, 16, 4.6);
Lima.calcgetCusPerHour();
Lima.calcAvgCookiesPerHour();
Lima.getTotal();
Lima.render();





    


    


