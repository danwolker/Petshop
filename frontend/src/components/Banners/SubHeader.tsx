import React from "react";

export default function SubHeader() {
  return (
    <div className="py-4 mt-4 overflow-x-auto bg-pink-100 rounded-md shadow-md">
      <div className="flex justify-center gap-6 px-4">
        <img src="/images/credeli.jpg" alt="Credeli 1" className="object-cover rounded-md shadow h-28 w-44" />
        <img src="/images/credeli3.jpg" alt="Credeli 3" className="object-cover rounded-md shadow h-28 w-44" />
        <img src="/images/credeli2.jpg" alt="Credeli 3" className="object-cover rounded-md shadow h-28 w-44" />
      </div>
    </div>
  );
}
