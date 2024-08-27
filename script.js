// var obj = {
//      "key" : "value",
//     "name" : "Ahmed"
// }

// console.log(obj);
// // print particular value 

// console.log(obj.name);
// // adding key and value

// obj.gen = "male"

// console.log(obj); 



// let my_Resume = {
//     "basics": {
//       "name": "Ahmed",
//       "email": "sudheer.ai@aol.com",
//       "degree": "B.E",
//       "location": [
//         "city : Chennai",
//         "state : Tamilnadu",
//         "country : India"
//       ],
//     },
    
//    	"education": [
//       {
//         "institution": "SKR College Of Engineering",
//         "department": "CSE",
// 	      "batch": "2009",
//         "gpa": 6.4,
//       }
//     ],

//     "skills": [
//       {
//         "name": "javascript",
//         "level": "beginner"
//       }
//     ],
//     "languages_known": [
//       {
//         "language": "Tamil",
//       }
//     ],
//     "interests": [
//       {
//         "name": "surfing, listening-podcast, cycling,",
//       }
//     ]
//   }
//   console.log(my_Resume);



//For the given JSON iterate over all for loops (for, forEach, for in, for of)

// var json = [{

//     "id" : "ahmed1", 
//     "msg"   : "For the given JSON iterate over all for loops (for, forEach, for in, for of)",
//     "task" : "zen portal task",
//     "mail": "sudheer.ai@icloud .com"

//   },

//   {

//     "id" : "ahmed2", 
//     "msg"   : "For the given JSON iterate over all for loops (for, forEach, for in, for of)",
//     "task" : "zen portal task",
//     "mail": "sudheer.ai@aol.com"

//   }];
// console.log(json);


//FOR LOOP :

// for(var i = 0; i < json.length; i++) {
//     var obj = json[i];

//     console.log(obj.id);
//     console.log(obj.msg);
//     console.log(obj.task);
//     console.log(obj.mail);
//     console.log("");

// }


// FOR EACH :

//  json.forEach(function(obj) { 
//   console.log(obj.msg);
//  });

//  json.forEach(function(obj) {
//   console.log(obj.mail);
//  });
 
//  json.forEach(function(obj) {
//   console.log(obj.id);
//  });

// FOR IN :

var bson = [{

  "id" : "sudheer", 
  "msg"   : "For the given JSON iterate over all for loops (for, forEach, for in, for of)",
  "task" : "zen portal task",
  "mail": "sudheer.ai@icloud .com"

},
{

  "id" : "sabi", 
  "msg"   : "For the given JSON iterate over all for loops (for, forEach, for in, for of)",
  "task" : "zen portal task",
  "mail": "sudheer.ai@aol.com"

}];



// for (var i in bson) {
// if (bson.hasOwnProperty(i)) {
//   console.log(i, bson[i].id);
//   console.log(bson[i].msg);
// }
// }



// //FOR OF

// let text = "";
// for (let x of bson[i].id) {
//  text = text + x; 
// }
//  console.log(text);

//json array of objects

var res = [ {
  "name" : "Sabi",
  "age" : 31
},
{
  "name" : "Hamju",
  "age" : 24
}
];

for(var i=0; i<res.length; i++) {
  console.log(res[i].name, res[i].age);
}

let cson = "Sudheer-Ahmed"
let text = "";
for (let x of cson) {
text += x + " "; 
console.log("\n")
}
console.log(text);



// var arr=[
//   {
//        "name": "John",
//        "age": "20"
//     },
//   {
//        "name": "Doe",
//        "age": "21"
//     },
//    {
//        "name": "ram",
//        "age": "22"
//     },
//   {
//        "name": "rupan",
//        "age": "23"
//   }
// ];
