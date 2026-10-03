function amazonSdePracticeTwo() {
	{
		// reverse a string
		const text = "practice makes patterns easier";
		function reverseAString(text) {
			let string = "";

			{
				string = text.split("");
				string = string.toReversed();
				string = string.join("");
			}

			for (const char of text) {
				string = char + string;
			}

			for (let i = text.length - 1; i >= 0; i--) {
				string += text[i];
			}

			return string;
		}
		console.log(reverseAString(text));
	}

	{
		/*
		The stack idea is:
		- if you see (, push it
		- if you see ), you need something available to pop
		- if you try to close when the stack is empty, return false
		- after the loop, the stack should be empty
		That last point matters: "(()" never has an invalid close, but it still leaves an unmatched ( behind.
		*/
		// Task: return true if every opening ( has a matching closing ) in the correct order.
		const brackets = "(]";
		function matchingBrackets(brackets) {
			const pairs = {
				")": "(",
				"]": "[",
				"}": "{",
			};
			let stack = [];
			for (const char of brackets) {
				if (char === "(" || char === "{" || char === "[") {
					stack.push(char);
				} else {
					if (stack[stack.length - 1] === pairs[char]) {
						stack.pop();
					} else {
						return false;
					}
				}
			}

			return stack.length === 0;
		}
		// console.log(matchingBrackets(brackets));
	}

	{
		// Task: use a stack to return: [4, 3, 2, 1]
		const items = [1, 2, 3, 4];
		function stackReturn(items) {
			let stack = [];
			let result = [];
			for (const item of items) {
				stack.push(item);
			}
			while (stack.length > 0) {
				const item = stack.pop();
				result.push(item);
			}
			return result;
		}
		// console.log(stackReturn(items));
	}

	{
		// Task: push each item into a stack, then remove items one at a time and return them in reverse order.
		const items = ["a", "b", "c"];
		function pushEachItem(items) {
			let stack = [];
			let result = [];
			for (const item of items) {
				stack.push(item);
			}
			console.log({ stack });
			while (stack.length > 0) {
				const item = stack.pop();
				result.push(item);
			}
			console.log({ result });
		}
		// console.log(pushEachItem(items));
	}
}
amazonSdePracticeTwo();
