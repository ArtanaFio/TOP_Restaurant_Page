export function createHomeComponents() {
    const homeSection = document.createElement('div');

    const upperBox = document.createElement('div');
    upperBox.classList.add("upper-box");
    homeSection.appendChild(upperBox);

    const title = document.createElement('h1');
    title.classList.add("restaurant-name", "centered");
    title.textContent = "Gado-Gado Grill";
    upperBox.appendChild(title);

    const headline = document.createElement('h2');
    headline.classList.add("centered", "headline");
    headline.textContent = "Savor the Flavors of Indonesia at Gado-Gado Grill: Where Tradition Meets Taste";
    upperBox.appendChild(headline);

    const lowerBox = document.createElement('div');
    lowerBox.classList.add("part", "lower-box");
    homeSection.appendChild(lowerBox);

    const hourSection = document.createElement('div');
    hourSection.classList.add("part", "opaque");
    lowerBox.appendChild(hourSection);
    
    const hoursHeader = document.createElement('h3');
    hoursHeader.classList.add("cursive");
    hoursHeader.textContent = "Hours";
    hourSection.appendChild(hoursHeader);

    const hoursList = document.createElement('ul');
    hoursList.classList.add("hours");
    hourSection.appendChild(hoursList);

    const sundayHours = document.createElement('li');
    sundayHours.textContent = "Sunday: Closed";
    hoursList.appendChild(sundayHours);

    const mondayHours = document.createElement('li');
    mondayHours.textContent = "Monday: 11pm–9pm";
    hoursList.appendChild(mondayHours);

    const tuesdayHours = document.createElement('li');
    tuesdayHours.textContent = "Tuesday: 11pm–9pm";
    hoursList.appendChild(tuesdayHours);

    const wednesdayHours = document.createElement('li');
    wednesdayHours.textContent = "Wednesday: 11pm–9pm";
    hoursList.appendChild(wednesdayHours);

    const thursdayHours = document.createElement('li');
    thursdayHours.textContent = "Thursday: 11pm–9pm";
    hoursList.appendChild(thursdayHours);

    const fridayHours = document.createElement('li');
    fridayHours.textContent = "Friday: 11pm–11pm";
    hoursList.appendChild(fridayHours);

    const saturdayHours = document.createElement('li');
    saturdayHours.textContent = "Saturday: 12pm–11pm";
    hoursList.appendChild(saturdayHours);

    const hoursNote = document.createElement('p');
    hoursNote.classList.add("special-note");
    hoursNote.textContent = "Note: Seating ends 30 minutes before closing.";
    hourSection.appendChild(hoursNote);

    const contactSection = document.createElement('div');
    contactSection.classList.add("part", "opaque");
    lowerBox.appendChild(contactSection);

    const contactHeader = document.createElement('h3');
    contactHeader.classList.add("cursive");
    contactHeader.textContent = "Contact";
    contactSection.appendChild(contactHeader);

    const contactDirections = document.createElement('p');
    contactDirections.textContent = "Call us to place orders, make reservations, or to find answers to your questions not found in our FAQ section.";
    contactDirections.classList.add("paragraphs");
    contactSection.appendChild(contactDirections);

    const contactNumber = document.createElement('p');
    contactNumber.classList.add("paragraphs");
    contactNumber.textContent = "309-555-2094";
    contactSection.appendChild(contactNumber);

    const contactForward = document.createElement('p');
    contactForward.classList.add("paragraphs");
    contactForward.textContent = "We look forward to talking to you!";
    contactSection.appendChild(contactForward);

    const locationSection = document.createElement('div');
    locationSection.classList.add("part", "opaque");
    lowerBox.appendChild(locationSection);

    const locationHeader = document.createElement('h3');
    locationHeader.classList.add("cursive");
    locationHeader.textContent = "Location";
    locationSection.appendChild(locationHeader);

    const locationAddressOne = document.createElement('p');
    locationAddressOne.textContent = "1401 Diversity Drive";
    locationSection.appendChild(locationAddressOne);

    const locationAddressTwo = document.createElement('p');
    locationAddressTwo.textContent = "Tropical City, Oregon 34210";
    locationSection.appendChild(locationAddressTwo);

    return homeSection;
}