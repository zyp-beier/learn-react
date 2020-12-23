import React from 'react'
import { useParams } from 'react-router-dom'
import UsePerson from '../../components/CustomizeHook/CustomizeHook'

export default function ProductDetial() {
  const params = useParams()
  console.log(params);
  const productId = params.id 
  let path = `productDetail${productId}`
  const [loading, person] = UsePerson(path)
  if(loading){
    return <div>loading...</div>
  }
  return <div>
    <div>{person.id}</div>
    <div>{person.content}</div>
   <div style={{width: '100px'}}>
    <img src={person.cover} alt="" style={{width :'100%'}}/>
   </div>
  </div>
  
}