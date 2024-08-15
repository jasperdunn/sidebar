import styled, { useTheme } from 'styled-components';

import { Icon } from '../../../Icon';

type DelayedRouteProps = {
  name: string;
  relatedRoutes: string[];
  /**
   * Delay in minutes
   */
  delay: number;
  /**
   * Distance in km
   */
  distance: number;
  severity: 'high' | 'medium';
};
export function DelayedRoute({
  name,
  relatedRoutes,
  delay,
  distance,
  severity,
}: DelayedRouteProps): JSX.Element {
  const theme = useTheme();

  return (
    <Container>
      <Row>
        <Severity $value={severity} />
        <Name>{name}</Name>
        <Distance>{distance} km</Distance>
      </Row>
      <Row>
        <Icon type="south" size={24} color={theme.color.tertiary} />
        {relatedRoutes.length > 0 && (
          <RelatedRoutes>
            {relatedRoutes.map((route) => (
              <div key={route}>{route}</div>
            ))}
          </RelatedRoutes>
        )}
        <Delay>
          <DelayNumber>{delay}</DelayNumber> min
        </Delay>
      </Row>
    </Container>
  );
}

const Name = styled.div`
  color: ${({ theme }) => theme.color.secondary};
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
`;

const Delay = styled.span`
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.fontSize.extraSmall};
  margin-left: auto;
  margin-top: auto;
`;

const DelayNumber = styled.span`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const Distance = styled.span`
  color: ${({ theme }) => theme.color.tertiary};
  font-size: ${({ theme }) => theme.fontSize.extraSmall};
  margin-left: auto;
`;

type SeverityProps = {
  $value: 'high' | 'medium';
};
const Severity = styled.div<SeverityProps>`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    display: block;
    width: 8px;
    height: 8px;

    border-radius: 50%;
    background-color: ${({ $value, theme }) => {
      switch ($value) {
        case 'high':
          return theme.color.danger;

        case 'medium':
          return theme.color.warning;
      }
    }};
  }
`;

const Container = styled.div`
  & + & {
    border-top: 1px solid ${({ theme }) => theme.borderColor.secondary};
  }

  padding-top: 4px;
  padding-bottom: 4px;
  padding-right: 8px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const RelatedRoutes = styled.div`
  font-size: ${({ theme }) => theme.fontSize.extraSmall};
  color: ${({ theme }) => theme.color.tertiary};
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
