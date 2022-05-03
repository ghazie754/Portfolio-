import Head from "./Head";
import Navbar from "./navbar";
import Footer from "./footer";
import Hero from "./hero";
export default function Layout({ children }: { children?: any }): JSX.Element {
  return (
    <div className="layout">
      <Head />
      <Navbar />
      <Hero />
      {children}
      <Footer />
    </div>
  );
}
