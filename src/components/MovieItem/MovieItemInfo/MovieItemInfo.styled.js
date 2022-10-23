import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-top: 6px;
  margin-left: 20px;
`;

export const InfoLink = styled(Link)`
  color: darkblue;
`;
