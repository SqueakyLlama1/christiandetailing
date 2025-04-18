var navigationButtons = [
    { label: "Home", url: "index.html", keyword: " Home" },
    { label: "Contact", url: "contact.html", keyword: " Contact" },
    { label: "Range", url: "range.html", keyword: " Range" },
    { label: "Jobs", url: "jobs.html", keyword: " Jobs" },
    { label: "Blog", url: "blog.html", keyword: " Blog" },
    { label: "Tiers", url: "tiers.html", keyword: " Tiers" },
    { label: "Reviews", url: "reviews.html", keyword: " Reviews" },
    { label: "Pricing & Payment", url: "pricing.html", keyword: " Pricing" },
    { label: "Terms & Conditions", url: "terms.html", keyword: " Terms" }
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
        let container = document.getElementById('mnavcontainer');
        container.style.display = "block";
        setTimeout(() => {
            container.classList.add('show');
        }, 10);
    }
    navMenuOpen = true;
}

function closeNavMenu() {
    if (navMenuOpen) {
        let container = document.getElementById('mnavcontainer');
        container.classList.remove('show');
        setTimeout(() => {
            container.style.display = "none";
        }, 300);
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

    let container = document.createElement('div');
    container.classList.add('mnavcontainer');
    container.id = "mnavcontainer";

    let menu = document.createElement('div');
    menu.id = "navmenu";
    menu.classList.add('navmenu');

    container.appendChild(menu);
    document.getElementById('mobile').appendChild(container);

    let cancelBtn = document.createElement('button');
    cancelBtn.textContent = "Cancel";
    cancelBtn.onclick = closeNavMenu;

    menu.appendChild(cancelBtn);

    navigationButtons.forEach(button => {
        let option = document.createElement('button');
        option.textContent = button.label;
        option.onclick = function(event) {
            navigate(event, button.url);
        };
        if (document.title.includes(button.keyword)) {
            option.classList.add('active');
        }
        menu.appendChild(option);
    });

    setTimeout(() => {
        navigationContainer.innerHTML = '';
        middleDiv.appendChild(navbutton);
        navigationContainer.appendChild(middleDiv);
        document.getElementById('mnavcontainer').addEventListener('click', closeNavMenu);
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
            if (document.title.includes(button.keyword)) {
                buttonElement.classList.add('active');
            }
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
