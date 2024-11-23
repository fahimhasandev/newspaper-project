import React, { createContext, useEffect, useState } from "react"

export const AuthContext = createContext()

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth } from "../firebase/firebase.init"

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  console.log(user)

  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // user login
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    return signOut(auth)
  }

  const authInfo = {
    user,
    setUser,
    createNewUser,
    logOut,
    userLogin
  }

  useEffect(() => {
    const unsubscrible = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
    })
    return () => {
      unsubscrible()
    }
  }, [])

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
}

export default AuthProvider
