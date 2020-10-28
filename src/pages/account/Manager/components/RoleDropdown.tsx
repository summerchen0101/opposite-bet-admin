import React, { useContext, useEffect, useReducer } from 'react';

import { Select } from 'antd';
import { gotRoleOptions, changeRoleSearch } from '../reducer';
import {
  selectRoleOptions,
  selectRoleSearch,
} from '@/pages/account/Manager/selectors';
import { useDispatch, useSelector } from 'react-redux';

const { Option } = Select;

const roleList = [
  { value: '控盤人員' },
  { value: '網站管理員' },
  { value: 'MIS工程師' },
];

const Component: React.FC = () => {
  const dispatch = useDispatch();
  const roleOptions = useSelector(selectRoleOptions);
  useEffect(() => {
    dispatch(gotRoleOptions(roleList));
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
          {opt.value}
        </Option>
      ))}
    </Select>
  );
};

export default Component;
