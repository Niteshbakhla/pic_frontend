import {
  require_react
} from "./chunk-W4EHDCLL.js";
import {
  __commonJS
} from "./chunk-EWTE5DHJ.js";

// node_modules/@ramonak/react-progress-bar/dist/index.js
var require_dist = __commonJS({
  "node_modules/@ramonak/react-progress-bar/dist/index.js"(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    var React = require_react();
    function _interopNamespace(e) {
      if (e && e.__esModule) return e;
      var n = /* @__PURE__ */ Object.create(null);
      if (e) {
        Object.keys(e).forEach(function(k) {
          if (k !== "default") {
            var d = Object.getOwnPropertyDescriptor(e, k);
            Object.defineProperty(n, k, d.get ? d : {
              enumerable: true,
              get: function() {
                return e[k];
              }
            });
          }
        });
      }
      n["default"] = e;
      return Object.freeze(n);
    }
    var React__namespace = _interopNamespace(React);
    var __assign = function() {
      __assign = Object.assign || function __assign2(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var ProgressBar = function(_a) {
      var _b = _a.bgColor, bgColor = _b === void 0 ? "#6a1b9a" : _b, _c = _a.height, height = _c === void 0 ? "20px" : _c, _d = _a.width, width = _d === void 0 ? "100%" : _d, _e = _a.borderRadius, borderRadius = _e === void 0 ? "50px" : _e, _f = _a.labelAlignment, labelAlignment = _f === void 0 ? "right" : _f, _g = _a.baseBgColor, baseBgColor = _g === void 0 ? "#e0e0de" : _g, _h = _a.labelColor, labelColor = _h === void 0 ? "#fff" : _h, _j = _a.labelSize, labelSize = _j === void 0 ? "15px" : _j, _k = _a.isLabelVisible, isLabelVisible = _k === void 0 ? true : _k, _l = _a.dir, dir = _l === void 0 ? "ltr" : _l, _m = _a.ariaValuemin, ariaValuemin = _m === void 0 ? 0 : _m, _o = _a.ariaValuemax, ariaValuemax = _o === void 0 ? 100 : _o, _p = _a.ariaValuetext, ariaValuetext = _p === void 0 ? null : _p, _q = _a.maxCompleted, maxCompleted = _q === void 0 ? 100 : _q, _r = _a.animateOnRender, animateOnRender = _r === void 0 ? false : _r, _s = _a.initCompletedOnAnimation, initCompletedOnAnimation = _s === void 0 ? 0 : _s, completed = _a.completed, margin = _a.margin, padding = _a.padding, customLabelStyles = _a.customLabelStyles, transitionDuration = _a.transitionDuration, transitionTimingFunction = _a.transitionTimingFunction, className = _a.className, customLabel = _a.customLabel, barContainerClassName = _a.barContainerClassName, completedClassName = _a.completedClassName, labelClassName = _a.labelClassName;
      var getAlignment = function(alignmentOption) {
        if (alignmentOption === "left") {
          return "flex-start";
        } else if (alignmentOption === "center") {
          return "center";
        } else if (alignmentOption === "right") {
          return "flex-end";
        } else {
          return null;
        }
      };
      var alignment = getAlignment(labelAlignment);
      var initCompletedOnAnimationStr = typeof initCompletedOnAnimation === "number" ? "".concat(initCompletedOnAnimation, "%") : initCompletedOnAnimation;
      var getFillerWidth = function(maxCompletedValue, completedValue) {
        if (maxCompletedValue) {
          var ratio = Number(completedValue) / maxCompletedValue;
          return ratio > 1 ? "100%" : "".concat(ratio * 100, "%");
        }
        return initCompletedOnAnimationStr;
      };
      var fillerWidth = getFillerWidth(maxCompleted, completed);
      var _t = React__namespace.useState(initCompletedOnAnimationStr), initWidth = _t[0], setInitWidth = _t[1];
      var containerStyles = {
        height,
        background: baseBgColor,
        borderRadius,
        padding,
        width,
        margin,
        overflow: "hidden"
      };
      var fillerStyles = {
        height,
        width: animateOnRender ? initWidth : fillerWidth,
        background: bgColor,
        transition: "width ".concat(transitionDuration || "1s", " ").concat(transitionTimingFunction || "ease-in-out"),
        borderRadius: "inherit",
        display: "flex",
        alignItems: "center",
        justifyContent: labelAlignment !== "outside" && alignment ? alignment : "normal"
      };
      var labelStyles = __assign({ padding: labelAlignment === "outside" ? "0 0 0 5px" : "5px", color: labelColor, fontWeight: "bold", fontSize: labelSize, display: !isLabelVisible ? "none" : "initial" }, customLabelStyles);
      var outsideStyles = {
        display: labelAlignment === "outside" ? "flex" : "initial",
        alignItems: labelAlignment === "outside" ? "center" : "initial"
      };
      var completedStr = typeof completed === "number" ? "".concat(completed, "%") : "".concat(completed);
      var labelStr = customLabel ? customLabel : completedStr;
      React__namespace.useEffect(function() {
        if (animateOnRender) {
          requestAnimationFrame(function() {
            return setInitWidth(fillerWidth);
          });
        }
      }, [fillerWidth, animateOnRender]);
      return React__namespace.createElement(
        "div",
        { style: className ? void 0 : outsideStyles, className, dir, role: "progressbar", "aria-valuenow": parseFloat(labelStr), "aria-valuemin": ariaValuemin, "aria-valuemax": ariaValuemax, "aria-valuetext": "".concat(ariaValuetext === null ? labelStr : ariaValuetext) },
        React__namespace.createElement(
          "div",
          { style: barContainerClassName ? void 0 : containerStyles, className: barContainerClassName },
          React__namespace.createElement("div", { style: completedClassName ? void 0 : fillerStyles, className: completedClassName }, labelAlignment !== "outside" && React__namespace.createElement("span", { style: labelClassName ? void 0 : labelStyles, className: labelClassName }, labelStr))
        ),
        labelAlignment === "outside" && React__namespace.createElement("span", { style: labelClassName ? void 0 : labelStyles, className: labelClassName }, labelStr)
      );
    };
    exports["default"] = ProgressBar;
  }
});
export default require_dist();
/*! Bundled license information:

@ramonak/react-progress-bar/dist/index.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
*/
//# sourceMappingURL=@ramonak_react-progress-bar.js.map
