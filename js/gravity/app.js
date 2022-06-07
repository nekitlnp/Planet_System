// app
const planetData = [
  {
    "pl_name": "11 Com b",
    "sy_snum": 3,
    "sy_pnum": 1
  },
  {
    "pl_name": "GJ 667 C b",
    "sy_snum": 3,
    "sy_pnum": 5
  },
	{
		"pl_name": "14 Her b",
    "sy_snum": 1,
    "sy_pnum": 2,
	}
];

define([
	'jquery',
	'underscore',
	'utility/canvasUtil',
	'modules/render',
	'modules/spacetime',
	'modules/gui'
], function($, _, canvasUtil, render, spacetime, gui){

	var app = {};

	app.initialize = function(canvasId){
		var canvas = document.getElementById(canvasId);
		var ctx = canvas.getContext('2d');
		var massMultiplier = 200;
		const mainXPosition = 200;
		var selectedPlanetIdx = localStorage.getItem('planet');
		if (!selectedPlanetIdx) {
			selectedPlanetIdx = 1;
			localStorage.setItem('planet', selectedPlanetIdx);
		} else {
			planetSelect = document.getElementById('menu-change-system');
			planetSelect.value = selectedPlanetIdx;
		}

		const planetSystem = planetData[selectedPlanetIdx - 1];
		
		// Initialize the canvas utility, includes features such as autoresize
		canvasUtil.initialize(canvas);
		canvasUtil.autoResize();

		// Initialize spacetime simulation
		spacetime.initialize(massMultiplier);
		spacetime.startLoop();

		// Initialize render module
		render.initialize(canvas, spacetime, massMultiplier);
		render.startLoop();

		// Initialize GUI
		gui.initialize(spacetime, render, canvas, massMultiplier);
	
		// Solar system
		(function solarSystem(){
			var mainPlanet = spacetime.addObject({ // Main planet
				cameraFocus: true,
				x: mainXPosition,
				y: 200,
				velX: 0,
				velY: 0,
				deltaVelX: 0,
				deltaVelY: 0,
				mass: 500,
				density: 0.3,
				path: []
			});
			const planetsCount = planetSystem.sy_pnum;
			
			for (let j = 1; j < planetsCount; j++) {
				const planetX = mainXPosition + 30 * j;
				var planet = spacetime.addObject({
					x: planetX,
					y: 200,
					velX: 0,
					velY: Math.sqrt(500/(planetX - mainXPosition)),
					deltaVelX: 0,
					deltaVelY: 0,
					mass: 0.5,
					density: 1,
					path: []
				});
			};

			const starsCount = planetSystem.sy_snum;
			for (var i = starsCount; i > 0; i--) {
				var rad = Math.PI * 2 * Math.random();
				var dist = 50 + 70 * Math.random();

				var x = Math.cos(rad)*dist + 200;
				var y = Math.sin(rad)*dist + 200;

				var star = spacetime.addObject({
					x: x,
					y: y,
					velX: Math.cos(rad + Math.PI/2+(Math.PI/180*6-Math.PI/180*12)*0) * Math.sqrt(500/dist),
					velY: Math.sin(rad + Math.PI/2+(Math.PI/180*6-Math.PI/180*12)*0) * Math.sqrt(500/dist),
					deltaVelX: 0,
					deltaVelY: 0,
					mass: 0.0025,
					density: 4,
					path: []
				});
			};
		})();
	}

	return app;

});
