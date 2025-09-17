import { CountdownTimer } from "../timer/count-down-timer";
import Image from "next/image";
import { COUNTDOWN_TARGET_DATE } from "@/configs/countdown";
import Link from "next/link";
function AttributeSection() {
  return (
    <>
      <div>
        <div className="flex ">
          <Image
            src="/images/attribute-section/attribute-section 2.jpg"
            alt="banner"
            width={2000}
            height={100}
            className="h-96 rounded-md"
          />
          <div className="w-[35%] h-auto absolute scale-75 sm:mt-3 lg:scale-100 lg:m-9 md:scale-90">
            <div>
              <p className="text-pink-300 text-xl">Shoping Festival</p>
              <h3 className="xl:text-[4rem] text-[2.5rem] md:text-[3rem]">Exceptional Purchase</h3>
              <p className="text-shop-gray-border mt-5 mb-3">
                Lorem ipsum dolor sit,
              </p>
              <CountdownTimer targetDate={COUNTDOWN_TARGET_DATE} />
              <Link href={"./"}>
                <button className=" bg-purple-950 rounded-md p-2 text-sm text-white hover:bg-purple-900 mt-14 lg:mt-12">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AttributeSection;
