import logo from './logo.svg';
import './App.css';

const Header = ({title, desc}) => {
  return (
      <header className="root">
        <div className="forest"></div>
        <div className="container">
          <h1>title</h1>
          <p>desc</p>
        </div>
      </header>
  )
}

const Layout = ({title,desc,urlBg, colorBg=0}) => {
  return (
      <section className="root">
          <div className="wrapper">
              <article>
                  <div className="title">
                      <h3>title</h3>
                      <span className="separator"></span>
                  </div>
                  <div className="desc full">
                      <p>desc</p>
                  </div>
              </article>
          </div>
      </section>
  )
}

const Footer = () => {
  return (
      <footer>
          <div className="wrapper">
              <h3>THANKS FOR VISITING</h3>
              <p>© 2021 #ReactMarathon.</p>
          </div>
      </footer>
  )
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header title="This is pockemon game" desc="test"/>
        <Layout title="H1" desc="" urlBg='./bg3.jpeg'/>
        <Layout/>
        <Layout/>
        <Footer/>

      </header>
    </div>
  );
}

export default App;
