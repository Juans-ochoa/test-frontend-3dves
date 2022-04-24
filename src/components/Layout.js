import { Container } from "@mui/material";
import Footer from "./global/Footer";
import Header from "./global/Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Container style={{ minHeight: "90vh" }}>
        <main className='m-2'>{children}</main>
      </Container>
      <Footer />
    </>
  );
}
