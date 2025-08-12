import React from "react";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
      email: "",
      contact: "",
    };
  }

  // Universal handler for all inputs
  uniHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const containerStyle = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#113F67",
      height: "100vh",
      width: "100vw",
    };

    const formBoxStyle = {
      backgroundColor: "white",
      padding: "30px",
      borderRadius: "10px",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
      textAlign: "center",
    };

    const inputStyle = {
      width: "400px",
      padding: "10px",
      margin: "8px 0",
      border: "1px solid #ccc",
      borderRadius: "5px",
    };

    const buttonStyle = {
      width: "150px",
      padding: "10px",
      marginTop: "10px",
      backgroundColor: "orange",
      color: "black",
      fontSize: "16px",
      fontWeight: "bold",
      border: "2px solid black",
      borderRadius: "5px",
      cursor: "pointer",
    };

    return (
      <div style={containerStyle}>
        <div style={formBoxStyle}>
          <h1>Registration Form</h1>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={this.state.name}
            onChange={this.uniHandler}
            style={inputStyle}
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={this.state.password}
            onChange={this.uniHandler}
            style={inputStyle}
          />
          <br />
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={this.state.email}
            onChange={this.uniHandler}
            style={inputStyle}
          />
          <br />
          <input
            type="text"
            name="contact"
            placeholder="Enter Contact"
            value={this.state.contact}
            onChange={this.uniHandler}
            style={inputStyle}
          />
          <br />
          <input type="button" value="Register" style={buttonStyle} />
        </div>
      </div>
    );
  }
}
