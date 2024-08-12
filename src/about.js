export default function loadAbout(){
    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about-container')

    const sections = [
        {title: 'welcome', heading:'Welcome to PIZZA PARADISE', paragraph:"Nestled in the heart of Nafpaktos, our restaurant is more than just a place to eat—it's a destination for pizza lovers who crave authentic flavors and unforgettable dining experiences."},
        {title: 'story', heading:'Our Story', paragraph:"Founded in 1970 PIZZA PARADISE began as a small family-run pizzeria with a big dream: to bring the taste of traditional, handcrafted pizza to our community. With roots steeped in culinary traditions, we combine time-honored recipes with fresh, high-quality ingredients to create pizzas that are both classic and innovative."},
        {title: 'philosophy', heading:'Our Pizza Philosophy', paragraph:"At PIZZA PARADISE, great pizza starts with great ingredients. We source the finest local produce, cheeses, and meats, crafting each pizza with care—from our fresh, hand-made dough to our rich, flavorful sauces. Whether you crave a classic Margherita or a bold Meat Lovers, every bite is a testament to our commitment to quality and taste."},
        {title: 'joinUs', heading:'Join Us', paragraph:"Whether you’re dining in with friends, grabbing a slice on the go, or ordering for delivery, we invite you to taste the difference that passion makes. Come join us at PIZZA PARADISE, where every meal is crafted with love, and every bite tells a story."},
    ]

    sections.forEach(section => {
        const sectionElement = createSection(section.title,section.heading,section.paragraph);

        setTimeout(()=>{
            sectionElement.classList.add('loaded');
        },0)

        aboutContainer.appendChild(sectionElement)
    });

    document.getElementById('content').appendChild(aboutContainer);

}

const createSection = (title, heading, paragraph) => {
    const sectionContainer = document.createElement('div');
    sectionContainer.classList.add(`${title}-container`)

    const sectionHeading = document.createElement('div');
    sectionHeading.classList.add('heading');
    const sectionParagraph = document.createElement('p');
    sectionParagraph.classList.add('paragraph');

    sectionHeading.innerHTML = heading;
    sectionParagraph.innerHTML = paragraph;

    sectionContainer.appendChild(sectionHeading);
    sectionContainer.appendChild(sectionParagraph);

    return sectionContainer;
}