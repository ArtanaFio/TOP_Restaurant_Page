import familyImage from '../assets/images/family.jpg';

export function createAboutComponents() {
    const aboutSection = document.createElement('div');
    aboutSection.classList.add("part", "waterfall");

    const aboutBox = document.createElement('div');
    aboutBox.classList.add("part", "opaque");
    aboutSection.appendChild(aboutBox);

    const aboutHeader = document.createElement('h2');
    aboutHeader.classList.add("cursive");
    aboutHeader.textContent = "About Us";
    aboutBox.appendChild(aboutHeader);

    const firstAboutParagraph = document.createElement('p');
    firstAboutParagraph.classList.add("paragraphs");
    firstAboutParagraph.textContent = "At Gado-Gado Grill, we invite you to experience the vibrant flavors of Indonesia right here in Tropical City, Oregon. Our restaurant is proudly owned by the Soetoro family, who brought their rich culinary heritage with them when they immigrated to the U.S. in the 1990s.";
    aboutBox.appendChild(firstAboutParagraph);

    const secondAboutParagraph = document.createElement('p');
    secondAboutParagraph.classList.add("paragraphs");
    secondAboutParagraph.textContent = "Drawing from traditional recipes passed down through generations, we serve up authentic Indonesian dishes with a modern twist. From our signature Gado-Gado salad to mouthwatering rendang and satay, every meal is crafted with love and the freshest ingredients.";
    aboutBox.appendChild(secondAboutParagraph);

    const thirdAboutParagraph = document.createElement('p');
    thirdAboutParagraph.classList.add("paragraphs");
    thirdAboutParagraph.textContent = "Join us at Gado-Gado Grill to savor the taste of Indonesia and enjoy a warm, welcoming atmosphere that reflects the Soetoro family's passion for sharing their cultural treasures with the community.";
    aboutBox.appendChild(thirdAboutParagraph);


    const aboutImage = document.createElement('img');
    aboutImage.classList.add("about-image");
    aboutImage.src = familyImage;
    aboutImage.alt = "Photo of the Soetoro family, owners of Gado-Gado Grill";
    aboutBox.appendChild(aboutImage);
    
    return aboutSection;
}