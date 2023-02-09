import React from 'react'
import { Container } from './style'
import Logo from '../../assets/logo.svg'

export  function Header() {
  return (
    <Container>
        <img src={Logo}  />
    </Container>
  )
}
