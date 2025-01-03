import axios from "axios";

export default async (req, res) => {
  // Die URL der API, die du aufrufen möchtest
  const apiUrl =
    "https://rest.arbeitsagentur.de/jobboerse/jobsuche-service/pc/v4/jobs?was=Web+Developer";

  try {
    // Anfrage an die externe API senden
    const response = await axios.get(apiUrl, {
      headers: {
        "X-API-Key": "jobboerse-jobsuche", // Der erforderliche API-Key
      },
    });
    const data = response.data;

    // CORS-Header setzen, um Anfragen von allen Domains zu erlauben
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");

    // Daten an den Client zurückgeben
    res.status(200).json(data);
  } catch (error) {
    // Fehlerbehandlung
    console.error("API Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
