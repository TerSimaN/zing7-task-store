import Image from "next/image"
import { promo_banner_image } from "../../../public/assets/images"
import Button from "../ui/Button"

const PromoBanner = () => {
    return (
        <section className="relative container flex justify-end items-center bg-store-blue-700 bg-opacity-10 pr-[6.875rem] py-14 mt-10">
            <Image
                src={promo_banner_image}
                alt="promo banner image"
                width={350}
                height={340}
                className="absolute left-[6.25rem] top-3"
            />
            <div className="flex flex-col max-w-[23.5rem]">
                <span className="font-roboto font-medium text-sm leading-5 text-store-blue-700">FLASH SALE 7.7.7</span>
                <h1 className="font-rubik font-medium text-4xl leading-[3.25rem] tracking-[0.2px] text-store-gray-900 mt-4">Lenovo Yoga X</h1>
                <p className="font-roboto font-normal text-base leading-[1.625rem] text-store-gray-450 mt-2.5">
                    Smarter and intuitive with the same expert design
                    and detail. Plus combine innovative latest AI features
                </p>
                <div className="flex items-center gap-x-6 mt-7">
                    <Button text="Buy Now for $750" className="bg-store-blue-700 rounded-md font-roboto font-medium text-base leading-[1.375rem] text-white px-5 py-3" />
                    <span className="font-roboto font-medium text-xl leading-7 text-store-gray-450 line-through">$1500,00</span>
                </div>
            </div>
        </section>
    )
}

export default PromoBanner