import { useContext, useState } from "react";

export function meta() {
  return [
    { title: "New book" },
    { name: "description", content: "Website for Buchsien online library" },
  ];
}

export default function New() {
  return (
    <main className="list-vertical">
        <marquee behavior="" direction="">add new book</marquee>
    </main>
  );
}