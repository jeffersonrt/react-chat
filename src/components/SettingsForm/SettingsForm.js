import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { ToastContainer, toast } from 'react-toastify';

import { settingsUpdate, settingsReset } from '../../store/actions';

import 'react-toastify/dist/ReactToastify.min.css';

class SettingsForm extends Component {
  notify = () =>
    toast('Saved', {
      position: 'bottom-right',
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true
    });

  handleFieldsChange = e => {
    const { settingsUpdate } = this.props;
    settingsUpdate(this.props.user.settings.values);

    this.notify();
  };

  handleReset = () => {
    const { settingsReset } = this.props;
    settingsReset();
    this.notify();
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <section className="settings-container">
        <div className="options">
          <div className="form-container">
            <form onSubmit={handleSubmit(() => {})}>
              <div className="form-field">
                <label>
                  <p>Username</p>
                  <Field
                    name="username"
                    component="input"
                    type="text"
                    onBlur={this.handleFieldsChange}
                  />
                </label>
              </div>

              <div className="form-field field-radio">
                <p>Interface color</p>
                <label>
                  <Field
                    name="theme"
                    component="input"
                    type="radio"
                    value="light"
                    onBlur={this.handleFieldsChange}
                  />
                  <span className="field-option">Light</span>
                </label>
                <label>
                  <Field
                    name="theme"
                    component="input"
                    type="radio"
                    value="dark"
                    onBlur={this.handleFieldsChange}
                  />
                  <span className="field-option">Dark</span>
                </label>
              </div>

              <div className="form-field field-radio">
                <p>Clock Display</p>
                <label>
                  <Field
                    name="timeFormat"
                    component="input"
                    type="radio"
                    value="12"
                    onBlur={this.handleFieldsChange}
                  />
                  <span className="field-option">12 hours</span>
                </label>
                <label>
                  <Field
                    name="timeFormat"
                    component="input"
                    type="radio"
                    value="24"
                    onBlur={this.handleFieldsChange}
                  />
                  <span className="field-option">24 hours</span>
                </label>
              </div>

              <div className="form-field field-radio">
                <p>Send messages on CTRL+ENTER</p>
                <label>
                  <Field
                    name="ctrlEnter"
                    component="input"
                    type="radio"
                    value="on"
                    onBlur={this.handleFieldsChange}
                  />
                  <span className="field-option">On</span>
                </label>
                <label>
                  <Field
                    name="ctrlEnter"
                    component="input"
                    type="radio"
                    value="off"
                    onBlur={this.handleFieldsChange}
                  />
                  <span className="field-option">Off</span>
                </label>
              </div>

              <div className="form-field">
                <label>
                  <p>Language</p>
                  <Field
                    name="language"
                    component="select"
                    onBlur={this.handleFieldsChange}
                  >
                    <option value="en-US">English (US)</option>
                    <option value="pt-BR">Portuguese (BR)</option>
                  </Field>
                </label>
              </div>
            </form>
          </div>
        </div>
        <div className="reset">
          <button onClick={this.handleReset}>Reset to defaults</button>
        </div>
        <ToastContainer />
      </section>
    );
  }
}

const mapStateToProps = state => ({
  initialValues: state.settings,
  user: state.form
});

export default connect(
  mapStateToProps,
  { settingsUpdate, settingsReset }
)(
  reduxForm({
    form: 'settings',
    enableReinitialize: true
  })(SettingsForm)
);
