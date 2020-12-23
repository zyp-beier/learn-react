import React, {useState, useEffect} from 'react'


export default function UsePerson (path) {
  const [loading, setLoading] = useState(true)
  const [person,setPerson] = useState()
  useEffect(() => {
    setLoading(true)
    fetch(`/api/${path}.json`)
    .then(res => res.json()).then(result => {
      const {data} = result
      setPerson(data)
      setLoading(false)
    }).catch( err => {
      console.log(err);
    })
  }, [path])
  return [loading,person]
}