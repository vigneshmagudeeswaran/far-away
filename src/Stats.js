export default function Stats({ total_items, packed_items }) {
  if (!total_items) {
    return (
      <p className="stats">
        <em>Start adding some items to you're packing list</em>
      </p>
    );
  }
  const percentage = Math.round(
    (Number(packed_items) / Number(total_items)) * 100
  );
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything .Ready to go ✈️"
          : `You have ${total_items} items on your list, and you already packed ${packed_items} (${percentage}%)`}
      </em>
    </footer>
  );
}
