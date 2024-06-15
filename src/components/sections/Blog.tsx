import Link from "next/link"
import Button from "../ui/Button"
import Image from "next/image"
import { blogCards } from "@/config/constants"

const Blog = () => {
    return (
        <section className="py-16 mt-5">
            <div className="container flex flex-col gap-y-14">
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <h2 className="font-rubik font-medium text-4xl leading-[3.25rem] tracking-[0.2px] text-store-gray-900">Read our blog</h2>
                        <p className="font-roboto font-normal text-base leading-[1.375rem] text-store-gray-450 mt-3">Check our latest article to get meaningfull content or tips for shopping</p>
                    </div>
                    <Button text="More on blogs" className="border border-store-blue-600 rounded-lg font-roboto font-medium text-base leading-[1.375rem] text-store-blue-600 px-4 h-12" />
                </div>
                <div className="grid gap-x-7 lg:grid-cols-3">
                    {blogCards.map((blogCard, index) => (
                        <div key={index} className="max-w-sm">
                            <Link href={'#'}>
                                <Image
                                    src={blogCard.imgSrc}
                                    alt="blog image"
                                    className="rounded-lg"
                                />
                            </Link>
                            <div className="flex flex-col mt-5">
                                <span className="font-roboto font-normal text-sm leading-5 text-store-blue-600">{blogCard.blogDate}</span>
                                <Link href={'#'}>
                                    <h1 className="font-rubik font-medium text-lg leading-5 tracking-[0.2px] text-store-gray-900 mt-5">{blogCard.blogTitle}</h1>
                                </Link>
                                <p className="font-roboto font-normal text-sm leading-5 text-store-gray-450 mt-3">{blogCard.blogInfo}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Blog