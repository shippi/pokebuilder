import Link from "next/link"

interface Props {
	closeFn: Function
}

function HamburgerMenu({ closeFn } : Props) {
  return (
		<div className="absolute h-screen w-screen backdrop-brightness-50 backdrop-blur-xl z-[100] duration-0">
			<ul className="absolute w-[256px] h-96 left-0 rounded-xl m-6 p-6 pt-3 font-bold text-stone-800 dark:text-stone-100 bg-stone-200 dark:bg-stone-800 animate-menuSlide">
				<li className="flex items-center justify-between py-3">
					<Link href="/" className="hover:text-stone-500 dark:hover:text-stone-400" onClick={() => closeFn()}>Home</Link>
					<button 
						className="flex items-center h-[24px] hover:text-red-700 dark:hover:text-red-400" 
						onClick={() => closeFn()}
					>
						<i className="bi bi-x text-2xl"/>
					</button>
				</li>
				<li className="py-3">
					<Link href="/pokemon" className="hover:text-stone-500 dark:hover:text-stone-400" onClick={() => closeFn()}>Pokedex</Link>
				</li>
				<li className="py-3">
					<Link href="/planner" className="hover:text-stone-500 dark:hover:text-stone-400" onClick={() => closeFn()}>Team Builder</Link>
				</li>
			</ul>
		</div>
  )
}

export default HamburgerMenu