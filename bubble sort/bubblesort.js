const orgArray = [2,5,6,1,2,3,7,1,2,6,3];


function main(arr){
	for(let i=0; i<arr.length; i++){
		
		for(let j=0; j<arr.length; j++){
			
			let n1 = arr[j], n2 = arr[j+1]
			if(n1>n2){
				arr[j] = n2;
				arr[j+1] = n1;
			}

		} 
	}
	

	return arr
}

console.log(main(orgArray));
