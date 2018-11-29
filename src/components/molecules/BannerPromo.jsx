import React, { Component } from 'react'
import styled from 'styled-components'
import { IoIosClose } from 'react-icons/io'

/** Overview of BannerPromo component:
 *  - Created three styled div containers
 *    - One wraps the whole BannerPromo
 *    - The other two wrap the text inside the BannerPromo
 *  - BannerPromo renders Announcement and PromoText - these are queried dynamically from contentful and passed down as props from NavBar component
 */

const Container = styled.div`
  position: relative;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: left;
  background-color: #e20031;
  padding: 0.5rem;
  height: 2.5rem;
  text-align: left;
  p {
    margin-bottom: 0;
    margin-right: 1rem;
  }
`
const Announcement = styled.div`
  color: white;
  font-size: 20px
  margin: 0px 15px 10px 20px;
  font-style: italic;
  font-weight: bold;
`
const PromoText = styled.div`
  color: white;
  font-size: 12px;
  margin-top: 2px;
  font-weight: 400;
  font-style: italic;
  font-weight: bold;
`
const Icon = styled.div`
  margin-left: auto;
  :hover {
    cursor: pointer;
  }
`
class BannerPromo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: true,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({ display: false })
  }

  render() {
    const banner = this.state.display ? (
      <Container>
        <Announcement className="banner-text">
          {this.props.bannerTitle}
        </Announcement>
        <PromoText className="banner-text">{this.props.bannerText}</PromoText>
        <Icon>
          <IoIosClose size={30} onClick={this.handleClick} />
        </Icon>{' '}
      </Container>
    ) : (
      ''
    )
    return <React.Fragment>{banner}</React.Fragment>
  }
}

export default BannerPromo
