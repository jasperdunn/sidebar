import styled, { useTheme } from 'styled-components';
import { Icon } from '../../Icon';

export function WeatherSummary() {
  const theme = useTheme();

  return (
    <Container>
      <div style={{ display: 'flex', gap: '8px' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <span style={{ fontWeight: theme.fontWeight.normal }}>Melbourne</span>
          <span
            style={{
              fontSize: theme.fontSize.extraLarge,
              color: theme.color.primary,
            }}
          >
            32&deg;
          </span>
          <span
            style={{
              fontSize: theme.fontSize.extraSmall,
            }}
          >
            Tue 16th 3:46 PM
          </span>
        </div>
        <Icon type="partly_cloudy_day" size={96} color={theme.color.primary} />
      </div>

      <Dl>
        <DescriptionListItem>
          <Dt>Humidity</Dt>
          <Dd>78%</Dd>
        </DescriptionListItem>
        <DescriptionListItem>
          <Dt>Chance of Rain</Dt>
          <Dd>34%</Dd>
        </DescriptionListItem>
        <DescriptionListItem>
          <Dt>Wind</Dt>
          <Dd>
            21{' '}
            <span
              style={{
                fontSize: theme.fontSize.extraSmall,
                color: theme.color.secondary,
              }}
            >
              kmh
            </span>
          </Dd>
        </DescriptionListItem>
        <DescriptionListItem>
          <Dt>Tomorrow</Dt>
          <Dd>
            30&deg; <Icon type="sunny" size={theme.fontSize.medium} />
          </Dd>
        </DescriptionListItem>
      </Dl>
    </Container>
  );
}

const Container = styled.div`
  padding: 16px;
  color: ${({ theme }) => theme.color.tertiary};
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Dl = styled.dl`
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: space-between;
`;

const Dt = styled.dt`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  width: 120px;
`;

const Dd = styled.dd`
  display: inline-block;
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.fontSize.medium};
`;

const DescriptionListItem = styled.div`
  display: flex;
  align-items: center;
`;
