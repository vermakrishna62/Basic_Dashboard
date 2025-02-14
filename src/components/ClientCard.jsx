import React from 'react'

const ClientCard = ({ client }) => {
  return (
    <div className='p-6 bg-white rounded-xl space-y-4 shadow-md'>
      <div>
        <h1 className='text-xl font-semibold'>{client.name}</h1>
        <p className='text-sm text-gray-400'>{client.industry}</p>
      </div>
      <p className='text-xs text-gray-500'>Contact: {client.contact}</p>
      <p className='text-xs text-gray-500'>Email: {client.email}</p>
      <p className='text-xs text-gray-500'>Projects: {client.projects}</p>
    </div>
  )
}

export default ClientCard;
