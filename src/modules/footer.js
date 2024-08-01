function createFooter() {
    const footer = document.createElement('footer');

    const textNode = document.createTextNode('Created by "ArtanaFio" on ');

    const githubLink = document.createElement('a');
    githubLink.href = "https://github.com/ArtanaFio/";
    githubLink.target = "_blank";
    githubLink.textContent = "GitHub";
    
    const copyright = document.createTextNode(' \u00A9 ');

    const copyrightYear = document.createElement('span');
    copyrightYear.className = 'year';
    copyrightYear.textContent = new Date().getFullYear();

    footer.appendChild(textNode);
    footer.appendChild(githubLink);
    footer.appendChild(copyright);
    footer.appendChild(copyrightYear);

    return footer;
}

function displayFooter() {

    document.body.appendChild(createFooter());
}
    
export const Footer = displayFooter();