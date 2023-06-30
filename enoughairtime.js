function enoughAirtime(totalCost, airTime) {
    var callCost = [];
    var smsCost = [];
    var dataCost = [];
  var phoneBill = totalCost.split(',');
  for (let i = 0; i < phoneBill.length; i++) {
    if (phoneBill[i].endsWith('call')) {
        callCost.push(phoneBill[i]);  
    }
  
    else if (phoneBill[i].endsWith('sms')) {
      smsCost.push(phoneBill[i]);  
    }
    else if (phoneBill[i].endsWith('data')) {
      dataCost.push(phoneBill[i]);
    }
  }  
    var callCost1 = callCost.length*1.88;
    var smsCost1 = smsCost.length*0.75;
    var dataCost1 = dataCost.length*12;
    var totalCost1 = callCost1 + smsCost1 + dataCost1;
    totalCost1.toFixed(3);
    var totalCost2 = airTime - totalCost1;
    if (totalCost1 > airTime) {
      return 'R0.00';
    }
    
    return 'R' + totalCost2.toFixed(2);
  }