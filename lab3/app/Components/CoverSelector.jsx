import { useState } from "react";

export default ({ selectedCover, setSelectedCover }) => {
  return (
    <aside className="list-horizontal">
      <input
        type="radio"
        icon="🥥"
        checked={selectedCover === "hard"}
        onChange={() => setSelectedCover("hard")}
      />
      <input
        type="radio"
        icon="🥝"
        checked={selectedCover === "soft"}
        onChange={() => setSelectedCover("soft")}
      />
    </aside>
  );
};