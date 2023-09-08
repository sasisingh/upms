import React, { useState } from 'react'

import axios from "axios"
import { useNavigate } from 'react-router-dom'

const skillArr = ["HTML", "CSS", "ECMAScript", "ReactJS", "Redux"]

const AddUserForm = () => {
  const [profilePic, setProfilePic] = useState('')
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [designation, setDesignation] = useState("")
  const [password, setPassword] = useState("")
  const [gender, setGender] = useState("")
  const [skills, setSkills] = useState([])
  const [twitter, setTwitter] = useState("")
  const [instagram, setInstagram] = useState("")
  const [facebook, setFacebook] = useState("")
  const [linkedin, setLinkedIn] = useState("")
  const [description, setDescribe] = useState("")
  const navigate = useNavigate()
  const saveData = () => {
    console.log(profilePic, name, email, designation, password, gender, skills, twitter, instagram, facebook, linkedin, description)
    axios({
      method: "post",
      url: "http://api.mern.co.in/api/v1/user/add",
      data: { profilePic, name, email, designation, password, gender, skills, twitter, instagram, facebook, linkedin, description }
    }).then((resp) => {
      navigate("/")
      console.log(resp)

    }).catch((err) => {
      console.log("error ====>>", err)
    })
  }

  const handleChangeSkills = (e) => {
    const { value, checked } = e.target

    if (checked)
      setSkills([...skills, value])
    else {
      const updateSkills = skills.filter((item) => item != value)
      setSkills(updateSkills)
    }
  }

  const uploadImage = (e) => {
    const files = e.target.files[0]
    const fileReader = new FileReader()
    fileReader.readAsDataURL(files)
    fileReader.onload = () => {
      setProfilePic(fileReader.result)
    }

  }

  return (
    <div>
      <main id="main">
        <form class="php-email-form">
          <div class="form-group">
            <label>Profile Image</label>
            <input type="file" class="form-control" name="profilePic" onChange={uploadImage} />
          </div>
          <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control" name="name" id="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div class="form-group mt-3">
            <label>Email</label>
            <input type="email" class="form-control" name="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div class="form-group mt-3">
            <label>Designation</label>
            <input type="text" class="form-control" name="designation" id="designation" placeholder="Designation" value={designation} onChange={(e) => setDesignation(e.target.value)} />
          </div>
          <div class="form-group mt-3">
            <label>Password</label>
            <input type="password" class="form-control" name="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div class="form-group mt-3">
            <label>Gender</label><br />
            <input type="radio" name="gender" value="Female" onChange={(e) => { setGender(e.target.value) }} />&nbsp; Female &nbsp; &nbsp;
            <input type="radio" name="gender" value="Male" onChange={(e) => { setGender(e.target.value) }} />&nbsp; Male &nbsp; &nbsp;
          </div>
          <div class="form-group mt-3">
            <label>Skills</label><br />
              {
              skillArr.map((item) => {
                return (
                  < >
                    <input type="checkbox" value={item} onChange={handleChangeSkills} /> {item}  &nbsp; &nbsp; &nbsp;
                  </>
                )
              })
            }

          </div>
          <div class="form-group mt-3">
            <label>Twitter</label>
            <input type="url" class="form-control" name="twitter" id="twitter" placeholder="Twitter" value={twitter} onChange={(e) => { setTwitter(e.target.value) }} />
          </div>
          <div class="form-group mt-3">
            <label>Instagram</label>
            <input type="url" class="form-control" name="instagram" id="instagram" placeholder="Instagram" value={instagram} onChange={(e) => setInstagram(e.target.value)} />
          </div>
          <div class="form-group mt-3">
            <label>Facebook</label>
            <input type="url" class="form-control" name="facebook" id="facebook" placeholder="Facebook" value={facebook} onChange={(e) => { setFacebook(e.target.value) }} />
          </div>
          <div class="form-group mt-3">
            <label>LinkedIn</label>
            <input type="url" class="form-control" name="linkedin" id="linkedin" placeholder="LinkedIn" value={linkedin} onChange={(e) => { setLinkedIn(e.target.value) }} />
          </div>
          <div class="form-group mt-3">
            <label>Describe your self</label>
            <textarea class="form-control" name="message" rows="5" placeholder="Message" value={description} onChange={(e) => { setDescribe(e.target.value) }}></textarea>
          </div>

          <div class="text-center"><button type='button' onClick={saveData}>Send Message</button></div>
        </form>
      </main>

    </div>
  )
}

export default AddUserForm
