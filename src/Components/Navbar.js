import React from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg text-${props.mode === 'dark' ? 'light' : 'dark'} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className={`text-${props.mode === 'dark' ? 'light' : 'dark'} navbar-brand`} href='/'><b>TextFormatter <span style={{color:'red'}}>&</span> Password Generator</b></a>
          <div className="form-check-reverse form-check form-switch" >
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.togglefunc} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"><i className="ri-moon-fill"></i></label>
          </div>
        </div>


      </nav>
    </>
  )
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired
}
Navbar.defaultProps = {
  title: 'set title here'
}
