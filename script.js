// Fonctionnalité 1
// (function(){
// 	let footer = document.querySelector('footer')
// 	footer.addEventListener('click', function(){
// 		console.log('clique');
// 	});
// })();

//Fonctionnalité 1 bis
(function(){
	let footer = document.querySelector('footer')
	footer.addEventListener('click', function foo(){
		// let click_number = 1;
		if (typeof foo.click_number == 'undefined'){
			foo.click_number = 1;
		}
		console.log('clique n°' + foo.click_number);
		foo.click_number += 1;
	});
})();

//Fonctionnalité 2
(function(){
	let header = document.querySelector('header');
	let btn_menu = document.querySelector('.navbar-toggler');
	let div = document.querySelector('div[class*="collapse"]');
	btn_menu.addEventListener('click', function menu(e){
		div.classList.toggle("collapse"); 
	});
})();

//Fonctionnalité 3
(function(){
	let btn = document.querySelector('.btn.btn-sm.btn-outline-secondary');
	let card_text = document.querySelector('.card-text');
	btn.addEventListener('click', function(){
		card_text.style.color = "red";
	});
})();

//Fonctionalité 4
(function(){
	let btn = document.querySelectorAll('.btn.btn-sm.btn-outline-secondary')[1];
	let card_text = document.querySelectorAll('.card-text')[1];
	btn.addEventListener('click', function color_change(){
		if(typeof color_change.oldColor == 'undefined'){
			color_change.oldColor = getComputedStyle(card_text).color;
		}
		if(getComputedStyle(card_text).color == color_change.oldColor){
			card_text.style.color = "green";
		}
		else{
			card_text.style.color = color_change.oldColor;
		}
	});
})();

//Fonctionalité 5
(function(){
	let navbar = document.querySelector('.navbar');
	let link_tag = document.querySelector("link[rel='stylesheet']");
	navbar.addEventListener('dblclick', function(){
		if(link_tag.disabled == true){
			// console.log(link_tag.disabled);
			link_tag.disabled = false;
		}
		else{
			// console.log(link_tag.disabled);
			link_tag.disabled = true;
		}
	});
})();

//Fonctionalité 6
(function(){
	let cards = document.querySelectorAll('.card');
	let cards_edit_btn = document.querySelectorAll('.btn.btn-sm.btn-outline-secondary');
	for(let i=0; i<cards.length; i++){
		cards_edit_btn[i].addEventListener('mouseover', function collapse_card(e){
			let relatedTarget = e.relatedTarget;

			if(typeof collapse_card.collapsed == 'undefined'){
				collapse_card.collapsed = false;
			}
			// if(relatedTarget != null){
			// 	while (relatedTarget != cards[i] && relatedTarget.nodeName != 'BODY' && relatedTarget != document) {
			// 		relatedTarget = relatedTarget.parentNode;
			// 	}

				// if (relatedTarget != cards[i]) {
					if(collapse_card.collapsed == false){
					// console.log(card.firstElementChild.nodeName);
					cards[i].firstElementChild.style.width = "20%";
					cards[i].firstElementChild.nextElementSibling.firstElementChild.classList.toggle("collapse");
					collapse_card.collapsed = true;
				}
				else{
					cards[i].firstElementChild.style.width = "100%";
					cards[i].firstElementChild.nextElementSibling.firstElementChild.classList.toggle("collapse");
					collapse_card.collapsed = false;
				}
			// }
		// }
	});
	}
})();

//Fonctionnalité 7
(function(){
	let arrow_btn = document.querySelector('.btn.btn-secondary.my-2');
	arrow_btn.addEventListener('mouseover', function(){
		let card_row_container = document.querySelector('.album.py-5.bg-light').firstElementChild.firstElementChild;
		let first_card = card_row_container.firstElementChild;
		let last_card = card_row_container.lastElementChild;
		card_row_container.insertBefore(last_card,first_card);
	});
})();

//Fonctionnalité 8
(function(){
	
})();
