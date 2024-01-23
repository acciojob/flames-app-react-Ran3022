import React, { useState } from "react";

function App() {
  // Declare state variables for the input names and the output relationship
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [relationship, setRelationship] = useState("");

  // Define a function to calculate the relationship based on the FLAMES rules
  const calculateRelationship = () => {
    // Convert the names to lowercase and remove any spaces
    let name1Lower = name1.toLowerCase().replace(/\s/g, "");
    let name2Lower = name2.toLowerCase().replace(/\s/g, "");

    // Check if the names are valid
    if (name1Lower === "" || name2Lower === "") {
      setRelationship("Please enter valid input");
      return;
    }

    // Loop through the letters of the first name and remove any common letters with the second name
    for (let i = 0; i < name1Lower.length; i++) {
      let letter = name1Lower[i];
      let index = name2Lower.indexOf(letter);
      if (index !== -1) {
        // Remove the letter from both names
        name1Lower = name1Lower.replace(letter, "");
        name2Lower = name2Lower.replace(letter, "");
      }
    }

    // Find the sum of the remaining letters' lengths and modulo by 6
    let sum = name1Lower.length + name2Lower.length;
    let remainder = sum % 6;

    // Assign the relationship based on the remainder value
    switch (remainder) {
      case 1:
        setRelationship("Friends");
        break;
      case 2:
        setRelationship("Love");
        break;
      case 3:
        setRelationship("Affection");
        break;
      case 4:
        setRelationship("Marriage");
        break;
      case 5:
        setRelationship("Enemy");
        break;
      case 0:
        setRelationship("Siblings");
        break;
      default:
        setRelationship("Unknown");
        break;
    }
  };

  // Define a function to clear the input and output fields
  const clear = () => {
    setName1("");
    setName2("");
    setRelationship("");
  };

  // Return the JSX elements for the app
  return (
    <div className="App">
     
      <input
        type="text"
        value={name1}
        onChange={(e) => setName1(e.target.value)}
        data-testid="input1"
        placeholder="First name"
      />
      <input
        type="text"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
        data-testid="input2"
        placeholder="Second name"
      />
      <button onClick={calculateRelationship} data-testid="calculate_relationship">
        Calculate Relationship Future
      </button>
      <button onClick={clear} data-testid="clear">
        Clear
      </button>
      <h3 data-testid="answer">{relationship}</h3>
    </div>
  );
}

export default App;
