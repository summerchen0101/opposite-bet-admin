import styled from 'styled-components';
import colors from '@/lib/colors';
type Props = {
  type: string;
};
export default styled.a`
  color: ${(props: Props) => colors[props.type]};
  &:hover {
    color: ${(props: Props) => colors[props.type]};
  }
`;
