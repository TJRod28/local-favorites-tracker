const form = document.getElementById("add-favorite-form");
const favoritesList = document.getElementById("favorites-list");

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

function addFavorite(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const category = document.getElementById("category").value;

    if (!name || !category) {
        alert("Please fill in name and category!");
        return;
    }

    const newFavorite = {
        name: name,
        category: category,
        rating: parseInt(document.getElementById("rating").value),
        notes: document.getElementById("notes").value.trim(),
        dateAdded: new Date ().toLocaleDateString()
    };

    myFavorite.push(newFavorite)
    form.reset();
    displayFavorites();
}

form.addEventListener("submit", addFavorite);