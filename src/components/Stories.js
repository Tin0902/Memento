import React from "react";

const Stories = () => {
  const [state] = React.useState([
    { id: 1, image: "/images/Jastin.jpg", name: "jastintintin" },
    { id: 2, image: "/images/Ivan.jpg", name: "ivanbautista" },
    { id: 3, image: "/images/Mem.jpg", name: "merdg" },
    { id: 4, image: "/images/Chris.jpg", name: "chrisevans" },
    { id: 5, image: "/images/Hailey.jpg", name: "haileybieber" },
    { id: 6, image: "/images/Olivia.jpg", name: "oliviarodrigo" },
    { id: 7, image: "/images/Taylor.jpg", name: "taylorswift" },
    { id: 8, image: "/images/Harry.jpg", name: "harrystyles" },
    { id: 9, image: "/images/Gigi.jpg", name: "gigihadid" },
  ]);
  return (
    <div className="stories">
      {state.map((user) => (
        <div className="stories__info" key={user.id}>
          <div className="stories__img">
            <span>
              <img src={user.image} alt="user" />
            </span>
          </div>
          <div className="stories__name">{user.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Stories;
