const menuItemsByCategory: Record<string, { itemName: string; ingredients: string[]; price: string }[]> = {
  Breakfast: [
    { itemName: "Pancake Stack", ingredients: ["Fluffy pancakes", "Maple syrup", "Butter"], price: "$7.99" },
    { itemName: "Avocado Toast", ingredients: ["Sourdough bread", "Avocado", "Poached egg"], price: "$9.49" },
    { itemName: "Omelette Deluxe", ingredients: ["Cheese", "Mushrooms", "Bell peppers"], price: "$8.99" },
  ],
  Pizza: [
    { itemName: "Margherita Pizza", ingredients: ["Tomato sauce", "Mozzarella", "Basil"], price: "$12.99" },
    { itemName: "Pepperoni Feast", ingredients: ["Pepperoni", "Mozzarella", "Tomato sauce"], price: "$14.49" },
    { itemName: "BBQ Chicken Pizza", ingredients: ["Grilled chicken", "BBQ sauce", "Onions"], price: "$15.99" },
  ],
  Sushi: [
    { itemName: "Salmon Nigiri", ingredients: ["Fresh salmon", "Sushi rice", "Soy sauce"], price: "$9.99" },
    { itemName: "California Roll", ingredients: ["Crab", "Avocado", "Cucumber"], price: "$8.49" },
    { itemName: "Tuna Sashimi", ingredients: ["Tuna slices", "Soy sauce", "Wasabi"], price: "$10.99" },
  ],
  Italian: [
    { itemName: "Spaghetti Carbonara", ingredients: ["Pasta", "Egg yolk", "Parmesan"], price: "$13.99" },
    { itemName: "Lasagna", ingredients: ["Beef", "Tomato sauce", "Mozzarella"], price: "$14.99" },
    { itemName: "Bruschetta", ingredients: ["Tomatoes", "Basil", "Olive oil"], price: "$7.99" },
  ],
  Indian: [
    { itemName: "Chicken Tikka Masala", ingredients: ["Grilled chicken", "Tomato sauce", "Spices"], price: "$11.99" },
    { itemName: "Paneer Butter Masala", ingredients: ["Paneer cheese", "Butter sauce", "Spices"], price: "$10.49" },
    { itemName: "Garlic Naan", ingredients: ["Naan bread", "Garlic", "Butter"], price: "$3.99" },
  ],
  Burgers: [
    { itemName: "Classic Cheeseburger", ingredients: ["Beef patty", "Cheddar cheese", "Lettuce"], price: "$9.99" },
    { itemName: "BBQ Bacon Burger", ingredients: ["Beef patty", "BBQ sauce", "Bacon"], price: "$10.99" },
    { itemName: "Mushroom Swiss Burger", ingredients: ["Beef patty", "Swiss cheese", "Mushrooms"], price: "$11.49" },
  ],
  "Fast Food": [
    { itemName: "Crispy Chicken Sandwich", ingredients: ["Fried chicken", "Lettuce", "Mayo"], price: "$8.49" },
    { itemName: "Loaded Fries", ingredients: ["Fries", "Cheese", "Bacon"], price: "$6.99" },
    { itemName: "Hot Wings", ingredients: ["Chicken wings", "Buffalo sauce", "Celery"], price: "$9.49" },
  ],
  Korean: [
    { itemName: "Bibimbap", ingredients: ["Rice", "Vegetables", "Egg"], price: "$12.99" },
    { itemName: "Korean Fried Chicken", ingredients: ["Crispy chicken", "Spicy sauce", "Sesame seeds"], price: "$13.49" },
    { itemName: "Kimchi Jjigae", ingredients: ["Kimchi", "Tofu", "Pork"], price: "$11.99" },
  ],
  Asian: [
    { itemName: "Pad Thai", ingredients: ["Rice noodles", "Shrimp", "Peanuts"], price: "$13.99" },
    { itemName: "Spring Rolls", ingredients: ["Vegetables", "Rice paper", "Sweet chili sauce"], price: "$7.99" },
    { itemName: "Teriyaki Chicken", ingredients: ["Chicken", "Teriyaki sauce", "Sesame"], price: "$12.49" },
  ],
  Healthy: [
    { itemName: "Quinoa Bowl", ingredients: ["Quinoa", "Roasted vegetables", "Tahini dressing"], price: "$11.49" },
    { itemName: "Kale Caesar Salad", ingredients: ["Kale", "Parmesan", "Caesar dressing"], price: "$10.99" },
    { itemName: "Grilled Salmon", ingredients: ["Salmon fillet", "Lemon", "Asparagus"], price: "$15.99" },
  ],
  Vegan: [
    { itemName: "Tofu Stir-Fry", ingredients: ["Tofu", "Broccoli", "Ginger sauce"], price: "$10.49" },
    { itemName: "Chickpea Curry", ingredients: ["Chickpeas", "Coconut milk", "Turmeric"], price: "$9.99" },
    { itemName: "Vegan Burger", ingredients: ["Black bean patty", "Avocado", "Lettuce"], price: "$11.49" },
  ],
  Desserts: [
    { itemName: "Chocolate Lava Cake", ingredients: ["Dark chocolate", "Vanilla ice cream", "Cocoa powder"], price: "$8.99" },
    { itemName: "Cheesecake", ingredients: ["Cream cheese", "Graham cracker crust", "Strawberry topping"], price: "$9.49" },
    { itemName: "Tiramisu", ingredients: ["Espresso", "Mascarpone", "Cocoa"], price: "$10.99" },
  ],
  "Seafood": [
    { itemName: "Grilled Lobster", ingredients: ["Lobster tail", "Garlic butter", "Lemon"], price: "$19.99" },
    { itemName: "Shrimp Scampi", ingredients: ["Shrimp", "Garlic", "Pasta"], price: "$17.49" },
    { itemName: "Seared Tuna", ingredients: ["Tuna steak", "Sesame crust", "Soy glaze"], price: "$16.99" },
  ],
};

