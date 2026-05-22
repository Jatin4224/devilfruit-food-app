export interface Category {
  id: string;
  name: string;
  placesCount: number;
  image: any;
  backgroundColor: string;
}

export const categories: Category[] = [
  {
    id: "cat_meat_feast",
    name: "Luffy’s Meat",
    placesCount: 32,
    image: require("@/assets/images/dummy/categories/meat.png"),
    backgroundColor: "#3A1F1B",
  },
  {
    id: "cat_sanji_kitchen",
    name: "Sanji’s Kitchen",
    placesCount: 21,
    image: require("@/assets/images/dummy/categories/sanji_kitchen.png"),
    backgroundColor: "#F1DFC8",
  },
  {
    id: "cat_grand_line_ramen",
    name: "Grand Line Ramen",
    placesCount: 18,
    image: require("@/assets/images/dummy/categories/ramen.png"),
    backgroundColor: "#E7C9A9",
  },
  {
    id: "cat_baratie_bbq",
    name: "Baratie BBQ",
    placesCount: 14,
    image: require("@/assets/images/dummy/categories/baratie_bbq.png"),
    backgroundColor: "#2A2D36",
  },
  {
    id: "cat_devil_desserts",
    name: "Devil Desserts",
    placesCount: 27,
    image: require("@/assets/images/dummy/categories/devil_desserts.png"),
    backgroundColor: "#F3D3D8",
  },
  {
    id: "cat_binks_drinks",
    name: "Binks Drinks",
    placesCount: 11,
    image: require("@/assets/images/dummy/categories/drinks.png"),
    backgroundColor: "#CFE5F2",
  },
];
