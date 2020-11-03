import { Tooltip } from 'antd';
import React, { CSSProperties } from 'react';
interface IProps {
  IconComp: React.ElementType;
  label?: string;
  style?: CSSProperties;
  onClick?: () => void;
}
const IconLink: React.FC<IProps> = ({ IconComp, label, style, ...props }) => {
  if (!label)
    return <IconComp style={{ cursor: 'pointer', ...style }} {...props} />;
  return (
    <Tooltip title={label}>
      <IconComp style={{ cursor: 'pointer', ...style }} {...props} />
    </Tooltip>
  );
};

export default IconLink;
