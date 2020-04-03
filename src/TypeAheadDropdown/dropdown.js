import React from "react";
import "./dropdown.css";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    return this.props.getName(
      e.currentTarget.dataset.name,
      e.currentTarget.dataset.surname
    );
  }
  render() {
    let j = 0;
    const { ulBackgroundColor, liColor, data } = this.props;
    return (
      <div
        className="dropDownDiv"
        style={{
          backgroundColor: ulBackgroundColor
        }}
      >
        <ul>
          {data.map(item => {
            j++;
            return (
              <li
                style={{
                  color: liColor
                }}
                key={j}
                onClick={this.handleClick}
                data-name={item.name}
                data-surname={item.surname}
              >
                {item.name} {item.surname}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Dropdown;
