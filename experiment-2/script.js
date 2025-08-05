let currentBalance = 0;

// DOM elements
const balanceDisplay = document.getElementById("balance");
const amountInput = document.getElementById("amount");
const depositBtn = document.getElementById("depositBtn");
const withdrawBtn = document.getElementById("withdrawBtn");

// Update the displayed balance
function updateBalanceDisplay() {
  balanceDisplay.textContent = `$${currentBalance.toFixed(2)}`;
}

// Get input amount
function getInputAmount() {
  const value = parseFloat(amountInput.value);
  amountInput.value = "";
  if (isNaN(value) || value <= 0) {
    alert("Enter a valid positive number");
    return null;
  }
  return value;
}

// Deposit handler
function deposit() {
  const amount = getInputAmount();
  if (amount !== null) {
    currentBalance += amount;
    updateBalanceDisplay();
  }
}

// Withdraw handler
function withdraw() {
  const amount = getInputAmount();
  if (amount !== null) {
    if (amount > currentBalance) {
      alert("Insufficient balance.");
    } else {
      currentBalance -= amount;
      updateBalanceDisplay();
    }
  }
}

// Event listeners
depositBtn.addEventListener("click", deposit);
withdrawBtn.addEventListener("click", withdraw);

// Initial balance
updateBalanceDisplay();
