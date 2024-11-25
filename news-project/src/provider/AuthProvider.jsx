import React, { createContext, useEffect, useState } from "react"

export const AuthContext = createContext()

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth"
import { auth } from "../firebase/firebase.init"

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState()

  // console.log(loading, user)

  const createNewUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // user login
  const userLogin = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  // updated data
  const updateUserProfile = updateData => {
    return updateProfile(auth.currentUser, updateData)
  }

  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }

  const authInfo = {
    user,
    setUser,
    createNewUser,
    logOut,
    userLogin,
    loading,
    updateUserProfile
  }

  useEffect(() => {
    const unsubscrible = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => {
      unsubscrible()
    }
  }, [])

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
}

export default AuthProvider
