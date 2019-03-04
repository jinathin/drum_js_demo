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
	}

	window.addEventListener('keydown', playDrumSound);


})();