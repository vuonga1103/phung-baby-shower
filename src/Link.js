import React from 'react'

const Link = ({ href, children, ...props }) => {
  return (
    <a
      href={href}
      style={{ textDecoration: 'none', color: 'inherit' }}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  )
}

export default Link
