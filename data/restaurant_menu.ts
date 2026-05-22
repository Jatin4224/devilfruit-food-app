export interface Dish {
  id: number;
  name: string;
  description: string;
  price: number;
  image: ReturnType<typeof require>;
  isPopular?: boolean;
}

export interface MenuCategory {
  category: string;
  subtitle?: string;
  dishes: Dish[];
}

export const devilFruitMenu: MenuCategory[] = [
  {
    category: "Captain Specials",
    subtitle: "Captain Specials",
    dishes: [
      {
        id: 1,
        name: "Gomu Gomu Meat Feast",
        description:
          "Massive grilled meat platter inspired by Luffy’s favorite pirate meal",
        price: 18.95,
        image: require("@/assets/images/dummy/menu/1.png"),
        isPopular: true,
      },
      {
        id: 2,
        name: "Devil Fruit Salad",
        description:
          "Fresh tropical fruits, berries, mint, and honey citrus dressing",
        price: 11.95,
        image: require("@/assets/images/dummy/menu/2.png"),
      },
    ],
  },

  {
    category: "Baratie Kitchen",
    subtitle: "Baratie Kitchen",
    dishes: [
      {
        id: 3,
        name: "Sanji Special Pasta",
        description:
          "Creamy garlic pasta with herbs, parmesan, and grilled chicken",
        price: 16.95,
        image: require("@/assets/images/dummy/menu/3.png"),
      },
      {
        id: 4,
        name: "Blue Sea Risotto",
        description:
          "Seafood risotto with shrimp, herbs, butter sauce, and parmesan",
        price: 17.95,
        image: require("@/assets/images/dummy/menu/4.png"),
      },
      {
        id: 5,
        name: "Red Hawk Pizza",
        description:
          "Spicy flame grilled chicken pizza with roasted peppers and cheese",
        price: 15.95,
        image: require("@/assets/images/dummy/menu/5.png"),
        isPopular: true,
      },
    ],
  },

  {
    category: "Pirate Starters",
    subtitle: "Pirate Starters",
    dishes: [
      {
        id: 6,
        name: "Going Merry Bruschetta",
        description:
          "Toasted bread with tomatoes, basil, garlic, and olive oil",
        price: 8.95,
        image: require("@/assets/images/dummy/menu/6.png"),
      },
      {
        id: 7,
        name: "Sea King Fries",
        description: "Crispy seasoned fries served with spicy pirate sauce",
        price: 7.5,
        image: require("@/assets/images/dummy/menu/7.png"),
      },
      {
        id: 8,
        name: "Grand Line Wings",
        description: "Hot grilled wings glazed with smoky barbecue sauce",
        price: 10.95,
        image: require("@/assets/images/dummy/menu/8.png"),
      },
    ],
  },

  {
    category: "Pirate Burgers",
    subtitle: "Pirate Burgers",
    dishes: [
      {
        id: 9,
        name: "Straw Hat Burger",
        description:
          "Double beef patty, cheddar cheese, caramelized onions, spicy mayo",
        price: 14.95,
        image: require("@/assets/images/dummy/menu/9.png"),
        isPopular: true,
      },
      {
        id: 10,
        name: "Black Beard Burger",
        description: "Smoky beef burger with BBQ sauce and crispy onions",
        price: 15.5,
        image: require("@/assets/images/dummy/menu/10.png"),
      },
      {
        id: 11,
        name: "Sunny Chicken Burger",
        description: "Crispy chicken burger with lettuce and creamy sauce",
        price: 13.95,
        image: require("@/assets/images/dummy/menu/1.png"),
      },
    ],
  },

  {
    category: "Grand Line Pizza",
    subtitle: "Grand Line Pizza",
    dishes: [
      {
        id: 12,
        name: "Marineford Margherita",
        description: "Classic mozzarella pizza with basil and tomato sauce",
        price: 12.9,
        image: require("@/assets/images/dummy/menu/2.png"),
      },
      {
        id: 13,
        name: "Dragon Fire Pizza",
        description: "Spicy pepperoni pizza with jalapeños and chili flakes",
        price: 15.9,
        image: require("@/assets/images/dummy/menu/3.png"),
        isPopular: true,
      },
      {
        id: 14,
        name: "Four Emperors Pizza",
        description: "Loaded pizza with four cheeses and premium toppings",
        price: 17.5,
        image: require("@/assets/images/dummy/menu/4.png"),
      },
    ],
  },

  {
    category: "Sweet Devil Fruits",
    subtitle: "Sweet Devil Fruits",
    dishes: [
      {
        id: 15,
        name: "Gomu Donuts",
        description:
          "Soft sugar donuts with chocolate drizzle and berry filling",
        price: 6.95,
        image: require("@/assets/images/dummy/menu/5.png"),
      },
      {
        id: 16,
        name: "Hito Hito Pancakes",
        description: "Fluffy pancakes served with maple syrup and berries",
        price: 8.95,
        image: require("@/assets/images/dummy/menu/6.png"),
      },
      {
        id: 17,
        name: "Devil Fruit Sundae",
        description: "Ice cream sundae with tropical fruits and caramel sauce",
        price: 7.95,
        image: require("@/assets/images/dummy/menu/7.png"),
        isPopular: true,
      },
    ],
  },

  {
    category: "Binks Drinks",
    subtitle: "Binks Drinks",
    dishes: [
      {
        id: 18,
        name: "Cola Power",
        description: "Franky-inspired chilled cola with lime and mint",
        price: 4.95,
        image: require("@/assets/images/dummy/menu/8.png"),
      },
      {
        id: 19,
        name: "Grand Line Mojito",
        description: "Fresh lime mojito with mint and sparkling soda",
        price: 5.95,
        image: require("@/assets/images/dummy/menu/9.png"),
      },
      {
        id: 20,
        name: "Ocean Breeze Shake",
        description: "Creamy vanilla blueberry milkshake with whipped cream",
        price: 6.5,
        image: require("@/assets/images/dummy/menu/10.png"),
      },
    ],
  },
];

export const getDishById = (id: number): Dish | undefined => {
  const allDishes = devilFruitMenu.flatMap((category) => category.dishes);

  return allDishes.find((dish) => dish.id === id);
};
