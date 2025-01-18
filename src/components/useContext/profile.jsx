import React, { useContext } from "react";
import "../../App.css";
import { DashboardContext } from "./context";

export default function Profile() {
    const user = useContext(DashboardContext);
  return (
    <div>
      <div class="card personal-details">
        <h3>Personal Details</h3>
        <ul>
          <li>
            <strong>Name:</strong> {user.name}
          </li>
          <li>
            <strong>Address:</strong> {user.address}
          </li>
          <li>
            <strong>Designation:</strong> {user.designation}
          </li>
        </ul>
      </div>
    </div>
  );
}
