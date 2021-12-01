const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //when connected to the server. console log this && add a name to the snake
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: BS");
  })

  //handling data sent from the server
  conn.on("data", (data) => {
    console.log(data);
  });
  return conn;
};

module.exports = {connect}

