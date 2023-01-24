import { Inter } from "@next/font/google";
import Todos from "./Components/Todos";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Todos />
    </>
  );
}
