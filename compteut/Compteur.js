import { useDispatch, useSelector } from "react-redux";
import { décrémenter, incrémenter, incrémenterParPas } from "./CompteurSlice";
import { useRef } from "react";

const Compteur = () => {
  const compteur = useSelector((state) => state.xxxx.compt);
  const dispatch = useDispatch();
  const pas = useRef();
  return (
    <div className="text-center mt-5">
      <h2>Compteur : {compteur}</h2>
      <button onClick={() => dispatch(incrémenter())}>+</button>
      <button onClick={() => dispatch(décrémenter())}>-</button>
      <br />
      <input type="number" placeholder="Entrez un pas" ref={pas} />
      <button
        onClick={() => dispatch(incrémenterParPas(Number(pas.current.value)))}
      >
        OK
      </button>
    </div>
  );
};
export default Compteur;
