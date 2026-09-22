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
		// console.log(groupFirstLetter(words));
	}

	{
		/*
		There isn’t really one single “official” interview-pattern name for the whole thing.

		The first part is a frequency counter pattern: you build a map/object of counts.

		Then the second part is a second pass / two-pass traversal: you scan the original input again to use those counts while preserving order.

		So I’d describe this solution as:

		“A frequency counter with a two-pass traversal.”
		*/

		// Given a string, return the first character that appears only once.
		const text = "aabbcddee";
		function firstCharacter(text) {
			let result = {};
			for (const char of text) {
				if (result[char]) {
					result[char]++;
				} else {
					result[char] = 1;
				}
			}
			console.log(result);

			for (const char of text) {
				if (result[char] === 1) {
					return char;
				}
			}
			return null;
		}
		// console.log(firstCharacter(text));
	}

	{
		// Given two strings, return true if they contain the exact same characters with the exact same frequencies, just possibly in a different order.
		const first = "listen";
		const second = "silent";

		function compareStrings(first, second) {
			let resultA = {};
			let resultB = {};
			for (const char of first) {
				if (resultA[char]) {
					resultA[char]++;
				} else {
					resultA[char] = 1;
				}
			}
			for (const char of second) {
				if (resultB[char]) {
					resultB[char]++;
				} else {
					resultB[char] = 1;
				}
			}
			for (const char of first) {
				if (resultA[char] !== resultB[char]) {
					return false;
				}
			}
			return true;
		}
		// console.log(compareStrings(first, second));
	}

	{
		const first = "listen";
		const second = "silent";

		function compareTwoStrings(first, second) {
			// First check whether the strings have the same length. If not, return false.
			if (first.length !== second.length) {
				return false;
			}
			console.log(first.length);

			// Walk through the second string and subtract from those counts.
			let result = {};
			for (const char of first) {
				if (result[char]) {
					result[char]++;
				} else {
					result[char] = 1;
				}
			}
			console.log(result);
			// If a character isn’t present, or its count would go below zero, return false.
			for (const char of second) {
				if (!result[char]) {
					return false;
				}
				result[char]--;
			}
			return true;
		}
		// console.log(compareTwoStrings(first, second));
	}

	{
		// Given a string, return the first character that appears for the second time as you scan left to right.
		const text = "abca";
		function firstChar(text) {
			let seen = new Set();
			for (const char of text) {
				if (seen.has(char)) {
					return char;
				}
				seen.add(char);
			}
			return null;
		}
		// console.log(firstChar(text));
	}

	{
		// Given an array of numbers and an integer k, return true if the same number appears twice within k positions of each other.
		const numbers = [1, 2, 3, 4, 1, 1];
		const k = 3;

		function numberAppearsTwice(numbers, k) {
			let results = {};
			let distance = 0;
			for (let i = 0; i < numbers.length; i++) {
				let num = numbers[i];
				if (num in results) {
					distance = i - results[num];
					if (distance <= k) {
						return true;
					}
				}
				results[num] = i;
			}
			return false;
			// console.log(results);
		}
		// console.log(numberAppearsTwice(numbers, k));
	}

	{
		// Given an array of numbers and an integer k, return true if the same number appears twice within k positions of each other.
		const numbers = [4, 1, 2, 4, 3];
		const k = 3;
		function arrayOfNumbers(numbers, k) {
			let results = {};
			for (let i = 0; i < numbers.length; i++) {
				let num = numbers[i];
				if (num in results) {
					let distance = i - results[num];
					if (distance <= k) {
						return true;
					}
				}
				results[num] = i;
			}
			return false;
		}
		// console.log(arrayOfNumbers(numbers, k));
	}

	{
		// Review Problem: Most Frequent Number
		// Given an array of numbers, return the number that appears most often.
		const numbers = [4, 2, 4, 3, 2, 4, 5];
		function numberMostOften(numbers) {
			let results = {};
			let highestCount = 0;
			let highest = null;
			/**
			 * if current number's count > highestCount
				highestCount = current count
				highest = current number
			 */
			for (const num of numbers) {
				if (results[num]) {
					results[num]++;
				} else {
					results[num] = 1;
				}

				if (results[num] > highestCount) {
					highestCount = results[num];
					highest = num;
				}
			}
			return highest;
		}
		// console.log(numberMostOften(numbers));
	}

	{
		// return a new array containing only the products where inStock is true
		const products = [
			{ id: 1, name: "Dog Food", price: 42, inStock: true },
			{ id: 2, name: "Cat Toy", price: 12, inStock: false },
			{ id: 3, name: "Dog Toy", price: 18, inStock: true },
			{ id: 4, name: "Cat Food", price: 36, inStock: true },
		];

		function getAvailableProductLabels(products) {
			// only in-stock products
			// then return labels like:
			// "Dog Food - $42"
			const filterProducts = products.filter((item) => item.inStock);
			return filterProducts.map((item) => `${item.name} - $${item.price}`);
		}
		// console.log(getAvailableProductLabels(products));

		function getProductLabels(products) {
			// return strings like:
			// "Dog Food - $42"
			// "Cat Toy - $12"

			// const productNames = products.map((item) => {
			// 	return `${item.name} - $${item.price}`;
			// });
			// return productNames;

			return products.map((item) => `${item.name} - $${item.price}`);
		}
		// console.log(getProductLabels(products));

		function getAvailableProductsUnderPrice(products, maxPrice) {
			// return products that:
			// 1. are in stock
			// 2. cost less than or equal to maxPrice
			return products.filter((item) => item.inStock && item.price <= maxPrice);
		}
		// console.log(getAvailableProductsUnderPrice(products, 40));

		function getProductsUnderPrice(products, maxPrice) {
			// return a new array of products
			// where price is less than or equal to maxPrice
			return products.filter((item) => item.price <= maxPrice);
			// filter does not mutate array, it returns a new array
		}
		// console.log(getProductsUnderPrice(products, 20));

		function toggleSelectedId(selectedIds, id) {
			let newArray = [...selectedIds];
			if (selectedIds.includes(id)) {
				// Keep every item whose value is not equal to id.
				newArray = newArray.filter((item) => item !== id);
			} else {
				newArray.push(id);
			}
			return newArray;
		}
		// console.log(toggleSelectedId([1, 3], 2));
		// [1, 3, 2]
		// console.log(toggleSelectedId([1, 3], 3));
		// [1]

		// const selectedIds = [1, 3];
		function getSelectedProducts(products, selectedIds) {
			let newArray = [];
			for (const item of products) {
				if (selectedIds.includes(item.id)) {
					newArray.push(item);
				}

				// for (let i = 0; i < selectedIds.length; i++) {
				// 	if (selectedIds[i] === item.id) {
				// 		newArray.push(item);
				// 	}
				// }
			}
			return newArray;
		}
		// console.log(getSelectedProducts(products, selectedIds));

		function findProductById(products, id) {
			for (const item of products) {
				if (item.id === id) {
					return item;
				}
			}
			return null;
		}
		// console.log(findProductById(products, 3));

		function getAvailableTotal(products) {
			let total = 0;
			for (const item of products) {
				if (item.inStock) {
					total += item.price;
				}
			}
			return total;
		}
		// console.log(getAvailableTotal(products));

		function getTotalPrice(products) {
			let total = 0;
			for (const item of products) {
				total += item.price;
			}
			return total;
		}
		// console.log(getTotalPrice(products));

		function getAvailableProducts(products) {
			let newArray = [];
			for (const item of products) {
				if (item.inStock) {
					newArray.push(item);
				}
			}
			return newArray;
		}
		// console.log(getAvailableProducts(products));

		function getProductNames(products) {
			let newArray = [];
			for (const item of products) {
				newArray.push(item.name);
			}
			return newArray;
		}
		// console.log(getProductNames(products));
	}

	{
		const products = [
			{ id: 1, name: "Dog Food", price: 42, inStock: true, category: "food" },
			{ id: 2, name: "Cat Toy", price: 12, inStock: false, category: "toy" },
			{ id: 3, name: "Dog Toy", price: 18, inStock: true, category: "toy" },
			{ id: 4, name: "Cat Food", price: 36, inStock: true, category: "food" },
		];

		function countProductsByCategory(products) {
			// return an object like:
			// {
			//   food: 2,
			//   toy: 2
			// }
			let results = {};
			for (const item of products) {
				if (results[item.category]) {
					results[item.category]++;
				} else {
					results[item.category] = 1;
				}
			}
			return results;
		}
		console.log(countProductsByCategory(products));

		function getMostExpensiveProduct(products) {
			// return the single product object
			// with the highest price
			let highestItem = null;
			for (const item of products) {
				if (highestItem === null || item.price > highestItem.price) {
					highestItem = item;
				}
			}
			return highestItem;
		}
		// console.log(getMostExpensiveProduct(products));

		function getInStockToyNames(products) {
			// return only the names of products
			// where category === "toy"
			// AND inStock === true
			return products.filter((item) => item.inStock && item.category === "toy").map((item) => item.name);
		}
		// console.log(getInStockToyNames(products));

		function getToyProducts(products) {
			// return only products where category === "toy"
			let newArray = [];
			for (const item of products) {
				if (item.category === "toy") {
					newArray.push(item);
				}
			}
			return newArray;
		}
		// console.log(getToyProducts(products));
	}
}
amazonSdePractice();
