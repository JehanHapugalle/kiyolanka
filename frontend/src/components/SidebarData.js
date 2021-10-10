import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as GiIcons from 'react-icons/gi';
import * as BsIcons from 'react-icons/bs';
import * as BiIcons from 'react-icons/bi';

export const SidebarData = [


  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: 'Employee Management',
    path: '/employee',
    icon: <IoIcons.IoMdPeople />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Employee List',
        path: '/employee/employeelist',
        icon: <AiIcons.AiFillCaretRight/>
      },
      {
        title: 'Add Employee',
        path: '/employee/addemployee',
        icon: <AiIcons.AiFillCaretRight/>
      },
      {
        title: 'Attendance',
        path: '/employee/attendance',
        icon: <AiIcons.AiFillCaretRight/>
      }
    ]
  },
  {
    title: 'Salary Management',
    path: '/salary',
    icon: <RiIcons.RiMoneyDollarCircleLine/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Add Employee',
        path: '/salary/addemployees',
        icon: <AiIcons.AiFillCaretRight/>,
        cName: 'sub-nav'
      },
      {
        title: 'Salary Details',
        path: '/salary/salarydetails',
        icon: <AiIcons.AiFillCaretRight/>,
        cName: 'sub-nav'
      },
      {
        title: 'Analysis',
        path: '/salary/analysis',
        icon: <AiIcons.AiFillCaretRight/>,
      }
    ]
  },
  {
    title: 'Machinery Management',
    path: '/machine',
    icon: <GiIcons.GiAutoRepair />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Add Machine',
        path: '/machine/addmachine',
        icon: <AiIcons.AiFillCaretRight/>
      },
      {
        title: 'View Machine',
        path: '/machine/viewmachine',
        icon: <AiIcons.AiFillCaretRight/>
      },
      {
        title: 'Expenses',
        path: '/machine/expenses',
        icon: <AiIcons.AiFillCaretRight/>
      },
      {
        title: 'Analaysis',
        path: '/machine/analysis1',
        icon: <AiIcons.AiFillCaretRight/>
      }
    ]
  },
  {
    title: 'Supplier Management',
    path: '/supplier',
    icon: <BsIcons.BsPersonSquare />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Add Supplier',
        path: '/supplier/addsupplier',
        icon: <AiIcons.AiFillCaretRight/>
      },
      {
        title: 'View Supplier',
        path: '/supplier/viewsupplier',
        icon: <AiIcons.AiFillCaretRight/>
      },
      
      {
        title: 'Payment',
        path: '/supplier/payment',
        icon: <AiIcons.AiFillCaretRight/>
      },
      {
        title: 'Analaysis',
        path: '/supplier/analaysis2',
        icon: <AiIcons.AiFillCaretRight/>
      },
    ]
  },
  {
    title: 'Materials Management',
    path: '/materials',
    icon: <FaIcons.FaLeaf />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Add Materials',
        path: '/materials/addmaterials',
        icon: <AiIcons.AiFillCaretRight/>
      },
      {
        title: 'Material Stock',
        path: '/materials/materialstock',
        icon: <AiIcons.AiFillCaretRight/>
      },
      
      {
        title: 'Used Materials',
        path: '/materials/usedmaterials',
        icon: <AiIcons.AiFillCaretRight/>
      },
      {
        title: 'Analysis',
        path: '/materials/analaysis3',
        icon: <AiIcons.AiFillCaretRight/>
      }
    ]
  },
  {
    title: 'Stock Management',
    path: '/stock',
    icon: <AiIcons.AiTwotoneShop />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Add Stock',
        path: '/stock/addstock',
        icon: <AiIcons.AiFillCaretRight/>
      },
      {
        title: 'View Stock',
        path: '/stock/viewstock',
        icon: <AiIcons.AiFillCaretRight/>
      },
      {
        title: 'Analysis',
        path: '/stock/analaysis4',
        icon: <AiIcons.AiFillCaretRight/>
      }
    ]
  },
  {
    title: 'Sales Management',
    path: '/sales',
    icon: <BiIcons.BiLineChart />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Calculate Bill',
        path: '/sales/calbill',
        icon: <AiIcons.AiFillCaretRight/>
      },
      {
        title: 'Add sales',
        path: '/sales/addsales',
        icon: <AiIcons.AiFillCaretRight/>
      },
      
      {
        title: 'Sales History',
        path: '/sales/saleshistory',
        icon: <AiIcons.AiFillCaretRight/>
      },
      {
        title: 'Analysis',
        path: '/sales/analaysis5',
        icon: <AiIcons.AiFillCaretRight/>
      }
    ]
  },
  {
    title: 'Transport Management',
    path: '/transport',
    icon: <AiIcons.AiFillCar />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Add Transport Details',
        path: '/transport/addtransport',
        icon: <AiIcons.AiFillCaretRight/>
      },
      {
        title: 'Maintenance',
        path: '/transport/maintenance',
        icon: <AiIcons.AiFillCaretRight/>
      },
      
      {
        title: 'Analysis',
        path: '/transport/analysis6',
        icon: <AiIcons.AiFillCaretRight/>
      },
    ]
  },

];
