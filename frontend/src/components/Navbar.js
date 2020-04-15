import React, { useState, useEffect, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import Auth from '../lib/Auth'
import SearchBar from './SearchBar'
import UserContext from './UserContext'





const Navbar = ({ toggleSearch }) => {
  const [dexterity, setDexterity] = useState(null)
  const history = useHistory()
  const [userLogin] = useState(UserContext)


  useEffect(() => {
    if (Auth.isAuthorized()) {
      axios.get('/api/profile', {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
        .then(response => {
          setDexterity(response.data.dexterity)
          // console.log('running')
        })
        .catch(error => console.log(error))
    }
  }, [userLogin])


  useEffect(() => {
    const listener = e => {
      if (e.key === 'Escape') {
        setNav(false)
      }
    }
    window.addEventListener('keydown', listener)
  }, [])

  const handleLogout = () => {
    Auth.logout()
    history.push('/')
    toggleNavbar()
    // setState({ isOpen: false })
  }

  const [nav, setNav] = useState(false)

  const toggleNavbar = () => {
    setNav(!nav)
  }
  
  return (
    <> {dexterity === 'LH' ?

      Auth.isAuthorized() && <section className="menu menu--circle2" id="navbar">
        <input type="checkbox" id="menu__active" checked={nav ? true : false} onChange={toggleNavbar} />
        <label htmlFor="menu__active" className="menu__active">
          <div className="menu__toggle">
            <div className="icons">
              <div className="hamburger2"></div>
            </div>
          </div>
          <input type="radio" name="arrow--up" id="degree--up-0" />
          <input type="radio" name="arrow--up" id="degree--up-1" />
          <input type="radio" name="arrow--up" id="degree--up-2" />
          <div className="menu__listings">
            <ul className="circle">
              <li>
                <div className="placeholder">
                  <div className="upside">

                    <Link to='/route/groups/' className="navbutton" onClick={toggleNavbar}> <i className="fa fa-users"></i> </Link>
                    {'\n'}
                    <Link to='/route/groups/'> <p className="navbar-links" onClick={toggleNavbar}>GROUPS</p> </Link>
                  </div>
                </div>
              </li>
              <li>
                <div className="placeholder">
                  <div className="upside">
                    <Link to={`/reroute/${Auth.getUserId()}`} className="navbutton" onClick={toggleNavbar}><i className="fa fa-user"></i></Link>
                    {'\n'}
                    <Link to={`/reroute/${Auth.getUserId()}`} onClick={toggleNavbar}> <p className="navbar-links">USER</p></Link>
                  </div>
                </div>
              </li>
              <li>
                <div className="placeholder">
                  <div className="upside">
                    <Link to="/city_selection" className="navbutton"><i className="fa fa-building"></i></Link>
                    {'\n'}
                    <Link to="/city_selection"> <p className="navbar-links">ADD CITIES</p></Link>
                  </div>
                </div>
              </li>
              <li>
                <div className="placeholder">
                  <div className="upside">
                    <Link to="/city_selection" className="navbutton"><i className="fa fa-building"></i></Link>
                    {'\n'}
                    <Link><p className="navbar-links">TEST</p></Link>
                  </div>
                </div>
              </li>
              <li>
                <div className="placeholder">
                  <div className="upside">
                    <a href="#" className="navbutton"><i className="fa fa-trash"></i></a>
                    {'\n'}
                    <p className="navbar-links">TEST</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="placeholder">
                  <div className="upside">
                    <a href="#" className="navbutton"><i className="fa fa-battery-4"></i></a>
                    {'\n'}
                    <p className="navbar-links">TEST</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="placeholder">
                  <div className="upside">
                    <Link to="/" onClick={() => handleLogout()} className="navbutton"><i className="fa fa-sign-out"></i> </Link>
                    {'\n'}
                    <Link to="/" onClick={() => handleLogout()}> <p className="navbar-links"> {' '}LOG-OUT</p></Link>
                  </div>
                </div>
              </li>
              <li>
                <div className="placeholder">
                  <div className="upside">
                    <Link to="/map" className="navbutton" onClick={toggleNavbar}><i className="fa fa-globe-europe"></i></Link>
                    {'\n'}
                    <Link to="/map"><p className="navbar-links" onClick={toggleNavbar}>MAP</p></Link>
                  </div>
                </div>
              </li>
              <li>
                <div className="placeholder">
                  <div className="upside">
                    <a className="navbutton" onClick={toggleSearch}><i className="fa fa-search"></i></a>
                    {'\n'}
                    <a onClick={toggleSearch}> <p className="navbar-links">SEARCH</p></a>
                  </div>
                </div>
              </li>
              <li>
                <div className="placeholder">
                  <div className="upside">
                    <Link to="/city_selection" className="navbutton" onClick={toggleNavbar}><i className="fa fa-building"></i></Link>
                    {'\n'}
                    <Link to="/city_selection"><p className="navbar-links" onClick={toggleNavbar}>ADD CITY</p></Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="menu__arrow menu__arrow--top">
            <ul>
              <li>
                <label htmlFor="degree--up-0"><div className="arrow"></div></label>
                <label htmlFor="degree--up-1"><div className="arrow"></div></label>
                {/* <label htmlFor="degree--up-2"><div className="arrow"></div></label> */}
              </li>
            </ul>
          </div>
        </label>
      </section>






      :



      Auth.isAuthorized() && <section className="menu menu--circle" id="navbar">
        <input type="checkbox" id="menu__active" checked={nav ? true : false} onChange={toggleNavbar}/>
        <label htmlFor="menu__active" className="menu__active">
          <div className="menu__toggle">
            <div className="icons">
              <div className="hamburger"></div>
            </div>
          </div>
          <input type="radio" name="arrow--up" id="degree--up-0" />
          <input type="radio" name="arrow--up" id="degree--up-1" />
          <input type="radio" name="arrow--up" id="degree--up-2" />
          <div className="menu__listings">
            <ul className="circle">
              <li>
                <div className="placeholder">
                  <div className="upside">

                    <Link to='/route/groups/' className="navbutton"> <i className="fa fa-users" onClick={toggleNavbar}></i> </Link>
                    {'\n'}
                    <Link to='/route/groups/'> <p className="navbar-links" onClick={toggleNavbar}>GROUPS</p> </Link>
                  </div>
                </div>
              </li>
              <li>
                <div className="placeholder">
                  <div className="upside">
                    <Link to={`/reroute/${Auth.getUserId()}`} className="navbutton" onClick={toggleNavbar}><i className="fa fa-user"></i></Link>
                    {'\n'}
                    <Link to={`/reroute/${Auth.getUserId()}`} onClick={toggleNavbar}> <p className="navbar-links">USER</p></Link>
                  </div>
                </div>
              </li>
              <li>
                <div className="placeholder">
                  <div className="upside">
                    <Link to="/city_selection" className="navbutton"><i className="fa fa-building"></i></Link>
                    {'\n'}
                    <Link to="/city_selection"> <p className="navbar-links">ADD CITIES</p></Link>
                  </div>
                </div>
              </li>
              <li>
                <div className="placeholder">
                  <div className="upside">
                    <Link to="/city_selection" className="navbutton"><i className="fa fa-building"></i></Link>
                    {'\n'}
                    <Link><p className="navbar-links">TEST</p></Link>
                  </div>
                </div>
              </li>
              <li>
                <div className="placeholder">
                  <div className="upside">
                    <a href="#" className="navbutton"><i className="fa fa-trash"></i></a>
                    {'\n'}
                    <p className="navbar-links">TEST</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="placeholder">
                  <div className="upside">
                    <a href="#" className="navbutton"><i className="fa fa-battery-4"></i></a>
                    {'\n'}
                    <p className="navbar-links">TEST</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="placeholder">
                  <div className="upside">
                    <Link to="/" onClick={() => handleLogout()} className="navbutton"><i className="fa fa-sign-out"></i> </Link>
                    {'\n'}
                    <Link to="/" onClick={() => handleLogout()}> <p className="navbar-links"> {' '}LOG-OUT</p></Link>
                  </div>
                </div>
              </li>
              <li>
                <div className="placeholder">
                  <div className="upside">
                    <Link to="/map" className="navbutton" onClick={toggleNavbar}><i className="fa fa-globe-europe"></i></Link>
                    {'\n'}
                    <Link to="/map"><p className="navbar-links" onClick={toggleNavbar}>MAP</p></Link>
                  </div>
                </div>
              </li>
              <li>
                <div className="placeholder">
                  <div className="upside">
                    <a className="navbutton" onClick={toggleSearch}><i className="fa fa-search"></i></a>
                    {'\n'}
                    <a onClick={toggleSearch}> <p className="navbar-links">SEARCH</p></a>
                  </div>
                </div>
              </li>
              <li>
                <div className="placeholder">
                  <div className="upside">
                    <Link to="/city_selection" className="navbutton" onClick={toggleNavbar}><i className="fa fa-building"></i></Link>
                    {'\n'}
                    <Link to="/city_selection" onClick={toggleNavbar}><p className="navbar-links">ADD CITY</p></Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="menu__arrow menu__arrow--top">
            <ul>
              <li>
                <label htmlFor="degree--up-0"><div className="arrow"></div></label>
                <label htmlFor="degree--up-1"><div className="arrow"></div></label>
                {/* <label htmlFor="degree--up-2"><div className="arrow"></div></label> */}
              </li>
            </ul>
          </div>
        </label>
      </section>}

    </>
  )
}

export default Navbar


