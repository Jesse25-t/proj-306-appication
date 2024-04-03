import SwitchBoard from "./components/switch-board";
import { List } from "postcss/lib/list";
import ItemList from "./components/item-list";
export default function Home(){
  return(
    <main className="bg-gradient-to-r from-sky-500 to-indigo-500 p-2">
      <div>
        <SwitchBoard/>
        <ItemList/>
      </div>
    </main>
  );
}