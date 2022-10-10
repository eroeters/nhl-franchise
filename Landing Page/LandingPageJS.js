$('.multi-level-dropdown .dropdown-submenu > a').on("mouseenter", function(e) {
    var submenu = $(this);
    $('.multi-level-dropdown .dropdown-submenu .dropdown-menu').removeClass('show');
    submenu.next('.dropdown-menu').addClass('show');
    e.stopPropagation();
});

$('.multi-level-dropdown .dropdown').on("hidden.bs.dropdown", function() {
    // hide any open menus when parent closes
    $('.multi-level-dropdown .dropdown-menu.show').removeClass('show');
});

const inputFL1 = document.querySelector('#forward1Input')
const inputFL2 = document.querySelector('#forward2Input')
const inputFL3 = document.querySelector('#forward3Input')
const inputFL4 = document.querySelector('#forward4Input')
const listFL1 = document.querySelector('#forward1List')
const listFL2 = document.querySelector('#forward2List')
const listFL3 = document.querySelector('#forward3List')
const listFL4 = document.querySelector('#forward4List')
const FL1Form = document.getElementById('FL1Form')
const FL2Form = document.getElementById('FL2Form')
const FL3Form = document.getElementById('FL3Form')
const FL4Form = document.getElementById('FL4Form')

FL1Form.addEventListener('submit', function(event) {
    event.preventDefault();
    const playerName = inputFL1.value;
    const newLI = document.createElement("LI");
    newLI.innerText = playerName;
    forward1List.append(newLI);
    inputFL1.value = "";
})

FL2Form.addEventListener('submit', function(event) {
    event.preventDefault();
    const playerName = inputFL2.value;
    const newLI = document.createElement("LI");
    newLI.innerText = playerName;
    forward2List.append(newLI);
    inputFL2.value = "";
})

FL3Form.addEventListener('submit', function(event) {
    event.preventDefault();
    const playerName = inputFL3.value;
    const newLI = document.createElement("LI");
    newLI.innerText = playerName;
    forward3List.append(newLI);
    inputFL3.value = "";
})

FL4Form.addEventListener('submit', function(event) {
    event.preventDefault();
    const playerName = inputFL4.value;
    const newLI = document.createElement("LI");
    newLI.innerText = playerName;
    forward4List.append(newLI);
    inputFL4.value = "";
})

function forwardAdd(e) {
    e.preventDefault();
    const playerName = inputFL2.value;
    const newLI = document.createElement("LI");
    newLI.innerText = playerName;
    forward2List.append(newLI);
    inputFL2.value = "";
})
}