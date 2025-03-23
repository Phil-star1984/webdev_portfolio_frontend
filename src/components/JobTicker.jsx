import React, { useState, useEffect } from "react";
import axios from "axios";

function JobTicker() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Serverless Function aufrufen
    axios
      .get("/api/jobs")
      .then((response) => {
        setJobs(response.data.stellenangebote || []); // Annahme: Die API gibt ein Array unter "stellenangebote" zurück
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching job data:", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="jobticker-container text-secondary bg-black">
      <div className="jobticker-inner-container pt-2">
        {jobs.length > 0 &&
          jobs.concat(jobs).map((item, index) => (
            <div key={index} sm={5} lg={2} className="ticker-item p-1 mb-2">
              <p className="fs-5 text-warning lh-m">{item.beruf}</p>
              <p className="fs-6">{item.arbeitgeber}</p>
              <p className="fs-6 text-primary">{item.arbeitsort.ort}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default JobTicker;
