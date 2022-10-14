import { useSelector } from "react-redux";

function Header() {
  const size = useSelector((state) => state.usuarios.length);
  return (
    <header className="header">
      <h1>Usuarios ({size})</h1>
    </header>
  );
}

export default Header;