import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useState, useEffect, React } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'

function ItemDetailContainer({greeting}) {
    const { itemId } = useParams()
    const [itemState, setItemState] = useState(null)
    
    useEffect(() => {
      const data = getFirestore();
      const dataProduct = doc(data, 'items', itemId)
      getDoc(dataProduct).then(product => {
        setItemState({id:product.id, ...product.data()})
      }) 
    },[itemId])
  if(itemState === null){
    return (
      <main className='loading__items d-flex justify-content-center align-items-center'>
          <p className='text-uppercase'>Cargando producto...</p>
      </main>
    )
  }
  return (
    <div className='bg-dark py-5'>
        {greeting}
        <ItemDetail item={itemState}/>
    </div>
  )
}

export default ItemDetailContainer