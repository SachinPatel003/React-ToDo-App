import React from 'react'

export const Footer = () => {
    let FooterStyle = {
        position: "relative",
        width: "100%",
    }
  return (
    <footer className='bg-dark text-light text-center' style={FooterStyle}>
      <p>Copyright &copy; TODOs.com</p>
    </footer>
  )
}
