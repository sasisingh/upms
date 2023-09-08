import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../components/Header'
import UserCard from '../components/UserCard'
import Footer from '../components/Footer'
const UsersPage = () => {
  const [users, setUsers] = useState([])

  const getData = ()=>{
axios({
  method :"GET",
  url:"http://api.mern.co.in/api/v1/user/get-all?page=1",
}).then((resp)=>{
  console.log(resp)
  setUsers(resp.data.data.users)
}).catch((err)=>{
  console.log("error=====>>.",err)
})
  }

useEffect(()=>{
  getData()
},[])


  return (
    <div> 
     <Header/>
     <section class="team" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">
        <div class="container">
          <div class="row mt-5">
          {
            users.map((item,i)=>{
              return(
                <UserCard item={item}/>
              )
            })
          }
          </div>
        </div>
      </section>
     <Footer/>
    </div>
  )
}

export default UsersPage
