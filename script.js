 // objets classiques
var jabba = {
		name:'Jabba',
		vie: 150,
		attack: 50,
		defense: 60,
		details: {
			race:'hutt',
			planet: 'Tatooine'
		}

}

// console.log(jabba);
// console.log('name of objet : ' +  jabba.name + ' attack of object  : ' + jabba.attack) ;

var cody = {
	name:'Cody',
	vie: 100,
	attack: 70,
	defense: 40,
	details:{
		race: 'clone - hybride',
		planet: 'Kamino'
	}
}

// console.log('defense of objet : ' +  cody.defense + ' détails of object  : ' + jabba.details.planet) ;


var quilan = {
	name:'Quilan',
	vie: 200,
	attack: 200,
	defense: 150,
	details: {
		race: "humain",
		planet: 'Kiffu'
	}
}

// console.log('PV of objet : ' +  quilan.vie + ' détails of object  : ' + jabba.details.race) ;

let versus = document.getElementById('input-fight');



// permet de controler le nombre de tour
let nbr_span = 1;

// Constructeurs
function character (name,pv,attack,defense,details){

	this.Name = name;
	this.Pv = pv ;
	this.Attack = attack;
	this.Defense = defense;
	this.Details = details;
}


function count_card(){

let nb_charac = document.querySelectorAll('.card-charac').length;

	for(j=1; j<=nb_charac; j++){

		// debeug
		console.log('Spamming Count of Fighters '+j);

		// target la carte charac suivant son id
		let target_card_charac = document.getElementById('charac-'+ j);

	}
}

// création d'un tableau de données
let array_charac = [];

let array_class_object=['choosen--name','choosen--pv','choosen--attack','choosen--defense','choosen--details'];


var name_character = document.querySelector('.charac--name');
var pv_character = document.querySelector('.charac--pv');
var attack_character = document.querySelector('.charac--attack');
var defense_character = document.querySelector('.charac--defense');
var details_character = document.querySelector('.charac--details');




let submit = document.getElementById('submit');


//ajout du nombre de personnages
var nb_charac_add = document.getElementById('nb-input');

console.log('nbr de personnages choisis:' + nb_charac_add.value);


//au changement de valeur, ajouter le nombre de card suivant la value
nb_charac_add.addEventListener('change',function(e){

	//debeug value choisie on select option
	console.log('nbr de personnages choisis:' + nb_charac_add.value);

	// Boucle sur le nombre de charac à injecter
	for(nbr_span; nbr_span <= nb_charac_add.value; nbr_span++){

			let add_card = document.createElement('div');
			add_card.classList.add("card-charac","card_"+ nbr_span);
			add_card.setAttribute('id','charac-'+ nb_charac_add.value);

			// var new_card = document.getElementById('charac-'+nb_charac_add.value);

			document.getElementById('form-play').appendChild(add_card);
			document.querySelector('.card-charac').setAttribute('disabled','true');


			// Générate all of span stats container
			array_class_object.forEach(function(e){

				let class_object = e ;
				// console.log(class_object);

				let card_child = document.createElement('span');
				card_child.classList.add(e);
				document.querySelector('#charac-'+ nbr_span).appendChild(card_child);

			});
		}

});

// Target les card avec les id classes dynamiques
var nb_all_charac = document.querySelectorAll('.card-charac').length;
console.log(nb_all_charac);


// en dehors de la fonction
var globalDiv = 0;

// validation des options de perso
submit.addEventListener('click',function(){

globalDiv++;

if (globalDiv < nbr_span) {

	let name_value = name_character.value;
	let pv_value = pv_character.value;
	let attack_value = attack_character.value;
	let defense_value = defense_character.value;
	let details_value = details_character.options[details_character.selectedIndex].value;


	// add styles card switch case
	switch(details_value){

		case 'hutt' :
		console.log('switch case : '+details_value);
		document.querySelector('#charac-'+ globalDiv).classList.add('hutt');

		// document.querySelector('#charac-'+ i).classList.add('race--hutt');
		break;

		case 'jedi' :
		console.log('switch case : '+details_value);
		document.querySelector('#charac-'+ globalDiv).classList.add('jedi');

		// document.querySelector('#charac-'+ i).classList.add('race--jedi');
		break;

		case 'clone' :
		console.log('switch case : '+details_value);
		document.querySelector('#charac-'+ globalDiv).classList.add('clone');

		// document.querySelector('#charac-'+ i).classList.add('race--clone');
		break;
	}


	// utilisation du constructeur de personnage
	var addCharacter = new character(name_value,pv_value, attack_value,defense_value,details_value);

		console.log(addCharacter.Name);
		console.log(addCharacter.Pv);
		console.log(addCharacter.Defense);
		console.log(addCharacter.Details);


let set_name = document.querySelector('.choosen--name');
let set_pv = document.querySelector('.choosen--pv');
let set_attack = document.querySelector('.choosen--attack');
let set_defense = document.querySelector('.choosen--defense');
let set_details = document.querySelector('.choosen--details');


// changer la valeur textuelle brute par celle du formulaire
set_name.textContent = 'Nom : ' + addCharacter.Name;
set_pv.textContent = 'PV : ' + addCharacter.Pv;
set_attack.textContent = 'Attack : ' + addCharacter.Attack;
set_defense.textContent = 'Défense : ' + addCharacter.Defense;
set_details.textContent = 'Race : ' + addCharacter.Details;

}



});

// Afficher les avatars thumbnails
versus.addEventListener('click',function(e){

	count_card();
	
	let details_value = details_character.options[details_character.selectedIndex].value;
	console.log('versus race :'+details_value);


	for (i=1; i<=2;i++){

		let fighter = document.createElement('div');

		fighter.classList.add('thumb',details_value);

		document.querySelector('#game').appendChild(fighter);

		switch(details_value){

			case 'hutt' :
			document.querySelector('#charac-'+ globalDiv).classList.add('hutt');
			// document.querySelector('#charac-'+ i).classList.add('race--hutt');
			break;

			case 'jedi' :
			document.querySelector('#charac-'+ globalDiv).classList.add('jedi');
			// document.querySelector('#charac-'+ i).classList.add('race--jedi');
			break;

			case 'clone' :
			document.querySelector('#charac-'+ globalDiv).classList.add('clone');

			// document.querySelector('#charac-'+ i).classList.add('race--clone');
			break;
		}

	}

//fin VERSUS
});
