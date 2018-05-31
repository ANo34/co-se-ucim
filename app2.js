document.getElementById('loan-form').addEventListener('submit', calculateVse);
function calculateVse(e){
  console.log('huhu');
  const UIamount = document.getElementById('amount');
  const UIinterest = document.getElementById('interest');
  const UIyears = document.getElementById('years');
  const UImonthly = document.getElementById('monthly-payment');
  const UItotal = document.getElementById('total-payment');
  const UItotalInterest = document.getElementById('total-interest');

  const calculatedInterest = parseFloat(UIinterest.value)/100/12;
  const payments = parseFloat(UIyears.value)*12;
  const principal = parseFloat(UIamount.value);

  // calculating
  const x = Math.pow(1+calculatedInterest, payments);
  const monthly = (principal*x*calculatedInterest)/(x-1);

  if (isFinite(monthly)) {
    UImonthly.value = monthly.toFixed(3);
    UItotal.value = (monthly*payments).toFixed(2);
  }
    else { 
fireAlert("zkontroluj si cisla");
}
e.preventDefault();
}

function fireAlert (err){
const newDiv = document.createElement('div');
newDiv.className = 'alert alert-danger';
newDiv.appendChild(document.createTextNode(err));
const card = document.querySelector('.card');
const heading = document.querySelector('.heading');
card.insertBefore(newDiv, heading);
setTimeout(clearAlert, 3000); 
}

function clearAlert(){
  document.querySelector('.alert').remove();
}