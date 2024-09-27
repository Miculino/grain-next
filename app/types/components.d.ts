interface Dish {
  name: string;
  served: string;
  main_ingredients: string;
  tags: string[];
  thumbnail: string;
  price: string;
  details: {
    story: string;
    all_ingredients: string;
    nutritional_info: {
      calories: number;
      fat: number;
      carb: number;
      protein: number;
    };
    full_thumbnail: string;
  };
}
