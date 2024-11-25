import React, { useContext, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { AuthContext } from "../provider/AuthProvider"

const Register = () => {
  const { user, setUser, createNewUser, updateUserProfile } = useContext(AuthContext)
  const [error, setError] = useState({})

  const handleRegister = e => {
    e.preventDefault()

    const form = new FormData(e.target)
    const name = form.get("name")

    if (name.length < 5) {
      setError({ ...error, name: "Must be more than 5 character long" })
    }

    const photoUrl = form.get("photoUrl")
    const email = form.get("email")
    const password = form.get("password")

    // console.log(name, photoUrl, email, password)

    createNewUser(email, password)
      .then(result => {
        const user = result.user
        setUser(user)
        updateUserProfile({ displayName: name, photoURL: photoUrl })
          .then(() => {
            Navigate("/")
          })
          .catch(error => {
            error.code
            error.message
          })
      })
      .catch(error => {
        error.code
        error.message
      })
  }
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="text-2xl font-semibold text-center">Register Your Account</h2>
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input type="text" placeholder="Enter your name" className="input input-bordered" name="name" required />
          </div>
          {error.name && (
            <label className="label">
              <span className="label-text text-xs text-rose-500">{error.name}</span>
            </label>
          )}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input type="text" placeholder="Photo Urls" className="input input-bordered" name="photoUrl" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" className="input input-bordered" name="email" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" className="input input-bordered" name="password" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Register</button>
          </div>
        </form>
        <p className="text-center font-semibold">
          Already Have An Account?
          <Link className="text-red-500" to="/auth/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register
