import React from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const navigate = useNavigate();
  return (
    <button onClick={() => navigate("/")}>Home Page</button>
  )
}

export default Profile;