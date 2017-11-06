// function getTempCallback (location, callback) {
//    callback(undefined, 78);
//    callback('hey no city like ' + location);
// }

// getTempCallback('Lugbe', function(err, temp){
//     if(err){
//       console.log('error', err)
//     }else{
//       console.log('success', temp);

//     }
// });

// function addPromise (a, b){
//     return new Promise(function (resolve, reject) {
//       if(typeof a === 'number' && typeof b === 'number'){
//         resolve(a + b);
//       }
//       reject("A and b is not all numbers");
      
//     });
// }

// addPromise(6, 9).then(function(sum){
//    console.log('Great!!! :', sum);
// },function(err) {
//     console.log('Bad!!! :', err)
// });


// addPromise('hello', 9).then(function(sum){
//    console.log('Great!!! :', sum);
// },function(err) {
//     console.log('Bad!!! :', err)
// });