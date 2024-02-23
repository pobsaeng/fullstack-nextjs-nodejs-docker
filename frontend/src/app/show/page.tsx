"use client";

import React, { useState, useEffect } from "react";

type Data = {
  id: string;
  first_name: string;
  last_name: string;
  phone: string;
};

export default function Page() {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const BACKEND_URL = "http://localhost:3001";

    try {
      const response = await fetch(`${BACKEND_URL}/api/data`);
      const jsonData = await response.json();
      console.log(jsonData);
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        Next.js App Fetching Data from Node.js
      </h1>
      {data ? (
        <table className="table-auto">
          <tbody>
            <tr>
              <td className="border px-4 py-2">ID</td>
              <td className="border px-4 py-2">{data.id}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">First Name</td>
              <td className="border px-4 py-2">{data.first_name}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Last Name</td>
              <td className="border px-4 py-2">{data.last_name}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Phone</td>
              <td className="border px-4 py-2">{data.phone}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
