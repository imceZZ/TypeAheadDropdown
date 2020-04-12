import React from "react";
import TypeAheadDropdown from "./TypeAheadDropdown";

class TypeAhead extends React.Component {
  getFullName(selectedRow) {
    console.log(selectedRow);
  }
  btnPrevious() {
    console.log("previous button clicked");
  }
  btnNext() {
    console.log("next button clicked");
  }
  handleChange(textInput) {
    console.log(textInput);
  }
  render() {
    return (
      <TypeAheadDropdown
        displayProperties={["name", "surname"]}
        selectedObjectToReturn={["id", "name", "surname"]}
        onChange={this.handleChange}
        getFullName={this.getFullName}
        btnPrevious={this.btnPrevious}
        btnNext={this.btnNext}
        firstButton="Previous"
        secondButton="Next"
      />
    );
  }
}

export default TypeAhead;
