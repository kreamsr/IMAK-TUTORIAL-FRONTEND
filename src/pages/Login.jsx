import React,{useState} from 'react'

const Login = () => {

  const[ currentState, setCurrentState ]= useState('Sign Up')

  const [name, setName ] = useState("")
  const [password, setPassword ] = useState("")
  const [email, setEmail ] = useState("")


  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name,email,password)
  }

  return (
    <form onSubmit={submitHandler} className=' min-h-[80vw] flex flex-col items-center '>
      <div className='flex flex-col items-start shadow-lg py-10 px-10 border border-gray-200 rounded-lg'>
        {currentState === 'Login' ? <p className='text-3xl font-medium text-gray-800 mb-2'>Login</p>:<p className='text-3xl font-medium text-gray-800 mb-2'>{currentState}</p>}
      <p className='text-gray-600 text-base mb-10'>Please {currentState === 'Login' ? 'login': 'sign up '} to get intouch with Lecturers!</p>
      
      {
      currentState === "Login" ? "" :
       <div className='flex flex-col mb-2 w-full'>
        <label className='text-gray-700 mb-1' >Full Name</label>
        < input onChange={(e) => setName(e.target.value)} className='w-full border border-gray-300 rounded-sm outline-none h-10 px-2' type="text" value={name}  placeholder='Name'/>
      </div>
      }
      <div className='flex flex-col mb-2 w-full'>
        <label className='text-gray-700 mb-1' >Email</label>
        < input onChange={(e) => setEmail(e.target.value)} className='w-full border border-gray-300 rounded-sm outline-none h-10 px-2' type="email" placeholder='Email' value={email}/>
      </div>
      <div className='flex flex-col mb-2 w-full'>
        <label className='text-gray-700 mb-1' >Password</label>
        < input onChange={(e) => setPassword(e.target.value)} className='w-full border border-gray-300 rounded-sm outline-none h-10 px-2' type="password" placeholder='Password' value={password}/>
        <button className='w-full mt-5 bg-indigo-700 text-white h-10 rounded-lg hover:bg-indigo-600 cursor-pointer'>{currentState === 'Login' ? 'Login' :'Create Account' }</button>
        {currentState === 'Login' ? <p className='mt-7 text-gray-600'>Create New one! <span  onClick={() => setCurrentState('Sign Up')} className='text-indigo-700 underline cursor-pointer'>Create Account</span></p>:<p className='mt-7 text-gray-600'>Already have an account?<span onClick={() => setCurrentState('Login')} className='text-indigo-700 underline cursor-pointer'>Login Here</span></p> }
      </div>
      </div>
      
    </form>
  )
}

export default Login
