// components/ClientList.tsx
'use client'

import React, { useState, useMemo } from 'react';
import { Client } from './Data/Client';

const ClientList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All');

  const clients: Client[] = [
    {
      srNo: 1,
      projectName: "D. E. Shaw & Co., Sanali Info Park, Road No-3, Banjara Hills, Hyderabad",
      contact: "Koteshwar Rao",
      contactPhone: "9949414130",
      typeOfOccupancy: "Software Co"
    },
    {
      srNo: 2,
      projectName: "Krishna's Residency, Lakdi-ka-pul",
      contact: "Narendra",
      contactPhone: "9866191755",
      typeOfOccupancy: "Hotel"
    },
    {
      srNo: 3,
      projectName: "View Towers, Lakdi-ka-pul",
      contact: "Riyaz",
      contactPhone: "9848095544",
      typeOfOccupancy: "Residential Apt."
    },
    {
      srNo: 4,
      projectName: "Gotipati Towers, Mehdipatnam",
      contact: "Srinivas Rao",
      contactPhone: "9246290568",
      typeOfOccupancy: "Educational Complex"
    },
    {
      srNo: 5,
      projectName: "Regency Towers, Dharam Karam Road, Ameerpet, Hyderabad",
      contact: "Sridhar",
      contactPhone: "9849021290",
      typeOfOccupancy: "Software Co."
    },
    {
      srNo: 6,
      projectName: "Maheshwari Complex, Somajiguda",
      contact: "-",
      typeOfOccupancy: "Commercial Complex"
    },
    {
      srNo: 7,
      projectName: "University of Hyderabad-ACRHEM (Formerly Hyderabad Central University) Advanced Centre of Research For High Energy Materials",
      contact: "-",
      contactPhone: "040-23138842/66798842",
      typeOfOccupancy: "Research Lab. Of DRDO"
    },
    {
      srNo: 8,
      projectName: "Amrutha Castle",
      contact: "-",
      typeOfOccupancy: "Hotel"
    },
    {
      srNo: 9,
      projectName: "Sanali Mall Abids Hyderabad",
      contact: "Aman ul Haq",
      typeOfOccupancy: "Commercial"
    },
    {
      srNo: 10,
      projectName: "Little Flower High School Chirag Ali Lane, Abids",
      contact: "-",
      contactPhone: "040-23202675",
      typeOfOccupancy: "Educational Building"
    },
    {
      srNo: 11,
      projectName: "Little Flower High School Chirag Ali Lane, Abids(Primary Sec)",
      contact: "-",
      contactPhone: "040-23202675",
      typeOfOccupancy: "Educational Building"
    },
    {
      srNo: 12,
      projectName: "Hotel Grand Plaza Public Garden Road, Hyderabad",
      contact: "-",
      contactPhone: "040-23230860",
      typeOfOccupancy: "Hotel"
    },
    {
      srNo: 13,
      projectName: "Hyderabad Nursing Home Basheerbag",
      contact: "Mr. Raman",
      contactPhone: "040-23222344",
      typeOfOccupancy: "Hospital"
    },
    {
      srNo: 14,
      projectName: "Candy Children Hospital Tolichowki",
      contact: "H.R Manager",
      contactPhone: "9014661010",
      typeOfOccupancy: "Hospital"
    },
    {
      srNo: 15,
      projectName: "Marvel Maternity Home Chandrayangutta",
      contact: "-",
      contactPhone: "040-24441979",
      typeOfOccupancy: "Hospital"
    },
    {
      srNo: 16,
      projectName: "Rosedale High School, Vijaya Nagar",
      contact: "-",
      contactPhone: "040-23346644",
      typeOfOccupancy: "Educational Building"
    },
    {
      srNo: 17,
      projectName: "MESCO Educational Complex Mustaidpura, Karwan",
      contact: "-",
      contactPhone: "040-24828434",
      typeOfOccupancy: "Educational Building"
    },
    {
      srNo: 18,
      projectName: "Skyline-Sterling Residency",
      contact: "Beanth Singh",
      contactPhone: "9703143279",
      typeOfOccupancy: "Residential Complex"
    },
    {
      srNo: 19,
      projectName: "RMK Plaza Road No.1 Banjara Hills",
      contact: "Zaheer",
      contactPhone: "9533201447",
      typeOfOccupancy: "Commercial Complex"
    },
    {
      srNo: 20,
      projectName: "Jayaram Hospital Miyapur",
      contact: "Mr. Ramchandar",
      contactPhone: "9948357344",
      typeOfOccupancy: "Hospital"
    },
    {
      srNo: 21,
      projectName: "Salamah Hospital Mehdipatnam",
      contact: "-",
      contactPhone: "040-65522443/23520804",
      typeOfOccupancy: "Hospital"
    },
    {
      srNo: 22,
      projectName: "Samridhi Towers Begumpet",
      contact: "Mr. Vinod Gupta",
      contactPhone: "9849048249",
      typeOfOccupancy: "Residential Apt."
    },
    {
      srNo: 23,
      projectName: "Venkat Plaza Panjagutta X Road",
      contact: "Gyaneshwar",
      contactPhone: "995142210",
      typeOfOccupancy: "Commercial Complex"
    },
    {
      srNo: 25,
      projectName: "UpTown Banjara Rd. No.3, Banjara Hills",
      contact: "-",
      contactPhone: "040-23553345",
      typeOfOccupancy: "Commercial Complex"
    },
    {
      srNo: 26,
      projectName: "Shukla Towers Srinagar Colony",
      contact: "Shiv Kumar Shukla",
      contactPhone: "9885094120",
      typeOfOccupancy: "Commercial Complex"
    },
    {
      srNo: 27,
      projectName: "Maheshwari Residency Basheerbag",
      contact: "Seva Sing",
      contactPhone: "9849004023",
      typeOfOccupancy: "Residential Apt."
    },
    {
      srNo: 28,
      projectName: "Century Super Specialty Hospitals Banjara hills Hyderabad",
      contact: "Vinay",
      contactPhone: "09966012870",
      typeOfOccupancy: "Hospital"
    },
    {
      srNo: 29,
      projectName: "Shreya Hospital Moti Nagar Yousuffguda",
      contact: "Dr.Sukarna Reddy",
      contactPhone: "8374697052",
      typeOfOccupancy: "Hospital"
    },
    {
      srNo: 30,
      projectName: "Paarthiv –Lung Care Centre Zeck Colony, Erragadda",
      contact: "Dr. B. Nagraj",
      contactPhone: "9848883444",
      typeOfOccupancy: "Hospital"
    },
    {
      srNo: 31,
      projectName: "Sant Nirankari Satsang Bhavan Lakdi Ka pul",
      contact: "Kiran Kumar Ahuja",
      contactPhone: "09392433434",
      typeOfOccupancy: "Community Building"
    },
    {
      srNo: 32,
      projectName: "Mohini Restaurant Basheerbagh",
      contact: "-",
      contactPhone: "040-23224431",
      typeOfOccupancy: "Hotel"
    },
    {
      srNo: 33,
      projectName: "Dimora Homes-Shanti nagar",
      contact: "Mr. Shoukat",
      contactPhone: "9966388595",
      typeOfOccupancy: "Residential"
    },
    {
      srNo: 34,
      projectName: "MESCO Diagnostics-Darulshifa",
      contact: "Mr. A. Samad",
      contactPhone: "9849042985",
      typeOfOccupancy: "Hospital"
    },
    {
      srNo: 35,
      projectName: "SARATH CITY CAPITAL",
      contact: "Mr. Qureishi",
      contactPhone: "9493191170",
      typeOfOccupancy: "Shopping Mall"
    },
    {
      srNo: 36,
      projectName: "Kundan Krafts Pvt. Ltd. Basheerbagh",
      contact: "Mr.Vinay",
      contactPhone: "9898988909",
      typeOfOccupancy: "Gold Jewelry Manufacturing"
    },
    {
      srNo: 37,
      projectName: "St. Anthony's Girls High School",
      contact: "Sudarshan",
      contactPhone: "9440039921",
      typeOfOccupancy: "School"
    },
    {
      srNo: 38,
      projectName: "Farah High School",
      contact: "Mr. Osman",
      contactPhone: "9912846786",
      typeOfOccupancy: "School"
    },
    {
      srNo: 39,
      projectName: "MANA Hospital, Kukatpally",
      contact: "Hanuman",
      contactPhone: "9949050995",
      typeOfOccupancy: "Hospital"
    }
  ];

  // Get unique occupancy types for filter
  const occupancyTypes = useMemo(() => {
    const types = Array.from(new Set(clients.map(client => client.typeOfOccupancy)));
    return ['All', ...types.sort()];
  }, [clients]);

  // Filter and search functionality
  const filteredClients = useMemo(() => {
    return clients.filter(client => {
      const matchesSearch = 
        client.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.contact.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.typeOfOccupancy.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (client.contactPhone && client.contactPhone.includes(searchTerm));
      
      const matchesFilter = filterType === 'All' || client.typeOfOccupancy === filterType;
      
      return matchesSearch && matchesFilter;
    });
  }, [clients, searchTerm, filterType]);

  const getOccupancyColor = (type: string): string => {
    const colors: { [key: string]: string } = {
      'Hospital': 'bg-red-100 text-red-800',
      'Hotel': 'bg-blue-100 text-blue-800',
      'Software Co': 'bg-green-100 text-green-800',
      'Software Co.': 'bg-green-100 text-green-800',
      'Educational Building': 'bg-purple-100 text-purple-800',
      'Educational Complex': 'bg-purple-100 text-purple-800',
      'School': 'bg-purple-100 text-purple-800',
      'Commercial Complex': 'bg-yellow-100 text-yellow-800',
      'Commercial': 'bg-yellow-100 text-yellow-800',
      'Residential Apt.': 'bg-indigo-100 text-indigo-800',
      'Residential Complex': 'bg-indigo-100 text-indigo-800',
      'Residential': 'bg-indigo-100 text-indigo-800',
      'Research Lab. Of DRDO': 'bg-gray-100 text-gray-800',
      'Community Building': 'bg-pink-100 text-pink-800',
      'Shopping Mall': 'bg-orange-100 text-orange-800',
      'Gold Jewelry Manufacturing': 'bg-amber-100 text-amber-800'
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Client Directory</h1>
        <p className="text-gray-600">Manage and view all client information</p>
      </div>

      {/* Search and Filter Controls */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search clients, projects, or contacts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="sm:w-64">
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {occupancyTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Results Counter */}
      <div className="mb-4">
        <p className="text-sm text-gray-600">
          Showing {filteredClients.length} of {clients.length} clients
        </p>
      </div>

      {/* Desktop Table View */}
      <div className="hidden lg:block overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Sr. No.
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Project Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Contact
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type of Occupancy
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredClients.map((client) => (
              <tr key={client.srNo} className="hover:bg-gray-50 transition-colors duration-200">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {client.srNo}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  <div className="max-w-xs lg:max-w-md xl:max-w-lg">
                    {client.projectName}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  <div>
                    {client.contact !== '-' && (
                      <div className="font-medium">{client.contact}</div>
                    )}
                    {client.contactPhone && (
                      <div className="text-gray-600">
                        <a 
                          href={`tel:${client.contactPhone}`} 
                          className="hover:text-blue-600 transition-colors duration-200"
                        >
                          {client.contactPhone}
                        </a>
                      </div>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getOccupancyColor(client.typeOfOccupancy)}`}>
                    {client.typeOfOccupancy}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="lg:hidden space-y-4">
        {filteredClients.map((client) => (
          <div key={client.srNo} className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
            <div className="flex justify-between items-start mb-2">
              <span className="text-sm font-medium text-gray-500">#{client.srNo}</span>
              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getOccupancyColor(client.typeOfOccupancy)}`}>
                {client.typeOfOccupancy}
              </span>
            </div>
            
            <h3 className="font-medium text-gray-900 mb-2">{client.projectName}</h3>
            
            {(client.contact !== '-' || client.contactPhone) && (
              <div className="text-sm text-gray-600">
                {client.contact !== '-' && (
                  <div className="font-medium text-gray-900">{client.contact}</div>
                )}
                {client.contactPhone && (
                  <a 
                    href={`tel:${client.contactPhone}`} 
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  >
                    {client.contactPhone}
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* No Results Message */}
      {filteredClients.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No clients found</h3>
          <p className="text-gray-500">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};

export default ClientList;
