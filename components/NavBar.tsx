import Link from "next/link"

function NavBar() {
  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
      <nav className="flex items-center absolute top-[20px] left-1/2 transform -translate-x-1/2 max-w-[700px] min-w-[324px] w-[90vw] h-12 bg-white z-20 rounded-full border-2 drop-shadow-md">
      <Link href="" className="flex items-center justify-center w-[150px] h-full rounded-l-full hover:bg-gray-200">Pokédex</Link>
      <Link href="" className="flex items-center justify-center w-[150px] h-full hover:bg-gray-200">Team Builder</Link>
      <Link href="https://github.com/shippi" target="_blank" className="flex items-center justify-center ml-auto w-[70px] h-full rounded-r-full text-xl hover:bg-gray-200">
        <i className="bi bi-github text-stone-500"/>
      </Link>
    </nav>
    </>

  )
}

export default NavBar