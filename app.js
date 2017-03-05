var nouns = smelldb.words.nouns // array of nouns
var verbs = smelldb.words.verbs // array of verbs

nouns.sort(function(a, b){return 0.5 - Math.random()}) // randomize
verbs.sort(function(a, b){return 0.5 - Math.random()}) // randomize

var noun1 = nouns[1].noun // first noun
var noun2 = nouns[2].noun // second noun will be different from the first
var verb = verbs[0].verb // verb

if (typeof(Storage) !== 'undefined') { // if local storage available
	
	var today = + new Date() // current timestamp
	
	if (localStorage.lastToday && (Math.round((today - localStorage.lastToday) / 600)) < 60) { // if stored data exists and it's been less than a minute, shame the user
		var tooSoon =  Math.round((today - localStorage.lastToday) / 600) // seconds since last smell
		
		// add to HTML
		document.getElementById('smell').innerHTML = 'It\'s only been ' + tooSoon + ' seconds! You still smell like ' + localStorage.noun1 + ', ' + localStorage.verb + ' ' + localStorage.noun2 + '!'
			
	} else { // show a new smell
		 
		// add to HTML
		document.getElementById('smell').innerHTML = 'You smell like ' + noun1 + ', ' + verb + ' ' + noun2 + '.'

		// put items in storage
		localStorage.setItem('noun1', noun1)
		localStorage.setItem('noun2', noun2)
		localStorage.setItem('verb', verb)
		localStorage.setItem('lastToday', today)
	
	}
	
} else { // browsers without local storage
	
	// add to HTML
	document.getElementById('smell').innerHTML = 'You smell like ' + noun1 + ', ' + verb + ' ' + noun2 + '.'
}