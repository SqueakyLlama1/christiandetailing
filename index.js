function navigate(url) {
	const main = "https://www.christiandetailing.com/";
	if (url == 'home') {
		window.location.href = main;
	} else {
		window.location.href = main + url;
	}
}

function applyNavigation() {
	const navcontent = `
	<button onclick="navigate('home')">Home</button>
 	<button onclick="navigate('range/')">Range</button>
  	<button onclick="navigate('pricing/')">Pricing</button>
   	<button onclick="navigate('contact/')">Contact</button>`
	document.getElementById('navigation').innerHTML = navcontent;
}

document.addEventListener('DOMContentLoaded', applyNavigation);
