function reverseAString() {
	let string = "hello";
	string = string.split("", -1);
	string = string.toReversed();
	string = string.join("");
	console.log(string);
}
reverseAString();
