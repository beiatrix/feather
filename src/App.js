import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <body>

      <header className="header">
        <h1 className="header__title">Weather PWA</h1>
        <button id="butRefresh" className="headerButton" aria-label="Refresh"></button>
        <button id="butAdd" className="headerButton" aria-label="Add"></button>
      </header>

      <main className="main">
        <div className="card cardTemplate weather-forecast" hidden>
          <div className="location"></div>
          <div className="date"></div>
          <div className="description"></div>
          <div className="current">
            <div className="visual">
              <div className="icon"></div>
              <div className="temperature">
                <span className="value"></span><span className="scale">°F</span>
              </div>
            </div>
            <div className="description">
              <div className="feels-like">
                <span className="value"></span><span className="scale">°F</span>
              </div>
              <div className="precip"></div>
              <div className="humidity"></div>
              <div className="wind">
                <span className="value"></span>
                <span className="scale">mph</span>
                <span className="direction"></span>°
              </div>
            </div>
          </div>
          <div className="future">
            <div className="oneday">
              <div className="date"></div>
              <div className="icon"></div>
              <div className="temp-high">
                <span className="value"></span>°
              </div>
              <div className="temp-low">
                <span className="value"></span>°
              </div>
            </div>
            <div className="oneday">
              <div className="date"></div>
              <div className="icon"></div>
              <div className="temp-high">
                <span className="value"></span>°
              </div>
              <div className="temp-low">
                <span className="value"></span>°
              </div>
            </div>
            <div className="oneday">
              <div className="date"></div>
              <div className="icon"></div>
              <div className="temp-high">
                <span className="value"></span>°
              </div>
              <div className="temp-low">
                <span className="value"></span>°
              </div>
            </div>
            <div className="oneday">
              <div className="date"></div>
              <div className="icon"></div>
              <div className="temp-high">
                <span className="value"></span>°
              </div>
              <div className="temp-low">
                <span className="value"></span>°
              </div>
            </div>
            <div className="oneday">
              <div className="date"></div>
              <div className="icon"></div>
              <div className="temp-high">
                <span className="value"></span>°
              </div>
              <div className="temp-low">
                <span className="value"></span>°
              </div>
            </div>
            <div className="oneday">
              <div className="date"></div>
              <div className="icon"></div>
              <div className="temp-high">
                <span className="value"></span>°
              </div>
              <div className="temp-low">
                <span className="value"></span>°
              </div>
            </div>
            <div className="oneday">
              <div className="date"></div>
              <div className="icon"></div>
              <div className="temp-high">
                <span className="value"></span>°
              </div>
              <div className="temp-low">
                <span className="value"></span>°
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="dialog-container">
        <div className="dialog">
          <div className="dialog-title">Add new city</div>
          <div className="dialog-body">
            <select id="selectCityToAdd">
              <option value="austin">Austin, TX</option>
              <option value="boston">Boston, MA</option>
              <option value="chicago">Chicago, IL</option>
              <option value="portland">Portland, OR</option>
              <option value="sanfrancisco">San Francisco, CA</option>
              <option value="seattle">Seattle, WA</option>
            </select>
          </div>
          <div className="dialog-buttons">
            <button id="butAddCity" className="button">Add</button>
            <button id="butAddCancel" className="button">Cancel</button>
          </div>
        </div>
      </div>

      <div className="loader">
        <svg viewBox="0 0 32 32" width="32" height="32">
          <circle id="ud811Spinner" cx="16" cy="16" r="14" fill="none"></circle>
        </svg>
      </div>

      </body>
      </div>
    );
  }
}

export default App;
