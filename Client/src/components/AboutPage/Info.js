import React from "react";

import Title from "../Title";
import aboutBcg from "../../images/aboutBcg.jpeg";

const Info = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-4">
            <img
              src={aboutBcg}
              className="img-fluid img-thumbnail"
              alt="about us"
            />
          </div>
          <div className="col-10 mx-auto col-md-6 my-4">
            <Title title="About Us" />

            <p className="text-lead text-muted my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio a
              itaque quia laborum repudiandae recusandae asperiores! Amet in est
              nisi?
            </p>

            <p className="text-lead text-muted my-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero,
              eligendi dignissimos est quia magnam nulla officia facilis,
              officiis consequatur iusto recusandae neque et doloribus non.
            </p>

            <button
              className="main-link"
              type="button"
              style={{ marginTop: "30px" }}
            >
              More Info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
