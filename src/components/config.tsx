import { useRef } from "react";

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
  resetControlPoints,
}: {
  style: React.CSSProperties;
  imageUrl: string;
  onImageUrlChange: (url: string) => void;
  color: string;
  onColorChange: (color: string) => void;
  showNumbers: boolean;
  onShowNumbersChange: (showNumbers: boolean) => void;
  resetControlPoints: () => void;
}) {
  const fileRef = useRef<HTMLInputElement>(null);
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
                  if (e.target.value === "file") {
                    fileRef.current?.click();
                  } else {
                    onImageUrlChange(e.target.value);
                  }
                }}
                value={imageUrl}
              >
                {sampleImages.map((url) => (
                  <option key={url} value={url}>
                    {url}
                  </option>
                ))}
                <option key="file" value="file">
                  Local file...
                </option>
              </select>
              <input
                ref={fileRef}
                type="file"
                style={{ display: "none" }}
                onChange={async (e) => {
                  const inputEl = e.target as HTMLInputElement;
                  const file = inputEl.files?.[0];
                  if (!file) return;

                  const base64Promise = new Promise<string>(
                    (resolve, reject) => {
                      const reader = new FileReader();
                      reader.readAsDataURL(file);
                      reader.onload = () => resolve(reader.result as string);
                      reader.onerror = reject;
                      reader.onabort = reject;
                    }
                  );

                  const url = await base64Promise;
                  url && onImageUrlChange(url);
                }}
              />
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
                  resetControlPoints();
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
