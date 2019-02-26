import React, { Component } from "react";

class Settings extends Component {
  handleFormSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <div>
            <label>
              User Name
              <input id="" type="text" />
            </label>
          </div>
          <div>
            <span>Interface</span>
            <label>
              Light
              <input type="radio" name="theme" value="light" />
            </label>
            <label>
              Dark
              <input type="radio" name="theme" value="dark" />
            </label>
          </div>

          <div>
            <span>Send messages on CRTL+Enter</span>
            <label>
              On
              <input type="radio" name="msgenter" value="on" />
            </label>
            <label>
              Off
              <input type="radio" name="msgenter" value="off" />
            </label>
          </div>

          <div>
            <label>
              Language
              <select>
                <option value="en-US">English (en-US)</option>
                <option value="pt-BR">Portugueses (pt-BR)</option>
              </select>
            </label>
          </div>
        </form>
        <div>
          <button>Reset to defaults</button>
        </div>
      </div>
    );
  }
}

export default Settings;
