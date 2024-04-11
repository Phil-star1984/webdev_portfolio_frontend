import React, { useState, useEffect } from "react";
import axios from "axios";
import qs from "qs";

function JobTicker() {
  const [jobs, setJobs] = useState([]);
  const getTokenUrl = `https://rest.arbeitsagentur.de/oauth/gettoken_cc`;
  const jobUrl = `https://rest.arbeitsagentur.de/jobboerse/jobsuche-service/pc/v4/jobs`;

  useEffect(() => {
    const getToken = async () => {
      try {
        const tokenResponse = await axios.post(
          getTokenUrl,
          qs.stringify(
            {
              client_id: "c003a37f-024f-462a-b36d-b001be4cd24a",
              client_secret: "32a39620-32b3-4307-9aa1-511e3d7f48a8",
              grant_type: "client_credentials",
            },
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
            }
          )
        );
        return tokenResponse.data.access_token;
      } catch (error) {
        console.error("Error fetching token", error);
      }
    };

    const getJobs = async () => {
      const token = await getToken();
      try {
        const result = await axios.get(jobUrl, {
          headers: {
            OAuthAccessToken: token,
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
              <p className="fs-6 text-success" >{item.arbeitsort.ort}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default JobTicker;
