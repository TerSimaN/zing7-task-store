import { productLists } from "@/config/constants"
import Image from "next/image"
import Link from "next/link"
import { arrow_right_icon } from "../../../public/assets/icons"

const ProductList = () => {
    return (
        <section className="container py-12 mt-10">
            <div className="flex gap-x-[1.875rem]">
                {productLists.map((productList, index) => (
                    <div key={index} className="flex flex-col gap-y-5 min-w-[21.875rem]">
                        <h1 className="font-rubik font-medium text-[1.375rem] leading-[1.875rem] tracking-[0.2px] text-store-gray-900">{productList.title}</h1>
                        {productList.listItems.map((listItem, index) => (
                            <div key={index} className="flex items-center p-5">
                                <div className="inline-flex justify-center items-center size-16">
                                    <Image
                                        src={listItem.productImgSrc}
                                        alt="product image"
                                    />
                                </div>
                                <div className="flex flex-col gap-y-2 ms-4">
                                    <h1 className="font-roboto font-medium text-base leading-[1.375rem] text-store-gray-900">{listItem.productName}</h1>
                                    <div className="flex items-center gap-x-5">
                                        <span className="font-roboto font-normal text-sm leading-5 text-store-blue-600">{listItem.productPrice}</span>
                                        <span className="flex items-center font-roboto font-normal text-sm leading-5 text-store-gray-450">
                                            <svg className="w-4 h-4 text-store-orange-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            {listItem.productRating}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <Link href={'#'} className="flex justify-between items-center font-roboto font-medium text-base leading-[1.375rem] text-store-blue-900 p-3.5">
                            View More Products...
                            <Image
                                src={arrow_right_icon}
                                alt=""
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ProductList