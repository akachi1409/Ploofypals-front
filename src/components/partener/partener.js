import Human from "../../assets/Humane-Society.webp";
import Aspca from "../../assets/ASPCA.webp";
import Best from "../../assets/BestFriends.webp";
import North from "../../assets/North-Shore.webp";

const Partener = () => {
  return (
    <div>
      <div className="block m-5 text-center mx-auto text-blue-heading text-3xl font-black uppercase">
        Proud Partners Of
      </div>
      <div className="max-w-screen-lg m-auto flex justify-evenly items-center">
        <div className="mx-2 filter grayscale partner opacity-60 hover:opacity-100">
          <a href="https://www.humanesociety.org/">
            <img
              src={Human}
              alt="The Humane Society"
              className="h-16 sm:h-20"
            />
          </a>
        </div>
        <div className="mx-2 filter grayscale partner opacity-60 hover:opacity-100">
          <a href="https://www.aspca.org/">
            <img
              src={Aspca}
              alt="American Society for the Prevention of Cruelty to Animals"
              className="h-6 sm:h-8"
            />
          </a>
        </div>
        <div className="mx-2 filter grayscale partner opacity-60 hover:opacity-100">
          <a href="https://bestfriends.org/">
            <img
              src={Best}
              alt="Best Friends"
              className="h-8 sm:h-12"
            />
          </a>
        </div>
        <div className="mx-2 filter grayscale partner opacity-60 hover:opacity-100">
          <a href="https://www.animalleague.org/">
            <img
              src={North}
              alt="North Shore Animal League"
              className="h-14 sm:h-20"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Partener;