import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

export default function TaskChart({ done, all }) {
  console.log(done, all);

  const data = [
    { name: "completed tasks", value: done, color: "#5285EC" },
    { name: "done", value: Math.abs(all - done), color: "#E8ECEC" },
  ];

  // const data = [
  //   { name: "Group A", value: 1, color: "#5285EC" },
  //   { name: "Group B", value: 0 },
  // ];

  const customLabel = ({ name }) => {
    return name;
  };

  const customLabelLine = ({ showLine }) => {
    console.log(showLine);
    return showLine;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie data={data} cx="50%" cy="50%" labelLine={false} outerRadius={40} fill="#8884d8" dataKey="value">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
          {/* {data.map((entry, index) => {
          return <Label value={entry.name} position="right" />;
        })} */}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
