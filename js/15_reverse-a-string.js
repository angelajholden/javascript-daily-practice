function reverseAString(str) {
	// built in toReversed() method
	let string = str;
	string = string.split("");
	string = string.toReversed();
	string = string.join("");
	console.log("toReversed Method: ", string);

	// backwards for loop
	let reversed = ""; // initialize reversed
	// i is equal to the length of the str minus 1
	// run the loop if i is greater than or equal to 0
	// subtract 1 from i each time the loop runs
	for (let i = str.length - 1; i >= 0; i--) {
		reversed += str[i];
		// reversed = reversed + str[i]
		// str[i] is each letter
	}
	console.log("Backwards Loop: ", reversed);

	// for...of prepend character
	let word = ""; // initialize word as empty string
	// define char, and loop through each character
	for (const char of str) {
		word = char + word;
		// put each new character in front of the string built so far
	}
	console.log("Prepend Char: ", word);

	// return all the things
	return {
		string,
		reversed,
		word,
	};
}
reverseAString("hello");
reverseAString("heidi");
reverseAString("wonderful");
