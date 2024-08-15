import { CSSProperties } from 'react';

type IconProps = {
  type: 'south' | 'partly_cloudy_day' | 'sunny';
  size?: CSSProperties['fontSize'];
  color?: CSSProperties['color'];
};
export function Icon({ type, size, color }: IconProps): JSX.Element {
  return (
    <span
      className="material-symbols-rounded"
      style={{
        fontSize: size,
        color,
      }}
    >
      {type}
    </span>
  );
}
