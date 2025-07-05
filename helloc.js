function showTab(tabId) {
  document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));
  document.querySelectorAll(".tab-button").forEach(btn => btn.classList.remove("active"));
  document.getElementById(tabId).classList.add("active");
  document.querySelector(`.tab-button[onclick="showTab('${tabId}')"]`).classList.add("active");
}

// Simulated FAQ data
const faqData = {
  orders: [
    { q: "How do I track my order?", a: "Go to My Orders > Track Order." },
    { q: "Can I cancel my order?", a: "Yes, if it hasn't shipped. Go to My Orders > Cancel." }
  ],
  returns: [
    { q: "How do I return an item?", a: "Go to My Orders > Return." },
    { q: "What is AJIO's return policy?", a: "Return within 15 days of delivery." }
  ],
  payments: [
    { q: "What payment methods are accepted?", a: "We accept UPI, cards, net banking, etc." },
    { q: "Is cash on delivery available?", a: "Yes, on most orders." }
  ],
  account: [
    { q: "How do I reset my password?", a: "Use the 'Forgot Password' option on login." },
    { q: "How can I update my address?", a: "Go to Account Settings > Address Book." }
  ]
};

function loadQuestions(category) {
  const container = document.getElementById("faq-container");
  container.innerHTML = "";
  faqData[category].forEach((item, index) => {
    const faq = document.createElement("div");
    faq.classList.add("faq");
    faq.innerHTML = `<strong>${item.q}</strong><div class="answer">${item.a}</div>`;
    faq.addEventListener("click", () => {
      const answer = faq.querySelector(".answer");
      answer.style.display = answer.style.display === "block" ? "none" : "block";
    });
    container.appendChild(faq);
  });
  showTab("questions");
}

// Placeholder search functionality
document.getElementById("search").addEventListener("input", function () {
  alert("Search feature not implemented. This is just a placeholder.");
});
