import React from 'react'

const ExperienceLists = ({title, description, jobDate, company}) => {
  return (
    <div>
      <h3 className='bg-white p-3 font-semibold rounded-s-lg rounded-b-lg'>{title}</h3>
      <p className='p-3 text-sm italic'>{description}</p>
      <p className='p-3 text-red-400 text-sm font-semibold'>{jobDate}</p>
      <p className='bg-white p-1 rounded text-sm font-semibold w-fit'>{company}</p>
    </div>
  )
}

export default ExperienceLists