export const restaurants = [
  {
    id: 0,
    name: ["Sushi", "Asia", "Seafood"],
    placeName: "Seafood Buffet Dining Ginza Happo",
    deliveryTime: "35 min",
    deliveryMoney: "Free",
    distance: "2.1km",
    location: "Ulaanbaatar, BZD",
    openingHours: {
      open: 9,
      close: 16,
    },
    rating: "4.5(120+)",
    image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=3132",
    menu: [
      {
        itemName: "Salmon Nigiri",
        ingredients: ["Fresh salmon", "Sushi rice", "Soy sauce", "Wasabi"],
        price: "$8.99",
        image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=2270",
      },
      {
        itemName: "Tuna Sashimi",
        ingredients: ["Tuna", "Soy sauce", "Ginger", "Wasabi"],
        price: "$12.99",
        image: "https://images.unsplash.com/photo-1615361200141-f45040f367be?q=80&w=3164",
      },
    ],
  },
  {
    id: 1,
    name: ["Sushi", "Asia", "Seafood"],
    placeName: "Sushi Tanaka",
    deliveryTime: "70 min",
    deliveryMoney: "$2.50",
    distance: "4.5km",
    location: "Ulaanbaatar, BZD",
    openingHours: {
      open: 9,
      close: 22,
    },
    rating: "4.7(95+)",
    image: "https://plus.unsplash.com/premium_photo-1668146927669-f2edf6e86f6f?q=80&w=2940",
    menu: [
      {
        itemName: "California Roll",
        ingredients: ["Crab", "Avocado", "Cucumber", "Seaweed"],
        price: "$9.99",
        image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=2270",
      },
      {
        itemName: "Dragon Roll",
        ingredients: ["Eel", "Avocado", "Cucumber", "Unagi sauce"],
        price: "$14.99",
        image: "https://images.unsplash.com/photo-1615361200141-f45040f367be?q=80&w=3164",
      },
    ],
  },
  {
    id: 2,
    name: ["Burgers", "Fast food"],
    placeName: "Grill & Chill Burgers",
    deliveryTime: "35 min",
    deliveryMoney: "$1.50",
    distance: "3.0km",
    location: "Ulaanbaatar, BZD",
    rating: "4.7(210+)",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=3099",
    menu: [
      {
        itemName: "Classic Cheeseburger",
        ingredients: ["Beef patty", "Cheddar cheese", "Lettuce", "Tomato", "Pickles"],
        price: "$6.99",
        image: "https://plus.unsplash.com/premium_photo-1684534125661-614f59f16f2e?q=80&w=2940",
      },
      {
        itemName: "BBQ Bacon Burger",
        ingredients: ["Beef patty", "BBQ sauce", "Bacon", "Cheddar cheese"],
        price: "$8.99",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=3099",
      },
    ],
  },
  {
    id: 3,
    name: ["Pizza", "Italian"],
    placeName: "Napoli Pizza Hub",
    deliveryTime: "30 min",
    deliveryMoney: "Free",
    distance: "1.5km",
    location: "Ulaanbaatar, Sukhbaatar",
    rating: "4.7(210+)",
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2940",
    menu: [
      {
        itemName: "Margherita Pizza",
        ingredients: ["Tomato sauce", "Mozzarella", "Basil"],
        price: "$10.99",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=3087",
      },
      {
        itemName: "Pepperoni Pizza",
        ingredients: ["Tomato sauce", "Mozzarella", "Pepperoni"],
        price: "$11.99",
        image: "https://images.unsplash.com/photo-1593246049226-ded77bf90326?q=80&w=3024",
      },
    ],
  },
  {
    id: 4,
    name: ["Indian", "Asia"],
    placeName: "Taj Mahal Indian Restaurant",
    deliveryTime: "40 min",
    deliveryMoney: "Free",
    distance: "2.5km",
    location: "Ulaanbaatar, Sukhbaatar",
    rating: "4.8(250+)",
    image: "https://plus.unsplash.com/premium_photo-1694506374847-ced565472398?q=80&w=2940",
    menu: [
      {
        itemName: "Butter Chicken",
        ingredients: ["Chicken", "Tomato sauce", "Butter", "Cream"],
        price: "$13.99",
        image: "https://plus.unsplash.com/premium_photo-1694141253763-209b4c8f8ace?q=80&w=2938",
      },
      {
        itemName: "Vegetable Biryani",
        ingredients: ["Basmati rice", "Mixed vegetables", "Indian spices"],
        price: "$11.99",
        image: "https://images.unsplash.com/photo-1625398407796-82650a8c135f?q=80&w=2960",
      },
    ],
  },
];
const additionalRestaurants = [
  {
    id: 5,
    name: ["Breakfast", "Healthy"],
    placeName: "Green Morning Café",
    deliveryTime: "25 min",
    deliveryMoney: "$1.00",
    distance: "1.8km",
    location: "Ulaanbaatar, Chingeltei",
    rating: "4.6(150+)",
    openingHours: {
      open: 7,
      close: 15,
    },
    image: "https://images.unsplash.com/photo-1542691457-cbe4df041eb2?q=80&w=3087",
    menu: [
      {
        itemName: "Avocado Toast",
        ingredients: ["Sourdough bread", "Avocado", "Poached egg"],
        price: "$9.49",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=3087",
      },
      {
        itemName: "Omelette Deluxe",
        ingredients: ["Cheese", "Mushrooms", "Bell peppers"],
        price: "$8.99",
        image: "https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=2940",
      },
    ],
  },
  {
    id: 6,
    name: ["Pizza", "Italian"],
    placeName: "Pizzeria Roma",
    deliveryTime: "40 min",
    deliveryMoney: "$2.00",
    distance: "3.2km",
    location: "Ulaanbaatar, Bayanzurkh",
    rating: "4.8(230+)",
    openingHours: {
      open: 10,
      close: 22,
    },
    image: "https://images.unsplash.com/photo-1593246049226-ded77bf90326?q=80&w=3024",
    menu: [
      {
        itemName: "Margherita Pizza",
        ingredients: ["Tomato sauce", "Mozzarella", "Basil"],
        price: "$12.99",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=3087",
      },
      {
        itemName: "BBQ Chicken Pizza",
        ingredients: ["Grilled chicken", "BBQ sauce", "Onions"],
        price: "$15.99",
        image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2940",
      },
    ],
  },
  {
    id: 7,
    name: ["Indian", "Healthy"],
    placeName: "Curry Palace",
    deliveryTime: "50 min",
    deliveryMoney: "$2.50",
    distance: "4.0km",
    location: "Ulaanbaatar, Songinokhairkhan",
    rating: "4.7(190+)",
    openingHours: {
      open: 11,
      close: 23,
    },
    image: "https://plus.unsplash.com/premium_photo-1694506374847-ced565472398?q=80&w=2940",
    menu: [
      {
        itemName: "Chicken Tikka Masala",
        ingredients: ["Grilled chicken", "Tomato sauce", "Spices"],
        price: "$11.99",
        image: "https://plus.unsplash.com/premium_photo-1694141253763-209b4c8f8ace?q=80&w=2938",
      },
      {
        itemName: "Paneer Butter Masala",
        ingredients: ["Paneer cheese", "Butter sauce", "Spices"],
        price: "$10.49",
        image: "https://images.unsplash.com/photo-1625398407796-82650a8c135f?q=80&w=2960",
      },
    ],
  },
  {
    id: 8,
    name: ["Burgers", "Fast Food"],
    placeName: "Big Bite Burgers",
    deliveryTime: "30 min",
    deliveryMoney: "$1.50",
    distance: "2.3km",
    location: "Ulaanbaatar, Bayangol",
    rating: "4.9(280+)",
    openingHours: {
      open: 9,
      close: 21,
    },
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=3099",
    menu: [
      {
        itemName: "Classic Cheeseburger",
        ingredients: ["Beef patty", "Cheddar cheese", "Lettuce"],
        price: "$9.99",
        image: "https://plus.unsplash.com/premium_photo-1684534125661-614f59f16f2e?q=80&w=2940",
      },
      {
        itemName: "BBQ Bacon Burger",
        ingredients: ["Beef patty", "BBQ sauce", "Bacon"],
        price: "$10.99",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=3099",
      },
    ],
  },
  {
    id: 9,
    name: ["Seafood", "Healthy"],
    placeName: "Ocean's Catch",
    deliveryTime: "45 min",
    deliveryMoney: "$3.00",
    distance: "5.0km",
    location: "Ulaanbaatar, Sukhbaatar",
    rating: "4.6(170+)",
    openingHours: {
      open: 12,
      close: 22,
    },
    image: "https://images.unsplash.com/photo-1563612116625-3012372fccce?q=80&w=2656",
    menu: [
      {
        itemName: "Grilled Lobster",
        ingredients: ["Lobster tail", "Garlic butter", "Lemon"],
        price: "$19.99",
        image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=3132",
      },
      {
        itemName: "Seared Tuna",
        ingredients: ["Tuna steak", "Sesame crust", "Soy glaze"],
        price: "$16.99",
        image: "https://images.unsplash.com/photo-1615361200141-f45040f367be?q=80&w=3164",
      },
    ],
  },
  {
    id: 10,
    name: ["Desserts"],
    placeName: "Sweet Tooth Bakery",
    deliveryTime: "25 min",
    deliveryMoney: "Free",
    distance: "1.5km",
    location: "Ulaanbaatar, Khan-Uul",
    rating: "4.9(300+)",
    openingHours: {
      open: 8,
      close: 20,
    },
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=3087",
    menu: [
      {
        itemName: "Chocolate Lava Cake",
        ingredients: ["Dark chocolate", "Vanilla ice cream", "Cocoa powder"],
        price: "$8.99",
        image: "https://images.unsplash.com/photo-1563612116625-3012372fccce?q=80&w=2656",
      },
      {
        itemName: "Cheesecake",
        ingredients: ["Cream cheese", "Graham cracker crust", "Strawberry topping"],
        price: "$9.49",
        image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=1547",
      },
    ],
  },
];

// Append new restaurants to the existing list
restaurants.push(...additionalRestaurants);




for (let i = 0; i < restaurants.length; i++) {
  let assignedMenu: any[] = [];
  
  for (const category of restaurants[i].name) {
    if (menuItemsByCategory[category]) {
      assignedMenu = assignedMenu.concat(menuItemsByCategory[category].slice(0, 2));
    }
  }

  restaurants[i].menu = assignedMenu.length ? assignedMenu : [{ itemName: "Chef's Special", ingredients: ["Secret recipe"], price: "$12.99" }];
  
  restaurants[i].menu.forEach((item) => {
    item.image = restaurants[i].image;
  });
}

export const categories = [
  "Breakfast",
  "Pizza",
  "Places",
  "Italian",
  "Indian",
  "Burgers",
  "Fast Food",
  "Korean",
  "Asian",
  "Healthy",
  "Vegan",
  "Desserts",
  "Ice Cream",
  "Seafood",
];

