// Function to append value to the display
function appendValue(value) {
  document.getElementById("display").value += value;
}

// Function to clear the display
function clearDisplay() {
  document.getElementById("display").value = "";
}

// Function to delete the last character
function backspace() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

// Function to calculate the result
function calculate() {
  try {
      let display = document.getElementById("display");
      display.value = new Function('return ' + display.value)();
  } catch {
      alert("Invalid Expression");
      clearDisplay();
  }
}

// Function to handle keyboard input
function handleKeyboardInput(event) {
  const key = event.key;

  // Allow numbers, operators, and specific keys
  if (/[0-9+\-*/.()]/.test(key)) {
      appendValue(key);
  } else if (key === "Enter" || key === "=") {
      calculate();
  } else if (key === "Backspace") {
      backspace();
  } else if (key === "Escape" || key === "c" || key === "C") {
      clearDisplay();
  }
}

// Add event listener for keyboard input
document.addEventListener("keydown", handleKeyboardInput);