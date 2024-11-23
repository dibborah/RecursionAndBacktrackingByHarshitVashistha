// Big list but dynamic
// parse list
// const array1 = [{ name: 'neha', id: 5 }, { name: 'kabita', id: 50 }];

// // assignTraveler: Static
// const array2 = [
//   { name: 'neha', id: 5, school: 'convent' },
//   { name: 'rakhi', id: 3, school: 'secred' },
// ];


// function mergeArrays(array1, array2) {
//   const idMap = new Map();
//   const mergedArray = [];

//   // Add objects from array1 to the map
//   array1.forEach(obj1 => {
//     idMap.set(obj1.id, obj1);
//   });

//   // Update or add objects from array2
//   array2.forEach(obj2 => {
//     const existingObj = idMap.get(obj2.id);
//     if (existingObj) {
//       // Update the existing object with properties from obj2
//       Object.assign(existingObj, obj2);
//     } else {
//       idMap.set(obj2.id, obj2);
//     }
//   });

//   // Convert the Map to an array
//   mergedArray.push(...idMap.values());

//   return mergedArray;
// }



// understand this below function
// function mergeArrays(array1, array2) {
//     const idMap = new Map();
//     const mergedArray = [];
  
//     // Add objects from array1 to the map
//     for (const object1 of array1) {
//         idMap.set(object1.id, object1);
//     }

//     for (const object2 of array2) {
//       const existingObj = idMap.get(object2.id);
//       if (existingObj) {
//         // Update the existing object with properties from object2
//         Object.assign(existingObj, object2);
//       } else {
//         idMap.set(object2.id, object2);
//       }
//     }
  
//     // Convert the Map to an array
//     mergedArray.push(...idMap.values());
  
//     return mergedArray;
// };

const array1 = [{ name: 'neha', id: 5 }, { name: 'kabita', id: 50 }];
const array2 = [{ name: 'neha', id: 5, school: 'convent' },
 { name: 'rakhi', id: 3, school: 'secred' },
];

// Create a map from array2 using 'id' for quick lookup
const map2 = new Map(array2.map(obj => [obj.id, obj]));
const newArray = array1.map(obj => map2.get(obj.id) || obj);

console.log('map2', map2);

// Iterate over array1 and replace matching objects, or keep them if no match

console.log(newArray);
// console.log(mergeArrays(array1, array2));













// function mergeArrays(array1, array2) {
//     const idMap = new Map();
//     const mergedArray = [];
  
//     // Add objects from array1 to the map
//     for (const innerArray of array1) {
//       for (const object of innerArray) {
//         idMap.set(object.exitingOccupantId, object);
//       }
//     }
  
//     // Add or update objects from array2
//     for (const object2 of array2) {
//       const existingObject = idMap.get(object2.exitingOccupantId);
//       if (existingObject) {
//         // Update the existing object with properties from obj2
//         Object.assign(existingObject, object2);
//       } else {
//         idMap.set(object2.exitingOccupantId, object2);
//         mergedArray.push([object2]);
//       }
//     }
  
//     // Convert the Map to an array of arrays
//     return [...idMap.values()].map((object) => [object]);
//   }


// console.log(mergeArrays(array1, array2));





// export function newMergeAndFilterArrays(array1, array2) {
//   if (!array1) return;
//   if (!array2) return;

//   const uniqueIds = new Set();
//   const mergedArray = [];

//   for (const innerArray of array1) {
//     const newInnerArray = [];
//     for (const object of array2) {
//       const isTrue = innerArray.some((inner) => inner.exitingOccupantId === object.exitingOccupantId);
//       if (isTrue) newInnerArray.push(object);
//     }
//     mergedArray.push(newInnerArray);
//   }
//   return mergedArray;
// }
