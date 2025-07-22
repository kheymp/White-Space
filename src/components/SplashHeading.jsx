import yellowSplash from "../assets/Yellow-Splash.png"


export default function SplashHeading({ children }) {
    return(
        <>
            <h1 className="relative text-[2.25rem] md:text-[3.375rem] lg:text-[4rem] font-bold pb-8 max-w-2xl">
                <span className="relative z-10">{children}</span>
                <span className="absolute inset-0 bg-[url('./assets/Yellow-Splash.png')] bg-no-repeat bg-[position:bottom_right] bg-contain pointer-events-none" />
            </h1>
        </>
    )
}