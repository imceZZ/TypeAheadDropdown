import React from "react";
import "./dropdown.css";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    return this.props.getName(
      e.currentTarget.dataset.id,
      e.currentTarget.dataset.name,
      e.currentTarget.dataset.surname
    );
  }
  render() {
    let j = 0;
    const {
      ulBackgroundColor,
      liColor,
      data,
      displayProperties,
      selectedObjectToReturn,
      noDataMSG,
      slash,
    } = this.props;
    let list;
    if (data.length === 0) {
      list = <li>{typeof noDataMSG != "undefined" ? noDataMSG : "No data"}</li>;
    } else {
      list = data.map((item) => {
        j++;
        return (
          <li
            className="liSelector"
            style={{
              color: liColor,
            }}
            key={j}
            onClick={this.handleClick}
            data-id={item[selectedObjectToReturn[0]]}
            data-name={item[selectedObjectToReturn[1]]}
            data-surname={item[selectedObjectToReturn[2]]}
          >
            {item[displayProperties[0]]}
            {slash}
            {item[displayProperties[1]]}
          </li>
        );
      });
    }
    return (
      <div
        className="dropDownDiv"
        style={{
          backgroundColor: ulBackgroundColor,
        }}
      >
        <ul
          style={{
            cursor: data.length === 0 ? "default" : "pointer",
          }}
        >
          {list}
        </ul>
      </div>
    );
  }
}

export default Dropdown;
