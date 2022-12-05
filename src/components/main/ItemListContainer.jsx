import {React, useEffect, useState} from 'react'
// import ItemCount from './products/ItemCount'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

function ItemListContainer( {gretting} ) {
  const products = [
    {id:1, title: 'Spiderman Remastered', description: 'Accion,Aventura', price: 3750, pictureUrl: 'https://static3.pisapapeles.net/uploads/2022/08/Marvels-Spider-Man-Remastered-foto-portada-copia.jpg'},
    {id:2, title: 'Day Z', description: 'Supervivencia, Mundo Abierto', price: 1500, pictureUrl: 'https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2020/11/DayZ-Square.jpg'},
    {id:3, title: 'The Witcher Wild Hunt', description: 'Aventura, Mundo Abierto', price: 167, pictureUrl: 'https://p4.wallpaperbetter.com/wallpaper/13/623/644/the-witcher-the-witcher-3-wild-hunt-geralt-of-rivia-wallpaper-preview.jpg'},
    {id:4, title: 'Grounded', description: 'Aventura, Supervivencia', price: 2400, pictureUrl: 'https://www.somosxbox.com/wp-content/uploads/2020/02/grounded_keyart.jpg'},
    {id:5, title: 'Red Dead Redemption 2', description: 'Accion, Aventura', price: 2000, pictureUrl: 'https://gamersrd.com/wp-content/uploads/2018/04/Red-Dead-Redemption-2-Rockstar-games-GamersRD.jpg'}
  ]
  const {categoryId} = useParams()
  const [dataProducts, setDataProducts] = useState([]) 
  useEffect(() => {
      const data = () => {
        return new Promise((resolve,reject) => {
          setTimeout(() => resolve(products), 2000)
        })
      }

      data().then(res => {
        categoryId ? setDataProducts(res.filter(producto => producto.description.toLowerCase().includes(categoryId))) : setDataProducts(res)
      })
    }, [categoryId])
  return (
    <main className='bg-dark py-4'>
      {gretting}
      <ItemList list={dataProducts}/>
    </main>
  )
}

export default ItemListContainer


{/* <ItemCount stock={2} initial={1} onAdd={(elem)=> {console.log(elem)}}></ItemCount> */}