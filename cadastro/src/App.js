import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import ListUsuarios from "./components/ListUsuarios/List";

function App() {
  return (
    <div className="container">
      <Header />
      <article>
        <Form />
        <ListUsuarios />
      </article>
    </div>
  );
}

export default App;