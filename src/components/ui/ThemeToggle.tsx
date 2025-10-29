import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
export default function ThemeToggle(){
  const [dark, setDark] = useState(false);
  useEffect(()=>{
    if(dark){ document.documentElement.classList.add("dark"); }
    else { document.documentElement.classList.remove("dark"); }
  },[dark]);
  return (
    <button aria-label="Toggle theme" onClick={()=>setDark(!dark)}
      className="inline-flex items-center justify-center rounded-lg border border-neutral-200 px-2.5 py-2 hover:bg-neutral-50">
      {dark ? <Sun size={18}/> : <Moon size={18}/>}
    </button>
  );
}
