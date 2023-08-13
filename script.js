function calculateMinCost() {
  let arr = [4, 2, 7, 6, 9];
 arr.sort();
 let result = 0;
 while( 1 < arr.length) {
    
    console.log(arr);
   let price = arr[0] + arr[1];
   result += price; 
   arr.splice(0,2);
  for(let i = 0; i<arr.length; i++)
  {
    if(arr[i]>price ){
      arr.splice(i,0,price);
      break;
    }
    if(i == arr.length-1)
    {
      arr.splice(i+1,0,price);
      break;
    }
  }
   
 }
 return result;
} 
  