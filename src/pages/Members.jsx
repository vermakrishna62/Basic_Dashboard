import React, { useState } from "react";

const Members = () => {
  // Dummy members data with Indian names
  const [members, setMembers] = useState([
    { id: 1, name: "Amit Sharma", role: "Admin", email: "amit.sharma@example.com" },
    { id: 2, name: "Priya Verma", role: "Editor", email: "priya.verma@example.com" },
    { id: 3, name: "Ravi Kumar", role: "Member", email: "ravi.kumar@example.com" },
    { id: 4, name: "Sneha Iyer", role: "Member", email: "sneha.iyer@example.com" },
    { id: 5, name: "Vikram Singh", role: "Admin", email: "vikram.singh@example.com" },
    { id: 6, name: "Anjali Patel", role: "Editor", email: "anjali.patel@example.com" },
    { id: 7, name: "Rajesh Nair", role: "Member", email: "rajesh.nair@example.com" },
    { id: 8, name: "Meera Joshi", role: "Member", email: "meera.joshi@example.com" },
  ]);

  const [search, setSearch] = useState("");

  // Filter members based on search input
  const filteredMembers = members.filter((member) =>
    member.name.toLowerCase().includes(search.toLowerCase()) ||
    member.email.toLowerCase().includes(search.toLowerCase()) ||
    member.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Header */}
      <h2 className="text-lg from-neutral-300 font-semibold text-gray-700 mb-4">Members</h2>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search members..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      {/* Members Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-indigo-400 text-white">
            <tr>
              <th className="px-4 py-3 text-left">ID</th>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Role</th>
              <th className="px-4 py-3 text-left">Email</th>
            </tr>
          </thead>
          <tbody>
            {filteredMembers.length > 0 ? (
              filteredMembers.map((member) => (
                <tr
                  key={member.id}
                  className="border-t hover:bg-gray-100 transition-all"
                >
                  <td className="px-4 py-3">{member.id}</td>
                  <td className="px-4 py-3">{member.name}</td>
                  <td className="px-4 py-3">{member.role}</td>
                  <td className="px-4 py-3">{member.email}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">
                  No members found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Members;
