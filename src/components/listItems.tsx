import items from "./Items"
import styles from "./listItems.module.css"
import type { Product } from "./cartReducer";

type Props ={
    openModal: ()=>void ;
    dispatch: React.Dispatch<{type: "Add_To_Cart"; payload: Product}>;
    
}
export default function ListOfItems({ openModal, dispatch}: Props){



    return(
    <div>
      <header className={styles.header}>
        
        <img src="/logo.png" className={styles.logo}></img>
        <h1 className={styles.title}>Oxygen</h1>
        <div className={styles.cart} onClick={openModal}>
            <img src="/cart.png" className={styles.cart_img}></img>
        </div>
      </header>
      <main className={styles.main_list}>
        {items.map((item)=>(
            <div key={item.id} className={styles.list_div}>
                <h3>{item.title}</h3>
                <img src={item.img} className={styles.item_img}></img>
                <h3>Цена: {item.price}</h3>
                <button className={styles.item_button} onClick={()=>{dispatch({type: "Add_To_Cart", payload:item})}}>Добавить в корзину</button>
            </div>
        ))}
      </main>
    </div>
    )
}