import React from "react";

export default function SubHeader() {
  return (
    <div className="py-4 overflow-x-auto bg-pink-100">
      <div className="flex justify-center gap-6 px-4">
        <img src="/images/credeli.jpg" alt="Credeli 1" className="object-cover rounded-md shadow h-28 w-44" />
        <img src="/images/credeli2.jpg" alt="Credeli 2" className="object-cover rounded-md shadow h-28 w-44" />
        <img src="/images/credeli3.jpg" alt="Credeli 3" className="object-cover rounded-md shadow h-28 w-44" />
        <img src="/images/credeli4.jpg" alt="Credeli 4" className="object-cover rounded-md shadow h-28 w-44" />
      </div>
    </div>
  );
}
