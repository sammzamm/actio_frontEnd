import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class NavBar extends Component {

  render() {
    if (!this.props.authenticated){
      return (
        <div className="nav_bar_collapsed"></div>
      )
    }
    return (
      <Navbar className="main_nav sticky" collapseOnSelect inverse staticTop >
        <Navbar.Header>
          <Navbar.Brand>
            <Link className='navLogo' to='/home'>A C T I O</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
           <Nav pullRight>
             <NavItem><Link className='btnMain_nav' to="/newevent">New Event</Link></NavItem>
             <NavItem><Link className='btnMain_nav' to="/myevents">My Events</Link></NavItem>
             {/* <NavItem><Link className='btnMain_nav' to="/profile">Profile</Link></NavItem> */}
             <NavItem><Link className='btnMain_nav' to="/signout">Sign Out</Link></NavItem>
           </Nav>
         </Navbar.Collapse>
       </Navbar>
        )
      }
      }

 function mapStateToProps(state) {
   return ({
     authenticated: state.auth.authenticated,
     userId: state.auth.id,
     firstName: state.auth.firstName,
     lastName: state.auth.lastName,
     profilePic: state.auth.profilePic,
     email: state.auth.email,
     zip: state.auth.zip
   })
}

NavBar = connect(mapStateToProps, null)(NavBar)
export default NavBar
