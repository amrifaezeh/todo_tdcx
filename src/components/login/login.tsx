import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { LOGIN } from "../../State/sate";
import { GlobalContext } from "../../State/store";

const styles = {
  main: {
    background: "#F4F4F6 0% 0% no-repeat padding-box",
  },
  card: {
    boxShadow: "0px 3px 6px #00000029",
    width: 296,
  },
  title: {
    marginBottom: 24,
  },
  button: {
    width: 262,
    background: "#5285EC 0% 0% no-repeat padding-box",
  },
};

export default function Login() {
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  const [_, dispatch] = useContext(GlobalContext);

  useEffect(() => {
    setToken("9451c089ba91a612");
    setName("John Doe");
  }, []);

  const authenticateIt = async (e: any) => {
    e.preventDefault();

    try {
      const request = await axios.post("https://dev-dl.tdcx.com:3092/login", {
        name,
        apiKey: token,
      });

      dispatch({
        type: LOGIN,
        data: { name: request.data.token.name, token: request.data.token.token, img: request.data.image },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="vh-100 d-flex justify-content-center align-items-center" style={styles.main}>
      <Card style={styles.card} className="round-12">
        <Card.Body>
          <Card.Title style={styles.title}>Login</Card.Title>

          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Id"
                className="input round-8"
                onChange={(e) => setToken(e.target.value)}
                value={token}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="text"
                placeholder="Name"
                className="input round-8"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </Form.Group>
            <Button variant="primary" type="submit" style={styles.button} className="round-8" onClick={authenticateIt}>
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </main>
  );
}
