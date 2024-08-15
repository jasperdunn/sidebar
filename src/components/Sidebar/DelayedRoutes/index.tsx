import { DelayedRoute } from './DelayedRoute';

export function DelayedRoutes() {
  return (
    <>
      <DelayedRoute
        name="Monash Fwy Out"
        relatedRoutes={['Kings Way', 'EastLink']}
        delay={45}
        distance={13}
        severity="high"
      />
      <DelayedRoute
        name="Monash Fwy Out"
        relatedRoutes={['Kings Way', 'EastLink']}
        delay={28}
        distance={15}
        severity="high"
      />
      <DelayedRoute
        name="Western Ring Rd"
        relatedRoutes={['West Gate Fwy', 'Western Fwy']}
        delay={5}
        distance={5}
        severity="medium"
      />
      <DelayedRoute
        name="Eastern Fwy"
        relatedRoutes={['Hoddle St', 'Springvale Rd']}
        delay={25}
        distance={15}
        severity="medium"
      />
    </>
  );
}
