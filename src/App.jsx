import styled from "styled-components";
import Header from "./components/Header";
import ExpenseList from "./components/ExpenseList";
import { ExpenseProvider } from "./context/ExpenseContext";

export default function App() {
  return (
    <ExpenseProvider>
      <Main>
        <Container>
          <Header />
          <ExpenseList />
        </Container>
      </Main>
    </ExpenseProvider>
  );
}

const Main = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6b46c1;
`;

const Container = styled.div`
  width: 59%;
  position: relative;
  height: 75vh;
  background-color: white;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 48px;
  padding-left: 52px;
  padding-right: 52px;
`;
