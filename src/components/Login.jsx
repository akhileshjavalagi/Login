import React, {useState} from 'react'
import axios from 'axios';
import { requiredChakraThemeKeys } from '@chakra-ui/theme';
import { Input, Button } from '@chakra-ui/react'
export default function Login() {

     const [email, setEml] = useState("")
     const [pass, setPass] = useState("")  
    
     const [emailcheck , setEmail]= useState([]);
     //const [passwordcheck , setPassword] = useState({});
     
     const loginDb = async() => {
            const res = await axios.get("http://localhost:3001/user")
                 setEmail(res.data)
                 let count = 0
                 for(let i=0; i<emailcheck.length; i++){
                        if(emailcheck[i].email===email && emailcheck[i].password===pass){
                            alert("Logged in succesfully")
                        }else{
                                    count++
                        }
                       
            }
            if(count===emailcheck.length){
               alert("credentials wrong")
            }
            
}
                        
                
                 
                   
            
                
            
            
            
          

  return (
    <div>
      <h2>Login </h2>
            <div>
            {/* <input type={"text"} placeholder="email" onChange={(e)=>setEml(e.target.value)} />
            <input type={"password"} placeholder="password" onChange={(e)=>setPass(e.target.value)} />
            <button onClick={loginDb} >Login</button> */}
            <Input placeholder='email'  onChange={(e)=>setEml(e.target.value)} />
            <Input placeholder='password' onChange={(e)=>setPass(e.target.value)}  />
            <Button onClick={loginDb}>Login</Button>
            </div>
    </div>
  )
}
