function HouseKeeper(yearsOfExperience, name, cleaningRepertoire) {
	this.yearsOfExperience = yearsOfExperience;
	this.name = name;
	this.cleaningRepertoire = cleaningRepertoire;
	this.clean = function () {
		console.log("Cleaning in progress...");
	};
}

var houseKeeper1 = new HouseKeeper(9, "Tom", ["lobby", "bedroom"]);
console.log(houseKeeper1);
houseKeeper1.clean();
