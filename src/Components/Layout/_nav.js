import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cibJava
} from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavTitle,
    name: '준비 중..',
  },
  {
    component: CNavItem,
    name: 'Web IDE',
    to: '/lethe/ide',
    icon: <CIcon icon={cibJava} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'front',
  },
  {
    component: CNavItem,
    name: 'Regex',
    to: '/lethe/regex',
    icon: <CIcon icon={cibJava} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Diff',
    to: '/lethe/diff',
    icon: <CIcon icon={cibJava} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Toast',
    to: '/lethe/toast',
    icon: <CIcon icon={cibJava} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Chonky',
    to: '/lethe/chonky',
    icon: <CIcon icon={cibJava} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Encrypt',
    to: '/lethe/encrypt',
    icon: <CIcon icon={cibJava} customClassName="nav-icon" />,
  },
]

export default _nav
