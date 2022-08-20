import React, {useState} from "react";
import FoodItems from "./FoodItems";
import Categories from "./Categories";
import './Menu.css';

const allCategories = ["all", ...new Set(FoodItems.map((item)=>item.category))];

const Menu = () => {
    const [menuItems, setMenuItems] = useState(FoodItems);
    const [activeCategory, setActiveCategory] = useState("all");
    const [categories, setCategories] = useState(allCategories);
    const filterItems = (category) =>{
        setActiveCategory(category);
        if(category === "all"){
            setMenuItems(FoodItems);
            return;
        }
        const newItems = FoodItems.filter((item) => item.category === category);
        setMenuItems(newItems);
    }
    return ( 
        <main>
            <section className="menu section">
                <Categories categories={categories} activeCategory={activeCategory} filterItems={filterItems}></Categories>
                <div className="section-center">
                    {menuItems.map((item) => {
                        const {id, title, img, desc, price} = item;
                        return (
                            <article key={id} className="menu-item">
                                <img src={img} alt={title} className="photo" />
                                <div className="item-info">
                                <header>
                                    <h4>{title}</h4>
                                    <h4 className="price">$ {price.toFixed(2)}</h4>
                                </header>
                                <p className="item-text">{desc}</p>
                                </div>
                            </article>
                        );
                    })}
                </div>
                
            </section>
        </main>
    );
}
 
export default Menu;