export interface Restaurant {
  id: string;
  name: string;
  description: string;
  cuisine: string[];
  rating: number;
  reviewCount: number;
  deliveryTime: string;
  deliveryFee: number;
  minOrder: number;
  image: ReturnType<typeof require>;
  location: {
    address: string;
    latitude: number;
    longitude: number;
  };
  tags: string[];
  isOpen: boolean;
  openingHours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
}

export const restaurants: Restaurant[] = [
  {
    id: "rest_001",
    name: "Baratie",
    description: "Legendary floating restaurant serving pirate feasts",
    cuisine: ["Seafood", "Fine Dining", "Pirate Cuisine"],
    rating: 4.9,
    reviewCount: 5247,
    deliveryTime: "20-30 min",
    deliveryFee: 2.9,
    minOrder: 15.0,
    image: require("@/assets/images/dummy/baratie.png"),
    location: {
      address: "Grand Line Harbor",
      latitude: 51.9625,
      longitude: 7.6257,
    },
    tags: ["Legendary Chef", "Premium Dining"],
    isOpen: true,
    openingHours: {
      monday: "11:00-23:00",
      tuesday: "11:00-23:00",
      wednesday: "11:00-23:00",
      thursday: "11:00-23:00",
      friday: "11:00-00:00",
      saturday: "12:00-00:00",
      sunday: "12:00-22:00",
    },
  },

  {
    id: "rest_002",
    name: "Luffy’s Meat House",
    description: "Massive meat platters for hungry pirates",
    cuisine: ["BBQ", "Burgers", "Meat"],
    rating: 4.8,
    reviewCount: 3891,
    deliveryTime: "15-25 min",
    deliveryFee: 2.2,
    minOrder: 12.0,
    image: require("@/assets/images/dummy/luffy_meat_house.png"),
    location: {
      address: "Foosha Village Street",
      latitude: 51.9618,
      longitude: 7.6289,
    },
    tags: ["Popular", "King Size Meals"],
    isOpen: true,
    openingHours: {
      monday: "11:30-23:00",
      tuesday: "11:30-23:00",
      wednesday: "11:30-23:00",
      thursday: "11:30-23:00",
      friday: "11:30-00:00",
      saturday: "12:00-00:00",
      sunday: "12:00-22:00",
    },
  },

  {
    id: "rest_003",
    name: "Grand Line Sushi",
    description: "Fresh sushi from the deepest seas",
    cuisine: ["Japanese", "Sushi", "Seafood"],
    rating: 4.7,
    reviewCount: 1892,
    deliveryTime: "25-35 min",
    deliveryFee: 3.1,
    minOrder: 16.0,
    image: require("@/assets/images/dummy/grandline_sushi.png"),
    location: {
      address: "Water 7 Dockyard",
      latitude: 51.9635,
      longitude: 7.6234,
    },
    tags: ["Fresh Catch", "Premium Quality"],
    isOpen: true,
    openingHours: {
      monday: "12:00-22:00",
      tuesday: "12:00-22:00",
      wednesday: "12:00-22:00",
      thursday: "12:00-22:00",
      friday: "12:00-23:00",
      saturday: "12:00-23:00",
      sunday: "13:00-21:00",
    },
  },

  {
    id: "rest_004",
    name: "Red Hawk Grill",
    description: "Fire grilled pirate meals with spicy flavors",
    cuisine: ["Grill", "Steak", "Spicy Food"],
    rating: 4.6,
    reviewCount: 2431,
    deliveryTime: "20-30 min",
    deliveryFee: 2.5,
    minOrder: 14.0,
    image: require("@/assets/images/dummy/redhawk_grill.png"),
    location: {
      address: "Marineford District",
      latitude: 51.9642,
      longitude: 7.6312,
    },
    tags: ["Spicy", "Fire Grill"],
    isOpen: true,
    openingHours: {
      monday: "11:00-22:30",
      tuesday: "11:00-22:30",
      wednesday: "11:00-22:30",
      thursday: "11:00-22:30",
      friday: "11:00-00:00",
      saturday: "12:00-00:00",
      sunday: "12:00-22:00",
    },
  },

  {
    id: "rest_005",
    name: "Sanji’s Kitchen",
    description: "Elegant dishes crafted by the greatest pirate chef",
    cuisine: ["Italian", "French", "Luxury Dining"],
    rating: 5.0,
    reviewCount: 4124,
    deliveryTime: "25-40 min",
    deliveryFee: 3.5,
    minOrder: 18.0,
    image: require("@/assets/images/dummy/sanji_kitchen.png"),
    location: {
      address: "Baratie Upper Deck",
      latitude: 51.9598,
      longitude: 7.6401,
    },
    tags: ["Chef Special", "Luxury"],
    isOpen: true,
    openingHours: {
      monday: "12:00-23:00",
      tuesday: "12:00-23:00",
      wednesday: "12:00-23:00",
      thursday: "12:00-23:00",
      friday: "12:00-00:00",
      saturday: "12:00-00:00",
      sunday: "12:00-22:00",
    },
  },

  {
    id: "rest_006",
    name: "Devil Fruit Café",
    description: "Magical desserts and colorful pirate drinks",
    cuisine: ["Desserts", "Drinks", "Café"],
    rating: 4.5,
    reviewCount: 1678,
    deliveryTime: "15-20 min",
    deliveryFee: 1.9,
    minOrder: 8.0,
    image: require("@/assets/images/dummy/devilfruit_cafe.png"),
    location: {
      address: "Sabaody Food Plaza",
      latitude: 51.9611,
      longitude: 7.6298,
    },
    tags: ["Sweet Treats", "Anime Drinks"],
    isOpen: true,
    openingHours: {
      monday: "10:00-21:00",
      tuesday: "10:00-21:00",
      wednesday: "10:00-21:00",
      thursday: "10:00-21:00",
      friday: "10:00-22:00",
      saturday: "11:00-22:00",
      sunday: "11:00-20:00",
    },
  },

  {
    id: "rest_007",
    name: "Thousand Sunny Bites",
    description: "Street food and snacks for every pirate crew",
    cuisine: ["Street Food", "Snacks", "Fast Food"],
    rating: 4.7,
    reviewCount: 2134,
    deliveryTime: "20-30 min",
    deliveryFee: 2.1,
    minOrder: 10.0,
    image: require("@/assets/images/dummy/thousand_sunny.png"),
    location: {
      address: "Sunny Harbor",
      latitude: 51.9589,
      longitude: 7.6445,
    },
    tags: ["Crew Favorite", "Quick Bites"],
    isOpen: true,
    openingHours: {
      monday: "11:00-22:00",
      tuesday: "11:00-22:00",
      wednesday: "11:00-22:00",
      thursday: "11:00-22:00",
      friday: "11:00-23:00",
      saturday: "12:00-23:00",
      sunday: "12:00-22:00",
    },
  },

  {
    id: "rest_008",
    name: "Binks Sake Bar",
    description: "Legendary drinks and seafood tavern",
    cuisine: ["Drinks", "Seafood", "Bar Food"],
    rating: 4.6,
    reviewCount: 1422,
    deliveryTime: "20-30 min",
    deliveryFee: 2.6,
    minOrder: 11.0,
    image: require("@/assets/images/dummy/binks_bar.png"),
    location: {
      address: "Pirate Music Alley",
      latitude: 51.9603,
      longitude: 7.6311,
    },
    tags: ["Live Music", "Seafood Specials"],
    isOpen: true,
    openingHours: {
      monday: "11:00-22:00",
      tuesday: "11:00-22:00",
      wednesday: "11:00-22:00",
      thursday: "11:00-22:00",
      friday: "11:00-00:00",
      saturday: "11:00-00:00",
      sunday: "12:00-21:00",
    },
  },
];
