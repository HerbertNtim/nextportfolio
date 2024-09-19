import React from 'react'

const ExperienceLists = ({title, description, jobDate, company}) => {
  return (
    <div className='mx-auto flex flex-col items-start justify-between'>
      <h3 className='capitalize font-bold sm:text-2xl'>{title}{' @ '}{company}</h3>
      <p className='p-3 text-dark/75 text-sm font-medium'>{jobDate}</p>
      <p className='p-3 text-medium italic'>{description}</p>
    </div>
  )
}

export default ExperienceLists
