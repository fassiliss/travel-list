function Stats({ items }) {
    if (items.length === 0) {
      return (
        <footer className="stats">
          <em>Start adding some items to your packing list 🧳</em>
        </footer>
      );
    }
  const nmItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage =
    nmItems === 0 ? 0 : Math.round((packedItems / nmItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "🎉 You got everything! Ready to go ✈️"
          : `💼 You have ${nmItems} items on your list, and you alreadey packed ${packedItems} (${percentage}%)`}
      </em>
    </footer>
  );
}

export default Stats;
