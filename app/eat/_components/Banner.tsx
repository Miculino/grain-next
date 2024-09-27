import React from "react";

export default function Banner() {
  return (
    <div
      className={`bg-[url("https://storage.googleapis.com/spineproduction/uploads/banner/picture/134/picture.jpeg")] w-full bg-cover`}
    >
      <div>
        <p className="text-4xl">Can you keep a secret?</p>
        <p className="text-lg">
          Word around the kitchen is a Michelin-starred pastry chef made this
          just for us. Can’t reveal her name, but we can tell you that our
          newest dessert is almost too good to share. Almost.
        </p>
      </div>
    </div>
  );
}
