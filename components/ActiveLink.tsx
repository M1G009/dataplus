import { useRouter } from 'next/router'
import Link from 'next/link'
import React, { Children } from 'react'

const ActiveLink = ({ children, activeClassName, ...props }: any) => {
  const { pathname } = useRouter()
  const router = useRouter()
  const child = Children.only(children)
  const childClassName = child.props.className || ''
    
  const className =
    pathname === props.href || pathname === props.as
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  )
}

export default ActiveLink