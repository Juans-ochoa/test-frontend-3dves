import { Container } from "@mui/material";
import Header from "./global/Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Container>
        <main className='m-2'>{children}</main>
      </Container>
    </>
  );
}
