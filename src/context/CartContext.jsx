import {React , createContext, useState} from "react";
export const CartContext = createContext([]); 

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])
    // FUNCION PARA BUSCAR SI EL PRODUCTO YA EXISTE EN EL CART
    const exist = item => cart.some(prod => prod.id === item.id)
    // FUNCION PARA AGREGAR AL CART
    const addItem = (item, quantity) => {
        if(exist(item)){
            let prod = cart.find(prod => prod.id === item.id)
            prod.quantity += quantity
            setCart([...cart])
        }
        else{
            setCart([...cart, {...item, quantity}])
        }
    }
    // FUNCION PARA ELIMINAR PRODUCTO DEL CARRITO
    const removeItem = (itemId) => setCart(cart.filter(prod => prod.id !== itemId));
    // FUNCION PARA LIMPIAR CARRITO
    const clear = () => setCart([]);
    return (
        <CartContext.Provider value={{addItem, removeItem, clear, cart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider