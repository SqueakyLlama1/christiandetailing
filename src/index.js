let navigationButtons = [
    { label: "Home", url: "index.html" },
	{ label: "Contact", url: "contact.html"},
    { label: "Range", url: "range.html" },
	{ label: "Jobs", url: "jobs.html" },
	{ label: "Blog", url: "blog.html" },
	{ label: "Tiers", url: "tiers.html" },
	{ label: "Reviews", url: "reviews.html" },
	{ label: "Pricing & Payment", url: "pricing.html" },
	{ label: "Terms & Conditions", url: "terms.html"}
];

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
		document.body.classList.add('visible');
    	populateMobileNavigation();
    	populateDesktopNavigation();
	}, 250);
});

function populateMobileNavigation() {
    let navigationContainer = document.getElementById('mnavigation');
    let middleDiv = document.createElement('div');
    middleDiv.classList.add('middle');
    navigationContainer.innerHTML = '';
    navigationContainer.appendChild(middleDiv);

    let loader = document.createElement('div');
    loader.classList.add('loader');
    middleDiv.appendChild(loader);

    let select = document.createElement("select");
    select.id = "navigation-select";
    let defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.text = "Choose a page...";
    select.appendChild(defaultOption);

    navigationButtons.forEach(button => {
        let option = document.createElement("option");
        option.value = button.url;
        option.text = button.label;
        select.appendChild(option);
    });

    setTimeout(() => {
        middleDiv.innerHTML = '';
        middleDiv.appendChild(select);
        select.addEventListener("change", function() {
            let selectedUrl = select.value;
            if (selectedUrl) {
                mobileNavigate(selectedUrl);
            }
        });
    }, 750);
}

function populateDesktopNavigation() {
    let navigationContainer = document.getElementById('navigation');
    let middleDiv = document.createElement('div');
    middleDiv.classList.add('middle');

    setTimeout(() => {
        navigationButtons.forEach(button => {
			navigationContainer.innerHTML = '';
    		navigationContainer.appendChild(middleDiv);
            let buttonElement = document.createElement("button");
            buttonElement.textContent = button.label;
            buttonElement.onclick = function() {
                navigate(event, button.url);
            };
            middleDiv.appendChild(buttonElement);
        });
    }, 750);
}

function mobileNavigate(url) {
    document.body.classList.remove('visible');
    document.body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = url;
    }, 500);
}

function navigate(event, url) {
    event.preventDefault();
    document.body.classList.remove('visible');
    document.body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = url;
    }, 500);
}