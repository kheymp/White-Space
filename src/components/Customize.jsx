import vectorArrow from "../assets/Vector-Arrow.png"
import element from "../assets/Element.png"
import heroImage from "../assets/Project-Management.webp"
import customizeImage from "../assets/Customize-Dashboard.webp"
import extentionImage from "../assets/Extention-Image.png"
import SplashHeading from "../components/SplashHeading"

export default function Customize() {
    return(
        <>
        <div className="mt-[3.5rem] md:mt-[5.75rem] flex flex-col lg:flex-row justify-center items-center w-full p-10 lg:p-20 bg-[#043873] gap-5">
                <div className="flex flex-col justify-center items-center md:justify-around lg:items-start gap-10 text-white">
                    <SplashHeading>Use as Extension</SplashHeading>
                    <p>Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.</p>
                    <button className="bg-[#4F9CF9] w-[219px] h-[63px] rounded-[8px] text-white"><span className="flex justify-center items-center gap-3">Let's Go<img src={vectorArrow} /></span></button>
                </div>
                <img className="min-w-[288px] w-[824px]" src={extentionImage}></img>
            </div>
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center w-full p-10 lg:p-20 bg-white gap-10">
            <img className="min-w-[288px] w-[824px]" src={customizeImage}></img>
            <div className="flex flex-col justify-center items-center md:justify-around lg:items-start gap-10 text-[#212529]">
                <SplashHeading>Customize it to your needs</SplashHeading>
                <p>Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.</p>
                <button className="bg-[#4F9CF9] w-[219px] h-[63px] rounded-[8px] text-white"><span className="flex justify-center items-center gap-3">Let's Go<img src={vectorArrow} /></span></button>
            </div>
        </div>
        </>
    )
}