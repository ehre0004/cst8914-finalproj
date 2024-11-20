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
      // jumbotron
      `<h1 class="h2" tabindex="-1">Schedule a Call</h1>
          <p>At Empower Ability Labs, we’re excited to connect with you! Whether you’re looking to enhance accessibility, invite an inspiring speaker, or explore usability testing, we’re here to help. Fill out the form below to schedule a call and take the first step toward creating inclusive digital experiences.</p>`,
      // content
      `
       <div class="container">
           <!-- ARIA live region for dynamic alerts -->
           <div id="alert-region" aria-live="polite" class="alert-region"></div>
   
           <form id="contact-form" novalidate>
               <!-- Business Name -->
               <div class="form-group">
                   <label for="business-name">Business Name <span aria-hidden="true">*</span>:</label>
                   <input type="text" class="form-control" id="business-name" placeholder="Enter your business name" aria-required="true">
               </div>
   
               <!-- Phone Number -->
               <div class="form-group">
                   <label for="phone-number">Phone Number <span aria-hidden="true">*</span>:</label>
                   <input type="tel" class="form-control" id="phone-number" placeholder="Enter your phone number" aria-required="true">
               </div>
   
               <!-- Email -->
               <div class="form-group">
                   <label for="email">Email <span aria-hidden="true">*</span>:</label>
                   <input type="email" class="form-control" id="email" placeholder="Enter your email" aria-required="true">
               </div>
   
               <!-- Topics -->
               <div class="form-group">
                   <label>What would you like to talk about? <span aria-hidden="true">*</span></label>
                   <div class="form-check">
                       <input type="checkbox" class="form-check-input" id="awareness">
                       <label class="form-check-label" for="awareness">Awareness lab days and workshops</label>
                   </div>
                   <div class="form-check">
                       <input type="checkbox" class="form-check-input" id="speaker">
                       <label class="form-check-label" for="speaker">Invite a speaker with disabilities to your event</label>
                   </div>
                   <div class="form-check">
                       <input type="checkbox" class="form-check-input" id="usability">
                       <label class="form-check-label" for="usability">Usability testing</label>
                   </div>
               </div>
   
               <!-- Event Details -->
               <div class="form-group">
                   <label for="event-details">Tell us about your event <span aria-hidden="true">*</span>:</label>
                   <textarea class="form-control" id="event-details" rows="4" placeholder="Provide details about your event" aria-required="true"></textarea>
               </div>
   
               <!-- Email Updates Toggle Switch -->
               <div class="form-group">
                   <label for="email-updates">Receive emails about updates and services:</label>
                   <div class="toggle-switch">
                       <input type="checkbox" id="email-updates" name="email-updates">
                       <label for="email-updates"></label>
                   </div>
               </div>
   
               <!-- Submit Button -->
               <button type="submit" class="btn btn-primary">Schedule a Call</button>
           </form>
       </div>
      `
   );

/**
 * 
 * @param {string} page 
 */
function loadContent(page) {
    contents[page].load();
    document.title = contents[page].title + " - Empower Ability Labs";

    // Call the setupContactForm function if the contact page is loaded
    if (page === 'contact') {
        setupContactForm();
    }
}


function setupContactForm() {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Clear previous alerts
            const alertRegion = document.getElementById('alert-region');
            alertRegion.innerHTML = '';
            alertRegion.className = 'alert-region';

            // Gather form data
            const businessName = document.getElementById('business-name').value.trim();
            const phoneNumber = document.getElementById('phone-number').value.trim();
            const email = document.getElementById('email').value.trim();
            const eventDetails = document.getElementById('event-details').value.trim();
            const awareness = document.getElementById('awareness').checked;
            const speaker = document.getElementById('speaker').checked;
            const usability = document.getElementById('usability').checked;
            const emailUpdates = document.getElementById('email-updates').checked;

            // Validation logic
            const errors = [];

            // Validate business name
            if (!businessName) {
                errors.push("Business name is required.");
            }

            // Validate phone number (general format: 10-digit number, with optional dashes or spaces)
            const phonePattern = /^[\d\s-]{10,15}$/; // Matches 10-15 digits with optional spaces or dashes
            if (!phoneNumber || !phonePattern.test(phoneNumber)) {
                errors.push("Phone number is required and must be 10-15 digits (e.g., 613-123-1234).");
            }

            // Validate email address
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email validation
            if (!email || !emailPattern.test(email)) {
                errors.push("A valid email address is required (e.g., name@example.com).");
            }

            // Validate at least one topic is selected
            if (!awareness && !speaker && !usability) {
                errors.push("You must select at least one topic to talk about.");
            }

            // Validate event details
            if (!eventDetails) {
                errors.push("Event details are required.");
            }

            // Handle validation errors
            if (errors.length > 0) {
                alertRegion.innerHTML = `
                    <div class="alert alert-danger" role="alert">
                        <ul>${errors.map(err => `<li>${err}</li>`).join('')}</ul>
                    </div>
                `;
                alertRegion.classList.add('alert-danger');

                // Make the alert focusable and set focus
                alertRegion.setAttribute('tabindex', '-1');
                alertRegion.focus();

                return;
            }

            // Success message
            alertRegion.innerHTML = `
                Thank you for scheduling a call! We will get in touch soon.
            `;
            alertRegion.classList.add('alert-success');

            // Make the alert focusable and set focus
            alertRegion.setAttribute('tabindex', '-1');
            alertRegion.focus();
        });
    }
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
