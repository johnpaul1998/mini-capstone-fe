import React from "react";
import { Link } from "react-router-dom";
import { blogs } from "../utilities/enum";

export default function Blogs() {
  const renderBlog = () => {
    return blogs.map((item) => (
      <div class="col-md-6 col-lg-4 card border-0 my-3" key={item.id}>
        <img src={item.image} alt={item.title} />
        <div class="card-body px-0">
          <h4 class="card-title">{item.title}</h4>
          <p class="card-text mt-3 text-muted">{item.body}</p>
          <p class="card-text">
            <small class="text-muted">author </small>
            {item.author}
          </p>
          <Link to="/products" class="btn">
            Read More
          </Link>
        </div>
      </div>
    ));
  };

  return (
    <section id="blogs" class="py-5">
      <div class="container">
        <div class="title text-center py-5">
          <h2 class="position-relative d-inline-block">Our Latest Blog</h2>
        </div>
        <div className="row">{renderBlog()}</div>
      </div>
    </section>
  );
}
