import cheesePizza from "./foodpics/pizza.jfif";
import chickenWings from "./foodpics/chickenwings.jpg";
import salad from "./foodpics/salad.jpg";
import waterbottle from "./foodpics/waterbottle.jpg";
import sodacan from "./foodpics/sodaCan.jpg";
import arizonabottle from "./foodpics/arizonabottle.jpg";
import gatorade from "./foodpics/gatorade.png";
import twoliters from "./foodpics/2Lbottle.jpg";
import twentyoz from "./foodpics/20ozbottle.jpeg";

const FoodItems = [
      {
        id: 3,
        title: 'Medium Cheese Pizza',
        category: 'Pizza',
        price: 12.50,
        img: cheesePizza,
        desc: `14" Extra cheesey and delicious goodness. Toppings are $2.95 each.`
      }
      ,
      {
        id: 4,
        title: 'Large Cheese Pizza',
        category: 'Pizza',
        price: 13.50,
        img: cheesePizza,
        desc: `16" Extra cheesey and delicious goodness. Toppings are $2.95 each.`
      }
      ,
      {
        id: 5,
        title: 'Extra Large Cheese Pizza',
        category: 'Pizza',
        price: 18.50,
        img: cheesePizza,
        desc: `21" Extra cheesey and delicious goodness. Toppings are $2.95 each.`
      }
      ,
      {
        id: 6,
        title: '8 Piece Boneless Chicken Wings',
        category: 'Chicken',
        price: 10.80,
        img: chickenWings,
        desc: `Steamy chicken wings coated in choice of sauce of seasoning.`
      }
      ,
      {
        id: 7,
        title: '10 Piece Boneless Chicken Wings',
        category: 'Chicken',
        price: 13.50,
        img: chickenWings,
        desc: `Steamy chicken wings coated in choice of sauce of seasoning.`
      }
      ,
      {
        id: 8,
        title: '12 Piece Boneless Chicken Wings',
        category: 'Chicken',
        price: 16.20,
        img: chickenWings,
        desc: `Steamy chicken wings coated in choice of sauce of seasoning.`
      }
      ,
      {
        id: 9,
        title: '18 Piece Boneless Chicken Wings',
        category: 'Chicken',
        price: 24.50,
        img: chickenWings,
        desc: `Steamy chicken wings coated in choice of sauce of seasoning.`
      }
      ,
      {
        id: 10,
        title: 'Caesar Salad',
        category: 'Salads',
        price: 6.50,
        img: salad,
        desc: `Romaine lettuce, croutons, romano cheese.`
      }
      ,
      {
        id: 11,
        title: 'Antipasto Salad',
        category: 'Salads',
        price: 8.25,
        img: salad,
        desc: `Ham, salami, american, and shredded mozzarella over romaine lettuce, croutons, and romano cheese.`
      }
      ,
      {
        id: 12,
        title: '2 Liter Soda',
        category: 'Beverages',
        price: 3.50,
        img: twoliters,
        desc: `A choice of either Coke, Sprite, Pepsi, Ginger Ale, Fanta, or Diet Coke.`
      }
      ,
      {
        id: 13,
        title: '20oz Bottled Soda',
        category: 'Beverages',
        price: 2.50,
        img: twentyoz,
        desc: `A choice of either Coke, Sprite, Pepsi, Ginger Ale, Fanta, or Diet Coke.`
      }
      ,
      {
        id: 14,
        title: 'Soda Can',
        category: 'Beverages',
        price: 1.25,
        img: sodacan,
        desc: `A choice of either Coke, Sprite, Pepsi, Ginger Ale, Fanta, or Diet Coke.`
      }
      ,
      {
        id: 15,
        title: 'Arizona Iced Tea',
        category: 'Beverages',
        price: 1.25,
        img: arizonabottle,
        desc: `A choice of either Green Tea, Tea, Mango, or Fruit Punch flavors.`
      }
      ,
      {
        id: 16,
        title: 'Gatorade',
        category: 'Beverages',
        price: 2.50,
        img: gatorade,
        desc: `A choice of either Cool Blue, Fruit Punch, Lemon Lime, or Orange flavors.`
      }
      ,
      {
        id: 17,
        title: '20oz Water Bottle',
        category: 'Beverages',
        price: 1.25,
        img: waterbottle,
        desc: `A refreshing chilled bottle of water.`
      }
]

export default FoodItems;