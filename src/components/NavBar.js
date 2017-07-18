import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {Navbar, Nav, NavItem, NavDropdown} from 'react-bootstrap';

class NavBar extends Component {

  render() {

    if (!this.props.authenticated){
      return (
        <div></div>
      )
    }

    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/home'>Actio</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
           <Nav pullRight>
             <NavItem><Link to="/signin">Sign In</Link></NavItem>
             <NavItem><Link to="/signout">Sign Out</Link></NavItem>
           </Nav>
         </Navbar.Collapse>
       </Navbar>
        )
      }
      }

 function mapStateToProps(state) {
   return ({
     authenticated: state.auth.authenticated,
     userId: state.auth.userId,
     username: state.auth.username,
     profilePic: state.auth.profilePic,
     email: state.auth.email
   })
}

NavBar = connect(mapStateToProps, null)(NavBar)
export default NavBar
