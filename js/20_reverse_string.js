function reverseAString() {
	const text = "debugging builds better instincts";

	{
		function builtInMethod(text) {
			let string = text;
			string = string.split("");
			string = string.toReversed();
			string = string.join("");
			return string;
		}
		// console.log(builtInMethod(text));
	}

	{
		function methodNumberTwo(text) {
			let string = "";
			for (const char of text) {
				string = char + string;
			}
			return string;
		}
		// console.log(methodNumberTwo(text));
	}

	{
		function reverseAnotherString(text) {
			let string = "";
			for (let i = text.length - 1; i >= 0; i--) {
				string += text[i];
			}
			return string;
		}
		console.log(reverseAnotherString(text));
	}
}
reverseAString();
