import Animation from "./animation"
import Link from "next/link"
import kadvice from "kadvice"
import { useEffect, useState } from "react";

export default function Hero() {
    const [mounted, setMounted] = useState(false);

    //const dailyAdivce = kadvice.daily();
    const advice = kadvice.random();

    useEffect(() => {
        setMounted(true);
    },[]);

    return (mounted &&
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="w-full title-font text-center sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                인생을 바꾸는 명언
                </h1>
                <br className="hidden lg:inline-block"/>
                <div className="w-full">
                    <p className="mb-8 text-xl text-center leading-relaxed">
                        {advice.message}
                    </p>
                    <p className="mb-8 text-base text-center leading-relaxed">
                    - {advice.author} -
                        <br className="hidden lg:inline-block"/>
                        <p className="mb-8 text-sm text-center leading-relaxed">{advice.authorProfile}</p>
                    </p>
                </div>

                <div className="w-full flex justify-center">
                    <Link href="/projects" legacyBehavior>
                        <a className="btn-project">
                            프로젝트 보러가기
                        </a>
                    </Link>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation/>
            </div>
        </>
    )
}