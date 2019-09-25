import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <div className="header collapse d-lg-flex p-0 py-2" id="headerMenuCollapse">
    <div className="container">
      <div className="row align-items-center">
        <a className="header-brand d-none d-lg-block" href="">
          <img
            src="/images~fonts/7e6b23c89dcde5b994abb0b95997e26e.png"
            className="header-brand-img"
            alt="logo"
          />
        </a>
        <div className="col-lg">
          <ul className="nav nav-tabs border-0 flex-column flex-lg-row justify-content-end pr-6">
            <li className="nav-item">
              <a
                href="https://getipless.com/pricing"
                className="nav-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fe fe-layers"></i> Pricing
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://docs.getipless.com"
                className="nav-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fe fe-book"></i> Documents
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://help.getipless.com"
                className="nav-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fe fe-life-buoy"></i> Help
              </a>
            </li>
          </ul>
        </div>
        <div className="dropdown d-none d-lg-block">
          <a className="nav-link pr-0 leading-none" data-toggle="dropdown">
            <span className="avatar"></span>
            <span className="ml-2 d-none d-lg-block">
              <span className="text-white">Bao Roan</span>
              <small className="text-muted d-block mt-1">Potential</small>
            </span>
          </a>
          <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
            <a className="dropdown-item" href="/account">
              <i className="dropdown-icon icon-user"></i> Account
            </a>
            <div className="dropdown-divider"></div>
            <a
              className="dropdown-item"
              href="https://help.getipless.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="dropdown-icon icon-help-circled"></i> Need help?
            </a>
            <button className="dropdown-item c-pointer">
              <i className="dropdown-icon icon-logout"></i> Log out
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
