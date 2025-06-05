import { UserCircle } from "lucide-react"

export default function AuthIcon() {
  return (
    <a href="/login" className="text-green-900 hover:text-green-700 ml-6">
      <UserCircle className="w-7 h-7" />
    </a>
  )
}
