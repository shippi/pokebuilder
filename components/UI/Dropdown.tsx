import useClickOutside from "@/hooks/useClickOutside";
import { ReactNode, useRef, useState } from "react"

interface Props {
    className?: string
    selectedClassName?: string
    listItemClassName?: string
    selected: ReactNode[]
    listItems: ReactNode[]
}
function Dropdown({ className, listItemClassName, selectedClassName, selected, listItems } : Props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  useClickOutside(dropdownRef, () => {if (dropdownOpen) setDropdownOpen(false)});
  return (
    <div className={"flex flex-wrap h-full gap-2 min-w-[70px] " + className}  ref={dropdownRef}>
      <button className={`flex gap-2 items-center justify-center ml-auto w-full h-full text-base text-stone-600 hover:bg-gray-200 dark:hover:bg-stone-700 dark:text-white ${selectedClassName}`} onClick={() => setDropdownOpen(!dropdownOpen)}>
        {selected}
        <i className={`bi bi-caret-${dropdownOpen ? "up" : "down"}-fill text-xs text-stone-700 dark:text-white`}/>
      </button>
      <div id="dropdown" className={(dropdownOpen ? "" : "hidden ") + "w-full z-10 font-normal bg-white rounded-lg w-[100px] dark:bg-stone-900 dark:border dark:border-stone-700 " + className}>        
        <ul className="py-2 text-sm text-gray-700 dark:text-white" onClick={() => setDropdownOpen(false)}>
          {
            listItems.map((item, i) => (
              <li key={i} className={"flex hover:bg-gray-100 dark:hover:bg-stone-700 " + listItemClassName }>{item}</li>
            ))
          }
        </ul>
      </div>
    </div>

  )
}

export default Dropdown