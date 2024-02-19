import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SearchSection() {
  return (
    <div className="w-full mx-5 max-w-xl border border-gray-200 bg-white rounded-lg shadow-xl flex items-center space-x-2 px-3 py-2">
      <SearchIcon className="h-10 w-10 text-gray-300 stroke-1.5" />
      <Input
        type="text"
        placeholder="Search service"
        className=" outline-0 focus-0"
      />
      <Button className="bg-primary text-white px-4 py-2 rounded-md shadow-md transition-colors">
        Search
      </Button>
    </div>
  );
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
