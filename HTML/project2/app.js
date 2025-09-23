// Sample data for pets
const pets = [
    { id: 1, name: "Golden Retriever", type: "dog", price: 500, image: "golden-retriever.jpg" },
    { id: 2, name: "Labrador", type: "dog", price: 400, image: "labrador.jpg" },
    { id: 3, name: "German Shepherd", type: "dog", price: 600, image: "german-shepherd.jpg" },
    { id: 4, name: "Bulldog", type: "dog", price: 450, image: "bulldog.jpg" }
];

// Function to display pet listings
const petsContainer = document.getElementById("petsContainer");

pets.forEach(pet => {
    const petItem = document.createElement("div");
    petItem.classList.add("pet-item");
    petItem.innerHTML = `
        <img src="${pet.image}" alt="${pet.name}">
        <h3>${pet.name}</h3>
        <p>Price: $${pet.price}</p>
        <button onclick="addToCart(${pet.id})">Add to Cart</button>
    `;
    petsContainer.appendChild(petItem);
});

// Cart logic (store in localStorage)
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(petId) {
    const pet = pets.find(p => p.id === petId);
    cart.push(pet);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${pet.name} added to your cart!`);
}
