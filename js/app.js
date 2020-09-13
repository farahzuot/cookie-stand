'use strict';

var hours = [6+'am',7+'am',8+'am',9+'am',10+'am',11+'am',12+'pm',1+'pm',2+'pm',3+'pm',4+'pm',5+'pm',6+'pm',7+'pm',];

var seattle = {
  minHourlyCustomer: 23,
  maxHourlyCustomer: 65,
  avgCookies: 6.3,

  custPerHour: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);

  },
  purchasedAmout: function(a,b) {
    var purAmount = this.avgCookies * this.custPerHour(a,b);
    purAmount= Math.floor(purAmount);
    return purAmount;

  },

};
console.table (seattle.purchasedAmout(6,20));

var cookies = document.getElementById('cookies');
var seattleLocation = document.createElement('h2');
cookies.appendChild(seattleLocation);
seattleLocation.textContent=('Seattle');
var cookiesPerHourS = document.createElement('ul');
cookies.appendChild(cookiesPerHourS);

var sum = 0;

for (var i=0; i < hours.length ; i++) {
  var numOfcookies = document.createElement('li');
  cookiesPerHourS.appendChild(numOfcookies);
  var num = seattle.purchasedAmout(1,20);
  numOfcookies.textContent=(hours[i]+': '+ num + ' cookies');
  sum = sum + num ;
}
console.log(sum);
var total = document.createElement('li');
cookiesPerHourS.appendChild(total);
total.textContent= ('Total: '+ sum + ' cookies');



var Tokyo = {
  minHourlyCustomer: 3,
  maxHourlyCustomer: 24,
  avgCookies: 1.2,


  custPerHour: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);

  },
  purchasedAmout: function(a,b) {
    var purAmount = this.avgCookies * this.custPerHour(a,b);
    purAmount= Math.floor(purAmount);
    return purAmount;
  },
};
console.table (Tokyo.purchasedAmout(6,20));

var tokyoLocation = document.createElement('h2');
cookies.appendChild(tokyoLocation);
tokyoLocation.textContent=('tokyo');
var cookiesPerHourT = document.createElement('ul');
cookies.appendChild(cookiesPerHourT);

for ( i=0; i < hours.length ; i++) {
  var numOfcookiesT = document.createElement('li');
  cookiesPerHourT.appendChild(numOfcookiesT);
  var numT = seattle.purchasedAmout(1,20);
  numOfcookiesT.textContent=(hours[i]+': '+ numT + ' cookies');
  var sumT = sum + numT ;
}

total = document.createElement('li');
cookiesPerHourT.appendChild(total);
total.textContent= ('Total: '+ sumT + ' cookies');



var dubai = {
  minHourlyCustomer: 11,
  maxHourlyCustomer: 38,
  avgCookies: 3.7,

  custPerHour: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);

  },
  purchasedAmout: function(a,b) {
    var purAmount = this.avgCookies * this.custPerHour(a,b);
    purAmount= Math.floor(purAmount);
    return purAmount;

  },
};
console.table (dubai.purchasedAmout(6,20));

var dubaiLocation = document.createElement('h2');
cookies.appendChild(dubaiLocation);
dubaiLocation.textContent=('dubai');
var cookiesPerHourD = document.createElement('ul');
cookies.appendChild(cookiesPerHourD);

for ( i=0; i < hours.length ; i++) {
  var numOfcookiesD = document.createElement('li');
  cookiesPerHourD.appendChild(numOfcookiesD);
  var numD = seattle.purchasedAmout(1,20);
  numOfcookiesD.textContent=(hours[i]+': '+ numD + ' cookies');
  var sumD = sum + numD ;
  console.log(sum);
}

total = document.createElement('li');
cookiesPerHourD.appendChild(total);
total.textContent= ('Total: '+ sumD + ' cookies');


var paris = {
  minHourlyCustomer: 20,
  maxHourlyCustomer: 38,
  avgCookies: 2.3,

  custPerHour: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);

  },
  purchasedAmout: function(a,b) {
    var purAmount = this.avgCookies * this.custPerHour(a,b);
    purAmount= Math.floor(purAmount);
    return purAmount;

  },
};
console.table (paris.purchasedAmout(6,20));

var parisLocation = document.createElement('h2');
cookies.appendChild(parisLocation);
parisLocation.textContent=('paris');
var cookiesPerHourP = document.createElement('ul');
cookies.appendChild(cookiesPerHourP);

for ( i=0; i < hours.length ; i++) {
  var numOfcookiesP = document.createElement('li');
  cookiesPerHourP.appendChild(numOfcookiesP);
  var numP = seattle.purchasedAmout(1,20);
  numOfcookiesP.textContent=(hours[i]+': '+ numP + ' cookies');
  var sumP = sum + numP ;
  console.log(sum);
}

total = document.createElement('li');
cookiesPerHourP.appendChild(total);
total.textContent= ('Total: '+ sumP + ' cookies');


var lima = {
  minHourlyCustomer: 2,
  maxHourlyCustomer: 16,
  avgCookies: 4.6,

  custPerHour: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);

  },
  purchasedAmout: function(a,b) {
    var purAmount = this.avgCookies * this.custPerHour(a,b);
    purAmount= Math.floor(purAmount);
    return purAmount;

  },
};
console.table (lima.purchasedAmout(6,20));

var limaLocation = document.createElement('h2');
cookies.appendChild(limaLocation);
limaLocation.textContent=('lima');
var cookiesPerHourL = document.createElement('ul');
cookies.appendChild(cookiesPerHourL);

for ( i=0; i < hours.length ; i++) {
  var numOfcookiesL = document.createElement('li');
  cookiesPerHourL.appendChild(numOfcookiesL);
  var numL = seattle.purchasedAmout(1,20);
  numOfcookiesL.textContent=(hours[i]+': '+ numL + ' cookies');
  var sumL = sum + numL ;
  console.log(sum);
}

total = document.createElement('li');
cookiesPerHourL.appendChild(total);
total.textContent= ('Total: '+ sumL + ' cookies');


var branches = [seattle, Tokyo , dubai , paris , lima];
console.log(branches[2]);
