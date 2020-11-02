import React from 'react';
import { Input } from 'antd';
const { Search } = Input;

const Component: React.FC = () => {
  const onSearch = (value) => console.log('search: ' + value);
  return (
    <Search
      placeholder="請輸入帳號"
      onSearch={onSearch}
      style={{ width: 200 }}
    />
  );
};

export default Component;
