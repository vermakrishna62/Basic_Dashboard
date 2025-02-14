import React from 'react'
import { CiGlobe } from 'react-icons/ci'
import { DiAndroid } from 'react-icons/di'
import { FaApple, FaTabletAlt } from 'react-icons/fa'

const Platforms = () => {
  return (
    <div className='p-5 bg-white rounded-xl'>
        <h1 className='text-xl font-bold text-gray-900'>Platform</h1>
        <div className='p-2 grid grid-cols-2 gap-8'>
            <div className='space-y-2 text-gray-500'>
                <h1 className=' text-xl font-bold'>58</h1>
                <p>
                    <CiGlobe /><span>Website</span>
                </p>
            </div>
            <div className='space-y-2 text-gray-500'>
                <h1 className=' text-xl font-bold'>67</h1>
                <p>
                    <FaApple /><span>IOS</span>
                </p>
            </div>
            <div className='space-y-2 text-gray-500'>
                <h1 className=' text-xl font-bold'>49</h1>
                <p>
                    <DiAndroid /><span>Android</span>
                </p>
            </div>
            <div className='space-y-2 text-gray-500'>
                <h1 className=' text-xl font-bold'>32</h1>
                <p>
                    <FaTabletAlt /><span>Tablets</span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Platforms