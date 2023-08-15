document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('new-deposit');
    const newDepositString = depositField.value;
    const newDeposit = parseFloat(newDepositString);
    depositField.value = '';
    const previousDepositElement = document.getElementById('total-deposit');
    const previousDepositString = previousDepositElement.innerText;
    const previousDeposit = parseFloat(previousDepositString);
    if(isNaN(newDeposit)){
        alert('Please Provide Valid Number');
        return;
    }
    previousDepositElement.innerText = previousDeposit + newDeposit;
    const totalMoneyElement = document.getElementById('total-money');
    const totalMoneyString = totalMoneyElement.innerText;
    const totalMoney = parseFloat(totalMoneyString);
    totalMoneyElement.innerText = totalMoney + newDeposit;
})

document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawField = document.getElementById('new-withdraw');
    const newWithdrawString = newWithdrawField.value;
    const newWithdraw = parseFloat(newWithdrawString);
    newWithdrawField.value = '';
    const totalWithdrawElement = document.getElementById('total-withdraw');
    const totalWithdrawString = totalWithdrawElement.innerText;
    const totalWithdraw = parseFloat(totalWithdrawString);
    if(isNaN(newWithdraw)){
        alert('Please Provide Valid Number');
        return;
    }
    const totalMoneyElement = document.getElementById('total-money');
    const totalMoneyString = totalMoneyElement.innerText;
    const totalMoney = parseFloat(totalMoneyString);
    if(newWithdraw > totalMoney){
        alert('You have no ENOUGH money');
        return;
    }
    totalWithdrawElement.innerText = totalWithdraw + newWithdraw;
    totalMoneyElement.innerText = totalMoney - newWithdraw;


})