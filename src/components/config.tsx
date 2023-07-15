export const sampleImages = [
  "./sample1.jpg",
  "./sample2.jpg",
  "./sample3.jpg",
  "./sample4.jpg",
  "./sample5.jpg",
];

export default function Config({
  style,
  imageUrl,
  onImageUrlChange,
  color,
  onColorChange,
  showNumbers,
  onShowNumbersChange,
}: {
  style: React.CSSProperties;
  imageUrl: string;
  onImageUrlChange: (url: string) => void;
  color: string;
  onColorChange: (color: string) => void;
  showNumbers: boolean;
  onShowNumbersChange: (showNumbers: boolean) => void;
}) {
  return (
    <fieldset style={style}>
      <table>
        <tbody>
          <tr>
            <td>Sample Image: </td>
            <td>
              <select
                style={{ width: 180 }}
                onChange={(e) => {
                  onImageUrlChange(e.target.value);
                }}
                value={imageUrl}
              >
                {sampleImages.map((url) => (
                  <option key={url} value={url}>
                    {url}
                  </option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td>Overlay Color:</td>
            <td>
              <select
                onChange={(e) => {
                  onColorChange(e.target.value);
                }}
                value={color}
              >
                {[
                  "Red",
                  "Blue",
                  "Green",
                  "Yellow",
                  "Magenta",
                  "White",
                  "Black",
                  "Transparent",
                ].map((colorItem) => (
                  <option key={colorItem} value={colorItem}>
                    {colorItem}
                  </option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="numbers">Show numbers</label>
            </td>
            <td>
              <input
                id="numbers"
                type="checkbox"
                checked={showNumbers}
                onChange={(e) => {
                  onShowNumbersChange((e.target as HTMLInputElement).checked);
                }}
              />
            </td>
          </tr>
          <tr>
            <td />
            <td>
              <button
                style={{ marginTop: "0.5rem" }}
                onClick={() => {
                  // resetControlPoints();
                }}
              >
                Reset
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </fieldset>
  );
}
