let undef = undefined;
let num = 0 ;
let big = 10n;
let bool = true;
let str = "js";
let sym = Symbol("id");
let obj1 = Math;
let obj2 = null;
let func = alert;
alert(undef + " - " + typeof(undef) + "\n" + 
num + " - " + typeof(num) + "\n" + 
big + " - " + typeof(big) + "\n" + 
bool + " - " + typeof(bool) + "\n" + 
str + " - " + typeof(str) + "\n" + 
obj1 + " - " + typeof(obj1) + "\n" + 
obj2 + " - " + typeof(obj2) + "\n" + 
func + " - " + typeof(func));
