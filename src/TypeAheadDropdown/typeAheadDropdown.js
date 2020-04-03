import React from "react";
import students from "./students";
import Dropdown from "./dropdown";
import "./typeAheadDropdown.css";

class TypeAheadDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: typeof this.props.data != "undefined" ? this.props.data : students,
      displayTable: undefined,
      studentSelected: false,
      studentName: ""
    };
    this.displayTable = this.displayTable.bind(this);
    this.getName = this.getName.bind(this);
    this.btnPrevious = this.btnPrevious.bind(this);
    this.btnNext = this.btnNext.bind(this);
  }
  componentDidMount() {
    this.setState({ displayTable: false });
    document.addEventListener("mousedown", this.handleClick, false);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClick, false);
  }
  handleClick = e => {
    if (this.wrapRef.contains(e.target)) {
      return;
    }
    if (!this.state.studentSelected) {
      this.setState({ studentName: "" });
    }
    this.setState({ displayTable: false });
  };
  handleChange(event) {
    this.setState({ studentName: event.target.value, studentSelected: false });
  }
  displayTable() {
    this.setState({ displayTable: true });
  }
  getName(name, surname) {
    this.setState({ studentName: `${name} ${surname}` }, () => {
      this.setState({ displayTable: false, studentSelected: true });
    });
    this.props.getFullName(`${name} ${surname}`);
  }
  btnNext() {
    this.props.btnNext();
  }
  btnPrevious() {
    this.props.btnPrevious();
  }
  render() {
    const { data, displayTable, studentName } = this.state;
    const {
      height,
      width,
      firstButton,
      secondButton,
      btnTextColor,
      btnfFooterBackground,
      btnBackgroundColor,
      ulBackgroundColor,
      liColor
    } = this.props;
    return (
      <div className="typeAheadDropdown">
        <div
          className="wrapSearchDiv"
          style={{
            height: typeof height != "undefined" ? height : "",
            width: typeof width != "undefined" ? width : ""
          }}
          ref={wrapRef => (this.wrapRef = wrapRef)}
          onClick={this.displayTable}
        >
          <input
            className="searchInput"
            placeholder="Search student..."
            value={studentName}
            onChange={this.handleChange.bind(this)}
          />
          {displayTable ? (
            <div className="searchDiv">
              <Dropdown
                data={data}
                getName={this.getName}
                ulBackgroundColor={ulBackgroundColor}
                liColor={liColor}
              />
              <div
                className="wrapButtons"
                style={{
                  backgroundColor: btnfFooterBackground
                }}
              >
                <button
                  className="btnPrevious"
                  onClick={this.btnPrevious}
                  style={{
                    backgroundColor: btnBackgroundColor,
                    color: btnTextColor
                  }}
                >
                  {firstButton}
                </button>
                <button
                  className="btnNext"
                  onClick={this.btnNext}
                  style={{
                    backgroundColor: btnBackgroundColor,
                    color: btnTextColor
                  }}
                >
                  {secondButton}
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default TypeAheadDropdown;
