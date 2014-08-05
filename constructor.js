function Store(name, tops, bottoms){
	this.name = name;
	this.tops = tops;
	this.bottoms = bottoms;
	this.inventoryuptodate= function(nameofday){
	var randchoice = Math.floor(Math.random() * 26);
    console.log(randchoice + " im in inventoryuptodate");
	if(randchoice > 15) {
		console.log ("inventory up to date");
		// console.log(nameofday.day);
		// console.log(nameofday.season);
	} else {
		console.log("inventory not up to date");
	}
	
	};
};


function Nameofday( day, season){
	this.day = day;
	this.season = season;
	this.fashionresults = function (){
	var randDay = Math.floor(Math.random()* 5);
	var randSeason = Math.floor(Math.random()* 4);
	var seasonArray = ["Winter", "Autumn", "Fall", "Summer", "Spring"];
	var dayArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    console.log(randDay + " random day");
    console.log(randSeason + " random season number");
	this.day = dayArray[randDay];
	this.season = seasonArray[randSeason];
	}; 
};

function Managereval(namecall, choice){
	this.namecall = namecall;
	this.choice = choice;
	this.evaluation= function(store){
	var randnamecall = Math.floor(Math.random()* 3);
	var randsolution =Math.floor(Math.random()* 3);
	var solutionArray =[ "correct", "not correct", "maybe correct"]
	var namecallArray =[ "idiot", "intelligent", " somewhatstupid" ]
	console.log(randnamecall + "random namecall");
	console.log(randsolution + "random solution");
	this.namecall = namecallArray[randnamecall];
	this.choice = solutionArray[randsolution];
	// if (store > 5) {
	// 	console.log ("Manager made the correct economic descision");
	// 	console.log (Managereval.namecall);
	// 	console.log (Managereval.choice);
	// }else {
	// 	console.log ("Manager did not make the correct descision");
	// }
	};
};

// var adder = new Function("a", "b", "return a + b");

// var storetop = 10
// var store.bottom = new function(10

var Lily = new Managereval("idiot", "incorrect")
var James = new Managereval("intelligent", "correct")

Lily.evaluation(Jcrew);

var lovelyday = new Nameofday("Monday", "Summer")
var candyday =  new Nameofday("Wednesday", "Spring")

candyday.fashionresults();



var Jcrew = new Store( "Jcrew", 10, 10);
var Zara = new Store("Zara", 8, 5);

Jcrew.inventoryuptodate(lovelyday);