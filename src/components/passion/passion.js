import "./passion.css";
import Collection from "../../assets/CollectionBanner.webp";
import Dog from "../../assets/DogeWithCheck.svg";
const Passion = () => {
  return (
    <div className="overflow-hidden text-center">
      <div className="max-w-full m-auto pt-8">
        <div className="max-w-screen-lg mx-auto uppercase mx-auto mb-4 text-blue-heading text-3xl font-black sm:px-20">
          <span className="block">
            The Most Passionate &amp; Viral Community in Crypto Now has its own
            NFT collection.
          </span>
        </div>
        <div className="max-w-screen-lg mx-auto px-5 lg:px-20 text-left leading-8">
          <div>
            1.3 million baby doge community members coming together for only
            10,000 of the dopest adoptable baby doge NFTs on the blockchain,
            what could happen? This could be the next big thing in NFTs as a
            huge difference is being made with a massive community behind our
            mission. We hope to donate over{" "}
            <span className="font-black">$500,000+</span> with our NFT
            collection to dog rescue organizations.
          </div>
          <div className="mt-5">
            Each doge rescued grants you an official Baby Doge Army NFT,
            creative and commercial rights to your art, inclusion in our
            community, and the opportunity to feel good knowing your unique art
            helped make a difference &amp; spread awareness!
          </div>
        </div>
        <div className="max-w-screen-lg mx-auto">
          <img
            src={Collection}
            className="max-w-full mx-auto px-5 my-5 sm:my-10"
            alt="Baby Doge NFT Collection"
          />
        </div>
        <div className="max-w-full m-auto bg-lotto p-5 lg:px-20 lg:py-10 text-white">
          <div className="max-w-screen-lg mx-auto flex flex-col-reverse justify-between sm:flex-row items-center">
            <div className="text-left p-5 sm:w-1/2">
              <div className="font-black text-3xl">Good for You.</div>
              <div className="font-black text-3xl">Good for Them.</div>
              <div className="mt-5 leading-8">
                Don't worry we want to save doges but we didn't forget about
                you! 1 Lucky Whitelist winner will win $50,000 USDT (No Purchase
                Necessary).
              </div>
              <div className="mt-5 leading-8">
                Each Baby Doge is unique and programmatically generated from
                over 200 possible traits, including eyes, mouth, headwear, fur
                clothing, and more. All baby doges are cute, but some are rarer
                than others.
              </div>
              <div className="mt-5 leading-8">
                The baby doges are stored as ERC-721 tokens on the Ethereum
                blockchain and hosted on IPFS.
              </div>
              <div className="inline-flex rounded-full shadow uppercase">
                <a
                  href="#buy"
                  className="mt-5 px-8 py-3 font-black rounded-full text-black bg-white hover:bg-button-hover hover:text-white w-50"
                >
                  Join Whitelist
                </a>
              </div>
            </div>
            <div className="p-10 sm:w-1/2">
              <img src={Dog} alt="Doge Giveaway" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Passion;