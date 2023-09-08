import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const ucWord = (str) => {
  let arr = str?.split(" ");
  for (var i = 0; i < arr?.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  let str2 = arr?.join(" ");
  return str2
}
const UserDetails = () => {
  const { userId } = useParams()

  const [user, setUser] = useState(null)

  const getData = () => {
    axios({
      method: "GET",
      url: `http://api.mern.co.in/api/v1/user/get/${userId}`,
    }).then((resp) => {
      console.log(resp)
      setUser(resp.data.data)
    }).catch((err) => {
      console.log("error=====>>.", err)
    })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <h1>User Details</h1>
      <section class="about" data-aos="fade-up">
        <div class="container">

          <div class="row">
            <div className='col-lg-1'></div>
            <div class="col-lg-4">
              <img src={user?.profilePic} alt="" height="100%" width="100%" />
            </div>
            <div class="col-lg-6 pt-4 pt-lg-0">
              <h3>{ucWord(user?.name)}</h3>
              <p class="fst-italic">
                {user?.designation}
              </p>
              <ul>
                <li><a href={user?.twitter}><i class="bi bi-twitter"></i>Twitter</a></li>
                <li><a href= {user?.facebook}><i class="bi bi-facebook"></i>Facebook</a></li>
                <li><a href={user?.instagram}><i class="bi bi-instagram"></i>Instagram</a></li>
                <li><a href={user?.linkedin}><i class="bi bi-linkedin"></i>LinkedIn</a></li>
              </ul>
              <p>
                {user?.description}
              </p>
            </div>
            <div className='col-lg-1'></div>
          </div>

        </div>
      </section>
      <section class="skills" data-aos="fade-up" style={{ marginTop: "-80px" }}>
        <div class="container">

          <div class="section-title">
            <h2>Our Skills</h2>

          </div>

          <div class="skills-content">
            {
              user?.skills?.map((item) => {
                return (
                  <div class="progress">
                    <div role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                      <span class="skill">{item} </span>
                    </div>
                  </div>
                )
              })
            }


          </div>

        </div>
      </section>
    </div>
  )
}

export default UserDetails
