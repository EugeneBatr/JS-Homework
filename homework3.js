/////////////////////////1////////////////////////

// const users = [
//         {
//           id: 1,
//           first_name: 'Jeanette',
//           last_name: 'Penddreth',
//           email: 'jpenddreth0@census.gov',
//           gender: 'Female',
//           ip_address: '26.58.193.2',
//         },
//         {
//           id: 2,
//           first_name: 'Petr',
//           last_name: 'Jackson',
//           email: 'gfrediani1@senate.gov',
//           gender: 'Male',
//           ip_address: '229.179.4.212',
//         },
//       ];
      

// const sorter = (userArray) => {
//      if (!Array.isArray(userArray)) return;
//      return userArray.reduce((result, user) => {
//         const userToInsert = {
//                 id: user.id,
//                 fullName: `${user.first_name} ${user.last_name}`,
//                 email: user.email,
//                 gender: user.gender,
//                 ip_address: user.ip_address,
//         };
//         if (userToInsert.gender.toLowerCase() === 'male') {
//                 result.men.push(userToInsert);
//         } else {
//                 result.women.push(userToInsert);
//         }
//         return result;
//         },
//         { men: [], women: [] }
// );


// };
// console.log(sorter(users));  

////////////////////////////////////////////////////////////




////////////////////////////2///////////////////////////

// const initialData = [
//         {
//           username: 'Maria',
//           age: 25,
//         },
//         {
//           username: 'Alex',
//           age: 21,
//         },
//         {
//           username: 'Oleg',
//           age: 14,
//         },
//         {
//           username: 'Dmitriy',
//           age: 35,
//         },
//         {
//           username: 'Oksana',
//           age: 72,
//         },
//       ];
      
// const sortUsers = (array) => {
//         if(!Array.isArray(array)) return;
//         return array.filter((user) => user.age >= 21).sort((prevUser, nextUser) => {
//                 return prevUser.username > nextUser.username ? 1 : -1;
//         })

// }

// console.log(sortUsers(initialData));

///////////////////////////////////////////////////////





////////////////////////3//////////////////////////

// const users = [
//     {
//         id: 1,
//         name: 'Alex',
//     },
//     {
//         id: 2,
//         name: 'Tomara',
//     },
//     {
//         id: 3,
//         name: 'Max',
//     },
// ];

// const userDelete = (array, arrayNumber) => {
//         if(!Array.isArray(array) || !Array.isArray(arrayNumber)) return;
//         return array.filter((user) => !arrayNumber.includes(user.id)
//         )
// }

// console.log(userDelete(users, [2]))

//////////////////////////////////////////////////////





///////////////////////////4///////////////////////////

// const initialArray = [1, 'Hello', 3];

// const initialFunc = (array) => {
//         if(!Array.isArray(array)) return;

//         return array.reduce((result,element, index) => {
//                 const elementInfo = {
//                         elementValue: element,
//                         elementType: typeof element,
//                         elementIndex: index,
//                 };
//         result.push(elementInfo);
//         return result;
//         },[]);
// };

// console.log(initialFunc(initialArray));

////////////////////////////////////////////////////////





/////////////////////////5///////////////////////////

// const isPolindrom = (string) => {
//         if (string !== string.split('').reverse().join('')) return 'false';
//         return 'true';
        

// }
// console.log(isPolindrom('шалаш'));

////////////////////////////////////////////////////////





//////////////////////////6/////////////////////////////

// const newReleases = [{
//         id: 70111470,
//         title: "Die Hard",
//         boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
//         uri: "http://api.netflix.com/catalog/titles/movies/70111470",
//         rating: [4.0],
//         bookmark: []
//        }, {
//         id: 654356453,
//         title: "Bad Boys",
//         boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
//         uri: "http://api.netflix.com/catalog/titles/movies/70111470",
//         rating: [5.0],
//         bookmark: [{ id: 432534, time: 65876586 }]
//        }, {
//         id: 65432445,
//         title: "The Chamber",
//         boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
//         uri: "http://api.netflix.com/catalog/titles/movies/70111470",
//         rating: [4.0],
//         bookmark: []
//        }, {
//         id: 675465,
//         title: "Fracture",
//         boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
//         uri: "http://api.netflix.com/catalog/titles/movies/70111470",
//         rating: [5.0],
//         bookmark: [{ id: 432534, time: 65876586 }]
//        }];
       
// const someFn = (array) => {
//         if (!Array.isArray(array)) return;
//         return array.reduce((result,element) => {
//                                 const releases = {
//                                         id: element.id,
//                                         title: element.title,
//                                 };
//                         result.push(releases);
//                         return result;
//                          },[]);
// }

// console.log(someFn(newReleases));

////////////////////////////////////////////////////////





//////////////////////////7/////////////////////////////

// const newReleases = [{
//         id: 70111470,
//         title: "Die Hard",
//         boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
//         uri: "http://api.netflix.com/catalog/titles/movies/70111470",
//         rating: [4.0],
//         bookmark: []
//        }, {
//         id: 654356453,
//         title: "Bad Boys",
//         boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
//         uri: "http://api.netflix.com/catalog/titles/movies/70111470",
//         rating: [5.0],
//         bookmark: [{ id: 432534, time: 65876586 }]
//        }, {
//         id: 65432445,
//         title: "The Chamber",
//         boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
//         uri: "http://api.netflix.com/catalog/titles/movies/70111470",
//         rating: [4.0],
//         bookmark: []
//        }, {
//         id: 675465,
//         title: "Fracture",
//         boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
//         uri: "http://api.netflix.com/catalog/titles/movies/70111470",
//         rating: [5.0],
//         bookmark: [{ id: 432534, time: 65876586 }]
//        }];

// const bestReleasesFilter = (array) => {
//         if (!Array.isArray(array)) return;
//         return array.reduce((result, {rating, id}) => {
//                 if(rating[0] === 5) { result.push(id)};
//                 return result;
//         },[])
// }

// console.log(bestReleasesFilter(newReleases));

////////////////////////////////////////////////////////





//////////////////////////8/////////////////////////////

// const videos = [{
//         id: 65432445,
//         title: "The Chamber"
//        }, {
//         id: 675465,
//         title: "Fracture"
//        }, {
//         id: 70111470,
//         title: "Die Hard"
//        }, {
//         id: 654356453,
//         title: "Bad Boys"
//        }];
       
// const someFn = (array) => {
//         if (!Array.isArray(array)) return;
//         return array.reduce((result,{id, title}) => {
//                 result[id] = title;
//                 return result;
//                         },{});
// }

// console.log(someFn(videos));

////////////////////////////////////////////////////////





//////////////////////////9/////////////////////////////

// const boxarts = [
//         {
//           width: 200,
//           height: 200,
//           url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"
//         }, 
//         {
//           width: 150,
//           height: 200,
//           url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"
//         }, 
//         {
//           width: 300,
//           height: 200,
//           url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"
//       }, 
//         {
//           width: 425,
//           height: 150,
//           url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg"
//         }
//       ];
      
// const area = (array) => {
//         if (Array.isArray(array)) return  array.reduce((result, item ) => {
//                 const maxArea = {
//                         square: result > (item.width* item.height) ? result : (item.width* item.height),
//                         url: item.url,
//                 };
//                 const prevSquare = result.width * result.height;
//                 return maxArea.square > prevSquare ? item : result
                
//         }).url;

// };


// console.log(area(boxarts));  

////////////////////////////////////////////////////////


alert(пи)