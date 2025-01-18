import React , { useContext } from "react";
import "../../App.css";
import { DashboardContext } from "./context";
export default function ProfilePic() {
        const user = useContext(DashboardContext);
  return (
    <div>
      <div class="card profile-picture">
        <h3>Profile Picture</h3>
        <div class="picture">
          <img
          src={user.img_link}
            alt="Profile Picture"
          />
          <button class="edit-btn">Edit</button>
        </div>
      </div>
    </div>
  );
}
