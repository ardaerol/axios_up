import {useParams} from 'react-router-dom'
import React from 'react'
function User() {
    const {id} = useParams()
  return (
    <div>
        <h1>User Detail</h1>
        id: {id}
    </div>
  )
}

export default User