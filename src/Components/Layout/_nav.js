import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cibJava
} from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavTitle,
    name: 'Web IDE',
  },
  {
    component: CNavItem,
    name: 'Web IDE',
    to: '/lethe/ide',
    icon: <CIcon icon={cibJava} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Regex',
  },
  {
    component: CNavItem,
    name: 'Regex',
    to: '/lethe/regex',
    icon: <CIcon icon={cibJava} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Diff',
  },
  {
    component: CNavItem,
    name: 'Diff',
    to: '/lethe/diff',
    icon: <CIcon icon={cibJava} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Toast',
  },
  {
    component: CNavItem,
    name: 'Toast',
    to: '/lethe/toast',
    icon: <CIcon icon={cibJava} customClassName="nav-icon" />,
  },
]

export default _nav