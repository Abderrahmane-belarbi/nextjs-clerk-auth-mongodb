import Image from "next/image";
import { currentUser, useUser } from "@clerk/nextjs";

export default async function Home() {
  const user = await currentUser();
  console.log('firstName: ', user?.firstName);
  return (
    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="flex flex-col items-center text-center">
        HOME PAGE
      </div>
    </div>
  );
}
