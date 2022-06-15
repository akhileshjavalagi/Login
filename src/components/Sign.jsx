import React, { useState } from 'react'
import { Input, Button } from '@chakra-ui/react'
import { Box } from '@chakra-ui/layout'
import { Heading } from '@chakra-ui/react'
import axios from 'axios';
const initState = {
            email: "",
            password: ""
        }
export default function Sign() {
            const [sign , setSign] = useState(initState);
                     const handleChange = (e)=>{
                         const {id , value} = e.target;
                         setSign({...sign , [id]:value}) 
                     }
                     
                     const handleSign = (e)=>{
                         e.preventDefault();
                         axios.post("http://localhost:3001/user" , sign)
                         .then(()=>alert("Register successfully"))
                     }

                     

  return (
    <>
    <Heading>Welcome</Heading>
    
    <form onSubmit={handleSign} >
           
                <input type={"email"} placeholder="email" id='email' onChange={handleChange} />
                <br></br>
                <input type={"password"} placeholder="password" id='password'  onChange={handleChange} />
                <br></br>
                <input type={"submit"} value="Submit" id='submit' />
      </form>
    </>
  )
}
