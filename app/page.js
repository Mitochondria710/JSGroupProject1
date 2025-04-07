"use client";
import Image from "next/image";
import '@/styles/global.css';
import { useState } from "react";
import employeesData from '@/data/employees.json'; 

export default function Home() {

  const [searchText, setSearchText] = useState("");

  //search filter
  const filteredEmployees = employeesData.filter((employee) =>
    employee.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-beige">
      {/*header Component*/}
      <Header searchText={searchText} setSearchText={setSearchText}/>

      {/*card*/}
      <main className="flex-grow grid grid-cols-4 gap-4 p-4">
        {filteredEmployees.map((employee) => (
          <Card
            key={employee.id}
            name={employee.name}
            bio={employee.bio}
            email={employee.email}
            role={employee.role}
            image={employee.image}
          />
        ))}
      </main>

      {/*footer Section*/}
      <footer className="w-full border-t py-4 text-center text-gray-500">
        Group Project 1
        <p>&copy; 2025 EmployeeHub</p>
      </footer>
    </div>
  );
}

//card Component
const Card = ({name, bio, email, role, image}) => (
  <div className="card border rounded-md p-4 w-80 h-106 flex flex-col">
    <Image  src={image} alt={name} width={200} height={200} className="mb-3" />
    <h2 className="name">Name: {name}</h2>
    <p className="bio">Bio: {bio}</p>
    <p className="position">Position: {role}</p>
    <p className="email">Email: {email}</p>
  </div>
);


//header Component
const Header = ({ searchText, setSearchText }) => (
  <div className="w-full border-b">
    <div className="header">
      <h1 className="header">EmployeeHub - Connect with Your Team</h1>
    </div>

    {/*search bar and menu section*/}
    <div className="py-4 px-4 flex items-center justify-between">
      {/*search bar*/}
      <div className="search flex items-center border rounded-md p-2">
        <span className="mr-2">🔍</span>
        <input
          type="text"
          placeholder="Search..."
          className="outline-none"
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      {/*menu*/}
      <div className="relative">
        <button className="nameMenu flex items-center font-semibold">
          Name <span className="ml-1">▼</span>
        </button>
      </div>
    </div>
  </div>
);
