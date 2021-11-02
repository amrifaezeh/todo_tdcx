export default function Counter({ value, from }) {
  return (
    <div>
      <span style={{ lineHeight: 1, fontSize: "64px", color: "#5285EC" }} className="mb-4">
        {value}
      </span>
      <span className="big-font pt-2" style={{ color: "#8F9EA2" }}>
        /{from}
      </span>
    </div>
  );
}
