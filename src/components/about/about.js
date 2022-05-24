const About = () => {
  return (
    <div className="overflow-hidden text-left">
      <div className="max-w-screen-lg m-auto px-3 py-5 sm:p-6 bg-lotto rounded-3xl text-white">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="flex flex-col p-5 sm:p-10 md:w-1/2">
            <div className="block mb-2 text-3xl font-black">
              ABOUT BABY DOGE COIN
            </div>
            <div className="max-w-30rem mb-3 font-black">
              The viral meme that started it all
            </div>
            <div className="max-w-30rem leading-6">
              A new token birthed by fans of the Doge Meme online community.
              Baby Doge is hyper-deflationary with static reflection that
              rewards holders, so more baby doge coins are being automatically
              added to your wallet each transaction. Simply love, pet, and hold
              as 5% from each transaction is automatically redistributed to Baby
              Doge holders. Baby Doge went viral in a short period of time after
              winning the hearts of over 1 million Baby Doge holders and even
              being tweeted by Elon Musk himself. Baby Doge has a mission to
              help save doges and has donated over $700,000 to our partner dog
              rescue organizations.
            </div>
            <div className="w-fit mt-10">
              <a
                href="https://babydoge.com"
                className="px-8 py-3 font-black rounded-full text-black bg-meet hover:bg-white uppercase"
              >
                Meet Baby Doge Coin
              </a>
            </div>
          </div>
          <div className="relative md:w-1/2">
            <img
              src="https://babydogenft.com/images/WavingDoge.png"
              alt="Waving Doge"
              className="p-10"
            />
            <img
              src="https://babydogenft.com/images/TripleCoin.png"
              alt="Triple Baby Doge Coin"
              className="absolute h-36 -left-10 top-48 sm:top-64"
            />
            <img
              src="https://babydogenft.com/images/SingleCoin.png"
              alt="Baby Doge Coin"
              className="absolute h-16 -right-16 top-40"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
