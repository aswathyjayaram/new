import React, { Component } from "react";
import "./css/footer.css";
import item from "./item.json";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer">
          {item.map(function(item) {
            return <p>{item.item8}</p>;
          })}
        </div>
      </footer>
    );
  }
}

export default Footer;
