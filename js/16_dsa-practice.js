function initPracticeJS() {
	{
		const numbers = [4, 7, 2, 7, 9, 4, 1];

		// Return an array containing only the values
		// that appear more than once.

		const newNumbers = [...new Set(numbers)];

		console.log(newNumbers);
	}

	{
		const numbers = [3, 8, 2, 8, 5];

		// Return true if the array contains any duplicate value.
		// Otherwise, return false.

		const seen = new Set();
		const duplicates = new Set();

		for (const number of numbers) {
			// if seen already has it, don't add it
			if (seen.has(number)) {
				// if seen already has it, then add it to the dups
				duplicates.add(number);
			}
			// remember that we've seen this number
			seen.add(number);
		}
		// these are the duplicate numbers
		console.log([...duplicates].length);
		const newDupes = [...duplicates];
		let dupes;
		if (newDupes.length >= 1) {
			dupes = true;
		} else {
			dupes = false;
		}
		console.log(dupes);
	}

	{
		const numbersLarge = [4, 9, 2, 7, 5];

		// Find the largest number in the array.
		// Do not use Math.max().

		// const largest = [...numbersLarge].sort((a, b) => a - b);
		// console.log(largest.at(-1));

		let largest = numbersLarge[0];
		for (const number of numbersLarge) {
			if (number > largest) {
				largest = number;
			}
		}
		console.log(largest);
	}

	{
		const numbersSmall = [7, 3, 11, 2, 9];

		let smallest = numbersSmall[0];
		for (const num of numbersSmall) {
			if (num < smallest) {
				smallest = num;
			}
		}
		console.log(smallest);
	}

	{
		const words = ["cat", "elephant", "dog", "giraffe"];

		let longest = words[0];
		for (const word of words) {
			if (word.length > longest.length) {
				longest = word;
			}
		}
		console.log(longest);
	}

	{
		const wordsShortest = ["apple", "kiwi", "banana", "fig"];

		let shortest = wordsShortest[0];
		for (const word of wordsShortest) {
			if (word.length < shortest.length) {
				shortest = word;
			}
		}
		console.log(shortest);
	}

	{
		const numbersEven = [2, 5, 8, 3, 6];
		let count = 0;
		for (const num of numbersEven) {
			if (num % 2 === 0) {
				count++;
			}
		}
		console.log(count);
	}

	{
		const numbersGreater = [12, 3, 7, 18, 4, 21];
		let count = 0;
		for (const num of numbersGreater) {
			if (num > 10) {
				count++;
			}
		}
		console.log(count);
	}

	{
		const wordsCount = ["apple", "cat", "banana", "dog", "elephant"];

		let count = 0;
		for (const word of wordsCount) {
			if (word.length > 3) {
				count++;
			}
		}
		console.log(count);
	}

	{
		const numbers = [5, 12, 3, 18, 7];
		let largest = numbers[0];
		for (const num of numbers) {
			if (num < 15 && num > largest) {
				largest = num;
			}
		}
		console.log(largest);
	}
}
initPracticeJS();
