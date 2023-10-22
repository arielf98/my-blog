import React from 'react'

type AuthorTextType = {
    name: string
    date: string
    classname?: string
}

export default function AuthorText(props: AuthorTextType) {
    const {date, name, classname} = props
  return (
    <div className={`text-medium-gray text-sm ${classname}`}>
        <p>By <span className='text-purple'>{name}</span> | {date}</p>
    </div>
  )
}
