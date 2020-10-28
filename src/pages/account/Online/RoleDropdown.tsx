import React, { useEffect } from 'react';

import { Select } from 'antd';
import {
  changeRoleSearch,
  gotRoleOptions,
} from '@/pages/account/Online/reducer';
import { useDispatch, useSelector } from 'react-redux';
import { selectRoleOptions, selectRoleSearch } from './selectors';

const { Option } = Select;

const options = [
  { label: '6級代理', value: 6 },
  { label: '7級代理', value: 7 },
  { label: '8級代理', value: 8 },
  { label: '9級代理', value: 9 },
  { label: '10級代理', value: 10 },
];

const Component: React.FC = () => {
  const dispatch = useDispatch();
  const roleOptions = useSelector(selectRoleOptions);
  useEffect(() => {
    dispatch(gotRoleOptions(options));
  }, []);
  const onChange = (value) => dispatch(changeRoleSearch(value));
  return (
    <Select
      showSearch
      allowClear
      style={{ width: 150 }}
      placeholder="全部"
      onChange={onChange}
    >
      {roleOptions.map((opt) => (
        <Option key={opt.value} value={opt.value}>
          {opt.label}
        </Option>
      ))}
    </Select>
  );
};

export default Component;
