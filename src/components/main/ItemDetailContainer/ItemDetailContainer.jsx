import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useState, useEffect, React } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'
import { LineWave } from 'react-loader-spinner'

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
          <LineWave height='100' width='100' color='#082032'/>
      </main>
    )
  }
  return (
    <div style={{padding: '6rem 0'}}>
        {greeting}
        <ItemDetail item={itemState}/>
    </div>
  )
}

export default ItemDetailContainer