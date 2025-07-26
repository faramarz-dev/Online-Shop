import ScrollToTopButton from "../scroll-to-up/scroll-to-up";

export const Footer: React.FC = () => {
  return (
    <>
      <ScrollToTopButton />
      <div className=" bg-[#170029] text-white mt-10 mx-auto w-full [@media(min-width:1600px)]:max-w-[2000px]">
        <div className=" lg:flex lg:flex-row lg:justify-between lg:p-24 xs:flex xs:flex-col xs:items-start xs:p-10 xs:gap-12">
          <div>
            <ul className="leading-10 ">
              <li className="text-2xl mb-5">Support</li>
              <li>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
              <li>exclusive@gmail.com</li>
              <li>+88015-88888-9999</li>
            </ul>
          </div>
          <div>
            <ul className="leading-10">
              <li className="text-2xl mb-5">Account</li>
              <li>My Account</li>
              <li>Login / Register</li>
              <li>Cart</li>
              <li>Wishlist</li>
            </ul>
          </div>
          <div>
            <ul className="leading-10">
              <li className="text-2xl mb-5">Quick Link</li>
              <li>Privacy Policy</li>
              <li>Terms Of Use</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <ul className="leading-10">
              <li className="text-2xl mb-5">Copyright © 2021</li>
              <li>Copyright © 2021</li>
              <li>Copyright © 2021</li>
              <li>Copyright © 2021</li>
              <li>Copyright © 2021</li>
            </ul>
          </div>
        </div>
        <hr className="border-gray-600" />
        <p className="text-center text-gray-600">Copyright © 2021</p>
      </div>
    </>
  );
};
