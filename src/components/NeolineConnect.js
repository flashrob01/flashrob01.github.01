import { useState, useEffect } from "react";
import "./../styles/NeolineConnect.css";

function NeolineConnect() {
  const [neoline, setNeoLine] = useState();
  const [neolineN3, setNeoLineN3] = useState();
  const [account, setAccount] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    window.addEventListener("NEOLine.NEO.EVENT.READY", () => {
      setNeoLine(new window.NEOLineN3.Init());
    });
    window.addEventListener("NEOLine.N3.EVENT.READY", () => {
      setNeoLineN3(new window.NEOLineN3.Init());
    });
  }, []);

  const initNeolineAccount = async () => {
    try {
      const { address } = await neoline.getAccount();
      setAccount(address);
    } catch (error) {
      setError("Neoline not ready");
      console.log(error);
    }
  };

  /* useEffect(() => {
    initNeolineAccount;
  }); */

  return (
    <div className="App">
      {neoline === undefined && <p>Loading neoline</p>}
      {neoline && (
        <button onClick={initNeolineAccount} color="pink" size="large">
          Click to here connect to neoline
        </button>
      )}
    </div>
  );
}

export default NeolineConnect;