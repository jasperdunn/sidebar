import { ReactNode } from 'react';
import styled from 'styled-components';

type DetailsProps = {
  summary: ReactNode;
  children: ReactNode;
  open?: boolean;
};
export function Details({
  summary,
  children,
  open,
}: DetailsProps): JSX.Element {
  return (
    <Container open={open}>
      <Summary>{summary}</Summary>
      {children}
    </Container>
  );
}

const Summary = styled.summary`
  position: relative;
  cursor: pointer;
  color: ${({ theme }) => theme.color.secondary};
  padding: 8px;
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  user-select: none;

  /* remove the default browser marker */
  list-style: none;
  &::-webkit-details-marker {
    display: none;
  }

  /* custom marker */
  &::after {
    content: '⌃';
    transform: rotate(270deg);
    transform-origin: 50% 40%;
    position: absolute;
    font-size: ${({ theme }) => theme.fontSize.large};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.color.tertiary};
    right: 8px;
    line-height: 1;
  }
`;

const Container = styled.details`
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundColor.secondary};
  border: 1px solid ${({ theme }) => theme.borderColor.secondary};
  font-weight: ${({ theme }) => theme.fontWeight.thin};

  /* Summary styles when open */
  &[open] ${Summary} {
    border-bottom: 1px solid ${({ theme }) => theme.borderColor.secondary};

    &::after {
      transform: rotate(180deg);
    }
  }
`;
