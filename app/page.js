import Image from "next/image";

// Dummy Card Component (replace with your actual Card component)
const Card = () => (
  <div className="border rounded-md shadow-md p-4 w-64 h-48 flex items-center justify-center text-gray-500">
    [Card Content]
  </div>
);

// Header Component
const Header = () => (
  <div className="w-full border-b">
    <div className="bg-gray-100 py-2 text-center font-semibold">
      EmployeeHub - Connect with Your Team
    </div>
    <div className="py-4 px-4 flex items-center justify-between">
      <div className="flex items-center border rounded-md p-2">
        <span className="mr-2">🔍</span>
        <input
          type="text"
          placeholder="Search..."
          className="outline-none"
        />
      </div>
      <div className="relative">
        <button className="flex items-center font-semibold">
          Name <span className="ml-1">▼</span>
        </button>
        {/* Add dropdown for sorting options if needed */}
      </div>
    </div>
  </div>
);
