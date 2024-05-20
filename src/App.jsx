import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("")
  const [lastName, setlastName] = useState("")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")
  const [users, setUser] = useState([])


  const addUser =()=>{
    users.push({name, lastName,age,email})
    setUser([...users])
  }

  return (
    <>
    <div className='container'>
       <div className='box_header'>
        <table>
          <thead>
            <tr className='box_tittle'>
              <td className='id_tittle'>T/R</td>
              <td>First_Name</td>
              <td>Last_Name</td>
              <td>Age</td>
              <td>Email</td>
            </tr>
          </thead>
          <tbody>
            {
              users.map((item,index)=>(
                <tr key={index}>
                  <td className='td_titles'>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.lastName}</td>
                  <td>{item.age}</td>
                  <td>{item.email}</td>
                </tr>
              ))
            }

          </tbody>
        </table>
       </div>

       <div className='body_box'>
       <h1>Add User</h1>
        <form>
        <input type="text" onChange={(e)=>setName(e.target.value)} placeholder='First name' className='body_box1'/>
        <input type="text" onChange={(e)=>setlastName(e.target.value)} placeholder='Last name' className='body_boxes'/>
        <input type="number" onChange={(e)=>setAge(e.target.value)} placeholder='Age' className='body_boxes'/>
        <input type="text"  onChange={(e)=>setEmail(e.target.value)} placeholder='Email'className='body_boxes'/>
        </form>
       </div>
       <div className='box_footer'>
       <button onClick={addUser}>Add User</button>
       </div>
    </div>
   
    </>
  )
}

export default App

