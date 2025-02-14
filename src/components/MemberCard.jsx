import React from 'react'
import { FaChevronRight } from 'react-icons/fa';

const MemberCard = ({ member }) => {
  return (
    <div className='p-6 bg-white rounded-xl space-y-4 shadow-md'>
      <div className='flex justify-between items-center'>
        <h1 className='text-xl font-bold text-gray-700'>
          {member.total_members}
        </h1>
        <FaChevronRight />
      </div>

      <div>
        <p className='text-sm text-gray-400'>{member.job}</p>
        <div className="flex items-center">
          {member.members?.slice(0, 3).map((_, index) => (
            <img
              key={index}
              src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? 'men' : 'women'}/${12 + index}.jpg`}
              alt="Member"
              className="w-8 h-8 rounded-full border-2 border-white -ml-2 first:ml-0"
            />
          ))}

          {member.total_members > 3 && (
            <span className="ml-2 text-sm text-gray-600">+{member.total_members - 3} more</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
