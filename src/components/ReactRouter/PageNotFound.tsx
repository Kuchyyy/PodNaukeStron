import { Link } from "react-router-dom"

const PageNotFound = () => {
  return (
    <div className="w-screen h-dvh flex flex-col gap-2 items-center justify-center text-3xl font-numans bg-linear-65 from-zinc-500 to-white-500">
       PageNotFound
         <Link to="/" className="ml-4 text-blue-600 underline">
          Go to Home
        </Link>
    </div>
  )
}

export default PageNotFound