import useClickOutside from "@/hooks/useClickOutside";
import { ReactNode, useRef, useState } from "react"

interface Props {
    className?: string
    selectedClassName?: string
    listItemClassName?: string
    disabled?: boolean
    nullable?: boolean
    selected: ReactNode
    listItems: ReactNode[]
}
function Dropdown({ className, listItemClassName, selectedClassName, selected, listItems, disabled, nullable } : Props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useClickOutside(dropdownRef, () => {if (dropdownOpen) setDropdownOpen(false)});

  return (
    <div className={"relative flex flex-wrap h-full gap-2 min-w-[70px] text-stone-700 dark:text-white" + (disabled === true ? " pointer-events-none" : "")}  ref={dropdownRef}>
      <button className={`flex gap-2 items-center justify-center ml-auto w-full h-full text-base hover:bg-gray-200 dark:hover:bg-stone-700 ${selectedClassName || ""} ${dropdownOpen && "!border-indigo-400"}`} onClick={() => setDropdownOpen(!dropdownOpen)}>
        {selected}
        <i className={`bi bi-caret-${dropdownOpen ? "up" : "down"}-fill text-xs`}/>
      </button>
      <div id="dropdown" className={(dropdownOpen ? "" : "hidden ") + "absolute translate-y-12 z-10 font-normal bg-white rounded-lg w-[100px] drop-shadow-md dark:bg-stone-900 dark:border dark:border-stone-700 " + (className || "")}>        
        <ul className="cursor-pointer py-2 text-sm text-gray-700 dark:text-white" onClick={() => setDropdownOpen(false)}>
          {
            listItems.map((item, i) => (
              <li key={i} className={"flex hover:bg-gray-100 dark:hover:bg-stone-700 " + (listItemClassName || "") }>{item}</li>
            ))
          }
        </ul>
      </div>
    </div>

  )
}

export default Dropdown