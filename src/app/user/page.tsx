import Image from "next/image";
import { use } from "react";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  phone: string;
  image: string;
};

export default async function Users() {
  await new Promise((res, rej) => setTimeout(res, 3000));
  const response = await fetch("https://dummyjson.com/users?limit=50");
  const users = await response.json();
  // console.log(users);

  return (
    <div>
      <h1>total users:{users.users.length}</h1>
      {users.users.map((user: User) => (
        <div
          key={user.id}
          className=" flex flex-col justify-center items-center p-8 border-4 border-cyan-500 "
        >
          <img src={user.image} alt="image" />
          <h3>
            {user.firstName} {user.lastName}
          </h3>

          <p>{user.age}</p>
          <p>{user.phone}</p>
        </div>
      ))}
    </div>
  );
}
