let array = [38, 27, 43, 3, 9, 82, 10];

function merge(arr, l, m, r){

  let n1 = m-l+1;
  let n2 = r-m;

  let L = [];
  let R = [];

  for(let i2 = 0; i2<n1; i2++){
    L[i2] = arr[l + i2];
  }
  for(let j2 = 0; j2<n2; j2++){
    R[j2] = arr[m+1+j2];
  }


  let i=0
  let j=0

  let k=l
  while(i<n1 && j<n2) {
    if(L[i] <= R[j]){
      arr[k] = L[i];
      i++;
    }else{
      arr[k] = R[j];
      j++;
    }
    k++
  }

  while (i<n1) {
    arr[k] = L[i];
    i++;
    k++;
  }

  while (j<n1) {
    arr[k] = R[j];
    j++;
    k++;
  }
  return arr
}



function sort(array, left, right){
  if(left < right){
    let middle = (left + right) / 2

    sort(array, left, middle);
    sort(array, middle+1, right);

    return merge(array, left, middle, right);
  }
}

console.log(sort(array, 0, array.length-1));