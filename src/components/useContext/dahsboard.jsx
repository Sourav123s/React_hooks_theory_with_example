import "../../App.css";
import React from "react";
import Profile from "./profile";
import ProfilePic from "./profilePic";

export default function Dashboard() {
  return (
    <div>
      <div class="dashboard">
        <Profile />
        <ProfilePic />
      </div>
    </div>
  );
}