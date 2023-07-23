import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Container } from "react-bootstrap";
import { Sidebar } from "../sidebar/Sidebar";

export const AdminLayout = ({ children, title }) => {
  return (
    <div className="admin-layout">
      <div className="side-bar bg-dark text-light">
        <Sidebar />
      </div>
      <main className="main">
        <Header />
        <Container>
          <div>
            <h3 className="mt-3">{title}</h3>
          </div>
          <div className="page-content">{children}</div>
        </Container>
        <Footer />
      </main>
    </div>
  );
};
