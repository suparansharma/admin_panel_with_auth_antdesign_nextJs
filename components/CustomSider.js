// CustomSider.js
import React from 'react';
import { Menu } from 'antd';
import {
  GlobalOutlined,
  DashboardOutlined,
  MenuOutlined,
  ContainerOutlined,
  UsergroupAddOutlined,
  AuditOutlined,
  UserOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { useRouter } from 'next/router';

const CustomSider = ({ collapsed, onToggleCollapse }) => {
  const router = useRouter();

  const menuItems = [
    {
      key: 'profile',
      icon: <GlobalOutlined />,
      label: 'Profile',
      path: '/profile',
    },
    {
      key: 'status',
      icon: <GlobalOutlined />,
      label: 'Status',
      path: '/status',
    },
    {
      key: 'dashboard',
      icon: <DashboardOutlined />,
      label: 'Dashboard',
      path: '/dashboard/dashboard',
    },
    {
      key: 'helloTutor',
      icon: <MenuOutlined />,
      label: 'Master Data',
      children: [
        { key: 'subject', label: 'Subject', path: '/subject' },
        { key: 'class', label: 'Class', path: '/class' },
        { key: 'categorie', label: 'Category', path: '/categorie' },
        { key: 'city', label: 'City', path: '/city' },
        { key: 'location', label: 'Location', path: '/location' },
      ],
    },
    {
      key: 'job',
      icon: <ContainerOutlined />,
      label: 'Job Management',
      children: [
        { key: 'jobCreate', label: 'Job Creation', path: '/jobRequest' },
        { key: 'jobAssign', label: 'Job Assign', path: '/jobAssign' },
      ],
    },
    {
      key: 'user_manage',
      icon: <UsergroupAddOutlined />,
      label: 'User Manager',
      children: [
        { key: 'users', label: 'User', path: '/users' },
        { key: 'guardian', label: 'Guardian', path: '/guardian' },
        { key: 'tutor', label: 'Tutor', path: '/tutor' },
      ],
    },
    {
      key: 'tutorRequest',
      icon: <AuditOutlined />,
      label: 'Tutor Request',
      path: '/tutorRequest/form/TutorRequestForm',
    },
    {
      key: 'tutorProfile',
      icon: <UserOutlined />,
      label: 'Tutor Profile From',
      path: '/tutorFrom',
    },
    {
      key: 'setting',
      icon: <SettingOutlined />,
      label: 'Setting',
      path: '/setting',
    },
  ];

  const renderMenuItem = (item) => {
    if (item.children) {
      return (
        <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
          {item.children.map((child) => renderMenuItem(child))}
        </Menu.SubMenu>
      );
    }

    return (
      <Menu.Item key={item.key} icon={item.icon} onClick={() => handleMenuClick(item.path)}>
        {item.label}
      </Menu.Item>
    );
  };

  const handleMenuClick = (path) => {
    router.push(path);
  };

  return (
    <div>
      <div className="demo-logo-vertical" />
      <Menu theme="dark" defaultSelectedKeys={['profile']} mode="inline">
        {menuItems.map((item) => renderMenuItem(item))}
      </Menu>
    </div>
  );
};

export default CustomSider;
