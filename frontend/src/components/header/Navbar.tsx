import { ChevronDown } from "lucide-react";
import AuthIcon from "./AuthIcon";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const navItems = [
  { label: "Trang chủ", href: "#", active: true },
  {
    label: "Nghỉ dưỡng",
    children: [
      { label: "Resort", href: "#" },
      { label: "Homestay", href: "#" },
    ],
  },
  {
    label: "Ẩm thực",
    children: [
      { label: "Đặc sản", href: "#" },
      { label: "Nhà hàng", href: "#" },
    ],
  },
  {
    label: "Vui chơi giải trí",
    children: [
      { label: "Cầu kính", href: "#" },
      { label: "Thác Dải Yếm", href: "#" },
    ],
  },
  {
    label: "Hoạt động trải nghiệm",
    children: [
      { label: "Du lịch nông nghiệp", href: "#" },
      { label: "Lễ hội", href: "#" },
    ],
  },
  {
    label: "Liên hệ",
    children: [
      { label: "Facebook", href: "#" },
      { label: "Zalo", href: "#" },
    ],
  },
];

export default function Navbar() {
  return (
    <nav className="relative flex items-center justify-end w-full pr-6 text-base font-semibold text-black">
      <ul className="flex gap-8">
        {navItems.map((item, index) => (
          <li key={index} className="relative">
            {/* Mục có submenu dùng DropdownMenu */}
            {item.children ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="group flex items-center gap-1 cursor-pointer outline-none hover:text-green-700 transition-colors">
                  {item.label}
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="center"
                  className="mt-2 rounded-2xl border border-gray-200 shadow-xl bg-white px-3 py-2 w-[200px] z-50"
                >
                  {item.children.map((child, cIndex) => (
                    <DropdownMenuItem
                      key={cIndex}
                      asChild
                      className="text-sm px-3 py-2 rounded-md hover:bg-green-50 hover:text-green-700 transition-colors cursor-pointer"
                    >
                      <a href={child.href} className="block w-full">
                        {child.label}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <a
                href={item.href}
                className={`px-5 py-2 rounded-full transition-colors ${
                  item.active
                    ? "bg-green-900 text-white"
                    : "hover:text-green-700"
                }`}
              >
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ul>

      {/* Icon đăng nhập */}
      <AuthIcon />
    </nav>
  );
}
