"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireWildcard(require("react"));
var _reactDnd = require("react-dnd");
var _reactDndHtml5Backend = require("react-dnd-html5-backend");
var _ItemTypes = _interopRequireDefault(require("../ItemTypes"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var style = {
  // display: 'inline-block',
  // border: '1px dashed gray',
  // padding: '0.5rem 1rem',
  // backgroundColor: 'white',
  cursor: 'move'
};
var dragHandleSource = {
  beginDrag: function beginDrag(props) {
    var data = props.data,
      index = props.index,
      onDestroy = props.onDestroy,
      setAsChild = props.setAsChild,
      getDataById = props.getDataById;
    return {
      itemType: _ItemTypes["default"].BOX,
      index: data.parentId ? -1 : index,
      parentIndex: data.parentIndex,
      id: data.id,
      col: data.col,
      onDestroy: onDestroy,
      setAsChild: setAsChild,
      getDataById: getDataById,
      data: data
    };
  }
};
var DragHandle = /*#__PURE__*/function (_PureComponent) {
  function DragHandle() {
    (0, _classCallCheck2["default"])(this, DragHandle);
    return _callSuper(this, DragHandle, arguments);
  }
  (0, _inherits2["default"])(DragHandle, _PureComponent);
  return (0, _createClass2["default"])(DragHandle, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var connectDragPreview = this.props.connectDragPreview;
      if (connectDragPreview) {
        // Use empty image as a drag preview so browsers don't draw it
        // and we can draw whatever we want on the custom drag layer instead.
        connectDragPreview((0, _reactDndHtml5Backend.getEmptyImage)(), {
          // IE fallback: specify that we'd rather screenshot the node
          // when it already knows it's being dragged so we can hide it with CSS.
          captureDraggingState: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        isDragging = _this$props.isDragging,
        connectDragSource = _this$props.connectDragSource;
      return connectDragSource( /*#__PURE__*/_react["default"].createElement("div", {
        className: "btn is-isolated",
        style: _objectSpread({}, style)
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "is-isolated fas fa-grip-vertical"
      })));
    }
  }]);
}(_react.PureComponent);
var _default = exports["default"] = (0, _reactDnd.DragSource)(_ItemTypes["default"].CARD, dragHandleSource, function (connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
})(DragHandle);