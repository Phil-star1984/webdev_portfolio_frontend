import React, { useState, useEffect } from "react";
import axios from "axios";

function JobTicker() {
  const [jobs, setJobs] = useState([]);
  const jobUrl = `https://rest.arbeitsagentur.de/jobboerse/jobsuche-service/pc/v4/jobs`;

  useEffect(() => {
    const getJobs = async () => {
      try {
        const result = await axios.get(jobUrl, {
          headers: {
            "X-API-Key": "jobboerse-jobsuche", // Verwende die client_id als API Key
          },
          params: {
            was: "Web Developer",
            // Füge weitere Parameter nach Bedarf hinzu
          },
        });
        console.log(result);
        setJobs(result.data.stellenangebote);
      } catch (error) {
        console.error("Job data not available", error);
      }
    };

    getJobs();
  }, []);

  return (
    <div className="jobticker-container text-secondary bg-black">
      <div className="jobticker-inner-container pt-2">
        {jobs.length > 0 &&
          jobs.concat(jobs).map((item, index) => (
            <div key={index} sm={5} lg={2} className="ticker-item p-1 mb-2">
              <p className="fs-5 text-warning lh-m">{item.beruf}</p>
              <p className="fs-6">{item.arbeitgeber}</p>
              <p className="fs-6 text-success">{item.arbeitsort.ort}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default JobTicker;
