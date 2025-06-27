const restaurants = [
    {
        restaurant_image: "res_1",
        restaurant_name: "Drama",
        rating: 4.4,
        food_type: ["Modern Indian", "Asian", "Italian", "Continental"],
        price_for_two: 926,
        location: "Connaught Place, New Delhi",
        pet_friendly: true
    },
    {
        restaurant_image: "res_2",
        restaurant_name: "Spice Club",
        rating: 4.3,
        food_type: ["Indian", "Tandoori", "Drinks"],
        price_for_two: 981,
        location: "Karol Bagh, New Delhi",
        pet_friendly: false
    },
    {
        restaurant_image: "res_3",
        restaurant_name: "Saffron Route",
        rating: 3.8,
        food_type: ["Mughlai", "North Indian", "Biryani"],
        price_for_two: 688,
        location: "Hauz Khas, New Delhi",
        pet_friendly: true
    },
    {
        restaurant_image: "res_4",
        restaurant_name: "Biryani Blues",
        rating: 4.1,
        food_type: ["Hyderabadi", "Biryani"],
        price_for_two: 422,
        location: "Saket, New Delhi",
        pet_friendly: true
    },
    {
        restaurant_image: "res_5",
        restaurant_name: "The Curry Leaf",
        rating: 4.6,
        food_type: ["Indian", "South Indian"],
        price_for_two: 478,
        location: "Janakpuri, New Delhi",
        pet_friendly: false
    },
    {
        restaurant_image: "res_6",
        restaurant_name: "Masala Art",
        rating: 3.6,
        food_type: ["Tandoori", "North Indian", "Grill"],
        price_for_two: 637,
        location: "Vasant Kunj, New Delhi",
        pet_friendly: false
    },
    {
        restaurant_image: "res_7",
        restaurant_name: "Tandoori Flames",
        rating: 4.8,
        food_type: ["Kebabs", "Indian"],
        price_for_two: 1093,
        location: "CP, New Delhi",
        pet_friendly: false
    },
    {
        restaurant_image: "res_8",
        restaurant_name: "Sizzle House",
        rating: 4.2,
        food_type: ["Sizzlers", "Continental", "Desserts"],
        price_for_two: 541,
        location: "Lajpat Nagar, New Delhi",
        pet_friendly: true
    },
    {
        restaurant_image: "res_9",
        restaurant_name: "Curry Nation",
        rating: 4.2,
        food_type: ["Indian", "Chinese", "Thali"],
        price_for_two: 481,
        location: "Rohini, New Delhi",
        pet_friendly: false
    },
    {
        restaurant_image: "res_10",
        restaurant_name: "Tiffin Tales",
        rating: 3.7,
        food_type: ["Home Food", "Tiffin", "South Indian"],
        price_for_two: 988,
        location: "GTB Nagar, New Delhi",
        pet_friendly: true
    },
    {
        restaurant_image: "res_11",
        restaurant_name: "Food Garage",
        rating: 4.2,
        food_type: ["Burgers", "Pasta", "Wraps"],
        price_for_two: 826,
        location: "Kalkaji, New Delhi",
        pet_friendly: false
    }
];

function generateStars(rating) {
	const fullStars = Math.floor(rating);
	const halfStar = rating - fullStars >= 0.5;
	let stars = "";

	for (let i = 0; i < fullStars; i++) {
		stars += '<i class="fa-solid fa-star"></i>';
	}
	if (halfStar)  stars += '<i class="fa-solid fa-star-half-stroke"></i>';

 	return stars;
}

function createRestaurantCards(restaurants) {
  	const container = document.getElementById("cards-container");

  	restaurants.forEach(rest => {
    	const card = document.createElement("div");
    	card.className = "card";

		card.innerHTML = `
		<div class="image">
			<img src="${rest.restaurant_image}.jpg" alt="${rest.restaurant_name}">
			<div class="star-rating">${generateStars(rest.rating)}</div>
		</div>
		<div class="rest">
			<div class="rest_name">${rest.restaurant_name}</div>
			<div class="rating box">${rest.rating.toFixed(1)}</div>
		</div>
		<div class="food">
			<div class="food_name">${rest.food_type.join(", ")}</div>
			<div class="price">₹${rest.price_for_two} for two</div>
		</div>
		<div class="location">${rest.location}</div>
		`;

    	container.appendChild(card);
  	});
}
window.onload = createRestaurantCards(restaurants);





