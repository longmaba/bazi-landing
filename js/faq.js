// FAQ Accordion functionality
document.addEventListener("DOMContentLoaded", function () {
  const faqQuestions = document.querySelectorAll(".faq__question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", function () {
      const faqId = this.getAttribute("data-faq");
      const answer = document.querySelector(`[data-answer="${faqId}"]`);
      const icon = this.querySelector(".faq__icon");
      const isOpen = this.classList.contains("active");

      // Close all other FAQ items
      faqQuestions.forEach((otherQuestion) => {
        if (otherQuestion !== this) {
          const otherId = otherQuestion.getAttribute("data-faq");
          const otherAnswer = document.querySelector(`[data-answer="${otherId}"]`);
          const otherIcon = otherQuestion.querySelector(".faq__icon");

          otherQuestion.classList.remove("active");
          otherAnswer.classList.remove("active");
          otherIcon.style.transform = "rotate(0deg)";
          otherAnswer.style.maxHeight = "0";
        }
      });

      // Toggle current FAQ item
      if (!isOpen) {
        this.classList.add("active");
        answer.classList.add("active");
        icon.style.transform = "rotate(180deg)";
        answer.style.maxHeight = answer.scrollHeight + "px";
      } else {
        this.classList.remove("active");
        answer.classList.remove("active");
        icon.style.transform = "rotate(0deg)";
        answer.style.maxHeight = "0";
      }
    });
  });

  // Smooth scroll to FAQ item if URL has hash
  if (window.location.hash) {
    const targetId = window.location.hash.substring(1);
    const targetQuestion = document.querySelector(`[data-faq="${targetId}"]`);

    if (targetQuestion) {
      setTimeout(() => {
        targetQuestion.click();
        targetQuestion.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 100);
    }
  }
});
