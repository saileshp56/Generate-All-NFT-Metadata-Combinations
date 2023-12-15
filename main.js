var input = [
    {'Earring': ["Gold", "Silver"]}, 
    {'Grin': ["Crooked", "Toothy"]}
];

function cartesianProduct(input, current) { 
   if (!input || !input.length) { return []; }

   var head = input[0];
   var tail = input.slice(1);
   var output = [];

    for (var key in head) {
      for (var i = 0; i < head[key].length; ++i) {
            var newCurrent = copy(current);         
            newCurrent[key] = head[key][i];
            if (tail.length) {
                 var productOfTail = 
                         cartesianProduct(tail, newCurrent);
                 output = output.concat(productOfTail);
            } else output.push(newCurrent);
       }
     }    
    return output;
}

function copy(obj) {
  var res = {};
  for (var p in obj) res[p] = obj[p];
  return res;
}

// The 2 functions above were made by Phil Moorhouse and GameAlchemist
// https://stackoverflow.com/questions/18957972/cartesian-product-of-objects-in-javascript

function metaDataProduct(input) {
    let objArr = cartesianProduct(input);
    let len = objArr.length;
    
    let ret = []
    for(let i = 0; i < len; ++i) {
        let arr = []
        for (const property in objArr[i]) {
            arr.push({"trait_type": property, 
            "value": objArr[i][property]});
        }
        ret.push(arr);
    }
    return ret;
}


console.log(metaDataProduct(input));
// Output:
/*
[
  [
    { trait_type: 'Earring', value: 'gold' },
    { trait_type: 'Grin', value: 'Crooked' }
  ],
  [
    { trait_type: 'Earring', value: 'gold' },
    { trait_type: 'Grin', value: 'toothy' }
  ],
  [
    { trait_type: 'Earring', value: 'silver' },
    { trait_type: 'Grin', value: 'Crooked' }
  ],
  [
    { trait_type: 'Earring', value: 'silver' },
    { trait_type: 'Grin', value: 'toothy' }
  ]
]
*/
