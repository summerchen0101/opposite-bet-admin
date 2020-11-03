import { Tooltip } from 'antd';
import React, { CSSProperties } from 'react';
interface IProps {
  IconComp: React.ElementType;
  label?: string;
  style?: CSSProperties;
}
const IconLink: React.FC<IProps> = ({ IconComp, label, ...props }) => {
  if (!label) return <IconComp {...props} />;
  return (
    <Tooltip title={label}>
      <IconComp {...props} style={{ cursor: 'pointer' }} />
    </Tooltip>
  );
};

export default IconLink;
