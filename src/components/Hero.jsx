import vectorArrow from "../assets/Vector-Arrow.png"
import element from "../assets/Element.png"
import heroImage from "../assets/Hero-Image.png"

export default function Hero() {
    return(
        <main>
            <div className="mt-[3.5rem] md:mt-[5.75rem] flex flex-col lg:flex-row justify-center items-center w-full min-h-screen p-10 lg:p-20 bg-[#043873] bg-[url('./assets/Element.png')] bg-no-repeat bg-center gap-5">
                <div className="flex flex-col justify-center items-center md:justify-around lg:items-start gap-10 text-white">
                    <h1 className="text-[2.25rem] md:text-[3.375rem] lg:text-[4rem] font-bold">Get More Done with whitespace</h1>
                    <p>Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
                    <button className="bg-[#4F9CF9] w-[219px] h-[63px] rounded-[8px] text-white"><span className="flex justify-center items-center gap-3">Try Whitespace free<img src={vectorArrow} /></span></button>
                </div>
                <img className="min-w-[288px] w-[824px]" src={heroImage}></img>
            </div>
        </main>
    )
}