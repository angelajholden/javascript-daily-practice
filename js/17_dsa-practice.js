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

		// console.log(largest);
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
		// console.log(largest);
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
		// console.log(count);
	}

	{
		const numbers = [5, 2, 9, 4];

		// Add all the numbers together.

		let total = 0;

		for (const num of numbers) {
			total += num;
		}

		// console.log(total);
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
		// console.log(dupes);
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
		// console.log(hasDuplicate(numbers));
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
		// console.log(arrayContains(numbers));
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
		// console.log(returnOddNumber(numbers));
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
		// console.log(returnFirstWord(words));
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
		// console.log(buildNewArray(numbers));
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
		// console.log(newArrayWithWords(words));
	}

	{
		const numbers = [3, 8, 2, 10, 5];

		// Add together only the numbers greater than 4.

		let total = 0;

		for (const num of numbers) {
			if (num > 4) {
				total += num;
			}
		}
		// console.log(total);
	}

	{
		// Best So Far Pattern
		const numbers = [8, 3, 11, 5, 6];

		// find the smallest number
		//  Math.min() not allowed

		let smallest = numbers[0];
		for (const num of numbers) {
			if (num < smallest) {
				smallest = num;
			}
		}
		// console.log(smallest);
	}

	{
		// Running Count Pattern
		const numbers = [2, 5, 8, 11, 4, 13];

		// how many numbers are greater than 6?

		let count = 0;
		for (const num of numbers) {
			if (num > 6) {
				count++;
			}
		}
		// console.log(count);
	}

	{
		// Running Total Pattern
		const numbers = [4, 7, 2, 9];

		// add all the numbers together

		let total = 0;
		for (const num of numbers) {
			total += num;
		}
		// console.log(total);
	}

	{
		// Build a New Result Array Pattern
		const numbers = [3, 7, 2, 8, 5];

		// build a new array with numbers greater than 4

		let array = [];
		for (const num of numbers) {
			if (num > 4) {
				array.push(num);
			}
		}
		// console.log(array);
	}

	{
		// Seen Before Patten with Set
		// Duplicate Detection with a Set
		const numbers = [4, 7, 2, 7, 9];

		// use a function and return true
		// as soon as you find a duplicate

		function returnTrueIfDupe(numbers) {
			let seen = new Set();
			for (const num of numbers) {
				if (seen.has(num)) {
					return true;
				}
				seen.add(num);
			}
			return false;
		}
		// console.log(returnTrueIfDupe(numbers));
	}

	{
		// Frequency Counter Pattern
		const words = ["cat", "dog", "cat", "bird", "dog", "cat"];

		// count how many times each word appears
		let frequency = {};
		for (const word of words) {
			if (frequency[word]) {
				frequency[word]++;
			} else {
				frequency[word] = 1;
			}
		}
		// console.log(frequency);
	}

	{
		// Frequency Counter Pattern
		const colors = ["red", "blue", "red", "green", "blue", "red"];

		// count each color
		let counter = {};
		for (const color of colors) {
			if (counter[color]) {
				counter[color]++;
			} else {
				counter[color] = 1;
			}
		}
		// console.log(counter);
	}

	{
		// Frequency Counter Pattern
		const letters = ["a", "b", "a", "c", "b", "a", "d"];

		// count the number of times each letter appears
		let counter = {};
		for (const letter of letters) {
			if (counter[letter]) {
				counter[letter]++;
			} else {
				counter[letter] = 1;
			}
		}
		// console.log(counter);
	}

	{
		// Frequnecy Counter & Best So Far Pattern
		const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

		// find the word that appears most often
		// separate problems = separate jobs (steps)
		let highestCount = 0;
		let frequentWord = null;
		let count = {};
		for (const fruit of fruits) {
			// frequency counter, step 1
			if (count[fruit]) {
				count[fruit]++;
			} else {
				count[fruit] = 1;
			}
			// best so far, step 2
			// highestCount is assigned a new value, it doesn't increment by 1
			if (count[fruit] > highestCount) {
				highestCount = count[fruit];
				frequentWord = fruit;
			}
		}
		// console.log(count, frequentWord);
	}

	{
		// Best So Far Pattern
		const numbers = [9, 4, 12, 3, 7];

		// find the largest number
		//  no Math.max()

		let largest = numbers[0];
		for (const num of numbers) {
			if (num > largest) {
				largest = num;
			}
		}
		// console.log(largest);
	}

	{
		// Best So Far Pattern
		const numbers = [2, 9, 4, 11, 6, 13];

		// count how many numbers are odd

		let count = 0;
		for (const num of numbers) {
			if (num % 2 !== 0) {
				count++;
			}
		}
		// console.log(count);
	}

	{
		// Frequency Count Pattern
		const colors = ["red", "blue", "red", "green", "blue", "red"];

		// count how many times each color appears
		let count = {};
		for (const color of colors) {
			if (count[color]) {
				count[color]++;
			} else {
				count[color] = 1;
			}
		}
		// console.log(count);
	}

	{
		// Find the largest even number

		const numbers = [3, 8, 2, 10, 5, 12];
		let largest = numbers[0];
		for (const num of numbers) {
			if (num % 2 === 0 && num > largest) {
				largest = num;
			}
		}
		// console.log(largest);
	}

	{
		// Find the smallest odd number

		const numbers = [14, 3, 9, 6, 11, 8];

		let smallest = null;
		for (const num of numbers) {
			if (num % 2 !== 0 && (smallest === null || num < smallest)) {
				smallest = num;
			}
		}
		// console.log(smallest);
	}

	{
		// Qualifying Condition & Best So Far Pattern

		const numbers = [5, 12, 7, 18, 3, 14];

		// find the largest number less than 15

		let largest = null;
		for (const num of numbers) {
			if (num < 15 && (largest === null || num > largest)) {
				largest = num;
			}
		}
		// console.log(largest);
	}

	{
		// Find the smallest even number in the array

		const numbers = [7, 12, 5, 18, 9, 14, 3];
		let smallest = null;
		for (const num of numbers) {
			if (num % 2 === 0 && (smallest === null || num < smallest)) {
				smallest = num;
			}
		}
		// console.log(smallest);
	}

	{
		// Find the index of the first even number.

		const numbers = [7, 5, 12, 9, 4];

		function getFirstIndex(numbers) {
			let firstIndex = null;
			for (let i = 0; i < numbers.length; i++) {
				if (numbers[i] % 2 === 0) {
					// console.log(numbers[i]);
					firstIndex = i;
					return firstIndex;
				}
			}
			return null;
		}
		// console.log(getFirstIndex(numbers));
	}

	{
		// Find the index of the first even number.
		const numbers = [9, 7, 5, 8, 3];

		function findFirstEven(numbers) {
			// let firstEven = null;
			for (let i = 0; i < numbers.length; i++) {
				if (numbers[i] % 2 === 0) {
					// firstEven = i;
					return i;
				}
			}
			return null;
		}
		// console.log(findFirstEven(numbers));
	}

	{
		// Find the index of the first number greater than 8.
		const numbers = [4, 9, 6, 2, 11];
		function firstGreaterEight(numbers) {
			for (let i = 0; i < numbers.length; i++) {
				if (numbers[i] > 8) {
					return i;
				}
			}
			return null;
		}
		// console.log(firstGreaterEight(numbers));
	}

	{
		// Find the index of the last even number.
		const numbers = [4, 9, 6, 12, 5, 8, 5];

		function getLastEven(numbers) {
			let lastEven = null;
			for (let i = 0; i < numbers.length; i++) {
				if (numbers[i] % 2 === 0) {
					lastEven = i;
				}
			}
			return lastEven;
		}
		// console.log(getLastEven(numbers));
		getLastEven(numbers);
	}

	{
		// Find the index of the largest even number.
		const numbers = [3, 10, 7, 14, 5, 8];
		function largestEvenNumber(numbers) {
			let largest = null;
			let largestIndex = null;
			for (let i = 0; i < numbers.length; i++) {
				if (numbers[i] % 2 === 0 && (largest === null || numbers[i] > largest)) {
					largest = numbers[i];
					largestIndex = i;
				}
			}
			return largestIndex;
		}
		// console.log(largestEvenNumber(numbers));
	}

	{
		// Find the smallest even number.
		const numbers = [11, 4, 7, 14, 3, 10, 5];

		function smallestEvenIndex(numbers) {
			let smallest = null;
			let smallestIndex = null; // an array with no even numbers would incorrectly return with 0, this needs to be null
			for (let i = 0; i < numbers.length; i++) {
				if (numbers[i] % 2 === 0 && (smallest === null || numbers[i] < smallest)) {
					smallest = numbers[i];
					smallestIndex = i;
				}
			}
			return smallestIndex;
		}
		// console.log(smallestEvenIndex(numbers));
	}

	{
		// Find the undex of the largest odd number.
		const numbers = [6, 13, 4, 17, 8, 11];

		function indexOfLargestOdd(numbers) {
			let largest = null;
			let largestIndex = null;
			for (let i = 0; i < numbers.length; i++) {
				// !== 0 is the better approach
				if (numbers[i] % 2 !== 0 && (largest === null || numbers[i] > largest)) {
					largest = numbers[i];
					largestIndex = i;
				}
			}
			return largestIndex;
		}
		// console.log(indexOfLargestOdd(numbers));
	}

	{
		// Find the index of the smallest number greater than 6
		// qualification + best-so-far + index tracking
		const numbers = [5, 12, 7, 18, 4, 9];
		function smallestGreaterThan(numbers) {
			let smallest = null;
			let smallestIndex = null;
			for (let i = 0; i < numbers.length; i++) {
				if (numbers[i] > 6 && (smallest === null || numbers[i] < smallest)) {
					smallest = numbers[i];
					smallestIndex = i;
				}
			}
			return smallestIndex;
		}
		// console.log(smallestGreaterThan(numbers));
	}

	{
		// Find the index of the largest number less than 10
		const numbers = [8, 3, 15, 6, 11, 4];
		function largestNumberLessThan(numbers) {
			let largest = null;
			let largestIndex = null;
			for (let i = 0; i < numbers.length; i++) {
				if (numbers[i] < 10 && (largest === null || numbers[i] > largest)) {
					largest = numbers[i];
					largestIndex = i;
				}
			}
			return largestIndex;
		}
		// console.log(largestNumberLessThan(numbers));
	}

	{
		//  Add together only the even numbers.
		const numbers = [3, 8, 5, 12, 7, 10];
		let total = 0;
		for (const num of numbers) {
			if (num % 2 === 0) {
				total += num;
			}
		}
		// console.log(total);
	}

	{
		// Build a new array containing only the words with 4 or more letters.
		const words = ["cat", "elephant", "dog", "giraffe", "ant"];
		let array = [];
		for (const word of words) {
			if (word.length >= 4) {
				array.push(word);
			}
		}
		// console.log(array);
	}

	{
		// Add together only the numbers greater than 8.
		const numbers = [6, 13, 4, 9, 16, 7];
		let total = 0;
		for (const num of numbers) {
			if (num > 8) {
				total += num;
			}
		}
		// console.log(total);
	}

	{
		// Count how many times each number appears.
		const numbers = [4, 7, 4, 9, 7, 4];
		let count = {};
		for (const num of numbers) {
			if (count[num]) {
				count[num]++;
			} else {
				count[num] = 1;
			}
		}
		// console.log(count);
	}

	{
		// Count how many words have more than 3 letters.
		const words = ["apple", "cat", "banana", "dog", "elephant"];
		let count = 0;
		for (const word of words) {
			if (word.length > 3) {
				count++;
			}
		}
		// console.log(count);
	}

	{
		// Find the index of the first number that appears more than once.
		const numbers = [5, 12, 7, 12, 9, 4, 12, 6];
		function findFirstNumber(numbers) {
			let firstIndex = null;
			let seen = new Set();
			for (let i = 0; i < numbers.length; i++) {
				if (seen.has(numbers[i])) {
					firstIndex = i;
					return firstIndex;
				}
				seen.add(numbers[i]);
			}
			return null;
		}
		// console.log(findFirstNumber(numbers));
	}

	{
		// Find the first number that appears exactly 3 times.
		const numbers = [4, 7, 4, 9, 7, 4, 2];
		function findTheFirstNumber(numbers) {
			let count = {};
			for (const num of numbers) {
				if (count[num]) {
					count[num]++;
					if (count[num] === 3) return `The first number to appear 3 times is ${num}`;
				} else {
					count[num] = 1;
				}
			}
			return null;
		}
		// console.log(findTheFirstNumber(numbers));
	}

	{
		// Return the first number that is encountered for the 4th time.
		const numbers = [2, 5, 2, 7, 5, 2, 5, 5];
		function returnFirstNumber(numbers) {
			let count = {};
			for (const num of numbers) {
				if (count[num]) {
					count[num]++;
					if (count[num] === 4) return num;
				} else {
					count[num] = 1;
				}
			}
			return null;
		}
		// console.log(returnFirstNumber(numbers));
	}

	{
		// Return the first number that reaches a count of 4, and also return the index where that happens.
		const numbers = [8, 3, 8, 5, 3, 8, 7, 3, 3];
		function returnNumberAndIndex(numbers) {
			let count = {};
			for (let i = 0; i < numbers.length; i++) {
				let num = numbers[i];
				if (count[num]) {
					count[num]++;
					if (count[num] === 4) return { number: num, index: i };
				} else {
					count[num] = 1;
				}
			}
			return null;
		}
		// console.log(returnNumberAndIndex(numbers));
	}

	{
		// Return an object containing the first number that reaches a count of 3, and the index where it happens.
		const numbers = [6, 2, 6, 9, 2, 6, 2];
		function returnAnObject(numbers) {
			let count = {};
			for (let i = 0; i < numbers.length; i++) {
				let num = numbers[i];
				if (count[num]) {
					count[num]++;
					if (count[num] === 3) return { number: num, index: i };
				} else {
					count[num] = 1;
				}
			}
			return null;
		}
		// console.log(returnAnObject(numbers));
	}

	{
		// Return the indexes of the two numbers that add up to the target.
		const numbers = [2, 7, 11, 15];
		const target = 9;
		function returnIndexesOfTwoNumbers(numbers, target) {
			for (let i = 0; i < numbers.length; i++) {
				for (let x = i + 1; x < numbers.length; x++) {
					if (numbers[i] + numbers[x] === target) {
						return [i, x];
					}
				}
			}
			return null;
		}
		// console.log(returnIndexesOfTwoNumbers(numbers, target));
	}
	{
		// Return the indexes of the two numbers that add up to the target.

		const numbers = [3, 8, 4, 11];
		const target = 12;
		function returnIndexesOfTwo(numbers, target) {
			for (let i = 0; i < numbers.length; i++) {
				for (let x = i + 1; x < numbers.length; x++) {
					if (target === numbers[i] + numbers[x]) {
						return [i, x];
					}
				}
			}
			return null;
		}
		// console.log(returnIndexesOfTwo(numbers, target));
	}

	{
		// Return the indexes of the two numbers that add up to the target.

		const numbers = [5, 9, 2, 7];
		const target = 14;
		function returnTheIndexes(numbers, target) {
			for (let i = 0; i < numbers.length; i++) {
				for (let x = i + 1; x < numbers.length; x++) {
					let first = numbers[i];
					let second = numbers[x];
					if (target === first + second) {
						return [i, x];
					}
				}
			}
			return null;
		}
		// console.log(returnTheIndexes(numbers, target));
	}

	{
		// Return the index of the first number that is encountered for the 3rd time.
		const numbers = [4, 7, 4, 9, 2, 7, 4];
		function returnTheFirst(numbers) {
			let count = {};
			for (let i = 0; i < numbers.length; i++) {
				let num = numbers[i];
				if (count[num]) {
					count[num]++;
					if (count[num] === 3) {
						return i;
					}
				} else {
					count[num] = 1;
				}
			}
			return null;
		}
		// console.log(returnTheFirst(numbers));
	}

	{
		// Return an object containing the first number that reaches a count of 4 and the index where that happens.

		const numbers = [3, 8, 3, 5, 8, 3, 8, 8];
		function returnAnObject(numbers) {
			let count = {};
			for (let i = 0; i < numbers.length; i++) {
				let num = numbers[i];
				if (count[num]) {
					count[num]++;
					if (count[num] === 4) {
						return {
							number: num,
							index: i,
						};
					}
				} else {
					count[num] = 1;
				}
			}
			return null;
		}
		// console.log(returnAnObject(numbers));
	}

	{
		// Return an object containing the name and index of the user with the highest score.
		const users = [
			{ id: 1, name: "Ada", score: 82 },
			{ id: 2, name: "Grace", score: 91 },
			{ id: 3, name: "Linus", score: 76 },
			{ id: 4, name: "Margaret", score: 88 },
		];

		function getHighestScore(users) {
			let highest = {};
			let grade = null;
			for (let i = 0; i < users.length; i++) {
				let currentScore = users[i].score;
				let name = users[i].name;
				if (grade === null || currentScore > grade) {
					grade = currentScore;
					highest = {
						name: name,
						index: i,
					};
				}
			}
			return highest;
		}
		// console.log(getHighestScore(users));
	}

	{
		// Return an object containing the name and index of the cheapest product that is in stock.
		const products = [
			{ id: 101, name: "Keyboard", price: 89, inStock: true },
			{ id: 102, name: "Mouse", price: 45, inStock: false },
			{ id: 103, name: "Monitor", price: 199, inStock: true },
			{ id: 104, name: "Webcam", price: 79, inStock: true },
		];

		function findTheCheapestProducts(products) {
			let cheapest = {};
			let cheapestPrice = null;
			for (let i = 0; i < products.length; i++) {
				let inStock = products[i].inStock;
				let name = products[i].name;
				let price = products[i].price;
				if ((cheapestPrice === null || price < cheapestPrice) && inStock) {
					// reassign the cheapest price to the current price
					cheapestPrice = price;
					cheapest = {
						name: name,
						index: i,
					};
				}
			}
			return cheapest;
		}
		// console.log(findTheCheapestProducts(products));
	}

	{
		// Return an object containing the name and index of the active employee with the highest salary.
		const employees = [
			{ id: 1, name: "Maya", salary: 72000, active: true },
			{ id: 2, name: "Noah", salary: 68000, active: false },
			{ id: 3, name: "Priya", salary: 81000, active: true },
			{ id: 4, name: "Eli", salary: 76000, active: true },
		];

		const employees2 = [
			{ id: 1, name: "Maya", salary: 72000, active: true },
			{ id: 2, name: "Noah", salary: 95000, active: false },
			{ id: 3, name: "Priya", salary: 81000, active: true },
			{ id: 4, name: "Eli", salary: 76000, active: true },
		];

		const employees3 = [
			{ id: 1, name: "Maya", salary: 99000, active: true },
			{ id: 2, name: "Noah", salary: 68000, active: true },
			{ id: 3, name: "Priya", salary: 81000, active: true },
			{ id: 4, name: "Eli", salary: 76000, active: true },
		];

		const employees4 = [
			{ id: 1, name: "Maya", salary: 72000, active: false },
			{ id: 2, name: "Noah", salary: 68000, active: false },
		];

		function returnHighestSalary(employees) {
			let highest = {};
			let highestSalary = null;
			for (let i = 0; i < employees.length; i++) {
				let currentSalary = employees[i].salary;
				let name = employees[i].name;
				let active = employees[i].active;
				if (active && (highestSalary === null || currentSalary > highestSalary)) {
					highestSalary = currentSalary;
					highest = {
						name,
						index: i,
					};
				}
			}
			return highest;
		}
		// console.log(returnHighestSalary(employees));
		// console.log(returnHighestSalary(employees2));
		// console.log(returnHighestSalary(employees3));
		// console.log(returnHighestSalary(employees4));
	}

	{
		// Return an object containing the title and index of the open ticket with the highest priority.

		const tickets = [
			{ id: 301, title: "Login issue", priority: 2, open: true },
			{ id: 302, title: "Broken image", priority: 1, open: false },
			{ id: 303, title: "Checkout error", priority: 5, open: true },
			{ id: 304, title: "Slow page", priority: 3, open: true },
		];

		const tickets2 = [
			{ id: 301, title: "Login issue", priority: 2, open: true },
			{ id: 302, title: "Broken image", priority: 99, open: false },
			{ id: 303, title: "Checkout error", priority: 5, open: true },
			{ id: 304, title: "Slow page", priority: 3, open: true },
		];

		const tickets3 = [
			{ id: 301, title: "Login issue", priority: 9, open: true },
			{ id: 302, title: "Broken image", priority: 4, open: true },
			{ id: 303, title: "Checkout error", priority: 7, open: true },
			{ id: 304, title: "Slow page", priority: 2, open: false },
		];

		function returnOpenTicket(tickets) {
			let openTicket = {};
			let highestPriority = null;
			for (let i = 0; i < tickets.length; i++) {
				let title = tickets[i].title;
				let open = tickets[i].open;
				let currentPriority = tickets[i].priority;
				if (open && (highestPriority === null || currentPriority > highestPriority)) {
					highestPriority = currentPriority;
					openTicket = {
						title,
						index: i,
					};
				}
			}
			return openTicket;
		}
		console.log(returnOpenTicket(tickets3));
	}
}
initPracticeDSA();
