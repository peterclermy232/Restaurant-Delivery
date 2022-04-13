import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  foodDetails = [
    {
      id:1,
      foodName:"Paneer Grilled Sandwich",
      foodDetails:"Pan-fried masala paneer.",
      foodPrice:200,
      foodImg:"https://thumbs.dreamstime.com/z/grilled-paneer-sandwich-indian-style-close-up-135362320.jpg"
    },
    {
      id:2,
      foodName:"Veggie Supreme",
      foodDetails:"Onion| Green Capsicum|Mushroom|black olives, sweet corn",
      foodPrice:369,
      foodImg:"https://5.imimg.com/data5/BF/PD/GLADMIN-5770554/veggie-supreme-pizza-500x500.png"
    },
    {
      id:3,
      foodName:"Panner Burger",
      foodDetails:"panner",
      foodPrice:149,
      foodImg:"https://www.recipefunnel.com/images/recipe/tawa-paneer-burger-1599460468010.webp?compress=false"
    },
    {
      id:4,
      foodName:"Veg Masala Roll In Naan",
      foodDetails:"A homely mix of mashed potato and veggies,seasoned with Indian spicies. A filling sure to take you back to mum's kitchen",
      foodPrice:200,
      foodImg:"https://frommybowl.com/wp-content/uploads/2020/12/chana-kathi-rolls-landscape.jpg"
    },
    {
      id:5,
      foodName:"Indulgence Brownie",
      foodDetails:"(Eggless)Induge in richly decadecent chocolate brownie crafted with love & topped with bitter-sweet",
      foodPrice:105,
      foodImg:"https://images.smuckers.ca/images/recipes/1/recipe_4391.jpg"
    },
    {
      id:6,
      foodName:"Oreo Cheesecake Ice Cream",
      foodDetails:"Oreo ice cream",
      foodPrice:219,
      foodImg:"https://preppykitchen.com/wp-content/uploads/2021/07/oreo-cheesecake-recipe-n-500x500.jpg"
    }
  ]
}
