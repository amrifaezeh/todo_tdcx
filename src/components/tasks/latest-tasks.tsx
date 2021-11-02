export default function LatestTasks({ values = [] }) {
  return (
    <ul>
      {values.map((item, index) => {
        return (
          <li key={item._id} style={{ textDecoration: item.completed ? "line-through" : "", fontSize: 14, color: "#8F9EA2" }}>
            {item.name}
          </li>
        );
      })}
    </ul>
  );
}
