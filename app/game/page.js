"use client";

import Card from "../components/Card";

export default function Game() {
  return (
    <div className=" p-4 mt-10 mx-auto max-w-2xl text-center space-y-11">
      <h1 className="text-3xl">Solitaire</h1>

      <Card suit="hearts" value="A" isFaceUp={true} />
    </div>
  );
}
