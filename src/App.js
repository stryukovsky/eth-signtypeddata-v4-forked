import "./styles.css";
import typedDataV4 from "./typedDataV4";

let provider = window.ethereum;
const msgParams = JSON.stringify(typedDataV4);

function eth_signTypedData_v4(event) {
  var from = provider.selectedAddress;
  var params = [from, msgParams];
  var method = "eth_signTypedData_v4";
  window.ethereum.request(
    {
      method,
      params,
      from
    },
    function (err, result) {
      if (err) return console.dir(err);
      if (result.error) {
        alert(result.error.message);
      }
      if (result.error) return console.error("ERROR", result);
      console.log("TYPED SIGNED:" + JSON.stringify(result.result));
    }
  ).then(console.log);
}

function eth_requestAccounts() {
  window.ethereum.request({method: "eth_requestAccounts"}).then(console.log);
}


export default function App() {
  return (
    <div className="App">
      <h1>eth_signTypedData_v4</h1>
      <button onClick={eth_requestAccounts}>Connect</button>
      <button onClick={eth_signTypedData_v4}>Sign</button>
    </div>
  );
}
