import Image from "next/image";
export default function AboutUs() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900">About Us</h2>
          <p className="mt-4 text-lg text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
            in ratione aliquam delectus deserunt, exercitationem enim, ea
            veritatis nam necessitatibus dignissimos voluptate ducimus rerum
            illum quo dolorem id est quaerat! Possimus vero ut veniam illo unde,
            ex aliquam a dolorum numquam mollitia commodi quo nesciunt
            consequatur laboriosam quasi eum, suscipit officia corrupti ducimus
            maxime. Sapiente vel at consequuntur soluta officiis. Et sed
            repellendus debitis illo animi eveniet itaque ut veniam ipsam
            aliquam. Odit, ea tempora placeat alias, dignissimos dolore libero
            quos rerum perferendis pariatur ut voluptate expedita culpa quod
            cum?
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-80 w-full overflow-hidden rounded-lg group">
            <Image
              src="/images/about-us/about-us-1.png"
              alt="about-us"
              className="w-full h-full"
              width={1000}
              height={1000}
            />
            <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center backdrop-blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="text-white text-2xl font-semibold">
              quality in every choice
              </p>
            </div>
          </div>
          <div className="relative h-80 w-full overflow-hidden rounded-lg group">
            <Image
              src="/images/about-us/about-us-2.png"
              alt="about-us"
              className="w-full h-full"
              width={1000}
              height={1000}
            />
            <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center backdrop-blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="text-white text-2xl font-semibold">
              Innovation in every product
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
