import Image from "next/image"
import { hero_image_1 } from "../../../public/assets/images"
import Button from "../ui/Button"
import Link from "next/link"

const Hero = () => {
    return (
        <section className="flex items-center bg-store-gray-50 w-full">
            <div className="relative container flex lg:gap-8 xl:gap-0 md:px-0 px-4 lg:py-16 py-8">
                <div className="mr-auto max-w-[31.25rem]">
                    <span className="font-roboto font-medium text-sm leading-5 text-store-blue-700">
                        SONY WH-H910N
                    </span>
                    <h1 className="font-rubik font-medium sm:text-[3.5rem] text-5xl sm:leading-[4.5rem] leading-[3.5rem] tracking-[0.2px] text-store-gray-900 mt-4">
                        Best in Hi-Res and Noise Cancelling
                    </h1>
                    <p className="font-roboto font-normal text-base leading-7 text-store-gray-450 mt-4">
                        Experience finely tuned noise-canceling performance in a comfortable headphone.
                        Long-lasting battery life plus quick charging keeps you listening for up to 35 hours since start.
                    </p>
                    <div className="flex max-sm:flex-col items-center gap-5 mt-7">
                        <Button text="Buy Now" className="bg-store-blue-750 rounded-md font-roboto font-medium text-base leading-[1.375rem] text-white sm:w-40 w-80 h-12" />
                        <Button text="Learn More" className="border border-store-blue-600 rounded-md font-roboto font-medium text-base leading-[1.375rem] text-store-blue-600 sm:w-40 w-80 h-12" />
                    </div>
                    <Link href={"#"}>
                        <svg className="size-6 text-store-gray-400 sm:mt-14 mt-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19V5m0 14-4-4m4 4 4-4" />
                        </svg>
                    </Link>
                </div>
                <div className="relative z-10 hidden lg:mt-0 lg:block">
                    <div className="absolute left-16 top-20 -z-10 bg-store-blue-600 rounded-full size-[7.125rem]"></div>
                    <Image
                        src={hero_image_1}
                        alt="hero image"
                    />
                </div>
                <button className="hidden lg:block absolute top-60 -end-28 bg-white rounded-full p-5 size-16 shadow-md">
                    <svg className="w-6 h-6 text-store-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m10 16 4-4-4-4" />
                    </svg>
                </button>
            </div>
        </section>
    )
}

export default Hero