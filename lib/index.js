"use strict";

var _interopRequireDefault = require("babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _students = _interopRequireDefault(require("./students"));

var _dropdown = _interopRequireDefault(require("./dropdown"));

require("./typeAheadDropdown.css");

var _jsxFileName = "./../src/TypeAheadDropdown/index.js";

class TypeAheadDropdown extends _react.default.Component {
  constructor(props) {
    super(props);

    this.handleClick = e => {
      if (this.wrapRef.contains(e.target)) {
        return;
      }

      if (
        !this.state.studentSelected &&
        this.state.studentName !== this.props.defaultName
      ) {
        this.setState({
          studentName: ""
        });
      }

      this.setState({
        displayTable: false
      });
    };

    this.state = {
      data:
        typeof this.props.data != "undefined"
          ? this.props.data
          : _students.default,
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
    this.setState({
      displayTable: false
    });
    document.addEventListener("mousedown", this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClick, false);
  }

  componentWillReceiveProps() {
    if (this.props.data.error) {
      this.setState({
        data: []
      });
    } else {
      this.setState({
        data: this.props.data
      });
    }
  }

  handleChange(event) {
    this.setState({
      studentName: event.target.value,
      studentSelected: false
    });
    this.props.onChange(event.target.value);
  }

  displayTable() {
    this.setState({
      displayTable: true
    });
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
        this.setState({
          displayTable: false,
          studentSelected: true
        });
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
      disablePreviousButton
    } = this.props;
    return /*#__PURE__*/ _react.default.createElement(
      "div",
      {
        className: "typeAheadDropdown",
        style: {
          width: typeof width != "undefined" ? width : ""
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 7
        }
      },
      /*#__PURE__*/ _react.default.createElement(
        "div",
        {
          className: "wrapSearchDiv",
          style: {
            height: typeof height != "undefined" ? height : "",
            width: typeof width != "undefined" ? width : "",
            border: typeof borderColor != "undefined" ? borderColor : ""
          },
          ref: wrapRef => (this.wrapRef = wrapRef),
          onClick: this.displayTable,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 9
          }
        },
        /*#__PURE__*/ _react.default.createElement("input", {
          className: "searchInput",
          placeholder: this.state.inputPlaceholder,
          value: studentName,
          onChange: this.handleChange.bind(this),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 11
          }
        }),
        displayTable
          ? /*#__PURE__*/ _react.default.createElement(
              "div",
              {
                className: "searchDiv",
                style: {
                  top: typeof height != "undefined" ? height : ""
                },
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 134,
                  columnNumber: 13
                }
              },
              /*#__PURE__*/ _react.default.createElement(_dropdown.default, {
                noDataMSG: this.props.noDataMSG,
                displayProperties: this.props.displayProperties,
                selectedObjectToReturn: this.props.selectedObjectToReturn,
                data: data,
                getName: this.getName,
                ulBackgroundColor: ulBackgroundColor,
                liColor: liColor,
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 140,
                  columnNumber: 15
                }
              }),
              /*#__PURE__*/ _react.default.createElement(
                "div",
                {
                  className: "wrapButtons",
                  style: {
                    backgroundColor: btnfFooterBackground,
                    display: data.length === 0 ? "none" : ""
                  },
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 149,
                    columnNumber: 15
                  }
                },
                /*#__PURE__*/ _react.default.createElement(
                  "button",
                  {
                    className: "btnPrevious",
                    onClick: this.btnPrevious,
                    style: {
                      backgroundColor: btnBackgroundColor,
                      color: btnTextColor
                    },
                    disabled: disablePreviousButton,
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 156,
                      columnNumber: 17
                    }
                  },
                  firstButton
                ),
                /*#__PURE__*/ _react.default.createElement(
                  "button",
                  {
                    className: "btnNext",
                    onClick: this.btnNext,
                    style: {
                      backgroundColor: btnBackgroundColor,
                      color: btnTextColor
                    },
                    disabled: disableNextButton,
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 167,
                      columnNumber: 17
                    }
                  },
                  secondButton
                )
              )
            )
          : ""
      )
    );
  }
}

var _default = TypeAheadDropdown;
exports.default = _default;
