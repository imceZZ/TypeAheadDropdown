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
      inputPlaceholder:
        typeof this.props.placeholder != "undefined"
          ? this.props.placeholder
          : "Search student...",
      studentSelected: false,
      studentName:
        typeof this.props.defaultName != "undefined"
          ? this.props.defaultName
          : ""
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
    if (
      !this.state.studentSelected &&
      this.state.studentName !== this.props.defaultName
    ) {
      this.setState({ studentName: "" });
    }
    this.setState({ displayTable: false });
  };
  handleChange(event) {
    this.setState({ studentName: event.target.value, studentSelected: false });
    this.props.onChange(event.target.value);
  }
  displayTable() {
    this.setState({ displayTable: true });
  }
  getName(id, name, surname) {
    const { selectedObjectToReturn } = this.props;
    this.setState({ studentName: `${name} ${surname}` }, () => {
      this.setState({ displayTable: false, studentSelected: true });
    });
    const selectedPerson = {
      [selectedObjectToReturn[0]]: id,
      [selectedObjectToReturn[1]]: name,
      [selectedObjectToReturn[2]]: surname
    };
    this.props.getFullName(selectedPerson);
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
      <div
        className="typeAheadDropdown"
        style={{ width: typeof width != "undefined" ? width : "" }}
      >
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
            placeholder={this.state.inputPlaceholder}
            value={studentName}
            onChange={this.handleChange.bind(this)}
          />
          {displayTable ? (
            <div
              className="searchDiv"
              style={{
                top: typeof height != "undefined" ? height : ""
              }}
            >
              <Dropdown
                displayProperties={this.props.displayProperties}
                selectedObjectToReturn={this.props.selectedObjectToReturn}
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
