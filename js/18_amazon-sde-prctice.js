function amazonSdePractice() {
	{
		// Given an array of numbers, return the first number that appears more than once. If there are no duplicates, return null.
		const numbers = [3, 1, 4, 2, 1, 4];
		function firstNumber(numbers) {
			let seen = new Set();
			for (const num of numbers) {
				if (seen.has(num)) {
					return num;
				}
				seen.add(num);
			}
			return null;
		}
		// console.log(firstNumber(numbers));
	}

	{
		// Given an array of words, return the word that appears most often.
		const words = ["cat", "dog", "cat", "bird", "dog", "cat"];
		function wordMostOften(words) {
			let result = {};
			let mostOften = 0;
			let mostWord = null;
			for (const word of words) {
				if (result[word]) {
					result[word]++;
				} else {
					result[word] = 1;
				}

				if (result[word] > mostOften) {
					mostOften = result[word];
					mostWord = word;
				}
			}
			return mostWord;
		}
		// console.log(wordMostOften(words));
	}

	{
		// Given an array of numbers and a target, return the two numbers that add up to the target.
		const numbers = [2, 7, 11, 15];
		const target = 9;
		function sumOfNumbers(numbers, target) {
			let result = [];
			for (let i = 0; i < numbers.length; i++) {
				for (let x = i + 1; x < numbers.length; x++) {
					let first = numbers[i];
					let second = numbers[x];
					if (first + second === target) {
						result = [first, second];
						return result;
					}
				}
			}
			return null;
		}
		// console.log(sumOfNumbers(numbers, target));
	}

	{
		// Given an array of numbers and a target, return the two numbers that add up to the target.
		const numbers = [2, 7, 11, 15];
		const target = 9;
		function twoSum(numbers, target) {
			let seen = new Set();
			for (const num of numbers) {
				let needed = target - num;
				if (seen.has(needed)) {
					return [num, needed];
				}
				seen.add(num);
			}
			return null;
		}
		// console.log(twoSum(numbers, target));
	}

	{
		// group words by their first letter.
		const words = ["apple", "banana", "avocado", "blueberry", "cherry"];
		function groupFirstLetter(words) {
			let result = {};
			for (const word of words) {
				let letter = word[0];
				if (result[letter]) {
					result[letter].push(word);
				} else {
					result[letter] = [word];
				}
			}
			return result;
		}
		console.log(groupFirstLetter(words));
	}
}
amazonSdePractice();
