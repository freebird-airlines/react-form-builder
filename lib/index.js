"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ElementStore", {
  enumerable: true,
  get: function get() {
    return _store["default"];
  }
});
exports.ReactFormBuilder = void 0;
exports.ReactFormGenerator = ReactFormGenerator;
Object.defineProperty(exports, "Registry", {
  enumerable: true,
  get: function get() {
    return _registry["default"];
  }
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _reactDnd = require("react-dnd");
var _reactDndHtml5Backend = require("react-dnd-html5-backend");
var _reactIntl = require("react-intl");
var _preview = _interopRequireDefault(require("./preview"));
var _toolbar = _interopRequireDefault(require("./toolbar"));
var _form = _interopRequireDefault(require("./form"));
var _store = _interopRequireDefault(require("./stores/store"));
var _registry = _interopRequireDefault(require("./stores/registry"));
var _languageProvider = _interopRequireDefault(require("./language-provider"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /**
  * <ReactFormBuilder />
*/
var ReactFormBuilder = exports.ReactFormBuilder = /*#__PURE__*/function (_React$Component) {
  function ReactFormBuilder(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, ReactFormBuilder);
    _this = _callSuper(this, ReactFormBuilder, [props]);
    _this.state = {
      editMode: false,
      editElement: null
    };
    _this.editModeOn = _this.editModeOn.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(ReactFormBuilder, _React$Component);
  return (0, _createClass2["default"])(ReactFormBuilder, [{
    key: "editModeOn",
    value: function editModeOn(data, e) {
      e.preventDefault();
      e.stopPropagation();
      if (this.state.editMode) {
        this.setState({
          editMode: !this.state.editMode,
          editElement: null
        });
      } else {
        this.setState({
          editMode: !this.state.editMode,
          editElement: data
        });
      }
    }
  }, {
    key: "manualEditModeOff",
    value: function manualEditModeOff() {
      if (this.state.editMode) {
        this.setState({
          editMode: false,
          editElement: null
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var toolbarProps = {
        showDescription: this.props.show_description
      };
      var language = this.props.locale ? this.props.locale : 'en';
      var currentAppLocale = _languageProvider["default"][language];
      if (this.props.toolbarItems) {
        toolbarProps.items = this.props.toolbarItems;
      }
      return /*#__PURE__*/_react["default"].createElement(_reactDnd.DndProvider, {
        backend: _reactDndHtml5Backend.HTML5Backend
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.IntlProvider, {
        locale: currentAppLocale.locale,
        messages: currentAppLocale.messages
      }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "react-form-builder clearfix"
      }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_preview["default"], {
        files: this.props.files,
        manualEditModeOff: this.manualEditModeOff.bind(this),
        showCorrectColumn: this.props.showCorrectColumn,
        parent: this,
        data: this.props.data,
        url: this.props.url,
        saveUrl: this.props.saveUrl,
        onLoad: this.props.onLoad,
        onPost: this.props.onPost,
        editModeOn: this.editModeOn,
        editMode: this.state.editMode,
        variables: this.props.variables,
        registry: _registry["default"],
        editElement: this.state.editElement,
        renderEditForm: this.props.renderEditForm,
        saveAlways: this.props.saveAlways
      }), /*#__PURE__*/_react["default"].createElement(_toolbar["default"], (0, _extends2["default"])({}, toolbarProps, {
        customItems: this.props.customToolbarItems
      })))))));
    }
  }]);
}(_react["default"].Component);
function ReactFormGenerator(props) {
  var language = props.locale ? props.locale : 'en';
  var currentAppLocale = _languageProvider["default"][language];
  return /*#__PURE__*/_react["default"].createElement(_reactIntl.IntlProvider, {
    locale: currentAppLocale.locale,
    messages: currentAppLocale.messages
  }, /*#__PURE__*/_react["default"].createElement(_form["default"], props));
}
var FormBuilders = {};
FormBuilders.ReactFormBuilder = ReactFormBuilder;
FormBuilders.ReactFormGenerator = ReactFormGenerator;
FormBuilders.ElementStore = _store["default"];
FormBuilders.Registry = _registry["default"];
var _default = exports["default"] = FormBuilders;