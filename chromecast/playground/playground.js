game = {};

game.images = {};
game.images.cards = "playing_cards.png";

game.loader = function(){
	for(var key in game.images){
		if(game.images.hasOwnProperty(key)){
			var value = game.images[key];
			
			if(typeof(value) == "string"){
				console.log("Loading " + value);
				
				var body = document.getElementsByTagName("body")[0];
				var image = document.createElement("img");
				image.src = value;
				image.onload = game.loader;
				image.style = "display: none;";
				game.images[key] = image;
				body.appendChild(image);
				break;
			}
		}
	}
	
	game.start();
}

game.flipBuffers = function(){
	var context = game.contexts[game.canvasIndex];
	game.canvases[game.canvasIndex].style.visibility = "hidden";
	game.canvasIndex = 1 - game.canvasIndex;
	game.canvases[game.canvasIndex].style.visibility = "visible";
	context.clearRect(0, 0, game.width, game.height);
	return context;
}

window.onload = function(){
	game.canvases = document.getElementsByTagName("canvas");
	
	game.width  = game.canvases[1].width  = game.canvases[0].width  = window.innerWidth;
	game.height = game.canvases[1].height = game.canvases[0].height = window.innerHeight;
	
	game.contexts = {};
	game.contexts[0] = game.canvases[0].getContext("2d");
	game.contexts[1] = game.canvases[1].getContext("2d");
	game.canvasIndex = 0;
	
	
	for(i = 0; i < 2; i++){
		var context = game.flipBuffers();
		
		var gradient = context.createLinearGradient(0, 0, game.width, 0);
		gradient.addColorStop(0, "green");
		gradient.addColorStop(1, "white");
		context.fillStyle = gradient;
		context.fillRect(0, 0, game.width, game.height);
	}
	
	game.loader();
}

game.start = function(){
	
}

/*window.onload = function() {
	cast.receiver.logger.setLevelValue(0);
	window.castReceiverManager = cast.receiver.CastReceiverManager.getInstance();
	
	// handler for the 'ready' event
	//castReceiverManager.onReady = function(event) {};
	
	// handler for 'senderconnected' event
	//castReceiverManager.onSenderConnected = function(event) {};
	
	// handler for 'senderdisconnected' event
	//castReceiverManager.onSenderDisconnected = function(event) {
	//	console.log('Received Sender Disconnected event: ' + event.data);
	//	if (window.castReceiverManager.getSenders().length == 0) {
	//		window.close();
	//	}
	//};
	
	// handler for 'systemvolumechanged' event
	//castReceiverManager.onSystemVolumeChanged = function(event) {};
	
	//window.messageBus = window.castReceiverManager.getCastMessageBus('urn:x-cast:net.gudenau.googlecastplayground.test');
	
	// handler for the CastMessageBus message event
	//window.messageBus.onMessage = function(event) {
	//	console.log(event);
	//}
	
	// initialize the CastReceiverManager with an application status message
	//window.castReceiverManager.start({statusText: 'Application is starting'});
	//console.log('Receiver Manager started');
	
	//var canvas = document.getElementById("canvas");
	
	//canvas.width = window.innerWidth;
	//canvas.height = window.innerHeight;
};*/