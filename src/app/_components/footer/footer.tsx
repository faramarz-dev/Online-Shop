import ScrollToTopButton from "../scroll-to-up/scroll-to-up";

export const Footer: React.FC = () => {
  return (
    <>
      <ScrollToTopButton />
      <div className="h-[460px] bg-[#170029] text-white mt-10 mx-auto w-full [@media(min-width:1600px)]:max-w-[2000px]">
        <div className=" flex justify-between p-24 ">
          <div>
            <ul className="leading-10 ">
              <li className="text-xl mb-5">Copyright © 2021</li>
              <li>Copyright © 2021</li>
              <li>Copyright © 2021</li>
              <li>Copyright © 2021</li>
              <li>Copyright © 2021</li>
            </ul>
          </div>
          <div>
            <ul className="leading-10">
              <li className="text-xl mb-5">Copyright © 2021</li>
              <li>Copyright © 2021</li>
              <li>Copyright © 2021</li>
              <li>Copyright © 2021</li>
              <li>Copyright © 2021</li>
            </ul>
          </div>
          <div>
            <ul className="leading-10">
              <li className="text-xl mb-5">Copyright © 2021</li>
              <li>Copyright © 2021</li>
              <li>Copyright © 2021</li>
              <li>Copyright © 2021</li>
              <li>Copyright © 2021</li>
            </ul>
          </div>
          <div>
            <ul className="leading-10">
              <li className="text-xl mb-5">Copyright © 2021</li>
              <li>Copyright © 2021</li>
              <li>Copyright © 2021</li>
              <li>Copyright © 2021</li>
              <li>Copyright © 2021</li>
            </ul>
          </div>
        </div>
        <hr className="border-gray-600"/>
        <p className="text-center text-gray-600">Copyright © 2021</p>
      </div>
    </>
  );
};
