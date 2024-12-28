import React, { useState } from "react";
import "./Profile.css";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    username: "",
    email: "",
    bio: "",
    image: null,
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    setProfile({ ...profile, image: URL.createObjectURL(e.target.files[0]) });
  };

  return (
    <div className="container">
      <div className="profile-card">
        <h2>Edit Profile</h2>
        <form>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={profile.name}
            onChange={handleChange}
          />

          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            value={profile.username}
            onChange={handleChange}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={profile.email}
            onChange={handleChange}
          />

          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            name="bio"
            placeholder="Tell us about yourself"
            value={profile.bio}
            onChange={handleChange}
          />

          <label htmlFor="image">Profile Image</label>
          <input type="file" onChange={handleImageUpload} />
          {profile.image && <img src={profile.image} alt="Profile" />}

          <button type="submit">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
