import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-primary">About us</h1>
      <p className="lead">This is my about us page</p>
      <Image
        src="/Images/fieldImg.PNG"
        alt="Field image"
        width={600}
        height={400}
        className="img-fluid rounded"
      />
      <hr />
      <a href="/Pdf/Eloquent_JavaScript_small.pdf" target="_blank">Download</a>
    </div>
  );
};

export default About;
