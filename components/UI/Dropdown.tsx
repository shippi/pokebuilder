import useClickOutside from "@/hooks/useClickOutside";
import { ReactNode, useRef, useState } from "react"

interface Props {
    className?: string
    selected: ReactNode[]
    listItems: ReactNode[]
}
function Dropdown({ className, selected, listItems } : Props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  useClickOutside(dropdownRef, () => {if (dropdownOpen) setDropdownOpen(false)});
  return (
    <div className="flex flex-wrap h-full gap-2 w-[70px]"  ref={dropdownRef}>
      <button className="flex gap-1 items-center justify-center ml-auto w-[70px] h-full text-xl text-stone-600 hover:bg-gray-200" onClick={() => setDropdownOpen(!dropdownOpen)}>
        {selected}
        <i className={`bi bi-caret-${dropdownOpen ? "up" : "down"}-fill text-xs`}/>
      </button>
      <div id="dropdown" className={(dropdownOpen ? "" : "hidden ") + "w-[70px] z-10 font-normal bg-white rounded-lg w-[100px] " + className}>        
        <ul className="py-2 text-sm text-gray-700">
          {listItems}
        </ul>
      </div>
    </div>

  )
}

export default Dropdown