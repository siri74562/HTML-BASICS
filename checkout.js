document.addEventListener("DOMContentLoaded", function () {
  const checkoutBtn = document.querySelector(".checkout-btn");
  const inputs = document.querySelectorAll(".delivery-form input");
  const paymentOptions = document.querySelectorAll("input[name='payment']");

  checkoutBtn.addEventListener("click", function () {
    // 1. Validate delivery form
    let isValid = true;
    inputs.forEach(input => {
      if (input.value.trim() === "") {
        input.style.borderColor = "red";
        isValid = false;
      } else {
        input.style.borderColor = "#ccc";
      }
    });

    if (!isValid) {
      alert("Please fill in all delivery details.");
      return;
    }

    // 2. Get selected payment method
    let selectedPayment = "";
    paymentOptions.forEach(option => {
      if (option.checked) {
        selectedPayment = option.nextSibling.textContent.trim();
      }
    });

    // 3. Simulate order placement
    alert("Order placed successfully!\nPayment Method: " + selectedPayment);

    // Optionally clear the form after order
    inputs.forEach(input => input.value = "");
  });
});
