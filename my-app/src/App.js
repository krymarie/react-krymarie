import React from "react";
import moment from "moment";
// import Skycons from "skycons";
import "./index.css";

var __extends =
  (this && this.__extends) ||
  (function() {
    var extendStatics = function(d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(d, b) {
            d.__proto__ = b;
          }) ||
        function(d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function(d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
var __assign =
  (this && this.__assign) ||
  function() {
    __assign =
      Object.assign ||
      function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __awaiter =
  (this && this.__awaiter) ||
  function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function(resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function() {
          return this;
        }),
      g
    );
    function verb(n) {
      return function(v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_) {
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y["return"]
                  : op[0]
                  ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
// var ReactSkycons = /** @class */ (function(_super) {
//   __extends(ReactSkycons, _super);
//   function ReactSkycons() {
//     var _this = (_super !== null && _super.apply(this, arguments)) || this;
//     _this.state = {
//       skycons: new Skycons({ color: _this.props.color })
//     };

//     return _this;
//   }
//   ReactSkycons.prototype.componentDidMount = function() {
//     this.state.skycons.add(
//       ReactDOM.findDOMNode(this),
//       Skycons[this.fixNaming(this.props.icon)]
//     );
//     if (this.props.autoPlay) {
//       this.state.skycons.play();
//     }
//     this.fixNaming = this.fixNaming.bind(this);
//   };
//   ReactSkycons.prototype.componentWillReceiveProps = function(nextProps) {
//     this.state.skycons.set(
//       ReactDOM.findDOMNode(this),
//       Skycons[this.fixNaming(nextProps.icon)]
//     );
//   };
//   ReactSkycons.prototype.componentWillUnmount = function() {
//     this.state.skycons.pause();
//     this.state.skycons.remove(ReactDOM.findDOMNode(this));
//   };
//   ReactSkycons.prototype.play = function() {
//     this.state.skycons.play();
//   };
//   ReactSkycons.prototype.pause = function() {
//     this.state.skycons.pause();
//   };
//   ReactSkycons.prototype.fixNaming = function(iconName) {
//     return iconName.replace(/-/g, "_");
//   };
//   ReactSkycons.prototype.render = function() {
//     var defaultStyle = {
//       height: "100%"
//     };

//     return React.createElement(
//       "canvas",
//       __assign({ style: defaultStyle }, this.props)
//     );
//   };
//   return ReactSkycons;
// })(React.Component);
var More = function(_a) {
  var toggleUnit = _a.toggleUnit,
    unit = _a.unit;
  return React.createElement(
    "div",
    { className: "more" },
    React.createElement(
      "div",
      { className: "toggles" },
      React.createElement(
        "span",
        { disabled: isActive("F") },
        React.createElement("a", { onClick: toggleUnit }, "\u00B0F")
      ),
      React.createElement(
        "span",
        { disabled: isActive("C") },
        React.createElement("a", { onClick: toggleUnit }, "\u00B0C")
      )
    )
  );
  function isActive(val) {
    if (val === unit) {
      return "active";
    }
    return null;
  }
};
var Tab = function(_a) {
  var name = _a.name,
    onChangeActiveTab = _a.onChangeActiveTab,
    isActiveTab = _a.isActiveTab;
  return React.createElement(
    "li",
    { className: "tab " + (isActiveTab ? "active" : "") },
    React.createElement("a", { onClick: onTabClick }, name)
  );
  function onTabClick() {
    onChangeActiveTab(name);
  }
};
var WeeklyWeather = function(_a) {
  var day = _a.day;
  return React.createElement(
    "div",
    { className: "weather-panel" },
    React.createElement(
      "div",
      { className: "overview" },
      React.createElement("span", { className: "date" }, formatTime(day.time)),
      React.createElement(
        "span",
        { className: "summary" },
        day.summary
          .split(" ")
          .slice(0, 2)
          .join(" ")
      )
    ),
    React.createElement(
      "div",
      { className: "weather-info" },
      // React.createElement(
      //   "div",
      //   { className: "weather-icon" },
      //   React.createElement(ReactSkycons, { icon: "" + day.icon.toUpperCase() })
      // ),
      React.createElement(
        "div",
        { className: "temp" },
        React.createElement(
          "div",
          { className: "max" },
          Math.round(day.temperatureMax)
        ),
        React.createElement(
          "div",
          { className: "min" },
          Math.round(day.temperatureMin)
        )
      )
    )
  );
  function formatTime(time) {
    var t = new Date(time);
    return moment.unix(t).format("dddd, MMM D");
  }
};
var WeeklyWeatherList = function(_a) {
  var daily = _a.daily;
  return React.createElement(
    "div",
    { className: "weather-lists" },
    daily.data.map(function(day) {
      return React.createElement(WeeklyWeather, { key: day.time, day: day });
    })
  );
};
var DailyWeather = function(_a) {
  var currently = _a.currently,
    daily = _a.daily,
    unit = _a.unit;
  return React.createElement(
    "div",
    { className: "daily-weather" },
    React.createElement(
      "div",
      { className: "overview" },
      React.createElement(
        "div",
        { className: "weather-icon" },
        React.createElement(
          "div",
          { className: "date" },
          formatTime(currently.time)
        ),
        // React.createElement(ReactSkycons, {
        //   icon: "" + currently.icon.toUpperCase(),
        //   color: "white",
        //   autoPlay: true
        // }),
        React.createElement("div", { className: "summary" }, currently.summary)
      ),
      React.createElement(
        "div",
        { className: "weather-info" },
        React.createElement(
          "div",
          { className: "max" },
          "Max ",
          Math.round(daily.temperatureMax),
          "\u00B0",
          unit
        ),
        React.createElement(
          "div",
          { className: "min" },
          "Min ",
          Math.round(daily.temperatureMin),
          "\u00B0",
          unit
        ),
        React.createElement(
          "div",
          { className: "temp" },
          React.createElement(
            "span",
            { className: "temp-number" },
            Math.round(currently.temperature)
          ),
          React.createElement(
            "span",
            { className: "temp-unit" },
            "\u00B0",
            unit
          )
        ),
        React.createElement(
          "div",
          { className: "apparent-temp" },
          "Feels like ",
          Math.round(currently.apparentTemperature)
        )
      )
    )
  );
  function formatTime(time) {
    var t = new Date(time);
    return moment.unix(t).format("MMMM D, h:mm");
  }
};
var TABS = ["Today", "Weekly", "More"];
var WeatherApp = /** @class */ (function(_super) {
  __extends(WeatherApp, _super);
  function WeatherApp() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.state = {
      weather: {},
      activeTab: "Today",
      unit: "F"
    };

    _this.isActiveTab = function(tabName) {
      return _this.state.activeTab === tabName;
    };
    _this.changeActiveTab = function(activeTab) {
      _this.setState({ activeTab: activeTab });
    };
    _this.setWeather = function(weather) {
      _this.setState({ weather: weather });
    };
    _this.setUnit = function(unit) {
      _this.setState({ unit: unit });
    };
    _this.toggleUnit = function() {
      _this.requestLocation();
      var unit = _this.state.unit === "F" ? "C" : "F";
      _this.setState({ unit: unit });
    };
    _this.fetchWeatherInfo = function(pos) {
      return __awaiter(_this, void 0, void 0, function() {
        var PROXY_URL, BASE_URL, PARAM, API_KEY, unit, res, weatherInfo;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              PROXY_URL = "https://cors-anywhere.herokuapp.com";
              BASE_URL = "https://api.darksky.net";
              PARAM = "forecast";
              API_KEY = "2acae71326f68d3b0ea43e3c39b43ae5";
              unit = this.state.unit === "F" ? "us" : "si";
              return [
                4 /*yield*/,
                fetch(
                  PROXY_URL +
                    "/" +
                    BASE_URL +
                    "/" +
                    PARAM +
                    "/" +
                    API_KEY +
                    "/" +
                    pos.coords.latitude +
                    "," +
                    pos.coords.longitude +
                    "?units=" +
                    unit +
                    "&exclude=minutely,hourly,alerts,flags"
                )
              ];
            case 1:
              res = _a.sent();
              return [4 /*yield*/, res.json()];
            case 2:
              weatherInfo = _a.sent();
              this.setWeather(weatherInfo);
              return [2 /*return*/];
          }
        });
      });
    };
    return _this;
  }
  WeatherApp.prototype.componentDidMount = function() {
    this.requestLocation();
  };
  WeatherApp.prototype.requestLocation = function() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.fetchWeatherInfo);
    }
  };
  WeatherApp.prototype.render = function() {
    var _this = this;
    var _a = this.state.weather,
      currently = _a.currently,
      daily = _a.daily;
    if (!currently) return React.createElement("div", null, "Loading...");
    return React.createElement(
      "div",
      { className: "weather-app" },
      React.createElement(
        "ul",
        { className: "tabs" },
        TABS.map(function(tab, index) {
          return React.createElement(Tab, {
            key: index,
            name: tab,
            onChangeActiveTab: _this.changeActiveTab,
            isActiveTab: _this.isActiveTab(tab)
          });
        })
      ),
      this.state.activeTab === "Today"
        ? React.createElement(DailyWeather, {
            currently: currently,
            daily: daily.data[0],
            unit: this.state.unit
          })
        : "",
      this.state.activeTab === "Weekly"
        ? React.createElement(WeeklyWeatherList, { daily: daily })
        : "",
      this.state.activeTab === "More"
        ? React.createElement(More, {
            toggleUnit: this.toggleUnit,
            unit: this.state.unit
          })
        : ""
    );
  };
  return WeatherApp;
})(React.Component);
var Device = function() {
  return React.createElement(
    "div",
    { className: "container" },
    React.createElement(
      "div",
      { className: "screen" },
      React.createElement(WeatherApp, null)
    )
  );
};

//only thin in js
export default function App() {
  return React.createElement(Device, null);
}
