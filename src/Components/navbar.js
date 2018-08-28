import React, { Component } from "react";
import "./css/navbar.css";
import logoq from "./logo/logoq.png";
import login from "./login";
import Home from "./Home";
import itema from "./items/itema";
import itemb from "./items/itemb";
import itemc from "./items/itemc";
import itemd from "./items/itemd";
import iteme from "./items/iteme";
import itemf from "./items/itemf";

import item from "./item.json";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Signup from "./signup";
class Navigation extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <nav className="navbar  navbar-expand-lg navbar-fixed-top ">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink to="/Help">
                  <div>
                    <i className="fa fa-question">&nbsp;</i>
                    {item.map(function(item) {
                      return <li>{item.option1}</li>;
                    })}
                  </div>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="nav-link" href="/Storelocator">
                  <i className="fa fa-home">
                    {item.map(function(item) {
                      return <li>{item.option2}</li>;
                    })}
                  </i>
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink to="nav-link" href="/Contactus">
                  <i className="fa fa-mobile">
                    {item.map(function(item) {
                      return <li>{item.option3}</li>;
                    })}{" "}
                    &nbsp;
                  </i>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/login">
                  <i className="fa fa-users">
                    {item.map(function(item) {
                      return <li>{item.option4}</li>;
                    })}
                  </i>
                </NavLink>
                &nbsp;
              </li>
              <li className="nav-item">
                <NavLink to="/signup">
                  /
                  {item.map(function(item) {
                    return <li>{item.option5}</li>;
                  })}
                </NavLink>
              </li>
            </ul>
          </nav>
          <p className="search">
            <input type="text" id="search" placeholder="search here ..." />
            <button type="submit">
              <i className="fa fa-search" />
            </button>
          </p>
          <div className="logo">
            <img src={logoq} alt="my logo" />
            <p>
              {item.map(function(item) {
                return <p>{item.titlename}</p>;
              })}
            </p>
          </div>
          <div className="menu">
            <nav>
              <ul class="nav">
                <li>
                  <NavLink activeClassName="is-active" to="/">
                    {item.map(function(item) {
                      return <li>{item.menu1}</li>;
                    })}
                  </NavLink>
                </li>
                <li>
                  <a href>
                    {item.map(function(item) {
                      return <li>{item.menu2}</li>;
                    })}
                  </a>
                  <ul>
                    <li>
                      <NavLink to="/itema">
                        {" "}
                        {item.map(function(item) {
                          return <li>{item.item1}</li>;
                        })}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/itemb">
                        {" "}
                        {item.map(function(item) {
                          return <li>{item.item2}</li>;
                        })}
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href>
                    {item.map(function(item) {
                      return <li>{item.menu3}</li>;
                    })}
                  </a>
                  <ul>
                    <li>
                      <a href>
                        {" "}
                        {item.map(function(item) {
                          return <li>{item.item3}</li>;
                        })}
                      </a>
                      <ul>
                        <li>
                          <NavLink to="/itemd">
                            {" "}
                            {item.map(function(item) {
                              return <li>{item.item4}</li>;
                            })}
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <NavLink to="/itemc">
                        {" "}
                        {item.map(function(item) {
                          return <li>{item.item5}</li>;
                        })}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/iteme">
                        {" "}
                        {item.map(function(item) {
                          return <li>{item.item6}</li>;
                        })}
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href>
                    {item.map(function(item) {
                      return <li>{item.menu4}</li>;
                    })}
                  </a>
                  <ul>
                    <li>
                      <NavLink to="/itemf">
                        {" "}
                        {item.map(function(item) {
                          return <li>{item.item7}</li>;
                        })}
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="content">
                <Route exact path="/" component={Home} />
                <Route path="/itema" component={itema} />
                <Route path="/itemb" component={itemb} />
                <Route path="/itemc" component={itemc} />
                <Route path="/itemd" component={itemd} />
                <Route path="/iteme" component={iteme} />
                <Route path="/itemf" component={itemf} />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={login} />
              </div>
            </nav>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Navigation;
