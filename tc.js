document.querySelector('#tip-form').onchange = function(){

  var bill = Number(document.getElementById('billTotal').value);
  var tip = document.getElementById('tipInput').value;
  document.getElementById('tipOutput').innerHTML = `${tip}%`;
  var tipValue = bill * (tip/100)
  var finalBill = bill + tipValue
console.log(finalBill)
var tipAmount = document.querySelector('#tipAmount')
var totalDueWithTip = document.querySelector('#totalDueWithTip')

tipAmount.value = tipValue.toFixed(2);
 totalDueWithTip.value =finalBill.toFixed(2);

  document.getElementById('results').style.display='block'
}