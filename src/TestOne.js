import React from "react";

const List = ({ items }) => {
  return (
    <ol>
      {items.map((item, i) => (
        <li>
          {item}
        </li>
      ))}
    </ol>
  );
};

export default function App() {
  return (
    <div>
      <List items={["A", "B", "C", "D", "E"]} />
    </div>
  );
}
