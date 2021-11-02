import { Avatar } from "antd";
import { useContext } from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { LOGOUT } from "../../State/sate";
import { GlobalContext } from "../../State/store";
import { IMAGE_URL } from "../../State/urls";

export default function NavBar() {
  const [store, dispatch] = useContext(GlobalContext);

  return (
    <Navbar bg="light" expand="lg" style={{ boxShadow: "0px 3px 6px #00000029", background: "#FFFFFF 0% 0% no-repeat padding-box" }}>
      <Container>
        <Navbar.Brand>
          <Avatar src={IMAGE_URL(store.auth.img)} size="large">
            {store.auth.name}
          </Avatar>
          <span style={{ font: "normal normal medium 16px/19px Montserrat", marginLeft: 16 }}>{store.auth.name}</span>
        </Navbar.Brand>
        <Button
          variant="light"
          style={{ font: "normal normal medium 16px/19px Montserrat", color: "#6D8187" }}
          onClick={() => dispatch({ type: LOGOUT })}
        >
          Logout
        </Button>
      </Container>
    </Navbar>
  );
}
