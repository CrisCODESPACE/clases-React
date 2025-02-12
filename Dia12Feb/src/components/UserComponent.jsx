// import { useEffect, useState } from "react";

// function UserComponent() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => setUsers(data));
//   }, []);

//   return <div>{users.length} usuarios encontrados</div>;
// }

// export default UserComponent;

import useFetch from "../hooks/useFetch";

function UserComponent() {
  const users = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <div>{users.length} usuarios encontrados a través de un Custom Hook</div>
  );
}

export default UserComponent;
