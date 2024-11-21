//Template Function that can be used to run JavaScript on the page
//Note: This can be changed to whatever JavaScript formatting you would like
function knowledgeRunner(){

}
knowledgeRunner();

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
    home: new Content('', '', ''),
    services: new Content('', '', ''),
    contact: new Content('', '', '')
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

// ***************************************** MODAL CODE ********************************************

/**
 * Function to dynamically create and open the modal
 */
function openModal(event) {
    event.preventDefault(); // Prevent default link behavior

    // Create the modal structure
    const modal = document.createElement('div');
    modal.id = 'empowerModal';
    modal.className = 'modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-labelledby', 'modalTitle');
    modal.setAttribute('aria-describedby', 'modalDescription');
    modal.setAttribute('aria-hidden', 'false');

    modal.innerHTML = `
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h2 id="modalTitle" tabindex="-1">Meet the Empower Community</h2>
                    <button type="button" class="close" aria-label="Close modal" onclick="closeModal()">
                        <span aria-hidden="true">&times;</span>
                    </button>
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
                    <button type="button" class="btn btn-secondary" onclick="closeModal()">Close</button>
                </div>
            </div>
        </div>
    `;

    // Append modal to the body
    document.body.appendChild(modal);

    // Add overlay styles dynamically
    modal.style.display = 'block';

    // Move focus to the modal title for accessibility
    const modalTitle = document.getElementById('modalTitle');
    modalTitle.focus();

    // Add event listener to close the modal on Escape key
    document.addEventListener('keydown', handleKeydown);
}

/**
 * Function to close the modal
 */
function closeModal() {
    const modal = document.getElementById('empowerModal');
    if (modal) {
        modal.remove(); // Remove modal from the DOM
    }

    // Remove keydown event listener
    document.removeEventListener('keydown', handleKeydown);

    // Return focus to the trigger element
    const trigger = document.querySelector('[onclick="openModal(event)"]');
    if (trigger) {
        trigger.focus();
    }
}

/**
 * Function to handle Escape key for closing the modal
 */
function handleKeydown(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
}

// **************************************** END MODAL CODE ****************************************
