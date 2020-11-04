import styled from 'styled-components';
import colors from '@/lib/colors';
type Props = {
  color?: string;
};
export default styled.span<Props>`
  color: ${(props) => colors[props.color ?? 'default']};
  &:hover {
    color: ${(props) => colors[props.color ?? 'default']};
  }
`;
