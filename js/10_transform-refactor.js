function initTransformRefactor() {
	const dogBreeds = {
		Affenpinscher: 2,
		"Afghan Hound": 0,
		"Airedale Terrier": 3,
		Akita: 5,
		"Alaskan Malamute": 0,
		"American Bulldog": 8,
		"Australian Shepherd": 11,
		Basenji: 0,
		"Basset Hound": 4,
		Beagle: 15,
		"Bernese Mountain Dog": 7,
		"Bichon Frise": 0,
		"Border Collie": 12,
		"Boston Terrier": 9,
		Boxer: 0,
		Bulldog: 13,
		"Cane Corso": 4,
		"Cavalier King Charles Spaniel": 0,
		Chihuahua: 14,
		"Chow Chow": 2,
		"Cocker Spaniel": 7,
		Collie: 0,
		Corgi: 16,
		Dachshund: 12,
		Dalmatian: 0,
		"Doberman Pinscher": 6,
		"English Setter": 1,
		"French Bulldog": 18,
		"German Shepherd": 20,
		"German Shorthaired Pointer": 0,
		"Golden Retriever": 22,
		Goldendoodle: 17,
		"Great Dane": 0,
		Greyhound: 2,
		Havanese: 4,
		"Irish Setter": 0,
		"Italian Greyhound": 3,
		"Jack Russell Terrier": 5,
		"Labrador Retriever": 24,
		Maltese: 8,
		"Miniature Schnauzer": 0,
		Newfoundland: 2,
		Papillon: 0,
		Pekingese: 1,
		"Pembroke Welsh Corgi": 9,
		Pomeranian: 10,
		Poodle: 19,
		Pug: 0,
		"Rhodesian Ridgeback": 2,
		Rottweiler: 0,
		Samoyed: 4,
		"Shiba Inu": 11,
		"Shih Tzu": 0,
		"Siberian Husky": 15,
		"Springer Spaniel": 5,
		"Staffordshire Bull Terrier": 0,
		"Saint Bernard": 2,
		Vizsla: 2,
		Weimaraner: 0,
		"West Highland White Terrier": 4,
		Whippet: 2,
		"Yorkshire Terrier": 9,
	};

	// console.log("Dog Breeds:", dogBreeds);
	// console.log(Object.entries(dogBreeds));

	const reduceDogBreeds = Object.entries(dogBreeds).reduce((acc, item) => {
		const letter = item[0].charAt(0);
		if (!acc[letter]) {
			acc[letter] = {
				list: [],
			};
		}
		acc[letter].list.push(item);
		return acc;
	}, {});

	console.log(reduceDogBreeds);

	const mappedDogBreeds = Object.entries(reduceDogBreeds).map(([heading, { list }]) => {
		return {
			heading,
			list: list.map(([breed, count]) => {
				const slug = breed.replaceAll(" ", "-").toLowerCase();
				return {
					breed,
					count,
					slug,
				};
			}),
		};
	});

	console.log(mappedDogBreeds);

	return {
		reduceDogBreeds,
		mappedDogBreeds,
	};
}
initTransformRefactor();
