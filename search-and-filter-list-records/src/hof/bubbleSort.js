//Bubble sort

//Pseudocode
/**
 * write a function called bubblesort
 * which takes array as an argument.
 * It should return sorted array of elements
 * loop over array until array length
 * create inner loop start with index 1
 * end with array length - 1
 * if right element greater than left swap both the numbers
 */

const bubbleSort = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			console.log(arr[i], arr[j]);
			if (arr[i] < arr[j]) {
				let temp = arr[j];
				arr[j] = arr[i];
				arr[i] = temp;
			}
		}
	}
	console.log(arr);
};

let unsortedArr = [1, 4, 2, 5];
bubbleSort(unsortedArr);
