import { useState } from "react";

function Report() {

  const [message, setMessage] =
    useState("");

  const [location, setLocation] =
    useState("");

  const [tip, setTip] =
    useState("");

  const [danger, setDanger] =
    useState("");

  const [reports, setReports] =
    useState(

      JSON.parse(
        localStorage.getItem(
          "reports"
        )
      ) || []

    );

  const getSafetyTip = async () => {

    const res = await fetch(

      "https://api.adviceslip.com/advice"

    );

    const data = await res.json();

    setTip(
      data.slip.advice
    );

  };

  const submitReport = () => {

    getSafetyTip();

    if(

      message.includes("attack") ||

      message.includes("kidnap")

    ){

      setDanger(
        "HIGH RISK"
      );

    }

    else if(

      message.includes("stalking")

    ){

      setDanger(
        "MEDIUM RISK"
      );

    }

    else{

      setDanger(
        "LOW RISK"
      );

    }

    const updatedReports = [

      ...reports,

      {
        message,
        location
      }

    ];

    setReports(
      updatedReports
    );

    localStorage.setItem(

      "reports",

      JSON.stringify(
        updatedReports
      )

    );

    alert(
      "Incident Report Submitted"
    );

    setMessage("");
    setLocation("");
  };

  return (
    <div className="container">

      <h1>
        Report Unsafe Incident
      </h1>

      <input
        type="text"
        placeholder="Enter Location"
        value={location}
        onChange={(e)=>
          setLocation(e.target.value)
        }
      />

      <br /><br />

      <textarea
        rows="6"
        cols="50"
        placeholder="Describe Incident"
        value={message}
        onChange={(e)=>
          setMessage(e.target.value)
        }
      />

      <br /><br />

      <button onClick={submitReport}>

        Submit Report

      </button>

      <h2>
        Danger Level :
        {danger}
      </h2>

      <div className="card">

        <h3>
          AI Suggested Safety Tip
        </h3>

        <p>{tip}</p>

      </div>

      <h2>
        Previous Reports
      </h2>

      <div className="flex">

        {
          reports.map((item,index)=>(

            <div
              key={index}
              className="card"
            >

              <h3>
                {item.location}
              </h3>

              <p>
                {item.message}
              </p>

            </div>

          ))
        }

      </div>

    </div>
  );
}

export default Report;