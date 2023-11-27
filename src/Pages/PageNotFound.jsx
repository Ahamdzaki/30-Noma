import Logo from "../img/Logo.jpeg"

export default function PageNotFound() {
  return (
    <main>
      <div className="items-center m-auto flex flex-wrap justify-center">
          <h1 className="font-bold text-4xl p-4">Page Not Found 404</h1>
      </div>
      <div className="flex">
          <img className="mx-auto w-80 rounded-lg m-4" src={Logo} alt="page not found" />
      </div>
    </main>
  )
}
