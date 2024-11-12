//Template Function that can be used to run JavaScript on the page
//Note: This can be changed to whatever JavaScript formatting you would like
function knowledgeRunner(){

}
knowledgeRunner()



/* ************************************** Rae Ehret's Workspace *************************************** */
/* ******************************************** NAVIGATION ******************************************** */
// notes to others, please do not write to the following variables/functions: navlinks, navdropdowns, preventDefaultBehaviour, toggleDropdownMenu
// prevent default behaviour (navigating to "#" or whatever href value is set)
var navlinks = document.getElementsByClassName("nav-item");
for (let i=0; i<navlinks.length; i++) {
    navlinks.item(i).addEventListener("click", preventDefaultBehaviour, false);
}

/**
 * Prevent default behaviour, i.e. navigating by href value
 * @param {Event} e 
 */
function preventDefaultBehaviour(e) {
    e.preventDefault();
}

// navigation dropdown behaviour
// this code navigates the DOM and sets event listeners to the toggles
// [li] should be class "dropdown", toggling links [a] "dropdown-toggle", and menus of links [ul] "dropdown-menu"
var navdropdowns = document.getElementsByClassName("dropdown");
for (let i=0; i<navdropdowns.length; i++) {
    let toggle, param;
    let nodes = navdropdowns.item(i).children;
    for (let y=0; y<nodes.length; y++) {
        // check for the toggling node amongst the child nodes, and set our toggling node
        if (nodes.item(y).classList.contains("dropdown-toggle")) {
            toggle = nodes.item(y);
            param = toggle; // We don't really need to specify a separate variable for toggle, I just find it more readable this way.
        }
    }
    // bind event listener to toggle
    toggle.tparam = param; // Alternatively: toggle.tparam = toggle // (passing itself)
    toggle.addEventListener("click", toggleDropdownMenu, false);
}

/**
 * Toggles the "show" class on a toggling link's related menu (marked as class "dropdown-menu")
 * @param {Event} e
 */
function toggleDropdownMenu(e) {
    // another function does this, but just in case:
    e.preventDefault();
    // traverse the dom to find the dropdown-menu node on the same level as the toggle
    let nodes = e.currentTarget.tparam.parentElement.children;
    let menu;
    for (let element of nodes) {
        if (element.classList.contains("dropdown-menu")) {
            menu = element;
        }
    }
    // toggle behaviour
    if (menu.classList.contains("show")) {
        menu.classList.remove("show");
    } else {
        menu.classList.add("show");
    }
}
