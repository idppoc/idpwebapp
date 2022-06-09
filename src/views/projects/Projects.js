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
  CCloseButton,
} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import { DocsExample } from 'src/components'
import ReactImg from 'src/assets/images/react.jpg'
import { cilBell, cilNoteAdd, cilPlus } from '@coreui/icons'

const Projects = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  return (
    <CRow>
      <CRow>
        <CCol xs className="d-grid gap-2 d-md-flex justify-content-md-end">
          <CButton color="primary">
            <CIcon icon={cilPlus} className="me-2" />
            Project
          </CButton>
        </CCol>
      </CRow>
      <div>
        <br></br>
      </div>
      <CCol xs={4}>
        <CCard className="mb-4">
          <CCardBody>
            <CCard style={{ width: '22rem' }}>
              <CCardImage orientation="top" src={ReactImg} />
              <CCardBody>
                <CCardTitle>Sample Project 1</CCardTitle>
                <CCardText>
                  Some quick example text to build on the card title and make up the bulk of the
                  card&#39;s content.
                </CCardText>
              </CCardBody>
              <CListGroup flush>
                <CListGroupItem>Cras justo odio</CListGroupItem>
                <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
                <CListGroupItem>Vestibulum at eros</CListGroupItem>
              </CListGroup>
            </CCard>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={4}>
        <CCard className="mb-4">
          <CCardBody>
            <CCard style={{ width: '22rem' }}>
              <CCardImage orientation="top" src={ReactImg} />
              <CCardBody>
                <CCardTitle>Sample Project 2</CCardTitle>
                <CCardText>
                  Some quick example text to build on the card title and make up the bulk of the
                  card&#39;s content.
                </CCardText>
              </CCardBody>
              <CListGroup flush>
                <CListGroupItem>Cras justo odio</CListGroupItem>
                <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
                <CListGroupItem>Vestibulum at eros</CListGroupItem>
              </CListGroup>
            </CCard>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={4}>
        <CCard className="mb-4">
          <CCardBody>
            <CCard style={{ width: '22rem' }}>
              <CCardImage orientation="top" src={ReactImg} />
              <CCardBody>
                <CCardTitle>Sample Project 3</CCardTitle>
                <CCardText>
                  Some quick example text to build on the card title and make up the bulk of the
                  card&#39;s content.
                </CCardText>
              </CCardBody>
              <CListGroup flush>
                <CListGroupItem>Cras justo odio</CListGroupItem>
                <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
                <CListGroupItem>Vestibulum at eros</CListGroupItem>
              </CListGroup>
            </CCard>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Projects
