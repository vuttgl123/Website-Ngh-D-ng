import { UserCircle, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export default function AuthIcon() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="group flex items-center gap-1 cursor-pointer outline-none text-green-900 hover:text-green-700 ml-6">
        <UserCircle className="w-7 h-7" />
        <ChevronDown className="w-4 h-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="mt-3 w-[180px] rounded-2xl border border-gray-200 bg-white shadow-lg p-2 z-50"
      >
        <DropdownMenuItem asChild>
          <a
            href="/login"
            className="block px-4 py-2 text-sm rounded-lg hover:bg-green-100 hover:text-green-700 transition-all"
          >
            Đăng nhập
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a
            href="/register"
            className="block px-4 py-2 text-sm rounded-lg hover:bg-green-100 hover:text-green-700 transition-all"
          >
            Đăng ký
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
