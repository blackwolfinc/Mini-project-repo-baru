import React, { Component } from 'react'
// import M from 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";
import '../Css/navbar.css'; 


class Navbar extends Component {

    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {});

            var elems = document.querySelectorAll('.dropdown-trigger');
            var instances = M.Dropdown.init(elems, {});

          });

    }

    render() {
        return(
          <div>

  <nav className="navbarku">
    <div className="nav-wrapper">
      <a href="#!" className="brand-logo">Logo</a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i className="material-icons">menu</i></a>
    
    <div className="right hide-on-med-and-down">
    <a class='dropdown-trigger btn' href='#' data-target='dropdown1'>Drop Me!</a>
    <ul id="dropdown1" className="dropdown-content">
            <li><a href="#!">Profil</a></li>
            <li><a href="#!">Setting</a></li>
            <li className="divider"></li>
            <li><a href="#!">Help</a></li>
            <li><a href="#!">Sign out</a></li>
          </ul>

          </div>

      <div className="hide-on-med-and-down">
        <div className="col wrap-search input-field ">
            <form>
                <input id="search" type="search" required placeholder="search"></input>
                <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
            </form>
            </div>
        </div>
    </div>
  </nav>

  <ul className="sidenav" id="mobile-demo">
    <li><a href="sass.html">Sass</a></li>
    <li><a href="badges.html">Components</a></li>
    <li><a href="collapsible.html">Javascript</a></li>
    <li><a href="mobile.html">Mobile</a></li>
  </ul>
          

          </div>
        )
    }
}

export default Navbar;
