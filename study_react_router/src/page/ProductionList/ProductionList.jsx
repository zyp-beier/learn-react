import React,{useEffect} from 'react'
import UsePerson from '../../components/CustomizeHook/CustomizeHook'
import {useHistory} from 'react-router-dom'


export default function ProductionList(props) {
  const history = useHistory()
  const [loading, person] = UsePerson('productListData')
  if(loading) {
    return <div>loading...</div>
  }
  return <div>
    {
      person.map(item => {
        const {id,title,price,desc,img} = item
          return <div key={id} style={{display:'flex',margin: '10px'}} onClick={() => history.push(`/productDetail/${id}`)}>
            <div style={{width: '80px',height: '80px',marginRight: '10px'}}>
              <img src={img} alt="" style={{width: '100%'}}/>
            </div>
            <div>
              <div style={{}}>
                {title}
              </div> 
              <div>
                {desc}
              </div>
              <div>
                {price}
              </div>
            </div>
         </div>
      })
    }
  </div>
}