/*!
 * Get the contrasting color for any hex color
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 * Derived from work by Brian Suda, https://24ways.org/2010/calculating-color-contrast/
 * @param  {String} A hexcolor value
 * @return {String} The contrasting color (black or white)
 */
export default function getContrast(hexcolor: string): string {
  let color = hexcolor;

  // If a leading # is provided, remove it
  if (color.slice(0, 1) === "#") {
    color = hexcolor.slice(1);
  }

  // If a three-character hexcode, make six-character
  if (color.length === 3) {
    color = hexcolor
      .split("")
      .map((hex) => {
        return hex + hex;
      })
      .join("");
  }

  // Convert to RGB value
  const r = parseInt(color.substr(0, 2), 16);
  const g = parseInt(color.substr(2, 2), 16);
  const b = parseInt(color.substr(4, 2), 16);

  // Get YIQ ratio
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;

  // Check contrast
  return yiq >= 128 ? "black" : "white";
}
