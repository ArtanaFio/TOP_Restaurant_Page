export function createFaqComponents() {
    const faqSection = document.createElement('div');
    faqSection.classList.add("part", "waterfall");

    const faqBox = document.createElement('div');
    faqBox.classList.add("part", "category", "darker");
    faqSection.appendChild(faqBox);

    const faqHeader = document.createElement('h2');
    faqHeader.textContent = "Frequently Asked Questions";
    faqBox.appendChild(faqHeader);

    const questionOne = document.createElement('p');
    questionOne.classList.add("question");
    questionOne.textContent = "Do you offer vegetarian or vegan options?";
    faqBox.appendChild(questionOne);

    const answerOne = document.createElement('p');
    answerOne.classList.add("answer", "paragraphs");
    answerOne.textContent = "Yes, we offer a variety of vegetarian and vegan options on our menu. Dishes like our Gado-Gado salad and various tofu-based items are suitable for vegetarian and vegan diets. Please let us know of any specific dietary restrictions when ordering.";
    faqBox.appendChild(answerOne);

    const questionTwo = document.createElement('p');
    questionTwo.classList.add("question");
    questionTwo.textContent = "Are there any gluten-free options available?";
    faqBox.appendChild(questionTwo);

    const answerTwo = document.createElement('p');
    answerTwo.classList.add("answer", "paragraphs");
    answerTwo.textContent = "We offer several gluten-free options on our menu. If you have specific dietary concerns or allergies, please inform our staff, and we will do our best to accommodate your needs.";
    faqBox.appendChild(answerTwo);

    const questionThree = document.createElement('p');
    questionThree.classList.add("question");
    questionThree.textContent = "Can I host an event or party at Gado-Gado Grill?";
    faqBox.appendChild(questionThree);

    const answerThree = document.createElement('p');
    answerThree.classList.add("answer", "paragraphs");
    answerThree.textContent = "Yes, we can accommodate private events and parties. Please contact us to discuss your event requirements and availability.";
    faqBox.appendChild(answerThree);

    const questionFour = document.createElement('p');
    questionFour.classList.add("question");
    questionFour.textContent = "Are your ingredients locally sourced?";
    faqBox.appendChild(questionFour);

    const answerFour = document.createElement('p');
    answerFour.classList.add("answer", "paragraphs");
    answerFour.textContent = "We strive to use fresh, high-quality ingredients, and whenever possible, we source locally to support our community and ensure the best flavors for our dishes.";
    faqBox.appendChild(answerFour);

    const questionFive = document.createElement('p');
    questionFive.classList.add("question");
    questionFive.textContent = "Do you have any specials or promotions?";
    faqBox.appendChild(questionFive);

    const answerFive = document.createElement('p');
    answerFive.classList.add("answer", "paragraphs");
    answerFive.textContent = "Yes, we often have daily specials and seasonal promotions. Follow us on social media to stay updated on our latest offers.";
    faqBox.appendChild(answerFive);

    return faqSection;
}