import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <div className="row-one container">
        <div
          className="row row-selector"
          style={{
            paddingBlock: "100px",
          }}
        >
          <div className="col-lg-6">
            <img
              src="https://images.pexels.com/photos/2884842/pexels-photo-2884842.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="image"
              className="rounded-circle"
            />
          </div>
          <div className="col-lg-6">
            <h1>Ayush Kathariya</h1>
            <h2>Full Stack Web Developer</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              voluptate consectetur ipsa molestiae dicta minima repellendus,
              quis sint. Nesciunt, doloribus. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Consequuntur officia repellat, atque
              doloribus cupiditate, impedit, tempore voluptates doloremque
              delectus quae commodi illum nostrum adipisci ipsam dolores
              praesentium assumenda? Velit minus quam explicabo ipsam voluptates
              eaque blanditiis rerum voluptatem commodi, excepturi dolor cumque
              doloribus nemo animi mollitia? Magni quod debitis sequi alias
            </p>
          </div>
        </div>
      </div>

      <div className="row-two" style={{ maxWidth: "calc(99vw - 1px)" }}>
        <div className="container">
          <div
            className="row row-selector"
            style={{
              paddingBlock: "100px",
            }}
          >
            <div className="col-lg-6">
              <h1>Tika Theory</h1>
              <h2>FrontEnd Developer</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                voluptate consectetur ipsa molestiae dicta minima repellendus,
                quis sint. Nesciunt, doloribus. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Consequuntur officia repellat,
                atque doloribus cupiditate, impedit, tempore voluptates
                doloremque delectus quae commodi illum nostrum adipisci ipsam
                dolores praesentium assumenda? Velit minus quam explicabo ipsam
                voluptates eaque blanditiis rerum voluptatem commodi, excepturi
                dolor cumque doloribus nemo animi mollitia? Magni quod debitis
                sequi alias
              </p>
            </div>
            <div className="col-lg-6">
              <img
                src="https://images.pexels.com/photos/2460227/pexels-photo-2460227.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="image"
                className="rounded-circle"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row-three container">
        <div
          className="row row-selector"
          style={{
            paddingBlock: "100px",
          }}
        >
          <div className="col-lg-6">
            <img
              src="https://images.pexels.com/photos/2884842/pexels-photo-2884842.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="image"
              className="rounded-circle"
            />
          </div>
          <div className="col-lg-6">
            <h1>Ayush Kathariya</h1>
            <h2>Full Stack Web Developer</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              voluptate consectetur ipsa molestiae dicta minima repellendus,
              quis sint. Nesciunt, doloribus. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Consequuntur officia repellat, atque
              doloribus cupiditate, impedit, tempore voluptates doloremque
              delectus quae commodi illum nostrum adipisci ipsam dolores
              praesentium assumenda? Velit minus quam explicabo ipsam voluptates
              eaque blanditiis rerum voluptatem commodi, excepturi dolor cumque
              doloribus nemo animi mollitia? Magni quod debitis sequi alias
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
