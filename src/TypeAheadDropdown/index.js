import React from "react";
import students from "./students";
import Dropdown from "./dropdown";
import "./typeAheadDropdown.css";

class TypeAheadDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
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
    this.focusTypeAhead = this.focusTypeAhead.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  componentDidMount() {
    this.setState({ displayTable: false });
    document.addEventListener("mousedown", this.handleClick, false);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClick, false);
  }
  componentWillReceiveProps() {
    if (this.props.data.error) {
      this.setState({ data: [] });
    } else {
      this.setState({ data: this.props.data });
    }
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
  handleKeyPress = e => {
    if (e.keyCode == 9) {
      this.setState({ displayTable: false });
      if (!this.state.studentSelected) {
        this.setState({ studentName: "" });
      }
    }
  };
  focusTypeAhead() {
    this.setState({ displayTable: true });
  }
  handleChange(event) {
    this.setState({ studentName: event.target.value, studentSelected: false });
    this.props.onChange(event.target.value);
  }
  displayTable() {
    if (!this.props.disableInput) {
      this.setState({ displayTable: true });
    }
  }
  getName(id, name, surname) {
    const { selectedObjectToReturn } = this.props;
    let studentN = "";
    if (
      this.props.displayProperties[0].length > 0 &&
      this.props.displayProperties[1].length > 0
    ) {
      studentN = name + " " + surname;
    } else if (this.props.displayProperties[0].length > 0) {
      studentN = name;
    } else if (this.props.displayProperties[1].length > 0) {
      studentN = surname;
    }
    this.setState(
      {
        studentName: studentN
      },
      () => {
        this.setState({ displayTable: false, studentSelected: true });
      }
    );
    const selectedPerson = {
      [selectedObjectToReturn[0]]: id,
      [selectedObjectToReturn[1]]: name,
      [selectedObjectToReturn[2]]: surname
    };
    this.props.getFullName(selectedPerson);
  }
  btnNext(e) {
    e.preventDefault();
    return this.props.btnNext();
  }
  btnPrevious(e) {
    e.preventDefault();
    return this.props.btnPrevious();
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
      liColor,
      borderColor,
      disableNextButton,
      disablePreviousButton,
      disableInput
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
            width: typeof width != "undefined" ? width : "",
            border: typeof borderColor != "undefined" ? borderColor : ""
          }}
          ref={wrapRef => (this.wrapRef = wrapRef)}
          onClick={this.displayTable}
        >
          <input
            onKeyDown={this.handleKeyPress}
            ref={this.textInput}
            onFocus={this.focusTypeAhead}
            className="searchInput"
            disabled={disableInput ? true : false}
            placeholder={this.state.inputPlaceholder}
            value={studentName}
            onChange={this.handleChange.bind(this)}
            style={{
              backgroundColor: disableInput ? "#F8F8F9" : ""
            }}
          />
          {displayTable ? (
            <div
              className="searchDiv"
              style={{
                top: typeof height != "undefined" ? height : ""
              }}
            >
              <Dropdown
                noDataMSG={this.props.noDataMSG}
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
                  tabIndex="-1"
                  className="btnPrevious"
                  onClick={this.btnPrevious}
                  style={{
                    backgroundColor: btnBackgroundColor,
                    color: btnTextColor
                  }}
                  disabled={disablePreviousButton}
                >
                  {firstButton}
                </button>
                <button
                  tabIndex="-1"
                  className="btnNext"
                  onClick={this.btnNext}
                  style={{
                    backgroundColor: btnBackgroundColor,
                    color: btnTextColor
                  }}
                  disabled={disableNextButton}
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
