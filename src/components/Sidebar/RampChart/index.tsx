import { ChartData } from 'chart.js';
import { getTints } from '../../../common/utils/color';
import {
  Algorithm,
  algorithmValues,
  useRampAlgorithms,
} from '../../../api/ramp';
import { DoughnutChart } from '../../DoughnutChart';
import { useMemo } from 'react';
import { Context } from 'chartjs-plugin-datalabels';
import { useTheme } from 'styled-components';

export function RampChart(): JSX.Element {
  const theme = useTheme();
  const ramps = useRampAlgorithms();
  const rampChartColors = getTints(
    theme.categoryColor.teal.surface,
    algorithmValues.length
  );

  const data: ChartData<'doughnut'> = useMemo(() => {
    const data: number[] = [];

    // Create the array as a total count of each algorithm
    for (let i = 0; i < ramps.length; i++) {
      const ramp = ramps[i]!;
      const algorithmIndex = algorithmValues.indexOf(ramp.algorithm);
      data[algorithmIndex] = (data[algorithmIndex] || 0) + 1;
    }

    return {
      datasets: [
        {
          data,
          backgroundColor: rampChartColors,
          borderWidth: 0,
        },
      ],
      labels: [
        Algorithm.Algorithm1,
        Algorithm.Algorithm2,
        Algorithm.Algorithm3,
        Algorithm.Algorithm4,
        Algorithm.Algorithm5,
      ],
    } satisfies ChartData<'doughnut'>;
  }, [ramps, rampChartColors]);

  return (
    <DoughnutChart
      data={data}
      options={{
        layout: {
          padding: 36,
        },
        cutout: '64%',
        plugins: {
          datalabels: {
            align: 'end',
            anchor: 'end',
            display: 'auto',
            formatter: getPercentLabel,
            color: theme.categoryColor.teal.text,
            font: {
              family: 'Roboto',
              weight: theme.fontWeight.bold,
            },
          },
        },
      }}
    />
  );
}

function getPercentLabel(value: unknown, context: Context): string {
  // Need to check the value because it comes into the function as `any` from the plugin
  if (typeof value !== 'number') {
    throw new Error(
      `${DoughnutChart.name} - ${getPercentLabel.name}: value must be a number.`
    );
  }

  const chartData = context.chart.data as ChartData<'doughnut'>;

  if (chartData.datasets.length !== 1) {
    throw new Error(
      `${DoughnutChart.name} - ${getPercentLabel.name}: currently only supports a single dataset.`
    );
  }

  const total = chartData.datasets[0]!.data.reduce(
    (acc, curr) => acc + curr,
    0
  );
  const percent = ((value / total) * 100).toFixed();

  return `${percent}%`;
}
