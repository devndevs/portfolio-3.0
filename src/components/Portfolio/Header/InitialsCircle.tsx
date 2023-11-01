import styled from 'styled-components';
import { Text } from '@radix-ui/themes';

/* eslint-disable-next-line */
export interface InitialsCircleProps {}

const Circle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #007bff;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

export function InitialsCircle(props: InitialsCircleProps) {
  const initials = <Text>DP</Text>;
  return (
    <div>
      <Circle>{initials}</Circle>
    </div>
  );
}

export default InitialsCircle;
