import { Card } from "react-bootstrap";
const styles = {
  card: {
    boxShadow: "0px 3px 6px #0000000A",
    overflow: "hidden",
    scrollY: "auto",
  },
  title: {
    marginBottom: 24,
  },
};
export default function TitledCard({ title = "", child = null, style = {}, contentClass = "", children }) {
  return (
    <Card style={{ ...styles.card, ...style }} className="round-12">
      <Card.Body>
        {title && (
          <Card.Title style={styles.title} className="title-color">
            {title}
          </Card.Title>
        )}
        <div className={contentClass}>
          {child}
          {children}
        </div>
      </Card.Body>
    </Card>
  );
}
