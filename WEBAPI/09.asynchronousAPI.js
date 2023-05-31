// promise
// setTimeout(()=>{
//     console.log('it will print after 10 sec.')
// },1000 * 10)

// const getAllUsers = () => {
//   return [
//     {
//       name: "ashok sahu",
//       age: 28,
//     },
//     {
//       name: "kanha sahu",
//       age: 29,
//     },
//     {
//       name: "hrushikesh sahu",
//       age: 30,
//     },
//   ];
// };

// // console.log(getAllUsers())

// const getUserByName = (name) => {
//   let user;
//   user = getAllUsers().find((elm) => elm.name === name);
//   return user;
// };

// console.log(getUserByName('ashok sahu'))

// const getAllUsers = () => {
//   let users = [];
//   setTimeout(() => {
//     users = [
//       {
//         name: "ashok sahu",
//         age: 28,
//       },
//       {
//         name: "kanha sahu",
//         age: 29,
//       },
//       {
//         name: "hrushikesh sahu",
//         age: 30,
//       },
//     ];
//   }, 1000 * 5);
//   return users;
// };

//   const getUserByName = (name) => {
//     let user;
//     user = getAllUsers().find((elm) => elm.name === name);
//     return user;
//   };

//   console.log(getUserByName('ashok sahu'))

// promise create
// let bool = true;

// new Promise((resolve, reject) => {
//   if (bool) {
//     return resolve("promise is fullfilled");
//   } else {
//     return reject("promise is rejected");
//   }
// })
//   .then(
//     (data) => console.log(data)
//     //   , (error) => console.log(error)
//   )
//   .catch((error) => console.log(error))
//   .finally(() => console.log("i will print all time"));
let result = true

const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        if(result){
            resolve([
              {
                name: "ashok sahu",
                age: 28,
              },
              {
                name: "kanha sahu",
                age: 29,
              },
              {
                name: "hrushikesh sahu",
                age: 30,
              },
            ]);
        }else{
            reject('faild to fetch data')
        }
    }, 5 * 1000);
  });
};

getAllUsers().then((data)=>{
    console.log(data)
},(error)=>{
    console.log(error)
}).finally(()=>{
    console.log('it will call all time!')
})


