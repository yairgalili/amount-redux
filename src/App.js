import React, { useState } from "react";
import Button from "@mui/material/Button";
import "./App.css";
import { TextField } from "@mui/material";

const App = () => {
  const [customAmount, setCustomAmount] = useState(0);

  return (
    <div className="App">
      <div className="main">Redux sum: </div>
      <div className="centeredDiv">
        <Button
          onClick={() => {
            setCustomAmount((prev) => prev + 1);
          }}
        >
          +
        </Button>
        <TextField
          value={customAmount}
          type="number"
          onChange={(e) => {
            setCustomAmount(e.target.value);
          }}
        ></TextField>
        <Button
          onClick={() => {
            setCustomAmount((prev) => prev - 1);
          }}
        >
          -
        </Button>
      </div>
      <div>
        <Button
          variant="outlined"
          sx={{
            marginTop: "5px",
            marginBottom: "5px",
          }}
        >
          Execute
        </Button>
      </div>

      <Button>Add 1</Button>
      <Button>Add 2</Button>

      <Button>Subtract 1</Button>
      <Button>Subtract 2</Button>
    </div>
  );
};

export default App;