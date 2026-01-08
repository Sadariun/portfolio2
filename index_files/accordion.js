const faqs = document.querySelectorAll(".faq-item");

faqs.forEach((item, idx) => {
  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");

  function toggleFAQ() {
    const isOpen = answer.classList.contains("open");

    // закрываем абсолютно все (и выше, и ниже)
    faqs.forEach((el) => {
      el.querySelector(".faq-answer").classList.remove("open");
      el.querySelector(".faq-question").classList.remove("active");
    });

    // если текущий не был открыт → открыть его
    if (!isOpen) {
      answer.classList.add("open");
      question.classList.add("active");
    }
  }

  question.addEventListener("click", toggleFAQ);
  answer.addEventListener("click", toggleFAQ);
});