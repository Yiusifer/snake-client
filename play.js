const net = require("net");
const { stdout } = require("process");

const connect = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
connect();

