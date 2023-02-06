import {React, useEffect, useState} from 'react'
import { collection, getDocs, getFirestore }from 'firebase/firestore'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { LineWave } from 'react-loader-spinner'

function ItemListContainer( {gretting} ) {
  const {categoryId} = useParams()
  const [dataProducts, setDataProducts] = useState(null) 
  useEffect(() => {
    const data = getFirestore()
    const productsCollection = collection(data, 'items')
    if(categoryId){
      getDocs(productsCollection).then(res => {
         const productsFilter = res.docs.map(prod => ({id:prod.id, ...prod.data()}))
        setDataProducts(productsFilter.filter(prod => categoryId.includes(prod.description)))
      })
    }
    else{
      getDocs(productsCollection).then(res => {
        setDataProducts(res.docs.map(prod => ({id:prod.id, ...prod.data()})))
      })}
    }, [categoryId])
    if(dataProducts === null){
      return (
        <main className='loading__items d-flex justify-content-center align-items-center'>
          <LineWave height='100' width='100' color='#082032'/>
        </main>
      )
    }
  return (
    <main className='bg-dark py-5 main__products'>
      {gretting}
      <ItemList list={dataProducts}/>
    </main>
  )
}

export default ItemListContainer

