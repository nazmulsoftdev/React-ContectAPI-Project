import Layout from "./components/Layout";
import "./assets/style/global.css";
import { ProductProvider } from "./context/ContextAPI";
function App() {
  return (
    <ProductProvider>
      <Layout />
    </ProductProvider>
  );
}

export default App;
