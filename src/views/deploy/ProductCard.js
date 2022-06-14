import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardGroup,
  CCardHeader,
  CCardImage,
  CCardLink,
  CCardSubtitle,
  CCardText,
  CCardTitle,
  CListGroup,
  CListGroupItem,
  CNav,
  CNavItem,
  CNavLink,
  CCol,
  CRow,
} from '@coreui/react'
import ReactImg from 'src/assets/images/react.jpg'

const ProductCard = (props) => {
  console.log("--------", props)
  return (
     <CCol xs>
       <CCard>
         <CCardImage orientation="top" src={ReactImg} />
         <CCardBody>
           <CCardTitle>Product: {props.data.product}</CCardTitle>
         </CCardBody>
         <CListGroup flush>
              <CListGroupItem>gitLoc: {props.data.gitLoc}</CListGroupItem>
              <CListGroupItem>clusterName: {props.data.clusterName}</CListGroupItem>
              <CListGroupItem>cloud: {props.data.cloud}</CListGroupItem>
            </CListGroup>
         <CCardFooter>
           <small className="text-medium-emphasis">Last updated 3 mins ago</small>
         </CCardFooter>
       </CCard>
     </CCol>
  )
}

//product: "app1",
// gitLoc: "https://stefanprodan.github.io/podinfo",
// clusterName: "java-app-cluster",
// cloud: "aws",
// account: "account1",
// env: "qa",
// region: "us-west-2"

export default ProductCard
