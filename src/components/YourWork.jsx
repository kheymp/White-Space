import customizeImage from "../assets/Customize-Dashboard.webp"
import extentionImage from "../assets/Extention-Image.png"
import vectorArrow from "../assets/Vector-Arrow.png"
import heroImage from "../assets/Your-Data.png"
import SplashHeading from "../components/SplashHeading"

export default function YourWork() {
    return(
        <>
            <div className="mt-[3.5rem] md:mt-[5.75rem] flex flex-col lg:flex-row justify-center items-center w-full p-10 lg:p-20 bg-[#043873] gap-5">
                <div className="flex flex-col justify-center items-center md:justify-center lg:items-center gap-10 text-white">
                    <h1 className="relative text-[2.25rem] md:text-[3.375rem] lg:text-[4rem] font-bold pb-8">
                        <span className="relative z-10">Your work, eveywhere you are</span>
                        <span className="absolute inset-0 bg-[url('./assets/blue-splash.png')] bg-no-repeat bg-[position:bottom_right] bg-contain pointer-events-none max-w-[300px]" />
                    </h1>
                    <p className="max-w-4xl">Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
                    <button className="bg-[#4F9CF9] w-[219px] h-[63px] rounded-[8px] text-white"><span className="flex justify-center items-center gap-3">Try Taskey<img src={vectorArrow} /></span></button>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center w-full p-10 lg:p-20 bg-white gap-10">
                <div className="flex flex-col justify-center items-center md:justify-around lg:items-start gap-10 text-[#212529]">
                    <SplashHeading>100% Your Data</SplashHeading>
                    <p>The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.</p>
                    <button className="bg-[#4F9CF9] w-[219px] h-[63px] rounded-[8px] text-white"><span className="flex justify-center items-center gap-3">Read More<img src={vectorArrow} /></span></button>
                </div>
                <img className="min-w-[288px] w-[824px]" src={heroImage}></img>
            </div>
        </>
    )
}