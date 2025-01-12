import Link from "next/link";

export default function Home() {
  return (
    <div className=" p-4 mt-20 mx-auto max-w-2xl text-center space-y-11">
      <h1 className="text-3xl">Welcome to Solitaire!</h1>
      <p className="text-base">Play a game of Solitaire</p>
      <Link href="/game" className="btn btn-neutral">
        Start Game
      </Link>
    </div>
  );
}
