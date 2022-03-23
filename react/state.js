import React, { Component } from "react";

class Header extends Component {
  constructor() {
    super();
    this.state = [
      {
        mobil: "civic type C",
        motor: "H2",
        kerjaan: "programmer",
      },
    ];
  }
  render() {
    return (
      <div>
        <p>
          saya ingin memiliki mobil {this.state.mobil}, motor
          {this.state.motor}, dan memiliki perkerjaan {this.state.kerjaan}
        </p>
      </div>
    );
  }
}
export default Header;
