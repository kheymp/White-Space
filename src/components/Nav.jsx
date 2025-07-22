import logoIcon from "../assets/Logo Icon.png"
import vector from "../assets/Vector.png"
import vectorLine from "../assets/Vector-Line.png"
import vectorArrow from "../assets/Vector-Arrow.png"
import humMenu from "../assets/Hum-menu.png"


const menuItems = [
  { label: "Products", href: "/products" },
  { label: "Solutions", href: "/solutions" },
  { label: "Resources", href: "/resources" },
  { label: "Pricing", href: "/pricing" }
];

export default function Nav() {
    return(
        <nav className="fixed z-50 top-0 bg-[#043873] w-full h-[3.5rem] md:h-[5.75rem] flex justify-around items-center drop-shadow-md gap-1">
            <span className="flex justify-center items-center gap-2"><img className="w-[1.56rem] md:w-[2.3rem]" src={logoIcon}></img><span className="text-white font-bold text-[1.18rem] md:text-[1.46rem] lg:text-[1.75rem]">whitespace</span></span>
            <div className="flex justify-center items-center gap-4">
                <ul className="flex lg:gap-6 text-white font-medium text-[1rem] hidden lg:flex">{menuItems.map((item) => <li className="flex justify-center items-center gap-5" key={item.href}><a href={item.href}>{item.label}</a><img src={vector} /></li>)}</ul>
                <div className="flex justify-center items-center gap-4 hidden md:flex">
                    <button className="w-[4.875rem] h-[3.75rem] py-[1rem] bg-[#FFE492] rounded-[0.5rem] text-[#043873] text-[1rem]">Login</button>
                    <button className="w-[12.1875rem] h-[3.75rem] py-[1rem] bg-[#4F9CF9] rounded-[0.5rem] text-white text-[1rem]"><span className="flex justify-center items-center flex-nowrap text-nowrap gap-3">Try Whitespace free<img src={vectorArrow} /></span></button>
                </div>
                <button className="block lg:hidden"><img src={humMenu} /></button>
            </div>
        </nav>
    )
}