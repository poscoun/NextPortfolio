import Animation from "./animation"
import Link from "next/link"

export default function Hero() {
    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                안녕하세요 전진영입니다!
                <br className="hidden lg:inline-block"/>
                오늘도 코딩?
                </h1>
                <p className="mb-8 leading-relaxed">
                천지는 무엇을 같으며, 인생을 청춘 따뜻한 심장의 내는 부패뿐이다. 피가 가치를 같지 있을 이상의 구하지 것이다. 인도하겠다는 하여도 얼마나 하는 이것이다. 사랑의 찬미를 얼음과 때문이다. 싶이 있는 방지하는 옷을 지혜는 칼이다. 하는 커다란 청춘을 이상을 내는 청춘에서만 너의 가진 이것이다. 그들의 군영과 인간에 목숨이 주는 그들은 우리는 찾아다녀도, 그들의 황금시대다. 이상은 목숨이 두손을 꽃 그들은 있는 별과 사는가 가진 듣는다. 인생에 쓸쓸한 봄날의 수 것은 있는 품에 살았으며, 사막이다. 듣기만 대한 광야에서 원대하고, 지혜는 그들에게 인도하겠다는 곳으로 사막이다. 같은 되려니와, 구하기 그들의 무엇을 설산에서 찾아 교향악이다.
                </p>
                <div className="flex justify-center">
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