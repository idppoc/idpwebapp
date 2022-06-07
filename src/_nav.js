import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilSpeedometer,
  cilHome,
  cilCloudy,
  cilLibraryBuilding,
  cilMoney,
  cilPeople,
  cilWallpaper,
  cilCloudUpload,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Home',
    to: '/dashboard',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
    badge: {
      color: 'info',
    },
  },
  {
    component: CNavTitle,
    name: 'Components',
  },
  {
    component: CNavItem,
    name: 'Welcome',
    to: '/welcome',
    icon: <CIcon icon={cilWallpaper} customClassName="nav-icon" />,
    badge: {
      color: 'info',
    },
  },
  {
    component: CNavItem,
    name: 'Projects',
    to: '/projects',
    icon: <CIcon icon={cilCloudy} customClassName="nav-icon" />,
    badge: {
      color: 'info',
    },
  },
  {
    component: CNavItem,
    name: 'Dashboards',
    to: '/dashboards',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
    },
  },
  {
    component: CNavGroup,
    name: 'Build',
    icon: <CIcon icon={cilLibraryBuilding} customClassName="nav-icon" />,
    badge: {
      color: 'info',
    },
    items: [
      {
        component: CNavItem,
        name: 'Overview',
        to: '/build/overview',
      },
      {
        component: CNavItem,
        name: 'Builds',
        to: '/build/builds',
      },
      {
        component: CNavItem,
        name: 'Pipeline',
        to: '/build/pipeline',
      },
      {
        component: CNavItem,
        name: 'Connectors',
        to: '/build/connectors',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Deploy',
    icon: <CIcon icon={cilCloudUpload} customClassName="nav-icon" />,
    badge: {
      color: 'info',
    },
    items: [
      {
        component: CNavItem,
        name: 'Overview',
        to: '/deploy/overview',
      },
      {
        component: CNavItem,
        name: 'Gitops',
        to: '/deploy/gitops',
      },
      {
        component: CNavItem,
        name: 'Environment',
        to: '/deploy/environment',
      },
      {
        component: CNavItem,
        name: 'Services',
        to: '/deploy/services',
      },
      {
        component: CNavItem,
        name: 'Connectors',
        to: '/deploy/connectors',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Provisioning',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
    badge: {
      color: 'info',
    },
    items: [
      {
        component: CNavItem,
        name: 'AWS',
        to: '/provisioning/aws',
      },
      {
        component: CNavItem,
        name: 'GCP',
        to: '/provisioning/gcp',
      },
      {
        component: CNavItem,
        name: 'Azure',
        to: '/provisioning/azure',
      },
      {
        component: CNavItem,
        name: 'Oracle',
        to: '/provisioning/oracle',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Cost',
    icon: <CIcon icon={cilMoney} customClassName="nav-icon" />,
    badge: {
      color: 'info',
    },
    items: [
      {
        component: CNavItem,
        name: 'Overview',
        to: '/cost/overview',
      },
      {
        component: CNavItem,
        name: 'AWS',
        to: '/cost/aws',
      },
      {
        component: CNavItem,
        name: 'GCP',
        to: '/cost/gcp',
      },
      {
        component: CNavItem,
        name: 'Azure',
        to: '/cost/azure',
      },
      {
        component: CNavItem,
        name: 'Oracle',
        to: '/cost/oracle',
      },
    ],
  },
]

export default _nav
