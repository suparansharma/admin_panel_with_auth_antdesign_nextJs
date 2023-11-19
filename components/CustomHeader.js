// CustomHeader.js
import React from 'react';
import { Button, Space } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, LogoutOutlined } from '@ant-design/icons';

const CustomHeader = ({ collapsed, onToggleCollapse }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 16px', // Add padding for better spacing
        background: '#fff', // Set the background color to white
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)', // Add a subtle box shadow
        zIndex: 1, // Ensure the header is above other elements
      }}
    >
      <Space>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={onToggleCollapse}
          style={{
            fontSize: '16px',
            width: 64,
            height: 64,
          }}
        />
      </Space>
      <Space>
        <Button
          type="text"
          icon={<LogoutOutlined />}
          onClick={() => {
            // Handle logout logic here
          }}
          style={{
            fontSize: '16px',
            width: 64,
            height: 64,
          }}
        >
          Logout
        </Button>
      </Space>
    </div>
  );
};

export default CustomHeader;
