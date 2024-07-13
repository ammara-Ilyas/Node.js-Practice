const bioData = [
  {
    name: "Maha",
    age: 20,
    status: "student",
  },
];
const bioJSon = JSON.stringify(bioData);
console.log(JSON.stringify(bioData));
console.log(JSON.parse(bioJSon));
