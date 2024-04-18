import { AddItem } from "../List";
import { validUser } from "../../Page";

export default function Page() {
  return (
    <div className=" bg-blue-900 min-h-screen">
      <AddItem user={validUser} />
    </div>
  );
}
