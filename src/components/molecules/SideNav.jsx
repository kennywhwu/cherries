import React, { Component } from 'react'
import styled from 'styled-components'
import ShoppingBagIcon from '../atoms/ShoppingBagIcon'
import { Link } from 'gatsby'
import NavLink from '../atoms/NavLink'
import SideNavDropdown from '../atoms/SideNavDropdown'
import DropdownMenu from '../atoms/DropdownMenu'

/** Overview of SideNav component:
 *  - Component maps through side-nav links passed in and renders either links or DropdownMenu components depending on type
 */

const Container = styled.div`
  ul {
    list-style: none;
  }
  .hyphen {
    margin-left: 7px;
  }
`
//Use the way constructor and normal bind
class SideNav extends Component {
  render() {
    const links = this.props.links.map((link, i) => {
      if (link.name === '-') {
        return (
          <li
            style={{
              textDecoration: 'none',
              color: '#e20031',
              fontWeight: 'bold',
            }}
            className="hyphen"
          >
            {link.name}
          </li>
        )
      }
      if (!link.dropDown) {
        return (
          <li>
            <NavLink
              style={{
                textDecoration: 'none',
                color: '#e20031',
                fontWeight: 'bold',
              }}
              key={i}
              to={link.route}
            >
              {link.name}
            </NavLink>
          </li>
        )
      } else {
        return <SideNavDropdown name={link.name} dropDown={link.dropDown} />
      }
    })
    return (
      <Container>
        <ul>{links}</ul>
      </Container>
    )
  }
}

export default SideNav
