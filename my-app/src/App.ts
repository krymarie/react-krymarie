class ReactSkycons extends React.Component {
  state = {
    skycons: new Skycons({ color: this.props.color })
  };

  componentDidMount() {
    this.state.skycons.add(
      ReactDOM.findDOMNode(this),
      Skycons[this.fixNaming(this.props.icon)]
    );

    if (this.props.autoPlay) {
      this.state.skycons.play();
    }
    this.fixNaming = this.fixNaming.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.state.skycons.set(
      ReactDOM.findDOMNode(this),
      Skycons[this.fixNaming(nextProps.icon)]
    );
  }

  componentWillUnmount() {
    this.state.skycons.pause();
    this.state.skycons.remove(ReactDOM.findDOMNode(this));
  }

  play() {
    this.state.skycons.play();
  }

  pause() {
    this.state.skycons.pause();
  }

  fixNaming(iconName) {
    return iconName.replace(/-/g, "_");
  }

  render() {
    const defaultStyle = {
      height: "100%"
    };

    return <canvas style={defaultStyle} {...this.props} />;
  }
}

const More = ({ toggleUnit, unit }) => {
  return (
    <div className="more">
      <div className="toggles">
        <span disabled={isActive("F")}>
          <a onClick={toggleUnit}>&deg;F</a>
        </span>
        <span disabled={isActive("C")}>
          <a onClick={toggleUnit}>&deg;C</a>
        </span>
      </div>
    </div>
  );

  function isActive(val) {
    if (val === unit) {
      return "active";
    }

    return null;
  }
};

const Tab = ({ name, onChangeActiveTab, isActiveTab }) => {
  return (
    <li className={`tab ${isActiveTab ? "active" : ""}`}>
      <a onClick={onTabClick}>{name}</a>
    </li>
  );

  function onTabClick() {
    onChangeActiveTab(name);
  }
};

const WeeklyWeather = ({ day }) => {
  return (
    <div className="weather-panel">
      <div className="overview">
        <span className="date">{formatTime(day.time)}</span>
        <span className="summary">
          {day.summary
            .split(" ")
            .slice(0, 2)
            .join(" ")}
        </span>
      </div>
      <div className="weather-info">
        <div className="weather-icon">
          <ReactSkycons icon={`${day.icon.toUpperCase()}`} />
        </div>
        <div className="temp">
          <div className="max">{Math.round(day.temperatureMax)}</div>
          <div className="min">{Math.round(day.temperatureMin)}</div>
        </div>
      </div>
    </div>
  );

  function formatTime(time) {
    const t = new Date(time);
    return moment.unix(t).format("dddd, MMM D");
  }
};

const WeeklyWeatherList = ({ daily }) => {
  return (
    <div className="weather-lists">
      {daily.data.map(day => (
        <WeeklyWeather key={day.time} day={day} />
      ))}
    </div>
  );
};

const DailyWeather = ({ currently, daily, unit }) => {
  return (
    <div className="daily-weather">
      <div className="overview">
        <div className="weather-icon">
          <div className="date">{formatTime(currently.time)}</div>
          <ReactSkycons
            icon={`${currently.icon.toUpperCase()}`}
            color="white"
            autoPlay={true}
          />
          <div className="summary">{currently.summary}</div>
        </div>
        <div className="weather-info">
          <div className="max">
            Max {Math.round(daily.temperatureMax)}&deg;{unit}
          </div>
          <div className="min">
            Min {Math.round(daily.temperatureMin)}&deg;{unit}
          </div>
          <div className="temp">
            <span className="temp-number">
              {Math.round(currently.temperature)}
            </span>
            <span className="temp-unit">&deg;{unit}</span>
          </div>
          <div className="apparent-temp">
            Feels like {Math.round(currently.apparentTemperature)}
          </div>
        </div>
      </div>
    </div>
  );

  function formatTime(time) {
    const t = new Date(time);
    return moment.unix(t).format("MMMM D, h:mm");
  }
};

type TabName = "Today" | "Weekly" | "More";
type WeatherUnit = "F" | "C";

type WeatherAppState = {
  weather: any;
  activeTab: TabName;
  unit: WeatherUnit;
};

const TABS = ["Today", "Weekly", "More"];

class WeatherApp extends React.Component<{}, WeatherAppState> {
  state = {
    weather: {},
    activeTab: "Today",
    unit: "F"
  };

  componentDidMount() {
    this.requestLocation();
  }

  isActiveTab = (tabName: TabName) => {
    return this.state.activeTab === tabName;
  };

  changeActiveTab = (activeTab: TabName) => {
    this.setState({ activeTab });
  };

  setWeather = weather => {
    this.setState({ weather });
  };

  setUnit = (unit: WeatherUnit) => {
    this.setState({ unit });
  };

  requestLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.fetchWeatherInfo);
    }
  }

  toggleUnit = () => {
    this.requestLocation();
    const unit = this.state.unit === "F" ? "C" : "F";
    this.setState({ unit });
  };

  fetchWeatherInfo = async pos => {
    const PROXY_URL = "https://cors-anywhere.herokuapp.com";
    const BASE_URL = "https://api.darksky.net";
    const PARAM = "forecast";
    const API_KEY = "2acae71326f68d3b0ea43e3c39b43ae5";

    const unit = this.state.unit === "F" ? "us" : "si";

    const res = await fetch(
      `${PROXY_URL}/${BASE_URL}/${PARAM}/${API_KEY}/${pos.coords.latitude},${pos.coords.longitude}?units=${unit}&exclude=minutely,hourly,alerts,flags`
    );
    const weatherInfo = await res.json();

    this.setWeather(weatherInfo);
  };

  render() {
    const { currently, daily } = this.state.weather;

    if (!currently) return <div>Loading...</div>;

    return (
      <div className="weather-app">
        <ul className="tabs">
          {TABS.map((tab, index) => (
            <Tab
              key={index}
              name={tab}
              onChangeActiveTab={this.changeActiveTab}
              isActiveTab={this.isActiveTab(tab)}
            />
          ))}
        </ul>
        {this.state.activeTab === "Today" ? (
          <DailyWeather
            currently={currently}
            daily={daily.data[0]}
            unit={this.state.unit}
          />
        ) : (
          ""
        )}

        {this.state.activeTab === "Weekly" ? (
          <WeeklyWeatherList daily={daily} />
        ) : (
          ""
        )}

        {this.state.activeTab === "More" ? (
          <More toggleUnit={this.toggleUnit} unit={this.state.unit} />
        ) : (
          ""
        )}
      </div>
    );
  }
}

const Device = () => {
  return (
    <div className="container">
      <div className="device">
        <header>
          <div className="notification-light" />
          <div className="camera" />
          <div className="speaker" />
        </header>
        <div className="screen">
          <div className="power-button" />
          <div className="volume-button" />
          <WeatherApp />
          <div className="nav">
            <div className="back" />
            <div className="home" />
            <div className="overview" />
          </div>
        </div>
        <footer>
          <div className="speaker" />
        </footer>
      </div>
    </div>
  );
};

const App = () => (
  <React.Fragment>
    <Device />
    <div className="badge">
      Powered by <a href="https://darksky.net/">Dark Sky API</a>
    </div>
  </React.Fragment>
);

ReactDOM.render(<App />, document.getElementById("root"));

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
