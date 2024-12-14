import React, { Children } from 'react'
import { UserContext } from './UserContext'

const user = {
    id: 123,
    name: 'Hugo Alonso Toledo',
    email: 'Hugo@gmail.com'
}

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ hola: 'mundo', user: user}}>
        { children }
    </UserContext.Provider>
  )
}
