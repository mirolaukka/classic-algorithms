var t0 = new Date().getTime();

for(let i = 1; i<=100; i++){
	let output = '';
	if(i%3 == 0) output += 'Fizz';
	if(i%5 == 0) output += 'Buzz';
	console.log(isNaN(output) ? output : i);
}

var t1 = new Date().getTime();
console.log(`It took: ${t1-t0}ms`);

