import { useEffect, useState } from 'react';

export type Ramp = {
  id: string;
  algorithm: Algorithm;
};

export enum Algorithm {
  Algorithm1 = 'Algorithm 1',
  Algorithm2 = 'Algorithm 2',
  Algorithm3 = 'Algorithm 3',
  Algorithm4 = 'Algorithm 4',
  Algorithm5 = 'Algorithm 5',
}

export const algorithmValues = Object.values(Algorithm);

/**
 * A mock api to get ramp information
 *
 * This returns a list of ramps and their current
 * running algorithm, for use in the ramp chart
 */
export function useRampAlgorithms(): Ramp[] {
  const [ramps, setRamps] = useState<Ramp[]>([]);

  const count = 50;

  useEffect(() => {
    const interval = setInterval(() => {
      const newRamps: Ramp[] = [];
      for (let i = 0; i < count; i++) {
        newRamps.push({
          id: `ramp-${i}`,
          algorithm: [
            Algorithm.Algorithm1,
            Algorithm.Algorithm2,
            Algorithm.Algorithm3,
            Algorithm.Algorithm4,
            Algorithm.Algorithm5,
          ][Math.floor(Math.random() * 5)]!,
        });
      }
      setRamps(newRamps);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return ramps;
}
