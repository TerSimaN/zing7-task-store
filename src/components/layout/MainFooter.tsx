import Image from "next/image"
import Link from "next/link"
import { facebook_icon, github_icon, instagram_icon, linkedin_icon, twitter_icon } from "../../../public/assets/icons"

const MainFooter = () => {
    return (
        <footer className="bg-store-gray-100">
            <div className="container flex max-sm:flex-col gap-y-4 items-center justify-between md:px-0 px-4 py-5 w-full">
                <span className="font-roboto font-normal text-sm leading-5 text-store-gray-600">
                    Store © Copyright 2024, Inc. All rights reserved
                </span>
                <div className="flex sm:gap-x-3 gap-x-10 items-center">
                    <Link href="#">
                        <Image
                            src={facebook_icon}
                            alt="facebook_icon"
                        />
                    </Link>
                    <Link href="#">
                        <Image
                            src={twitter_icon}
                            alt="twitter_icon"
                        />
                    </Link>
                    <Link href="#">
                        <Image
                            src={linkedin_icon}
                            alt="linkedin_icon"
                        />
                    </Link>
                    <Link href="#">
                        <Image
                            src={instagram_icon}
                            alt="instagram_icon"
                        />
                    </Link>
                    <Link href="#">
                        <Image
                            src={github_icon}
                            alt="github_icon"
                        />
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default MainFooter