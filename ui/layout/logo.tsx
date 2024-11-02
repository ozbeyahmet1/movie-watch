import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link className="flex items-center" href="/">
      <Image
        src="https://res.cloudinary.com/droheqpxn/image/upload/v1730498372/movie-watch/icon_talulx.svg"
        width={40}
        height={30}
        alt=""
      />
      <h3 className="text-lime text-2xl ml-2 hidden lg:flex">MOOV</h3>
    </Link>
  );
}
