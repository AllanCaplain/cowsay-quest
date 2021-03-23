const name = "Allan";
const campus = "Reims";

var cowsay = require("cowsay");

console.log(cowsay.say({
	text : `Hi my name is ${name} from ${campus} campus.`,
	e : "oO",
	T : "U "
}));

module.exports = cowsay;