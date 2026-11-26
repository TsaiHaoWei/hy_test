import { useState } from "react";

export default function Test() {
  const [value, setValue] = useState("");

  return (
    <div style={{ padding: 16 }}>
      <label htmlFor="test-input" style={{ display: "block", marginBottom: 8 }}>
        請輸入內容
      </label>
      <input
        id="test-input"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="請輸入文字"
        style={{
          padding: "8px 12px",
          fontSize: 14,
          border: "1px solid #ccc",
          borderRadius: 4,
          width: 300,
        }}
      />
      <p>您輸入的內容：{value}</p>
    </div>
  );
}
