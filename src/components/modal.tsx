import type React from "react"
import styles from "./modal.module.css"
import type { Product } from "./cartReducer.tsx"
type Props = {
    closeModal: ()=>void
    dispatch: React.Dispatch<{type: "Remove_Item"; payload: number}>
    cart: Product[]
}
export default function Modal_Window({closeModal, dispatch, cart}: Props){
    return(
        <div className={styles.modal_wrapper} onClick={(e)=>{
            if (e.target == e.currentTarget){
                closeModal()
            }
            }}>
            <div className={styles.modal}>
                <h2 className={styles.title}>Корзина</h2>
                {cart.map((item)=>(
                    <div key={item.id} className={styles.modal_item}>
                        <img src={item.img} className={styles.modal_item_img}></img>
                        <h3>{item.title}</h3>
                        <h3>{item.price}</h3>
                        <h3>{item.quantity}  шт</h3>
                        <button onClick={()=>{
                            dispatch({type:"Remove_Item", payload:item.id})
                        }} className={styles.modal_button}>Удалить</button>
                    </div>
                ))}
            </div>
        </div>
    )
}