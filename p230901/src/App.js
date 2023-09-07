// import logo from './logo.svg';
// import "./App.css";
// import { Counter2 } from "./components/Counter2";
import { TaskApp } from "./scalingUpWithReducerAndContext/TaskApp";
import "./stylesheets/style.css";

export default function App() {
   return <TaskApp />;
}

App.displayName = App;

// export default function App() {
//    const [isFancy, setIsFancy] = useState(false);
//    return (
//       <div>
//          {isFancy ? <Counter2 isFancy={true} /> : <Counter2 isFancy={false} />}
//          {isFancy ? <Counter2 isFancy={true} /> : <Counter2 isFancy={false} />}
//          <label>
//             <input
//                type="checkbox"
//                checked={isFancy}
//                onChange={e => {
//                   setIsFancy(e.target.checked);
//                }}
//             />
//             Use fancy styling
//          </label>
//       </div>
//    );
// }
