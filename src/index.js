var navigationButtons = [
    { label: "Home", url: "index.html" },
    { label: "Contact", url: "contact.html" },
    { label: "Range", url: "range.html" },
    { label: "Jobs", url: "jobs.html" },
    { label: "Blog", url: "blog.html" },
    { label: "Tiers", url: "tiers.html" },
    { label: "Reviews", url: "reviews.html" },
    { label: "Pricing & Payment", url: "pricing.html" },
    { label: "Terms & Conditions", url: "terms.html" }
];

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.body.classList.add('visible');
        populateMobileNavigation();
        populateDesktopNavigation();
    }, 250);
});

var navMenuOpen = false;

function openNavMenu() {
    if (!navMenuOpen) {
        document.getElementById('navmenu').style.display = "flex";
    }
    navMenuOpen = true;
}

function closeNavMenu() {
    if (navMenuOpen) {
        document.getElementById('navmenu').style.display = "none";
    }
    navMenuOpen = false;
}

function populateMobileNavigation() {
    let navigationContainer = document.getElementById('mnavigation');
    let middleDiv = document.createElement('div');
    middleDiv.classList.add('middle');

    let navbutton = document.createElement('button');
    navbutton.textContent = "Switch Page";
    navbutton.onclick = openNavMenu;

    let menu = document.createElement("div");
    menu.id = "navmenu";
    menu.classList.add('navmenu');
    menu.style.display = "none";
    document.getElementById('mobile').appendChild(menu);

    let cancelBtn = document.createElement('button');
    cancelBtn.textContent = "Cancel";
    cancelBtn.onclick = closeNavMenu;

    let center = document.createElement('center');
center.appendChild(cancelButton);

    navigationButtons.forEach(button => {
        let option = document.createElement('button');
        option.textContent = button.label;
        option.onclick = function(event) {
            navigate(event, button.url);
        };
        center.appendChild(option);
    });

    setTimeout(() => {
        navigationContainer.innerHTML = '';
        menu.appendChild(center);
        middleDiv.appendChild(navbutton);
        navigationContainer.appendChild(middleDiv);
    }, 750);
}

function populateDesktopNavigation() {
    let navigationContainer = document.getElementById('navigation');
    let middleDiv = document.createElement('div');
    middleDiv.classList.add('middle');

    setTimeout(() => {
        navigationContainer.innerHTML = '';
        navigationButtons.forEach(button => {
            let buttonElement = document.createElement("button");
            buttonElement.textContent = button.label;
            buttonElement.onclick = function(event) {
                navigate(event, button.url);
            };
            middleDiv.appendChild(buttonElement);
        });
        navigationContainer.appendChild(middleDiv);
    }, 750);
}

function navigate(event, url) {
    event.preventDefault();
    document.body.classList.remove('visible');
    document.body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = url;
    }, 500);
}
