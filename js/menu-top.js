function includeHTML() {
	let url = `https://raw.githubusercontent.com/lcrochaDEV/ferramentas/master/menu/menu.html`;
	fetch(url)
	  .then(function(response){ response.text()
		.then(function(menuPrint){
		  //MENU
			document.querySelector('[data-menu-top]').innerHTML += menuPrint; 
		});
	  })
	}
 window.addEventListener("load", includeHTML);
