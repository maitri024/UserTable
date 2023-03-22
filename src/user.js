import React, { useEffect, useState } from 'react'
import "./user.css"

function User() {
    const [data, setData] = useState([]);
    const [valuee, setValue] = useState("name")
    const [inputvalue, setInputvalue] = useState("")


    const fetchUserData = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(records => setData(records))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchUserData();
    }, [])
   const keys=["name","username","email","phone"]
//    console.log(data[0]["email"])
    return (
        <div>
            <select name="cars" id="cars" value={valuee} onChange={(e) => setValue(e.target.value)}>
                <option value="name">Name</option>
                <option value="username">Username</option>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="phone">Actions</option>
            </select>
            <input type='text' placeholder='type data' value={inputvalue} onChange={(e) => setInputvalue(e.target.value)}></input>
            {/* <h1>{value} {inputvalue}</h1> */}
            <br></br>
            <br></br>
            <table>
                <tr>
                    <td><b>Name</b></td>
                    <td><b>Username</b></td>
                    <td><b>Email</b></td>
                    <td><b>Phone</b></td>

                </tr>

                {data.filter(
                    (item)=>
                    // {console.log(item[valuee].toLowerCase().includes(inputvalue),"valuee")}
                    keys.some(user=>item[valuee].toLowerCase().includes(inputvalue))).map((person) => (
                    <tr key={person.id}>
                        <td>{person.name}</td>
                        <td>{person.username}</td>
                        <td>{person.email}</td>
                        <td>{person.phone}</td>
                    </tr>
                )
                )}
            </table>
           
        </div >
    )
}

export default User


// .filter((item)=>keys.some(user=>item[user].toLowerCase().includes(inputvalue)))