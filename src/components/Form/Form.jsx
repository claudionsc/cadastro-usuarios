import React from "react";
import { useDispatch } from "react-redux";
import { addUsuario } from "../../store";

function Form() {
  const dispatch = useDispatch();
  const refNome = React.createRef();

  function onSubmit(e) {
    e.preventDefault();

    const nome = refNome.current.value;
    dispatch(addUsuario(nome));
    refNome.current.value = "";
  }

  return (
    <section className="">
      <form className="w-25" onSubmit={onSubmit}>
        <div className="form-group">
          <input className=" formItem form-control" ref={refNome} placeholder="Nome..." />
        </div>
        <div className="form-group from-center">
          <button className=" formItem  btn btn-primary btn-block">ADICIONAR</button>
        </div>
      </form>
    </section>
  );
}

export default Form;