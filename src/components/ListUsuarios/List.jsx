import { useSelector, useDispatch } from "react-redux";

import { removeUsuario } from "../../store";

function ListUsuarios() {
  const usuarios = useSelector((state) => state.usuarios);
  const dispatch = useDispatch();

  return (
    <section>
      <ul className="list-group">
        {usuarios.map((u, index) => (
          <li key={index} className="list-group-item">
            {u.nome}{" "}
            <a
              href="nome"
              className="badge badge-danger float-right"
              onClick={(e) => {
                e.preventDefault();

                dispatch(removeUsuario(u.id));
              }}
            >
              Remover
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ListUsuarios;