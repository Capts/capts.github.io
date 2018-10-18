
function openTab(event, tabName){
	// variables
	var i, tabcontent, tablinks;

	
	// hide tabcontent elements
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// get tablinks and remove 'active' class
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].parentElement.className = tablinks[i].parentElement.className.replace(" active", "");
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// show current tab and add 'active' class
	document.getElementById(tabName).style.display = "block";
	event.currentTarget.className += " active";
	event.currentTarget.parentElement.className += " active";
}