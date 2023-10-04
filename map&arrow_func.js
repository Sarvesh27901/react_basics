var num =[10,20,30,40,50];

//map function

function squared(items){
  return items**2;
};

var arr1= num.map(squared);
console.log(arr1)

//output-[100,400,900,1600,2500]

// arrow function

var arr2= num.map( items => items**2)
console.log(arr2)
//output-[100,400,900,1600,2500]
