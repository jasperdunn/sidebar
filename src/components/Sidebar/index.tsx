import { styled } from 'styled-components';

import { RampChart } from './RampChart';
import { Details } from '../Details';
import { DelayedRoutes } from './DelayedRoutes';
import { WeatherSummary } from './WeatherSummary';

export function Sidebar(): JSX.Element {
  return (
    <Aside>
      <WeatherSummary />
      <Details summary="DELAYED ROUTES" open>
        <DelayedRoutes />
      </Details>
      <Details summary="RAMP CHART" open>
        <RampChart />
      </Details>
    </Aside>
  );
}

const Aside = styled.aside`
  background-color: #0b0b0e;
  width: 240px;
  height: 100vh;
  padding: 16px 12px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
