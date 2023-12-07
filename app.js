const http = require("http");

class App {
  constructor(api_key, city) {
    this.api_key = api_key;
    this.api_url = `
    http://api.weatherstack.com/current?access_key=${this.api_key}&query=${
      city || "fetch:ip"
    }&units=m`;
  }

  getCurrentWeather() {
    http
      .get(this.api_url, (res) => {
        res.setEncoding("utf8");
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
          const recieved = JSON.parse(data);
          console.log(recieved.location);
          console.log(recieved.current);
          process.exit();
        });
      })
      .on("error", (err) => console.log("HTTP error: ", err));
  }
}

module.exports = {
  App,
};
