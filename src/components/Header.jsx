import { Trophy } from "lucide-react"

const Header = () => {
  return (
    <header className="bg-green-700 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Trophy className="h-8 w-8 mr-2" />
            <h1 className="text-2xl font-bold">CricSphere</h1>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#features" className="hover:underline">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Login
                </a>
              </li>
              <li>
                <a href="/register" className="hover:underline">
                  Register
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header

