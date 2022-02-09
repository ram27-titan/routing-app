import React from 'react';

const initialState = {
  name: '',
  email: '',
  password: '',
  nameError: '',
  emailError: '',
  passwordError: '',
};

export default class Formlogin extends React.Component {
  state = initialState;

  handleChange = (event) => {
    const isCheckbox = event.target.type === 'checkbox';
    this.setState({
      [event.target.name]: isCheckbox ? event.target.checked : event.target.value,
    });
  };
  // Validasi
  validate = () => {
    let nameError = '';
    let emailError = '';
    let passwordError = '';

    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(this.state.email).toLowerCase())) {
      emailError = 'Email tidak Valid';
    }

    if (!this.state.password) {
      passwordError = 'Password tidak boleh kosong';
    } else if (this.state.password.length < 8) {
      passwordError = 'Password minimal 8 karakter';
    }

    if (!this.state.name) {
      nameError = 'Nama tidak boleh Kosong';
    }

    if (!this.state.email.includes('@')) {
      emailError = 'Email salah';
    }
    if (emailError || nameError || passwordError) {
      this.setState({ emailError, nameError, passwordError });
      return false;
    }

    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      alert('Login Berhasil');
      // console.log(this.state);
      // clear form
      this.setState(initialState);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.handleChange} />
          <div style={{ fontSize: 14, color: 'red' }}>{this.state.nameError}</div>
        </div>
        <div>
          <input type="email" name="email" placeholder="email" value={this.state.email} onChange={this.handleChange} />
          <div style={{ fontSize: 14, color: 'red' }}>{this.state.emailError}</div>
        </div>
        <div>
          <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />
          <div style={{ fontSize: 14, color: 'red' }}>{this.state.passwordError}</div>
        </div>
        <button type="submit">submit</button>
      </form>
    );
  }
}
