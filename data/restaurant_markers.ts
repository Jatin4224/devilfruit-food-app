export interface RestaurantMarker {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  cuisine: string[];
  rating: number;
  deliveryTime: string;
  deliveryFee: number;
}

export const restaurantMarkers: RestaurantMarker[] = [
  {
    id: "rest_001",
    name: "Baratie",
    latitude: 51.9625,
    longitude: 7.6257,
    cuisine: ["Seafood", "Fine Dining", "Pirate Feast"],
    rating: 4.9,
    deliveryTime: "20-30 min",
    deliveryFee: 2.5,
  },
  {
    id: "rest_002",
    name: "Luffy’s Meat House",
    latitude: 51.9618,
    longitude: 7.6289,
    cuisine: ["BBQ", "Meat", "Burgers"],
    rating: 4.8,
    deliveryTime: "15-25 min",
    deliveryFee: 2.0,
  },
  {
    id: "rest_003",
    name: "Grand Line Sushi",
    latitude: 51.9635,
    longitude: 7.6234,
    cuisine: ["Japanese", "Sushi", "Seafood"],
    rating: 4.7,
    deliveryTime: "25-35 min",
    deliveryFee: 2.9,
  },
  {
    id: "rest_004",
    name: "Red Hawk Grill",
    latitude: 51.9642,
    longitude: 7.6312,
    cuisine: ["Grill", "Steak", "Fire Kitchen"],
    rating: 4.6,
    deliveryTime: "20-30 min",
    deliveryFee: 2.3,
  },
  {
    id: "rest_005",
    name: "Sanji’s Kitchen",
    latitude: 51.9598,
    longitude: 7.6401,
    cuisine: ["Italian", "French", "Luxury Dining"],
    rating: 5.0,
    deliveryTime: "25-40 min",
    deliveryFee: 3.1,
  },
  {
    id: "rest_006",
    name: "Devil Fruit Café",
    latitude: 51.9611,
    longitude: 7.6298,
    cuisine: ["Desserts", "Drinks", "Café"],
    rating: 4.5,
    deliveryTime: "15-20 min",
    deliveryFee: 1.7,
  },
  {
    id: "rest_007",
    name: "Thousand Sunny Bites",
    latitude: 51.9589,
    longitude: 7.6445,
    cuisine: ["Street Food", "Snacks", "Pirate Meals"],
    rating: 4.7,
    deliveryTime: "20-35 min",
    deliveryFee: 2.2,
  },
  {
    id: "rest_008",
    name: "Binks Sake Bar",
    latitude: 51.9603,
    longitude: 7.6311,
    cuisine: ["Drinks", "Seafood", "Bar Food"],
    rating: 4.6,
    deliveryTime: "20-30 min",
    deliveryFee: 2.4,
  },
  {
    id: "rest_009",
    name: "Going Merry Bakery",
    latitude: 51.9628,
    longitude: 7.6278,
    cuisine: ["Bakery", "Desserts", "Coffee"],
    rating: 4.8,
    deliveryTime: "15-25 min",
    deliveryFee: 1.9,
  },
  {
    id: "rest_010",
    name: "Marineford Tacos",
    latitude: 51.9711,
    longitude: 7.6189,
    cuisine: ["Mexican", "Tacos", "Street Food"],
    rating: 4.5,
    deliveryTime: "25-35 min",
    deliveryFee: 2.1,
  },
];
