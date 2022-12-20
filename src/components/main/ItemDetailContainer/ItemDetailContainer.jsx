import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useState, useEffect, React } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'

function ItemDetailContainer({greeting}) {
    const { itemId } = useParams()
    const [itemState, setItemState] = useState('')
    
    useEffect(() => {
      const data = getFirestore();
      const dataProduct = doc(data, 'items', itemId)
      getDoc(dataProduct).then(product => {
        setItemState({...product.data()})
      }) 
    },[itemId])
  return (
    <div>
        {greeting}
        <ItemDetail item={itemState}/>
    </div>
  )
}

export default ItemDetailContainer