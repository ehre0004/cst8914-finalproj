//Template Function that can be used to run JavaScript on the page
//Note: This can be changed to whatever JavaScript formatting you would like
function knowledgeRunner(){

}
knowledgeRunner()


/* ************************************** Rae Ehret's Workspace *************************************** */
class Content {
    constructor(jumbotron, content) {
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
    home: new Content('', ''),
    services: new Content('', ''),
    contact: new Content('', '')
};

// contents of 'home' page
contents.home = new Content(
    // jumbotron
    '<h1 id="a1" class="h2">Welcome to Empower Ability Labs! </h1>'
        + '<p>Empower Ability Labs is a hub for learning and empathy-building.  We are on a mission to foster understanding and promote inclusive digital experiences for all. We offer a range of services designed to promote accessibility awareness, drive inclusivity, and enhance the user experience. And help you find answers on How do people with disabilities use technology and navigate the digital world? What tools do they employ?</p>'
        + '<p><a class="pointer" id="openModal">Meet the Empower Community! </a></p>',
    // content
        '<div class="row">'
        +'<div class="col-md-4">'
            +'<h2 class="h5">Our Approach</h2>'
            +'<p>Empower Ability Labs utilizes a hands-on approach to raise awareness and promote empathy. Our immersive workshops and lab days provide participants with a unique opportunity to step into the shoes of individuals with disabilities and navigate the </p>'
        +'</div>'
        +'<div class="col-md-4">'
            +'<h2 class="h5">Services</h2>'
            +'<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo. </p>'
        +'</div>'
        +'<div class="col-md-4">'
            +'<h2 class="h5">Testimonials</h2>'
            +'<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo. </p>'
        +'</div>'
    +'</div>'
);

/**
 * 
 * @param {string} page 
 */
function loadContent(page) {
    contents[page].load();
}

/* ******************************************** NAVIGATION *********************************** */

var navlinks = document.getElementsByClassName("nav-link");
for (let i=0; i<navlinks.length; i++) {
    navlinks.item(i).addEventListener("click", defaultBehaviour, false);
}

/**
 * Prevent default behaviour, i.e. not navigating by href value
 * NOTE: just expand on this to include tabbing behaviour
 * @param {Event} e 
 */
function defaultBehaviour(e) {
    e.preventDefault();
    // TODO: programmatically set div id's to something that can be swapped out easily with string replacement in order to retrieve tab panel id's and swap
    let page = e.currentTarget.getAttribute('href');
    console.log(page);
    loadContent(page);
    // TODO: lastly, set focus to the first header in the content: the h1 in the 'jumbotron'. this is for screen reader accessibility
}

/* ****************************************************************************************** */
/* ********************************** END NAVIGATION **************************************** */
