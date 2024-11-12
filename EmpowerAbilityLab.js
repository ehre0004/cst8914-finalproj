//Template Function that can be used to run JavaScript on the page
//Note: This can be changed to whatever JavaScript formatting you would like
function knowledgeRunner(){

}
knowledgeRunner()


// Rae Ehret's workspace
// navigation
var dropdowns = document.getElementsByClassName("dropdown");

for (let i=0; i<dropdowns.length; i++) {
    let toggle, param;
    let toggles = dropdowns.item(i).children;
    for (let y=0; y<toggles.length; y++) {
        if (toggles.item(y).classList.contains("dropdown-toggle")) {
            toggle = toggles.item(y);
            param = toggle;
        }
    }
    // bind event listener to toggle
    toggle.tparam = param;
    toggle.addEventListener("click", toggleDropdownMenu, false);
}

/**
 * 
 * @param {Event} e
 */
function toggleDropdownMenu(e) {
    e.preventDefault;
    let nodes = e.currentTarget.tparam.parentElement.children;
    console.log("nodes: "+nodes);
    let menu;
    for (let element of nodes) {
        if (element.classList.contains("dropdown-menu")) {
            menu = element;
        }
    }
    // toggle
    if (menu.classList.contains("show")) {
        menu.classList.remove("show");
    } else {
        menu.classList.add("show");
    }
}
