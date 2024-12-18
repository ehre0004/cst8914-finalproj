//Template Function that can be used to run JavaScript on the page
//Note: This can be changed to whatever JavaScript formatting you would like
function knowledgeRunner(){

}
knowledgeRunner()


/* ********************************************* CONTENT ********************************************** */
class Content {
    constructor(title, jumbotron, content) {
        this.title = title;
        this.jumbotron = jumbotron;
        this.content = content;
    }
    load() {
        let jumbotronNode = document.getElementById('jumbotron');
        let contentNode = document.getElementById('content');
        jumbotronNode.innerHTML = this.jumbotron;
        contentNode.innerHTML = this.content;
    }
}

// navigation object to map pages to
var contents = {
    home: new Content('' ,'', ''),
    services: new Content('' ,'', ''),
    contact: new Content('' ,'', '')
};

// contents of 'home' page
// TODO: finish this page, too! i.e. modal
contents.home = new Content(
    // title
    `Home`,
    // jumbotron
    `<h1 class="h2" tabindex="-1">Welcome to Empower Ability Labs! </h1>
        <p>Empower Ability Labs is a hub for learning and empathy-building.  We are on a mission to foster understanding and promote inclusive digital experiences for all. We offer a range of services designed to promote accessibility awareness, drive inclusivity, and enhance the user experience. And help you find answers on How do people with disabilities use technology and navigate the digital world? What tools do they employ?</p>
        <p><a href="#" onclick="openModal(event)">Meet the Empower Community! </a></p>`, // TODO: add modal function to this link!
    // content
    `<div class="row">
        <div class="col-md-4">
            <h2 class="h5">Our Approach</h2>
            <p>Empower Ability Labs utilizes a hands-on approach to raise awareness and promote empathy. Our immersive workshops and lab days provide participants with a unique opportunity to step into the shoes of individuals with disabilities and navigate the world from their perspective.</p>
            <p><a href="https://www.google.com/search/howsearchworks/our-approach/">Learn more</a></p>
        </div>
        <div class="col-md-4">
            <h2 class="h5">Services</h2>
            <p>Promote accessibility awareness and enhance the user experience.</p>
            <ul>
                <li>Empathy lab days and workshops</li>
                <li>Go beyond WCAG compliance!</li>
                <li>Inspirational speakers.</li>
            </ul>
            <p><a href="https://www.elevenways.be/en/services">Learn more</a></p>
        </div>
        <div class="col-md-4">
            <h2 class="h5">Testimonials</h2>
            <p>Invite a speaker with disabilities to share their unique journey. This captivating addition to your upcoming event will offer insights that resonate,  inspire, educate, and enrich your team's understanding of inclusion.</p>
            <p><a href="https://dictionary.cambridge.org/us/dictionary/english/testimonial">Learn more</a></p>
        </div>
    </div>`
);

// TODO: services page
contents.services = new Content(
    // title
    `Services`,
    // jumbo
    `todo: services`,
    // content
    ``
);
// TODO: contact page
contents.contact = new Content(
    // title
    `Schedule a Call`,
    // jumbo
    `todo: schedule a call`,
    // content
    ``
);

/**
 * 
 * @param {string} page 
 */
function loadContent(page) {
    contents[page].load();
    document.title = contents[page].title+" - Empower Ability Labs";
}

/* ******************************************** NAVIGATION *********************************** */

/**
 * navlinks contains all the <a> marked by the class "nav-link"
 */
var navlinks = document.getElementsByClassName("nav-link");
for (let i=0; i<navlinks.length; i++) {
    navlinks.item(i).addEventListener("click", actionOnClick, false);
    navlinks.item(i).addEventListener("keyup", actionOnKeyUp, false);
}

/**
 * Prevent default behaviour, i.e. not navigating by href value
 * and tabbing behaviour.
 * @param {Event} e 
 */
function actionOnClick(e) {
    e.preventDefault();
    let page = e.currentTarget.getAttribute('href');
    loadContent(page);
}

/**
 * This finds the index of the page by checking the 'href' values of the list and the passed element (target)
 * @param {HTMLCollectionOf} list 
 * @param {Element} target
 */
function getIndexOfHTMLCollectionByAttribute(list, target, attributeToCheck) {
    for (let i = 0; i < list.length; i++) {
        if (list.item(i).getAttribute(attributeToCheck) == target.getAttribute(attributeToCheck)) {
            return i;
        }
    }
}

/**
 * collects all `<h1>` tags and makes the first in the list focusable.
 * 
 * **NOTE: h1 needs `tabindex="-1"` added to the html content to be focusable.**
 */
function findH1AndFocus() {
    let h1s = document.getElementsByTagName("h1");
    console.log(h1s + " length " + h1s.length);
    if (h1s != null && h1s.length > 0) {
        h1s.item(0).focus();
    }
}

/**
 * Detects key presses from *event paramater (e)*, listens for left/right keys, and changes to previous/next in list of global variable `navlinks`.
 * Use `getIndexOfHTMLCollectionByAttribute` to find the index.
 * @param {Event} e 
 */
function actionOnKeyUp(e) {
    let index = getIndexOfHTMLCollectionByAttribute(navlinks, e.target, 'href');
    if (e.keyCode == 39) { // right key
		navlinks[(index + 1) % 3].focus();
	} else if (e.keyCode == 37) { // left key
		navlinks[((index - 1) < 0 ? 2 : index - 1)].focus();
	} else if (e.keyCode == 13) {
        findH1AndFocus();
    }
}

/* ****************************************************************************************** */

loadContent('home');

/* ********************************** END NAVIGATION **************************************** */