/**
 * Returns a hex value that is a tint of the provided hex value.
 */
export function getTint(hexValue: string, opacityPercentage: number): string {
  // Remove the # symbol if it exists
  hexValue = hexValue.replace('#', '');

  // Parse the hex value into RGB components
  const red = parseInt(hexValue.slice(0, 2), 16);
  const green = parseInt(hexValue.slice(2, 4), 16);
  const blue = parseInt(hexValue.slice(4, 6), 16);

  // Calculate the opacity values for each RGB component based on the percentage
  const opacity = opacityPercentage / 100;
  const newRed = Math.round((1 - opacity) * 255 + opacity * red);
  const newGreen = Math.round((1 - opacity) * 255 + opacity * green);
  const newBlue = Math.round((1 - opacity) * 255 + opacity * blue);

  if (isNaN(newRed) || isNaN(newGreen) || isNaN(newBlue)) {
    return '#000000';
  }

  // Convert the new RGB values back to hex
  return `#${newRed.toString(16).padStart(2, '0')}${newGreen
    .toString(16)
    .padStart(2, '0')}${newBlue.toString(16).padStart(2, '0')}`;
}

/**
 * Returns an array of hex values that are tints from white to the provided hex value.
 */
export function getTints(color: string, total: number): string[] {
  const tints: string[] = ['#ffffff'];

  if (total < 2) {
    return tints;
  }

  if (total === 2) {
    return [...tints, color];
  }

  for (let i = 1; i < total - 1; i++) {
    const opacity = i * (100 / (total - 1));
    tints.push(getTint(color, opacity));
  }

  // Add the original color back in as the last tint
  tints.push(color);

  return tints;
}
