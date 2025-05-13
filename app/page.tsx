import Header from './_components/Header';
import About from './_components/About';
import Category from './_components/Category';
import Banner from './_components/Banner'
import Contact from './_components/Contact';
import Footer from './_components/Footer'
import Popular from './_components/Popular'

export default function Home() {
  return (
    <>
      <Header />
      <Category />
      <About />
      <Popular />
      <Banner />
      <Contact />
      <Footer />
    </>
  );
}
