function scrollToSectionHome() {
    const section = document.querySelector('.section-header');
    section.scrollIntoView({ behavior: 'smooth' });
}

function scrollToSectionRoyalty() {
    const section = document.getElementById('section-flavour-royalty');
    section.scrollIntoView({ behavior: 'smooth' });
}

function scrollToSectionAbout() {
    const section = document.getElementById('story-section');
    section.scrollIntoView({ behavior: 'smooth' });
}

function scrollToSectionStrength() {
    const section = document.getElementById('strength-section');
    section.scrollIntoView({ behavior: 'smooth' });
}

function scrollToSectionContact() {
    const section = document.getElementById('section-footer');
    section.scrollIntoView({ behavior: 'smooth' });
}