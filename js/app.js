let myFavorite = {
    name: "Joe's Pizza and Pasta",
    category: "restaurant",
    rating: 5,
    notes: "Great place for custom pizza and filling bread rolls",
    dateAdded: "September 2026"
};
console.log(myFavorite.name);
let displayText = myFavorite.name + " - Rating: " + myFavorite.rating + "/5";

let today = new Date().toLocaleDateString();
console.log(today); // 9/16/26

console.log(myFavorite); // click the arrow to expand it
console.log(typeof myFavorite.name); // string
console.log(typeof myFavorite.rating); //number

let placeName = "Joe's Pizza and Pasta";
let rating = 5;
console.log(placeName + " - " + rating + "/5");
console.log("⭐".repeat(rating) + " " + placeName);

function greetFavorite(placeName, rating) {
    console.log(placeName + " has " + rating + " stars! ");
}
greetFavorite("Starbucks", 5); //"Starbucks has 5 stars!"

const nameInput = document.getElementById("name");
console.log(nameInput.value); //what the user typed

const practiceForm = document.getElementById("add-favorite-form");

function handleSubmit(event) {
    event.preventDefault(); //stop the page reload
    console.log("You typed: " + nameInput.value);
}

practiceForm.addEventListener("submit", handleSubmit);