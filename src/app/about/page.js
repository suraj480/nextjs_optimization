"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useState } from "react";

//Dynamically import the TeamDetails component (Lazy loaded)
const TeamDetails = dynamic(() => import("../../components/TeamDetails"), {
  loading: () => <p>Loading...</p>,
  ssr: false, // Optonally disable server-side rendering
});

const About = () => {

  const [showTeam, setShowTeam] = useState(false);

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
      <br /><br />
      <a href="/Pdf/Eloquent_JavaScript_small.pdf" target="_blank">Download</a>
      <hr />
      <button className="btn btn-primary" onClick={() => setShowTeam(!showTeam)}>
        {showTeam ? "Hide Team Details" : "Show Team Details"}
      </button>
      {showTeam && <TeamDetails />}
      <hr />
      <p className="lead">We are a group of passionate developers building awesome things.</p>

    </div >
  );
};

export default About;
