import React, { Component } from 'react'
import styled from 'styled-components'

import { Product, SideNav } from '../components'
import { MainLayout } from '../components/layouts'

const InternalLayout = styled.div`
  display: flex;
  justify-content: flex-end;
`

class ProductTemplate extends Component {
  // componentDidMount() {
  //   this.props.resetSidebar()
  // }
  render() {
    console.log('prod template props', this.props.pageContext.node)
    const data = this.props.pageContext.node
    const images = data.images.map(img => img.file.url)
    const details = data.details.content.map(c => c.content[0].value)
    return (
      <MainLayout>
        <SideNav />
        <InternalLayout>
          <div style={{ paddingRight: '50px', paddingTop: '40px' }}>
            <Product
              title={data.title}
              productCopy={data.productCopy.content}
              images={images}
              price={data.price}
              sku={data.sku}
              details={details}
            />
          </div>
        </InternalLayout>
      </MainLayout>
    )
  }
}

export default ProductTemplate