document.getElementById("pet").addEventListener("click" , (event) => {

    if (event.target.style.border === "2px solid hotpink")  {
        document.getElementById("cards-container").innerHTML = ""
        createRestaurantCards(restaurants);
        event.target.style.border = "none";
    }
    else {
        document.getElementById("cards-container").innerHTML = "";
        const result = restaurants.filter((obj) => obj.pet_friendly);
        createRestaurantCards(result);
        event.target.style.border = "2px solid hotpink";
    }
});


document.getElementById("rathigh").addEventListener("click", (event) => {

    if (event.target.style.border === "2px solid hotpink") {
        document.getElementById("cards-container").innerHTML = "";
        createRestaurantCards(restaurants);
        event.target.style.border = "none";
    } 
    else {
        document.getElementById("cards-container").innerHTML = "";
        const sorted = [...restaurants].sort((a, b) => b.rating - a.rating);
        createRestaurantCards(sorted);
        event.target.style.border = "2px solid hotpink";
    }
});


document.getElementById("pricehigh").addEventListener("click", (event) => {

    if (event.target.style.border === "2px solid hotpink") {
        document.getElementById("cards-container").innerHTML = "";
        createRestaurantCards(restaurants);
        event.target.style.border = "none";
    } 
    else {
        document.getElementById("cards-container").innerHTML = "";
        const sorted = [...restaurants].sort((a, b) => (b.price_for_two) - (a.price_for_two));
        createRestaurantCards(sorted);
        event.target.style.border = "2px solid hotpink";
    }
});



document.getElementById("pricelow").addEventListener("click", (event) => {

    if (event.target.style.border === "2px solid hotpink") {
        document.getElementById("cards-container").innerHTML = "";
        createRestaurantCards(restaurants);
        event.target.style.border = "none";
    } 
    else {
        document.getElementById("cards-container").innerHTML = "";
        const sorted = [...restaurants].sort((a, b) => a.price_for_two - b.price_for_two);
        createRestaurantCards(sorted);
        event.target.style.border = "2px solid hotpink";
    }
});

document.getElementById("alpha").addEventListener("click", (event) => {

    if (event.target.style.border === "2px solid hotpink") {
        document.getElementById("cards-container").innerHTML = "";
        createRestaurantCards(restaurants);
        event.target.style.border = "none";
    } 
    else {
        document.getElementById("cards-container").innerHTML = "";
        const sorted = [...restaurants].sort((a, b) => 
            a.restaurant_name.localeCompare(b.restaurant_name)
        );
        createRestaurantCards(sorted);
        event.target.style.border = "2px solid hotpink";
    }

});

document.getElementById("sorting").addEventListener("click", () => {
    if(document.querySelector(".modal").style.display === "flex") {
        document.querySelector(".modal").style.display = "none";
    }
    else {
        document.querySelector(".modal").style.display = "flex";
    }
});

document.getElementById("apply").addEventListener("click", () => {
    const element = document.querySelector('input[name="sort"]:checked').value;
    if(element === "pet") {
        document.getElementById("pet").click();
    }
    else if(element === "rathigh") {
        document.getElementById("rathigh").click();
    }
    else if(element === "pricelow") {
        document.getElementById("pricelow").click();
    }
    else if(element === "pricehigh") {
        document.getElementById("pricehigh").click();
    }
    else if(element === "alpha") {
        document.getElementById("alpha").click();
    }
    document.querySelector(".modal").style.display = "none";
});



document.getElementById("searchInput").addEventListener("input", function() {
    const searchTerm = this.value.toLowerCase();
    const filteredRestaurants = restaurants.filter(restaurant => 
        restaurant.food_type.some(type => type.toLowerCase().includes(searchTerm)) ||
        restaurant.restaurant_name.toLowerCase().includes(searchTerm)
    );
    document.getElementById("cards-container").innerHTML = "";
    createRestaurantCards(filteredRestaurants);
});
