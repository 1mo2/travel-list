/* eslint-disable react/prop-types */
function Stats({ items }) {
  const numItems = items.length;

  const numPacked = items.filter((item) => item.packed).length;

  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈"
          : numPacked === 0 && numItems === 0
          ? `Start adding some items to your packing list 🚀`
          : `💼 You have ${numItems} items on your list, and already packed${" "}
        ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}

export default Stats;
