import React from 'react';
import ReactDOM from 'react-dom/client';
import UserCard from './UserCard';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div style={{ padding: 40 }}>
    <h2>本地预览 Remote 组件</h2>
    <UserCard name="预览用户" age={20} />
  </div>
);
