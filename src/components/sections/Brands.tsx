import Image from "next/image"
import { brands } from "@/config/constants"

const Brands = () => {
    return (
        <section className="mt-5 mb-11">
            <div className="container grid grid-cols-2 gap-8 sm:gap-[3.75rem] md:grid-cols-3 lg:grid-cols-6">
                {brands.map((brand, index) => (
                    <div key={index} className="inline-flex justify-center items-center size-[7.5rem]">
                        <Image
                            src={brand.imgSrc}
                            alt={brand.imgAlt}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Brands