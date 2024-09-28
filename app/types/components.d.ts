interface Dish {
  name: string;
  served: string;
  overview: string;
  tags: string[];
  thumbnail: string;
  price: number;
  details: {
    story: string;
    all_ingredients: string | null;
    nutritional_info: {
      calories: number;
      fat: number;
      carb: number;
      protein: number;
    } | null;
    full_thumbnail: {
      asset: {
        url: string;
      };
    };
  };
}

interface Bundle {
  name: string;
  overview: string;
  available: boolean;
  price: number;
  thumbnail: string;
}
