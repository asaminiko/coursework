import React from 'react'
import { Button } from 'react-bootstrap'
const Btn = ({ children, className }) => {
  return <Button className={className}>{children}</Button>
}

export default Btn
