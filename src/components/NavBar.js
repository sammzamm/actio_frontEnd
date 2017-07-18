import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {Navbar, Nav, NavItem, NavDropdown} from 'react-bootstrap';

class NavBar extends Component {

  render() {
    console.log('this.props in header', this.props)
    if (!this.props.authenticated){
      return (
        <div></div>
      )
    }
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link style={{color: '#fff'}} to='/home'>Actio</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
           <Nav pullRight>
             <NavItem><Link style={{color: '#fff'}} to="/signin">Sign In</Link></NavItem>
             <NavItem><Link style={{color: '#fff'}} to="/signout">Sign Out</Link></NavItem>
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
     profilePic: state.auth.profilePic,
     email: state.auth.email,
     zip: state.auth.zip
   })
}

NavBar = connect(mapStateToProps, null)(NavBar)
export default NavBar