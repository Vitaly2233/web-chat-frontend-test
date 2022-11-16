import { observer } from "mobx-react-lite";
import { Link, Outlet } from "react-router-dom";

const Chats = () => {
  return (
    <div>
      <Link style={{ display: "block", margin: "1rem 0" }} to={"/chats/1234"}>
        here
      </Link>
      <Outlet />
    </div>
  );
};

export default observer(Chats);
