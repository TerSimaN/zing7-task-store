import { categoryItems } from "@/config/constants"
import Button from "../ui/Button"
import Image from "next/image"

const Category = () => {
    return (
        <section className="container flex flex-col border-t border-store-gray-100 lg:py-12 py-8 md:px-0 px-4 lg:mt-14 mt-10">
            <div className="flex justify-between items-center">
                <h1 className="font-rubik font-medium text-[1.75rem] leading-[2.75rem] tracking-[0.2px]">Category</h1>
                <Button text="View All" className="border border-store-blue-600 rounded-md font-roboto font-medium text-base leading-[1.375rem] text-store-blue-600 px-5 py-3" />
            </div>
            <div className="grid sm:grid-cols-3 md:grid-cols-6 sm:justify-normal justify-center gap-x-7 mt-7">
                {categoryItems.map((item, index) => (
                    <div key={index} className="flex flex-col justify-center items-center w-40 h-[13.75rem]">
                        <Image
                            src={item.imgSrc}
                            alt="category icon"
                            className="place-self-center"
                        />
                        <div className="flex flex-col items-center mt-11">
                            <h1 className="font-roboto font-medium text-sm leading-5 text-store-gray-900">
                                {item.name}
                            </h1>
                            <span className="font-roboto font-normal text-sm leading-5 text-store-gray-450 mt-2">
                                {item.itemCount}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Category