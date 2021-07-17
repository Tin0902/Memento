import React from "react";
import { ContextProvider } from "../Global/Context";
const Sidebar = () => {
  const { loader, user } = React.useContext(ContextProvider);
  const username = !loader && user && user.displayName ? user.displayName : "";
  const [state] = React.useState([
    { id: 1, image: "/images/Abel.jpg", name: "theweeknd" },
    { id: 2, image: "/images/Selena.jpg", name: "selenagomez" },
    { id: 1, image: "/images/Bella.jpg", name: "bellahadid" },
  ]);
  return (
    <div className="sidebar">
      {!loader && user ? (
        <div className="sidebar__user">
          <div className="sidebar__user-avator">{username[0]}</div>
          <div className="sidebar__user-name">{username}</div>
        </div>
      ) : (
        ""
      )}
      <div className="sidebar__list">
        <h3>Suggestions for you</h3>
        {state.map((user) => (
          <div className="sidebar__list-user" key={user.id}>
            <div className="sidebar__list-a">
              <div className="sidebar__list-a-img">
                <img src={user.image} alt={user.image} />
              </div>
              <div className="sidebar__list-a-name">{user.name}</div>
            </div>
            <div className="sidebar__list-b">
              <a href="/">Follow</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
