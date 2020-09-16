'use strict';
var branches = [];
var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
var cookies = document.getElementById('cookies');
var table = document.createElement('table');
cookies.appendChild(table);



function Branch(location, minHourlyCustomer, maxHourlyCustomer, avgCookies) {

  this.location = location;
  this.minHourlyCustomer = minHourlyCustomer;
  this.maxHourlyCustomer = maxHourlyCustomer;
  this.avgCookies = avgCookies;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.total = 0;
  branches.push(this);
  console.log(branches);
}


Branch.prototype.purchasedAmount = function () {
  for (var i = 0; i < hours.length; i++) {

    this.customersPerHour.push(getRandomNum(this.minHourlyCustomer, this.maxHourlyCustomer));
  }
};
Branch.prototype.cookiesPerHourDialy = function () {
  this.purchasedAmount();
  for (var i = 0; i < hours.length; i++) {
    var cookiesPerHour = Math.floor(this.customersPerHour[i] * this.avgCookies);
    this.cookiesPerHour.push(cookiesPerHour);
    this.total = this.total + cookiesPerHour;
  }
};


// table


Branch.prototype.render = function () {

  this.cookiesPerHourDialy();

  var tablebody = document.createElement('tr');
  table.appendChild(tablebody);
  var firstdata = document.createElement('td');
  tablebody.appendChild(firstdata);
  firstdata.textContent = this.location;
  for (var j = 0; j < hours.length; j++) {
    var rowdata = document.createElement('td');
    tablebody.appendChild(rowdata);
    rowdata.textContent = this.cookiesPerHour[j];

  }
  var dialyTot = document.createElement('td');
  tablebody.appendChild(dialyTot);
  dialyTot.textContent = this.total;

};



function headerRow() {


  //row1
  var tableHeader = document.createElement('tr');
  table.appendChild(tableHeader);

  var empty = document.createElement('th');
  tableHeader.appendChild(empty);
  empty.textContent = ('');

  for (var j = 0; j < hours.length; j++) {
    var headerData = document.createElement('th');
    tableHeader.appendChild(headerData);
    headerData.textContent = (hours[j]);
  }
  var headerTotal = document.createElement('th');
  tableHeader.appendChild(headerTotal);
  headerTotal.textContent = ('Daily Location Total');

}

function footerRow () {


  var tableFooter = document.createElement('tr');
  table.appendChild(tableFooter);
  var footerDataFirst = document.createElement('td');
  tableFooter.appendChild(footerDataFirst);
  footerDataFirst.textContent = ('Total');

  for (var j = 0; j <= hours.length; j++) {
    var footerData = document.createElement('td');
    tableFooter.appendChild(footerData);
    footerData.textContent = ('');
  }
}



new Branch('Seattle', 23, 65, 6.3);
new Branch('Tokyo', 3, 24, 1.2);
new Branch('Dubai', 11, 38, 3.7);
new Branch('Paris', 20, 38, 2.3);
new Branch('Lima', 2, 16, 4.6);


(function renderTable() {
  headerRow();
  for (var i = 0; i < branches.length; i++) {
    branches[i].render();
  }
  footerRow();

})();

// helper function

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
