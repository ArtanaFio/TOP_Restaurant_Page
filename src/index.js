console.log("Your modules should work now");

import './assets/styles/main.css';
import Footer from './modules/footer.js';
import { createHomeComponents } from './modules/home.js';
import { createAboutComponents } from './modules/about.js';
import { createMenuComponents } from './modules/menu.js';
import { createFaqComponents } from './modules/faq.js';

function displayContent() {
    const contentContainer = document.getElementById('content');
    const tabs = document.querySelectorAll('button');
    const homeSection = createHomeComponents();
    const aboutSection = createAboutComponents();
    const menuSection = createMenuComponents();
    const faqSection = createFaqComponents();

    contentContainer.appendChild(createHomeComponents());

    function showSection(section) {
        contentContainer.innerHTML = '';
        contentContainer.appendChild(section);
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(button => button.classList.remove("clicked"));
            tab.classList.add("clicked");

            switch (tab.id) {
                case 'home':
                    showSection(homeSection);
                    break;
                case 'about':
                    showSection(aboutSection);
                    break;
                case 'menu':
                    showSection(menuSection);
                    break;
                case 'faq':
                    showSection(faqSection);
                    break;
            }
        });
    });
}

displayContent();

