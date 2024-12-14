/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
// import { initialItems } from "../App";

// eslint-disable-next-line react-refresh/only-export-components
// export const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Charger", quantity: 1, packed: true },
// ];

function Item({ items, onDeleteItem, onToggleItem }) {
  return (
    <>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <input
              type="checkbox"
              value={item.packed}
              onChange={() => {
                onToggleItem(item.id);
              }}
            />
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
              {item.quantity} {item.description}
            </span>
            <button onClick={() => onDeleteItem(item.id)}>❌</button>
          </li>
        );
      })}
    </>
  );
}

export default Item;
