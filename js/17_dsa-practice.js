function initPracticeDSA() {
	{
		const numbers = [18, 5, 12, 3, 7];

		// Find the largest number less than 15.

		let largest = null;

		for (const num of numbers) {
			// checking if largest is still null
			// OR if num is greater than current largest
			if (num < 15 && (largest === null || num > largest)) {
				largest = num;
			}
		}

		console.log(largest);
	}

	{
		const numbers = [14, 6, 22, 9, 17];

		// Find the largest number.
		// Do not use Math.max() or sort().

		let largest = numbers[0];

		for (const num of numbers) {
			if (num > largest) {
				largest = num;
			}
		}
		console.log(largest);
	}

	{
		const numbers = [3, 8, 11, 4, 10, 7];

		// Count how many numbers are greater than 7.

		let count = 0;

		for (const num of numbers) {
			if (num > 7) {
				count++;
			}
		}
		console.log(count);
	}

	{
		const numbers = [5, 2, 9, 4];

		// Add all the numbers together.

		let total = 0;

		for (const num of numbers) {
			total += num;
		}

		console.log(total);
	}

	{
		const numbers = [4, 7, 2, 7, 9];

		// Return true if the array contains a duplicate.
		// Otherwise return false.

		const seen = new Set();
		let dupes = false;
		for (const num of numbers) {
			if (seen.has(num)) {
				dupes = true;
			}
			seen.add(num);
		}
		console.log(dupes);
	}

	{
		const numbers = [4, 7, 2, 7, 9];
		function hasDuplicate(numbers) {
			const seen = new Set();
			for (const num of numbers) {
				if (seen.has(num)) {
					return true;
				}
				seen.add(num);
			}
			return false;
		}
		console.log(hasDuplicate(numbers));
	}

	{
		const numbers = [3, 6, 9, 12];

		// Return true if the array contains any number greater than 10.
		// Otherwise return false.

		function arrayContains(numbers) {
			for (const num of numbers) {
				if (num > 10) {
					return true;
				}
			}
			return false;
		}
		console.log(arrayContains(numbers));
	}

	{
		const numbers = [2, 4, 6, 7, 8];

		// Return the first odd number you find.
		// If there are no odd numbers, return null.

		function returnOddNumber(numbers) {
			for (const num of numbers) {
				if (num % 2 !== 0) {
					return num;
				}
			}
			return null;
		}
		console.log(returnOddNumber(numbers));
	}

	{
		const words = ["cat", "horse", "dog", "elephant"];

		// Return the first word with more than 4 letters.
		// If none exist, return null.

		function returnFirstWord(words) {
			for (const word of words) {
				if (word.length > 4) {
					return word;
				}
			}
			return null;
		}
		console.log(returnFirstWord(words));
	}

	{
		const numbers = [3, 8, 2, 10, 5];

		// Return a NEW array containing only
		// the numbers greater than 4.

		function buildNewArray(numbers) {
			let array = [];
			for (const num of numbers) {
				if (num > 4) {
					array.push(num);
				}
			}
			return array;
		}
		console.log(buildNewArray(numbers));
	}

	{
		const words = ["cat", "horse", "dog", "elephant", "fox"];

		// Return a NEW array containing only
		// the words with more than 3 letters.

		function newArrayWithWords(words) {
			let array = [];
			for (const word of words) {
				if (word.length > 3) {
					array.push(word);
				}
			}
			return array;
		}
		console.log(newArrayWithWords(words));
	}
}
initPracticeDSA();
