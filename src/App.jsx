import { useReducer, useState } from "react";
import DropDown from "./components/DropDown";
import SelectedColors from "./components/SelectedColors";
import ToggleIcon from "./hooks/ToggleIcon";
import useOptions from "./hooks/useOptions";

function App() {
  const [dropDown, toggleDropDown] = useReducer((v) => !v, false);
  const options = useOptions();
  const [selected, setSelected] = useState([]);

  return (
    <div className="max-w-sm mx-auto flex flex-col w-screen h-screen justify-center items-center gap-1">
      <div className="w-full border-2 border-blue-500 rounded-md flex gap-2 p-2 ">
        <SelectedColors
          selected={selected}
          setSelected={setSelected}
          toggleDropDown={toggleDropDown}
        />
        <ToggleIcon onClick={toggleDropDown} />
      </div>
      <DropDown
        dropDown={dropDown}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
}

export default App;
