import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart as ChartJS, ArcElement, Plugin } from 'chart.js';
import { ComponentProps } from 'react';

ChartJS.register(ArcElement);

type DoughnutChartProps = Pick<
  ComponentProps<typeof Doughnut>,
  'data' | 'options' | 'width' | 'height'
>;
export function DoughnutChart({
  data,
  options = {},
  height,
  width,
}: DoughnutChartProps): JSX.Element {
  return (
    <Doughnut
      data={data}
      options={options}
      height={height}
      width={width}
      plugins={[ChartDataLabels as Plugin<'doughnut'>]}
    />
  );
}
