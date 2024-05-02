import React from 'react';
import CustomButton from './CustomButton';
import './Home.css';
import Card from './Card';
import Footer from './Footer';
import ImageCard from './ImageCard';
function Home() {
  return (
    <section className="bg-white">
      <div>
        <div
          className="flex items-end"
          style={{
            backgroundImage: "url('/assets/home01.jpg')",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          <div
            className="sm:mb-5 lg:mb-10 sm:ml-10 lg:ml-20 hidden sm:block"
            style={{
              width: '500px',
              padding: '24px 40px 32px 40px',
              backgroundImage: 'linear-gradient(to right, #4DCA79,#1CBDDD )',
            }}
          >
            <h2 className=" text-4xl font-bold mb-8 ">
              We Crush Your Competitors, Goals, And Sales Records - Without The
              B.S.
            </h2>
            <CustomButton text="GET FREE CONSULTATION" />
          </div>
        </div>
        <div
          className="min-w-full block sm:hidden"
          style={{
            height: '300px',
            padding: '24px 30px 32px 30px',
            backgroundImage: 'linear-gradient(to right, #4DCA79,#1CBDDD )',
          }}
        >
          <h2 className="text-4xl font-bold mb-8">
            We Crush Your Competitors, Goals, And Sales Records - Without The
            B.S.
          </h2>
          <CustomButton text="GET FREE CONSULTATION" />
        </div>

        <ImageCard />
        <div className="container mx-auto p-8">
          <h2 className="text-2xl font-bold mb-4 text-customPurple flex items-center justify-center">
            Frequently Asked Questions
          </h2>
          <Card
            title="Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?"
            content="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
          />
          <Card
            title="Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?"
            content="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
          />
          <Card
            title="Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?"
            content="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
          />
        </div>

        <Footer />
      </div>
    </section>
  );
}

export default Home;
