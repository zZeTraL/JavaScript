(function() {

	let observableObject = new Observable();

	let winCallback = function(player) {
		console.log('Player', player, 'win !');
	}

	observableObject.on('win', winCallback);
	observableObject.on('move', function(player, x, y) {
		console.log('Player', player, 'is moving on ('+x+','+y+')');
	});

	console.log(observableObject);
	observableObject.off('win', winCallback);
	console.log(observableObject);
	observableObject.on('win', winCallback);
	console.log(observableObject);
	

	observableObject.trigger('win', 'Bob');
	observableObject.trigger('move', 'Alice', 2, 1);

	observableObject.off('win', winCallback);
	console.log(observableObject);
	observableObject.trigger('win', 'Alice');
	observableObject.trigger('move', 'Bob', 1, 1);
})();

// EXEMPLE QUI MA PERMIS DE COMPRENDRE
/*let array = [['win', 1], ['move', 0], ['win', 1]]
console.log(array)
for (let i = 0; i < array.length; i++) {
    if(array[i].find((str) => str === 'win')){
        console.log("Win found at index: " + i);
        array[i].splice(0, 2)
    }
}
console.log(array)*/