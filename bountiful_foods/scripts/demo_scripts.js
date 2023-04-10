
function onlyOneCheckBox() {
	var checkboxgroup = document.getElementById('checkboxgroup').getElementsByTagName("input");
	
    //Note #2 Change max limit here as necessary
    var limit = 3;
  
	for (var i = 0; i < checkboxgroup.length; i++) {
		checkboxgroup[i].onclick = function() {
			var checkedcount = 0;
				for (var i = 0; i < checkboxgroup.length; i++) {
				checkedcount += (checkboxgroup[i].checked) ? 1 : 0;
			}
			if (checkedcount > limit) {
				console.log("You can select maximum of " + limit + " checkbox.");
				alert("You can select maximum of " + limit + " checkbox.");
				this.checked = false;
			}
		}
	}
}

onlyOneCheckBox();

