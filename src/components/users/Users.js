import React, { Component } from 'react'
import Spinner from '../layout/Spinner'
import UserItem from './UserItem'

const Users=(props)=>{
    if(props.loading){
        return <Spinner />
    }else{
        return (
            <div style={userStyle}>
                {props.users.map((user)=>
                 <UserItem key={user.id} users={user}/>
                )}
            </div>
        )
    }
}
const userStyle={
    display:'grid',
    gridTemplateColumns:'repeat(3,1fr)',
    gridGap:'1rem'
}

export default Users
