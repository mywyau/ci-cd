// src/pages/About.tsx
import React, { useState } from 'react';
import { messages } from '../../messages/worklog';
import Copyright from '../components/Copyright';
import Navbar from '../components/NavBar';
import WorkLogGrid from '../components/WorkLogGrid';
import WorkLogPagination from '../components/WorkLogPagination';


const WorkLog: React.FC = () => {


  const records = []

  for (let i = 0; i < 30; i++) {
    const exampleRecord = { id: 1, taskTitle: `Post ${i + 1}`, description: messages.lorem.p5.substring(0, messages.lorem.p5.length / 4) };
    records.push(exampleRecord)
  }

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 2;

  const indexOfLastRecords = currentPage * recordsPerPage;
  const indexOfFirstRecords = indexOfLastRecords - recordsPerPage;
  const currentRecords = records.slice(indexOfFirstRecords, indexOfLastRecords);

  return (
    <div className="flex flex-col min-h-screen font-nunito bg-gray-100">
      <Navbar />
      <div className=" container mx-auto p-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent pt-6">{messages.about.title}</h1>
      </div>
      <div className="flex-grow container mx-auto pb-10">
        <WorkLogGrid records={currentRecords} />
        <WorkLogPagination
          recordsPerPage={recordsPerPage}
          totalrecords={records.length}
          paginate={(pageNumber) => setCurrentPage(pageNumber)}
        />
      </div>
      <Copyright />
    </div>
  );
};

export default WorkLog;
