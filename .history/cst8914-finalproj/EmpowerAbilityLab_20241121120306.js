
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
// contact page
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
               <!-- Live Region for Screen Readers -->
            <div id="screenreader-notification" aria-live="polite" class="sr-only"></div>
           <div id="alert-region" aria-live="polite" class="alert-region">
                <!-- Alerts will be dynamically injected here -->
            </div>
   
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
            const screenReaderNotification = document.getElementById('screenreader-notification');
            alertRegion.innerHTML = '';
            alertRegion.className = 'alert-region'; // Reset classes

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

            if (!businessName) {
                errors.push("Business name is required.");
            }

            const phonePattern = /^[\d\s-]{10,15}$/;
            if (!phoneNumber || !phonePattern.test(phoneNumber)) {
                errors.push("Phone number is required and must be 10-15 digits (e.g., 613-123-1234).");
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email || !emailPattern.test(email)) {
                errors.push("A valid email address is required (e.g., name@example.com).");
            }

            if (!awareness && !speaker && !usability) {
                errors.push("You must select at least one topic to talk about.");
            }

            if (!eventDetails) {
                errors.push("Event details are required.");
            }

            // Handle validation errors
            if (errors.length > 0) {
                // Apply alert classes directly to alertRegion
                alertRegion.className = 'alert alert-danger alert-region';
                alertRegion.setAttribute('role', 'alert');
                alertRegion.setAttribute('tabindex', '0'); // Include in tab order

                // Build the alert content with the message before the close button
                alertRegion.innerHTML = `
                    <ul>
                        ${errors.map(err => `<li>${err}</li>`).join('')}
                    </ul>
                    <button type="button" class="close-btn" aria-label="Close alert">
                        <span aria-hidden="true">&times;</span>
                    </button>
                `;

                // Add event listener to close button
                const closeButton = alertRegion.querySelector('.close-btn');
                closeButton.addEventListener('click', () => {
                    alertRegion.innerHTML = '';
                    alertRegion.className = 'alert-region'; // Reset classes
                    alertRegion.removeAttribute('tabindex');

                    // Notify screen reader users
                    screenReaderNotification.textContent = "The alert has been closed.";
                });

                // Optionally, set focus to the alert region
                alertRegion.focus();

                return;
            }

            // Success message
            alertRegion.className = 'alert alert-success alert-region';
            alertRegion.setAttribute('role', 'alert');
            alertRegion.setAttribute('tabindex', '0'); // Include in tab order

            alertRegion.innerHTML = `
                <p>Thank you for scheduling a call! We will get in touch soon.</p>
                <button type="button" class="close-btn" aria-label="Close alert">
                    <span aria-hidden="true">&times;</span>
                </button>
            `;

            // Add event listener to close button
            const closeButton = alertRegion.querySelector('.close-btn');
            closeButton.addEventListener('click', () => {
                alertRegion.innerHTML = '';
                alertRegion.className = 'alert-region'; // Reset classes
                alertRegion.removeAttribute('tabindex');

                // Notify screen reader users
                screenReaderNotification.textContent = "The alert has been closed.";
            });

            // Optionally, set focus to the alert region
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

// **************************************** START MODAL CODE ****************************************

/**
 * Variables to store focusable elements and the last focused element
 */
let focusableElements = [];
let firstFocusableElement;
let lastFocusableElement;
let lastFocusedElement;

/**
 * Function to dynamically create and open the modal
 */
