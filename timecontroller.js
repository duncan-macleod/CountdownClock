(function(){
	var app = angular.module('countdown', []);
	app.controller("TimeController", function($scope){
			var self = this;
			
			this.min = 1;
			this.max = 20;
			
			this.customStyle = {};
			this.customStyle.style = {"color" : "black"};
			setInterval(this.run_countdown, 1000);
			this.currentTime = '';
			this.counting = false;
			this.intervalID = 0;
			this.start_countdown = function(){	
				if(self.isValid()){
					self.set_color(self.currentTime);
					self.intervalID = setInterval(self.run_countdown, 1000);
					self.counting = true;
				}
			};
			this.stop_countdown = function(){	
				clearInterval(self.intervalID);
				self.counting = false;
			};
			this.run_countdown = function() { 
				if(self.currentTime > 0){
					self.currentTime--;
					self.set_color(self.currentTime);
					$scope.$apply();
				} else {
					self.stop_countdown();
				}
			};
			
			this.set_color = function(time){
				var fontcolor = "";
				switch(time % 5){
					case 0: 
						fontcolor = "blue";
						break;
					case 1:
						fontcolor = "green";
						break;
					case 2:
						fontcolor = "pink";
						break;
					case 3: 
						fontcolor = "yellow";
						break;
					case 4: 
						fontcolor = "orange";
						break;
					default: 
						fontcolor = "red";
				};
				self.customStyle.style = {"color" : fontcolor};
			};
			
			this.isValid = function(){
				var isNumber = !isNaN(parseFloat(self.currentTime));
					isInBounds = self.currentTime >= self.min && 
									self.currentTime <= self.max;
				return isNumber && isInBounds;
			}
			
	});
})();