import React from 'react';

function Footer() {
  return (
    <footer className="bg-customPurple text-white py-6 px-6 sm:px-6 md:px-8 lg:px-10 xl:px-16">
      <div className="container flex flex-col sm:flex-row justify-between items-start">
        <div className="ml-0 mr-5">
          <div className="flex">
            <img className="h-9 w-11" src="/assets/at.png" alt="AT Digital" />
            <h3 className="text-2xl font-semibold mt-1 ml-2">AT DIGITAL</h3>
          </div>

          <p className="text-sm mt-3">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve a single objective - your
            business results.
          </p>
        </div>
        <div className="flex justify-end sm:flex-row mt-6 sm:mt-0">
          <ul className="list-none mr-8 sm:mr-12">
            <li className="text-xl font-bold mb-2">Our Technologies</li>
            <li>ReactJS</li>
            <li>Gatsby</li>
            <li>NextJS</li>
            <li>NodeJS</li>
          </ul>
          <ul className="list-none">
            <li className="text-xl font-bold mb-2">Our Services</li>
            <li>Social Media Marketing</li>
            <li>Web & Mobile App Development</li>
            <li>Data & Analytics</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-white text-center">
        <span className="mr-2">Privacy Policy</span> |{' '}
        <span className="ml-2">Terms & Conditions</span>
      </div>
    </footer>
  );
}

export default Footer;
