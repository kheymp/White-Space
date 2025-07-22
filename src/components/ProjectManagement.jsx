import vectorArrow from "../assets/Vector-Arrow.png"
import element from "../assets/Element.png"
import heroImage from "../assets/Project-Management.webp"
import teamworkImage from "../assets/Technology-Teamwork.png"
import yellowSplash from "../assets/Yellow-Splash.png"
import SplashHeading from "../components/SplashHeading"

export default function ProjectManagement() {
    return(
        <>
        <section>
            <div className="flex flex-col lg:flex-row justify-center items-center w-full p-10 lg:p-20 bg-white gap-10">
                <div className="flex flex-col justify-center items-center md:justify-around lg:items-start gap-10 text-[#212529]">
                    <SplashHeading>Project Management</SplashHeading>
                    <p>Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
                    <button className="bg-[#4F9CF9] w-[219px] h-[63px] rounded-[8px] text-white"><span className="flex justify-center items-center gap-3">Get Started<img src={vectorArrow} /></span></button>
                </div>
                <img className="min-w-[288px] w-[824px]" src={heroImage}></img>
            </div>
            <div className="flex flex-col-reverse lg:flex-row justify-center items-center w-full p-10 lg:p-20 bg-white gap-10">
                <img className="min-w-[288px] w-[824px]" src={teamworkImage}></img>
                <div className="flex flex-col justify-center items-center md:justify-around lg:items-start gap-10 text-[#212529]">
                    <SplashHeading>Work together</SplashHeading>
                    <p>With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.</p>
                    <button className="bg-[#4F9CF9] w-[219px] h-[63px] rounded-[8px] text-white"><span className="flex justify-center items-center gap-3">Get Started<img src={vectorArrow} /></span></button>
                </div>
            </div>
        </section>
        </>
    )
}