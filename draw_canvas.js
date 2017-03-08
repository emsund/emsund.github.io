function init() {

	// Make the canvas
	var stage = new createjs.Stage("demoCanvas");
	
	// A blue backdrop
	var bg = new createjs.Shape();
	bg.graphics.beginFill("DarkCyan").drawCircle(0,0,800);
	bg.x = 0;
	bg.y = 0;
	stage.addChild(bg);
	
	// A big orange circle, a rising sun
	var circle2 = new createjs.Shape();
	circle2.graphics.beginFill("Orange").drawCircle(0, 0, 250);
	circle2.x = 250;
	circle2.y = 750;
	stage.addChild(circle2);

	// A small, tan circle that travels and changes alpha-ness
	var circle = new createjs.Shape();
	circle.graphics.beginFill("Goldenrod").drawCircle(0, 0, 50);
	circle.x = 50;
	circle.y = 50;
	stage.addChild(circle);

	// Animate the sun
	createjs.Tween.get(circle2, {loop: true })
		.to({ y: -250 }, 10000);

	// Animate the small circle
	createjs.Tween.get(circle, { loop: true })
		.to({ x: 450 }, 2000, createjs.Ease.getPowInOut(4))
		.to({ alpha: .5, y: 450 }, 2000, createjs.Ease.getPowInOut(2))
		.to({ alpha: .5, x: 50 }, 1000)
		.to({ alpha: 1, y: 50 }, 5000, createjs.Ease.getPowInOut(2));

	// Set the framerate of the animation
	createjs.Ticker.setFPS(60);

	// Set it going
	createjs.Ticker.addEventListener("tick", stage);

}

