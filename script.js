// Tab switching
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    const tab = button.dataset.tab;

    tabButtons.forEach(b => b.classList.remove("active"));
    tabContents.forEach(c => c.classList.remove("active"));

    button.classList.add("active");
    document.getElementById(tab).classList.add("active");
  });
});

// Trial Calculation
function calculateTrial() {
  const avgValue = parseFloat(document.getElementById("avgValue").value);
  const adCost = parseFloat(document.getElementById("adCost").value);

  if (isNaN(avgValue) || isNaN(adCost)) {
    document.getElementById("trialResult").innerText = "Enter valid numbers.";
    return;
  }

  // Option A: (average customer value – ad cost) / 2
  const amount = Math.round((avgValue - adCost) / 2);

  document.getElementById("trialResult").innerText =
    "Trial Price: $" + amount;
}

// Range Calculation
function calculateRange() {
  const revenue = parseFloat(document.getElementById("monthlyRevenue").value);

  if (isNaN(revenue)) {
    document.getElementById("rangeResult").innerText = "Enter a valid number.";
    return;
  }

  const low = Math.round(revenue * 0.05);
  const high = Math.round(revenue * 0.08);

  document.getElementById("rangeResult").innerHTML =
    `Pricing Range: $${low} – $${high}`;
}
