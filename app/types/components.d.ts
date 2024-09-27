interface Dish {
  name: string;
  served: string;
  overview: string;
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
    } | null;
    full_thumbnail: string;
  };
}

interface Bundle {
  name: string;
  overview: string;
  available: boolean;
  price: string;
  thumbnail: string;
}
