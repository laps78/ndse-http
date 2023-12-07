#!/usr/bin/env node
const { App } = require("./app");
const env = require("dotenv");

env.config();

const app = new App(process.env.api_key);
var argv = require("yargs/yargs")(process.argv.slice(2))
  .usage("Пример использования: $0 <command> [option]")
  .command({
    command: "current",
    alias: "c",
    desc: "Показывает текущую погоду с автоопределением местоположения с помощью IP-адреса",
    builder: () => {},
    handler: () => {
      app.getCurrentWeather(process.argv[process.argv.length - 1]);
    },
  })
  .option("city", {
    alias: "c",
    description: "Город (латиница)",
  })
  .help().argv;
