import CustomButton from './CustomButton';

function ImageCard() {
  return (
    <>
      <div className="flex flex-col sm:flex-row items-center justify-around p-8">
        <div className="w-full md:w-1/3">
          <img
            src="/assets/home02.png"
            alt="Web & Mobile App Development"
            className="w-3/4 h-auto rounded-lg"
          />
        </div>

        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-2xl text-customPurple font-bold mb-4">
            Web & Mobile App Development
          </h2>
          <p className="text-black">
            Your web and mobile Apps are pieces of the puzzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
          </p>

          <div className="mt-5">
            <CustomButton text="LEARN MORE" />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-around p-8">
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-2xl text-customPurple font-bold mb-4">
            Digital Strategy Consulting
          </h2>
          <p className="text-black">
            Your digital strategy should complement the overall marketing
            strategy of the company. In online marketing, each component will
            never work in isolation and every business needs a different mix. We
            provide a clear concept and strategic overview to find the most
            efficient model for your business.
          </p>

          <div className="mt-5">
            <CustomButton text="LEARN MORE" />
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <img
            src="/assets/home03.png"
            alt="Digital Strategy Consulting"
            className="w-3/4 h-auto rounded-lg"
          />
        </div>
      </div>
    </>
  );
}

export default ImageCard;
