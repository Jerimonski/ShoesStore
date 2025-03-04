import { Link } from "react-router-dom"

function Register() {
  return (
    <section className="mx-auto">
      <h1 className="text-center text-3xl font-semibold py-6">
        Create an account
      </h1>
      <form className="text-sm py-2 space-y-6 w-80 max-sm:w-full">
        <label className="font-semibold flex flex-col">
          Full Name
          <input
            type="text"
            placeholder="Jhon Doe"
            className="border border-black px-2 py-3 rounded"
            required
          />
        </label>
        <label className="font-semibold flex flex-col">
          Email
          <input
            type="email"
            placeholder="jhonDoe@gmail.com"
            className="border border-black px-2 py-3 rounded"
            required
          />
        </label>
        <label className="font-semibold flex flex-col">
          Password
          <input
            type="password"
            placeholder="••••••••"
            className="border border-black px-2 py-3 rounded"
            required
          />
        </label>
        <Link to={"/home"}>
          <button className="bg-red-600 text-base text-white w-full mt-6 py-2 font-bold rounded hover:bg-red-700 duration-200">
            Sign Up
          </button>
        </Link>
      </form>

      <article className="flex flex-col justify-center pb-36 max-sm:pb-12">
        <p className="py-1">
          Already have an account?
          <Link
            to={"/home"}
            className="text-blue-500 hover:text-blue-900 duration-200"
          >
            Login
          </Link>
        </p>
        <h4 className="text-center text-xl py-2">- Or Sign Up With -</h4>
        <Link to={"/home"}>
          <button className="bg-[#1C1F23] text-white w-full py-2 font-bold rounded">
            Google
          </button>
        </Link>
      </article>
    </section>
  )
}

export default Register
