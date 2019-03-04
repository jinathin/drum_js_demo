(() => {
	// hook up the JS FILE
	console.log("fired");

	function playDrumSound(e) {
		// e in the round brackets i the event object ->
		// gets generated with every event and passed some data through
		// debugger;
		//
		// try slecting the matching audio element 
		let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

		// the return keyword stop javascript from running (any code below it)
		// ! means (audio = null)
		if (!audio) { return; }
		//play the audio track
		// current times makes it reset so you can press the buttons fast as you want
		audio.currentTime = 0;
		audio.play();

		// select the parent div and animate it 
		// try slecting the matching audio element 
		let key = document.querySelector(`div[data-key="${e.keyCode}"]`);
		key.classList.add('playing');
	}

	function removePlayingClass(e) {
		// body...
		//listen for a css transition to finish and then reset the element 
		//by removing the playing class
		// debugger;

		if (e.propertyName == "transform") {
			return;
		} else {
			console.log('do some stuff here, transition is done');
			e.currentTarget.classList.remove('playing');
		}
	}
	window.addEventListener('keydown', playDrumSound);

	// grab all of the keyboard keys that have the .key class applied
	const keys = Array.from(document.querySelectorAll('.key'));

	// add a transition end to each key so that we can reset it
	keys.forEach(key => key.addEventListener('transitionend', removePlayingClass));


})();