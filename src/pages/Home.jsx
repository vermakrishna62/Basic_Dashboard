import React from 'react'
import ProjectStatistics from '../components/ProjectStatistics'
import Platforms from '../components/Platforms'
import ProjectCard from '../components/ProjectCard';
import ClientCard from '../components/ClientCard';
import MemberCard from '../components/MemberCard';

const Home = () => {

  const projects = [
    {
      name: "E-Commerce Platform",
      type: "Web Development",
      date: "2024-02-01",
      members: ["Amit Sharma", "Priya Verma", "Rohan Mehta", "Sneha Iyer"],
      files: 12,
      progress: 80
    },
    {
      name: "Healthcare Management System",
      type: "Software Development",
      date: "2024-01-15",
      members: ["Vikram Singh", "Neha Agarwal", "Rahul Nair", "Kavita Rao"],
      files: 8,
      progress: 65
    },
    {
      name: "AI Chatbot Integration",
      type: "Machine Learning",
      date: "2024-02-10",
      members: ["Sandeep Joshi", "Anjali Patil", "Rajesh Gupta", "Meena Kapoor"],
      files: 15,
      progress: 90
    },
    {
      name: "Mobile Banking App",
      type: "Mobile Development",
      date: "2024-02-05",
      members: ["Harish Kumar", "Divya Menon", "Shivam Tiwari", "Asha Yadav"],
      files: 20,
      progress: 85
    }
  ]; 
  
  const clients = [
    {
      name: "Tech Innovations Ltd.",
      industry: "Software Development",
      contact: "Rajesh Kumar",
      email: "rajesh@techinnovations.com",
      projects: 3
    },
    {
      name: "Retail Masters Pvt. Ltd.",
      industry: "E-Commerce",
      contact: "Vikram Joshi",
      email: "vikram@retailmasters.com",
      projects: 4
    },
    {
      name: "Green Energy Corp",
      industry: "Renewable Energy",
      contact: "Pooja Mehta",
      email: "pooja@greenenergy.com",
      projects: 1
    },
    {
      name: "NextGen Finance",
      industry: "Banking & Finance",
      contact: "Arjun Kapoor",
      email: "arjun@nextgenfinance.com",
      projects: 5
    }
  ];

  const members = [
    {
      name: "Amit Sharma",
      job: "Software Engineer",
      total_members: 5,
      members: ["Alice", "Bob", "Charlie", "David", "Eve"]
    },
    {
      name: "Priya Verma",
      job: "UI/UX Designer",
      total_members: 3,
      members: ["John", "Jane", "Jake"]
    },
    {
      name: "Rohan Mehta",
      job: "Backend Developer",
      total_members: 4,
      members: ["Sam", "Olivia", "Liam", "Emma"]
    },
    {
      name: "Krishna Verma",
      job: "AI Engineer",
      total_members: 4,
      members: ["Sam", "Olivia", "Liam", "Emma"]
    },
    {
      name: "Sneha Iyer",
      job: "Data Scientist",
      total_members: 6,
      members: ["Sophia", "Michael", "Ethan", "Grace", "Daniel", "Lucas"]
    },
    {
      name: "Vikram Singh",
      job: "DevOps Engineer",
      total_members: 2,
      members: ["Ryan", "Ava"]
    },
  ];
  

  return (
    <div className='p-5'>
      <div className='grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4'>
        <ProjectStatistics />
        <Platforms />
      </div>

      <div>
        <div className='flex justify-between items-center pt-6 pb-3'>
          <h1 className='text-lg font-semibold'>Current Projects</h1>
          <p className='text-sm underline text-indigo-600'>See All</p>
        </div>

        <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-8'>
          {
            projects && projects.map((project,index) => (
              <ProjectCard key={index} project={project} />
            ))            
          }
        </div>
      </div>

      <div>
        <div className='flex justify-between items-center pt-6 pb-3'>
          <h1 className='text-lg font-semibold'>Current Clients</h1>
          <p className='text-sm underline text-indigo-600'>See All</p>
        </div>

        <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-8'>
          {
           clients && clients.map((client, index) => (
            <ClientCard key={index} client={client} />
          ))           
          }
        </div>
      </div>

      <div>
  <div className='flex justify-between items-center pt-6 pb-3'>
    <h1 className='text-lg font-semibold'>Members</h1>
    <p className='text-sm underline text-indigo-600'>See All</p>
  </div>

  <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-8'>
    {members && members.map((member, index) => (
      <MemberCard key={index} member={member} />
    ))}
  </div>
</div>

    </div>
  )
}

export default Home