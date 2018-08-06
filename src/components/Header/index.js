import React  from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends React.Component {

    render() {
        return (
          <nav className="navbar navbar-inverse">
              <ul className="nav nav-pills">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-sm">
                      <li role="presentation"><a href="/app"> TV Series List</a></li>
                    </div>
                    <div className="col-sm">
                      <li role="presentation"><a href="/profile"> Profile </a></li>
                    </div>
                  </div>
                </div>
              </ul>
          </nav>
        );
    }
}

export default Header;
