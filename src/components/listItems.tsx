import items from "./Items"
import styles from "./listItems.module.css"
export default function ListOfItems(){
    return(
    <div>
      <header className={styles.header}>
        
        <img src="/public/logo.png" className={styles.logo}></img>
        <h1 className={styles.title}>Oxygen</h1>
        <div className={styles.cart}>
            <img src="/public/cart.png" className={styles.cart_img}></img>
        </div>
      </header>
      <main className={styles.main_list}>
        {items.map((item)=>(
            <div key={item.id} className={styles.list_div}>
                <h3>{item.title}</h3>
                <img src={item.img} className={styles.item_img}></img>
                <h3>Цена: {item.price}</h3>
                <button className={styles.item_button}>Добавить в корзину</button>
            </div>
        ))}
      </main>
    </div>
    )
}