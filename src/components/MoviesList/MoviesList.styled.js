import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-top: 10px;
  margin-left: 20px;
`;

export const MovieLink = styled(Link)`
  color: darkblue;
`;
