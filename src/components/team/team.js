import Bark from "../../assets/BarkJames.webp"
import Max from "../../assets/MaxPaw.webp";
import Big from "../../assets/BigFluff.webp";
import Bow from "../../assets/BowWow.webp"
const Team = () => {
  return (
    <div className="overflow-hidden text-center">
      <div className="max-w-screen-lg m-auto px-4">
        <span className="block my-5 mx-auto text-blue-heading text-3xl font-black">
          TEAM MEMBERS
        </span>
        <p className="hidden max-w-lg mx-auto text-medium font-light italic mb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="md:grid md:grid-cols-2">
          <div className="flex mx-auto mb-8 text-left mr-1 sm:mr-5">
            <div className="rounded-lg h-24 w-24 flex-none mr-2 sm:mr-4 ">
              <img
                src={Bark}
                className="mx-auto"
                alt="Bark James"
              />
            </div>
            <div>
              <div className="text-base font-black text-black text-2xl mb-1">
                Bark James
              </div>
              <div className="italic text-gray-400 text-xs">
                Looks things over, and over and over. Enjoys long walks on the
                beach looking at the ocean. Thinks of new ideas for baby doges.
                Extreme doge lover.
              </div>
            </div>
          </div>
          <div className="flex mx-auto mb-8 text-left mr-1 sm:mr-5">
            <div className="rounded-lg h-24 w-24 flex-none mr-2 sm:mr-4 ">
              <img src={Max} className="mx-auto" alt="Max Paw" />
            </div>
            <div>
              <div className="text-base font-black text-black text-2xl mb-1">
                Max Paw
              </div>
              <div className="italic text-gray-400 text-xs">
                Smells whats cooking, hero of doges to the community, doge
                rescuer and high achiever. Makes fluff happen. Give him a bark!
              </div>
            </div>
          </div>
          <div className="flex mx-auto mb-8 text-left mr-1 sm:mr-5">
            <div className="rounded-lg h-24 w-24 flex-none mr-2 sm:mr-4 ">
              <img
                src={Big}
                className="mx-auto"
                alt="Big Fluff"
              />
            </div>
            <div>
              <div className="text-base font-black text-black text-2xl mb-1">
                Big Fluff
              </div>
              <div className="italic text-gray-400 text-xs">
                Our local doge walker making baby doge things happen, drools
                over new projects and meeting new friends. Loves to play with
                other doges and cares the most.
              </div>
            </div>
          </div>
          <div className="flex mx-auto mb-8 text-left mr-1 sm:mr-5">
            <div className="rounded-lg h-24 w-24 flex-none mr-2 sm:mr-4 ">
              <img src={Bow} className="mx-auto" alt="Bow Wow" />
            </div>
            <div>
              <div className="text-base font-black text-black text-2xl mb-1">
                Bow Wow
              </div>
              <div className="italic text-gray-400 text-xs">
                The smart doge, master of fetching code, making sure baby doges
                code reads ok for the other doges. Loves Star Wars movies, baby
                yoda, video games, &amp; snacks.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
