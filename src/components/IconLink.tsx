import React, { CSSProperties } from 'react';
import styled from 'styled-components';
interface IProps {
  IconComp: React.ElementType;
  style?: CSSProperties;
}
const IconLink: React.FC<IProps> = ({ IconComp, ...props }) => {
  return <IconComp {...props} />;
};

export default styled(IconLink)`
  cursor: pointer;
`;