function openModal(event) {
    event.preventDefault(); // Prevent default link behavior

    // Save the currently focused element to restore focus later
    lastFocusedElement = document.activeElement;

    // Create the modal overlay
    const modalOverlay = document.createElement('div');
    modalOverlay.id = 'empowerModalOverlay';
    modalOverlay.className = 'modal-overlay';
    modalOverlay.setAttribute('aria-hidden', 'true');

    // Create the modal container
    const modal = document.createElement('div');
    modal.id = 'empowerModal';
    modal.className = 'modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true'); // Indicates that the dialog is modal
    modal.setAttribute('aria-labelledby', 'modalTitle');
    modal.setAttribute('aria-describedby', 'modalDescription');

    // Updated Modal HTML
    modal.innerHTML = `
    <div class="modal-dialog" role="document">
        <div class="modal-content" role="document">
            <div class="modal-header">
                <h2 id="modalTitle">Meet the Empower Community</h2>
            </div>
            <div class="modal-body">
                <p id="modalDescription">
                    We get "aha!" moments from product managers who try our services for the first time.
                    We have hosted lab days, workshops, and usability testing services for organizations like:
                </p>
                <ul>
                    <li>McGill University</li>
                    <li>Walmart.ca</li>
                    <li>Apple.ca</li>
                    <li>Google.ca</li>
                    <li>Government of Canada</li>
                </ul>
            </div>
            <div class="modal-footer">
                <button type="button" id="modalCloseButton" class="btn btn-secondary" onclick="closeModal()">Close</button>
            </div>
        </div>
    </div>
    `;

    // Append modal and overlay to the body
    document.body.appendChild(modalOverlay);
    document.body.appendChild(modal);

    // Make the modal visible
    modal.style.display = 'block';

    // Prevent background scrolling
    document.body.style.overflow = 'hidden';

    // Get all focusable elements inside the modal
    focusableElements = modal.querySelectorAll(
        'a[href], area[href], input:not([disabled]), select:not([disabled]), ' +
        'textarea:not([disabled]), button:not([disabled]), iframe, object, embed, ' +
        '[contenteditable], [tabindex]:not([tabindex="-1"])'
    );

    // Convert NodeList to Array
    focusableElements = Array.prototype.slice.call(focusableElements);

    // Define the first and last focusable elements
    if (focusableElements.length > 0) {
        firstFocusableElement = focusableElements[0];
        lastFocusableElement = focusableElements[focusableElements.length - 1];
        // Set focus to the first focusable element
        firstFocusableElement.focus();
    } else {
        // If no focusable elements, focus the modal itself
        modal.setAttribute('tabindex', '-1');
        modal.focus();
    }

    // Add event listener to handle Tab key navigation
    modal.addEventListener('keydown', trapTabKey);

    // Add event listener to close the modal on Escape key
    modal.addEventListener('keydown', handleKeydown);

    // Add click event listener to overlay to close modal if clicked outside content
    modalOverlay.addEventListener('click', function(event) {
        closeModal();
    });

    // Hide inert background content from assistive technologies
    document.querySelectorAll('body > *:not(#empowerModal):not(#empowerModalOverlay)').forEach(function (element) {
        element.inert = true;
    });
}

/**
 * Function to close the modal
 */
function closeModal() {
    const modal = document.getElementById('empowerModal');
    const modalOverlay = document.getElementById('empowerModalOverlay');

    if (modal) {
        modal.parentNode.removeChild(modal); // Remove modal from the DOM
    }

    if (modalOverlay) {
        modalOverlay.parentNode.removeChild(modalOverlay); // Remove overlay from the DOM
    }

    // Restore scrolling
    document.body.style.overflow = '';

    // Remove inert attribute from background content
    document.querySelectorAll('body > *').forEach(function (element) {
        element.inert = false;
    });

    // Return focus to the last focused element
    if (lastFocusedElement) {
        lastFocusedElement.focus();
    }
}

/**
 * Function to handle Tab key navigation within the modal
 */
function trapTabKey(event) {
    if (event.key === 'Tab') {
        if (focusableElements.length === 0) {
            // No focusable elements; prevent tabbing out of modal
            event.preventDefault();
            return;
        }

        if (event.shiftKey) {
            // Shift + Tab
            if (document.activeElement === firstFocusableElement) {
                event.preventDefault();
                lastFocusableElement.focus();
            }
        } else {
            // Tab
            if (document.activeElement === lastFocusableElement) {
                event.preventDefault();
                firstFocusableElement.focus();
            }
        }
    }
}

/**
 * Function to handle Escape key for closing the modal
 */
function handleKeydown(event) {
    if (event.key === 'Escape') {
        closeModal();
        event.stopPropagation(); // Prevent event from bubbling up
    }
}

// **************************************** END MODAL CODE ****************************************

/* ****************************************************************************************** */

// TODO: add history push state
loadContent('home');

/* ********************************** END NAVIGATION **************************************** */
