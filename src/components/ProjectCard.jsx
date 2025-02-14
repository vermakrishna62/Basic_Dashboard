import React from 'react';
import { TiAttachment } from 'react-icons/ti';

const ProjectCard = ({ project }) => {
  return (
    <div className='bg-white p-5 rounded-xl space-y-5 shadow-md'>
      <div>
        <h1 className='text-lg font-semibold text-gray-700 truncate whitespace-nowrap'>{project.name}</h1>
        <p className='text-sm text-gray-500'>{project.type}</p>
      </div>
      
      <p>
        <span className='text-xs p-2 rounded bg-gray-100'>{project.date}</span>
      </p>

      {/* Progress Bar */}
      <div className='w-full bg-gray-200 rounded-full h-2'>
        <div 
          className='bg-indigo-500 rounded-full h-2'
          style={{ width: `${project.progress}%` }} // Dynamically adjust progress width
        ></div>
      </div>

      {/* Members and Attachments */}
      <div className='flex justify-between items-center mt-3'>

        {/* Member Avatars */}
        <div className='flex items-center'>
          {project.members.slice(0, 3).map((_, index) => (
            <img
              key={index}
              src={`https://randomuser.me/api/portraits/men/${30 + index}.jpg`} // Random images
              alt="Member"
              className={`w-8 h-8 rounded-full border-2 border-white -ml-2 first:ml-0`}
            />
          ))}
          {project.members.length > 3 && (
            <span className='w-8 h-8 flex items-center justify-center bg-gray-300 text-xs text-white rounded-full -ml-2'>
              +{project.members.length - 3}
            </span>
          )}
        </div>

        {/* Files Icon */}
        <p className='flex items-center text-gray-500'>
          <TiAttachment size={18} /> <span className='ml-1'>{project.files}</span>
        </p>

      </div>
    </div>
  );
};

export default ProjectCard;
