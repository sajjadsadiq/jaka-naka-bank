// get the ammount input field
function getInputValue(inputID) {
  const inputField = document.getElementById(inputID);
  const inputText = inputField.value; //22 text - number convert
  const inputAmmount = parseFloat(inputText);
  inputField.value = "";
  return inputAmmount;
}

// get the heading current ammount total
function getCurrentAmmount(headingID, Ammount) {
  const currentAmmount = document.getElementById(headingID);
  const CurrentAmmountText = currentAmmount.innerText; // 00
  const currentAmmountTotal = parseFloat(CurrentAmmountText);
  currentAmmount.innerText = currentAmmountTotal + Ammount;
}

// Main Balance Ammount
function getCurrentBalance() {
  const balanceCurrentAmmount = document.getElementById(
    "balance-current-ammount"
  );
  const balanceCurrentAmmountText = balanceCurrentAmmount.innerText;
  const previewBalanceCurrentAmmount = parseFloat(balanceCurrentAmmountText);
  return previewBalanceCurrentAmmount;
}

// get the update main balance
function getUpdateMainBalance(inputAmmount, isAdd) {
  const balanceCurrentAmmount = document.getElementById(
    "balance-current-ammount"
  );
  const previewBalanceCurrentAmmount = getCurrentBalance();

  if (isAdd == true) {
    balanceCurrentAmmount.innerText =
      previewBalanceCurrentAmmount + inputAmmount;
  } else {
    balanceCurrentAmmount.innerText =
      previewBalanceCurrentAmmount - inputAmmount;
  }
}

// --------- Handel Deposite Event ------------
document.getElementById("deposite-btn").addEventListener("click", function () {
  const depositeInputAmmount = getInputValue("deposite-input");
  if (depositeInputAmmount > 0) {
    getCurrentAmmount("deposite-current-ammount", depositeInputAmmount);
    getUpdateMainBalance(depositeInputAmmount, true);
  }
});

// -------------- Handel Withdraw Event -----------------
document.getElementById("withdraw-btn").addEventListener("click", function () {
  const newWithdrawInputAmmount = getInputValue("withdraw-input");
  const currentBalance = getCurrentBalance();
  if (newWithdrawInputAmmount > 0 && newWithdrawInputAmmount < currentBalance) {
    getCurrentAmmount("withdraw-current-ammount", newWithdrawInputAmmount);
    getUpdateMainBalance(newWithdrawInputAmmount, false);
  }
});
