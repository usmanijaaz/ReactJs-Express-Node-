const express = require("express");
const app = express();
const PORT = 3001;
const mydata = require("./sideData.json");
const cors = require("cors");
app.use(cors());

app.listen(PORT, () => { 
    console.log("Successfully started server at: " + PORT);
    console.log(mydata);
});
  
app.get("/", (request, response) => {
   console.log("Inside get method");
   response.json(mydata );
  
});
 