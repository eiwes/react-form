import React from "react";
import { MyForm } from "./MyForm";

const App = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <MyForm
        onSubmit={({ beginningDate, endingDate, zamena, type }) => {
          console.log(beginningDate, endingDate, zamena, type);
        }}
      />
    </div>
  );
};

export default App;
