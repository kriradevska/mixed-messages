//arrays for the soups available
let meatSoup = ['Meatball Soup','Pork and Rice Noodle Soup','Italian Sausage and Bean Soup','Slow-Cooked Mexican Beef Soup','Bratwurst Soup','Asian Vegetable -Beef Soup','Chicken Soup'];

let vegetarianSoup = ['Simple Tomato Soup','Ribollita','Maroccan Lentil Quinoa Soup','Curried Zucchini Soup','Wild Mushroom and Sunchoke Soup','Potato Leek Soup','Creamy Mushroom Soup'];

let veganSoup = ['Creamy Vegan Broccoli Soup','Curry Lentil Soup','Cauliflower Soup with Moroccan Spices','Vegan Corn Chowder','Tuscan Soup with White Beans','Kale Soup with Mushrooms and Garlic','Curried Carrot Soup'];

//function for randomization
let randomIndex = (arr) => arr[Math.floor(Math.random()*arr.length)];

//greeting function (for aestetic)
let greetings = () => {
console.log('Soup of the Day Generator');
console.log('=====================');
console.log(' ');
console.log('Welcome to our Soup of the Day generator. We really like soups!');
console.log('These are our suggestions:')
console.log(' ');
};
greetings();

//function for suggestion
let suggestion = () => {
    console.log(`For the meat-lovers, we suggest ${randomIndex(meatSoup)}.`);
    console.log(`For the vegetarians, we suggest ${randomIndex(vegetarianSoup)}.`);
    console.log(`For the vegans, we suggest ${randomIndex(veganSoup)}.`);
    console.log('Hope you enjoy!')
};
suggestion();

console.log("       (");
console.log("    )    )");
console.log('  _.(--"("""--.._');
console.log("/, _..-----).._,  \ ");
console.log("|  `'''-----'''`  | ");
console.log(" .               / ");
console.log("  '.           .' ");
console.log("    '--.....--' ");


