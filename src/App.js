import "./styles.css";
import { Timer } from "./componets/Timer";

export default function App() {
  return (
    <div className="App">
      <Timer start={10} endpoint={30} />
    </div>
  );
}
