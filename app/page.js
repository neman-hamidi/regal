import Nav from "./components/nav/nav";
import Header from "./components/header/header";
import Category from "./components/category/category";
import Design from "./components/design/design";
import Discount from "./components/discount/discount";
import Info from "./components/info/info";
import Comments from "./components/comments/comments";
import Articles from "./components/articles/articles";
import Footer from "./components/footer/footer";
export default function Home() {
  return (
    <>
      <Nav />
      <Header/>
      <Category/>
      <Design/>
      <Discount/>
      <Info/>
      <Comments/>
      <Articles/>
      <Footer/>
    </>
  );
}
