import React, { Component } from 'react'
import Styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import SideNav from './molecules/SideNav'

/** Overview of NavButtons component:
 *  - Container for side nav component that makes a graphQL query to contentful to load
 * sideNav links - passes down this data as props to SideNav component
 */

const Container = Styled.div`
position: fixed;
top: 150px;
// left: 0;
// width: 100vw;
// display: flex;
// flex-direction: column;
// align-items: center;
// justify-content: center;
z-index: 2;
`

export default () => (
  <StaticQuery
    query={graphql`
      {
        contentfulHomePage(pageTitle: { eq: "Home Page" }) {
          sideNavBar {
            data {
              name
              displayed
              route
              dropDown {
                name
                route
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Container>
        <SideNav links={data.contentfulHomePage.sideNavBar.data} />
      </Container>
    )}
  />
)
