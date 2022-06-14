import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
} from '@coreui/react'
import React, { Component } from 'react'
// import {
//   CCard,
//   CCardBody,
//   CCardHeader,
//   CCol,
//   CRow,
//   CAccordion,
//   CAccordionBody,
//   CAccordionHeader,
//   CAccordionItem,
// } from '@coreui/react'
// import Table from '../base/tables/Tables'
// import { DocsCallout, DocsExample } from 'src/components'

// const Builds = () => {
//   return (
//     <div>
//       <h1>Hello</h1>
//       <h2>test</h2>
//     </div>
//   )
// }

// export default Builds

class Car extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      DataisLoaded: false,
      items: [],
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        })
      })
  }

  render() {
    const { DataisLoaded, items } = this.state
    if (!DataisLoaded) return <div>{this.test()}</div>
    return (
      <div className="Car">
        <CTable>
          <CTableHead>
            <CTableRow color="primary">
              <CTableHeaderCell scope="col">Class</CTableHeaderCell>
              <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
              <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {items.map((item) => (
              <CTableRow color="Info" key={item.id}>
                <CTableHeaderCell scope="row">User_Name: {item.username}</CTableHeaderCell>
                <CTableDataCell>Full_Name: {item.name}</CTableDataCell>
                <CTableDataCell>User_Email: {item.email}</CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </div>
    )
  }

  test() {
    return <h2>Hi, Please wait some time!</h2>
  }
}

export default Car
