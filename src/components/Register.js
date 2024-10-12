import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../features/auth/authSlice'

const Register = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const dispatch = useDispatch()

    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(register({email,password}))
        setEmail("")
        setPassword("")
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
            type='text'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder='Email'
            />

            <input
            type='password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder='Email'
            />
            <button type='submit'>Register</button>

        </form>
    </div>
  )
}

export default Register