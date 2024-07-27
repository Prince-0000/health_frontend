import React from 'react';
import { Outlet } from 'react-router-dom';
import { sidebarLinks } from '../../data/dashboard-links';
import SideLinks from '../core/SideLinks';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const { result } = useSelector((state) => state.disease);

  console.log(result);

  return (
    <div className="flex">
      {/* Content */}
      <div className="flex-grow bg-richblack-900 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
