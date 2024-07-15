// function userType(userRole){
//     const msg
//          if userRole==="admin"{
//              msg="admin"
//              return msg 
//          }else if userRole==="teacher"{
//               msg="teacher"
//               return msg
//          }else msg="merchant"
//          return msg
//     }
// userType(admin)
// cons    

//       function userType(userRole){

//         if (userRole==="admin"){
//             return "the user role is admin"
//         }else if (userRole==="teacher"){
//             return "the user role is teacher"
//         }else if (userRole==="merchant"){
//             return "the user role is merchant"}
//         else {
//             return "unknow user role"
//         }  
//     }
//  const user = console.log(userType("merchant"));



//  const role = {
//     name:"shayan",
//     email: "shayantavousi@gmail.com",
//     phoneNumber:"09128980078",
//  }

// console.log(role)

// function maxNum(a,b){
//     if(a>b) return a;
//     if(a<b) return b;
//     else return "EQUAL"
// }

// const result=maxNum(15555,12);
// console.log(result)


// function fizzBuzz(number){

//     if (number%3===0) {
//         if (number%5===0) return "fizzBuzz";
//         return "fizz"
//     }
//     if (number%5===0) return "Buzz";
//     return "Null";
// }

// console.log(fizzBuzz(11))


// function cartTotal(discount,...prices){

//     let totalPrice=0
//     for(price of prices) totalPrice+=price
//     const cartSum=(1-discount)*totalPrice
//     console.log(cartSum);
// }

// cartTotal(0.3,100,500)

// const text="SHayAn TavoUSi iS My bRoTher" 
// function firstLetterUpper(str){
//     const lowerCase=str.toLowerCase();
//     const splittedlowerCase=lowerCase.split("");
//     splittedlowerCase[0]=splittedlowerCase[0].toUpperCase();
//     return splittedlowerCase.join("")
// }

// function upper(str,cb){
//     const msg=str.split(" ")
//     const msgE=[]
//     for(const n of msg){
//         msgE.push(cb(n));
//     }
// return msgE.join(" ")
// }


// console.log(upper(text,firstLetterUpper));

// const time="2:52:4"

// function correctTime(str){
//     const splittedStr=str.split(":")
//     const newTime=[]
//     for(const n of splittedStr){
//         newTime.push(n.padStart(2,"0"))
//     }
//     return newTime.join(":")
// }

// console.log(correctTime(time));


// const cardNumber=6219861062729719

// function lastFourDigits(cardNo){
//    const stringedCardNo=String(cardNo).replace(" ","").replace("-","");
//   const slicedCardNo=stringedCardNo.slice(-4)
//   return slicedCardNo.padStart(stringedCardNo.length,"*")    
// }

// console.log(lastFourDigits(cardNumber));



// const users=[
//   {
//     id:1,
//     name: "Shayan",
//     age:31,
//     isActive:true
//   },
//   {
//     id:2,
//     name: "omid",
//     age:20,
//     isActive:true
//   },
//   {
//     id:3,
//     name: "jalal",
//     age:40,
//     isActive:true
//   },
//   {
//     id:4,
//     name: "Mahsa",
//     age:32,
//     isActive:true
//   },
//   {
//     id:5,
//     name: "MAsoud",
//     age:12,
//     isActive:true
//   },
//   {
//     id:6,
//     name: "Felor",
//     age:45,
//     isActive:true
//   },
//   {
//     id:7,
//     name: "Aida",
//     age:87,
//     isActive:true
//   },
//   {
//     id:8,
//     name: "Abas",
//     age:36,
//     isActive:true
//   },
//   {
//     id:9,
//     name: "Mohamad",
//     age:34,
//     isActive:true
//   },
//   {
//     id:10,
//     name: "Ali",
//     age:15,
//     isActive:true
//   }
// ]

// console.log(users);

// const selectedUser=users[2].id

// console.log(selectedUser);

// const newUsers=users.filter((user)=>{
// return user.id!==selectedUser;
// })

// console.log(newUsers);



// const marks=[9,10,13,18,20,15,7]

// const average=marks.reduce((accumulator,currentValue)=>{
//   return accumulator+currentValue;
// },0)/marks.length

// console.log(average.toFixed(2));



// let counter=121
// const otp=setTimeout(() => {
//   counter--;
//   if(counter<0) clearTimeout
//   else 
//   console.log(counter);
// }, timeout);





function router(params) {
    const routes = [
        {
            path: "/index.html",
            view: () => console.log("homepage")
        },
        {
            path: "/weblog",
            view: () => console.log("weblog")
        },
        {
            path: "/positions",
            view: () => console.log("positions")
        },
        {
            path: "/tap30pack",
            view: () => console.log("tap30pack")
        },
        {
            path: "/investments",
            view: () => console.log("investments")
        },
        {
            path: "/support",
            view: () => console.log("support")
        },
        {
            path: "/videos",
            view: () => console.log("videos")
        }

    ]
    const checkRoutes = routes.map((route) => {
        return {
            route: route,
            isMatched: location.pathname === route.path
        }
    })


    let matchedRoute = checkRoutes.find(route => route.isMatched)

    if (!matchedRoute) {
        matchedRoute = {
            route: {
                path: "/not-found",
                view: () => console.log("not-found"),
                isMatched: true
            }
        }
    }
    console.log(matchedRoute.route.view());

}

router()

document.addEventListener("DOMContentLoaded", () => {
    router()
})