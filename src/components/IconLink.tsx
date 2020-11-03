import { Tooltip } from 'antd';
import React, { CSSProperties } from 'react';
import styled from 'styled-components';
interface IProps {
  IconComp: React.ElementType;
  label?: string;
  style?: CSSProperties;
}
const IconLink: React.FC<IProps> = ({ IconComp, label, ...props }) => {
  if (!label) return <IconComp {...props} />;
  return (
    <Tooltip title={label}>
      <IconComp {...props} />
    </Tooltip>
  );
};

export default styled(IconLink)`
  cursor: pointer;
`;
