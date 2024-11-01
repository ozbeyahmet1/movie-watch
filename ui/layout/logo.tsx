import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center">
      <Image
        src="https://res.cloudinary.com/droheqpxn/image/upload/v1730498372/movie-watch/icon_talulx.svg"
        width={40}
        height={30}
        alt=""
      />
      <h3 className="text-lime text-2xl ml-2 hidden lg:flex">MOOV</h3>
    </div>
  );
}
