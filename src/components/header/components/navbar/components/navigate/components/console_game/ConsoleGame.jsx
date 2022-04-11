import React, { useState } from "react";

import Dobe from "./components/Dobe";
import Gerdoo from "./components/Gerdoo";
import Google from "./components/Google";
import Microsoft from "./components/Microsoft";
import Nintendo from "./components/Nintendo";
import Sony from "./components/Sony";

const ConsoleGame = () => {
  const [consoleGame, setConsoleGame] = useState(new Array(6).fill(false));

  const handleMouseEnter = (id) => {
    const copyconsoleGame = [...consoleGame];
    copyconsoleGame.fill(false);
    copyconsoleGame[id] = true;
    setConsoleGame(copyconsoleGame);
  };

  const handleMouseLeave = (id) => {
    const copyconsoleGame = [...consoleGame];
    copyconsoleGame[id] = false;
    setConsoleGame(copyconsoleGame);
  };

  return (
    <div className="hidden group-hover:flex  fixed right-0 top-40 mt-1  h-full w-full  bg-gray-200 rounded-lg z-10">
      <div className="p-5 w-2/3">
        <Sony
          Enter={handleMouseEnter}
          Leave={handleMouseLeave}
          consoleGame={consoleGame}
        />
        <Microsoft
          Enter={handleMouseEnter}
          Leave={handleMouseLeave}
          consoleGame={consoleGame}
        />
        <Nintendo
          Enter={handleMouseEnter}
          Leave={handleMouseLeave}
          consoleGame={consoleGame}
        />
        <Dobe
          Enter={handleMouseEnter}
          Leave={handleMouseLeave}
          consoleGame={consoleGame}
        />
        <Gerdoo
          Enter={handleMouseEnter}
          Leave={handleMouseLeave}
          consoleGame={consoleGame}
        />
        <Google
          Enter={handleMouseEnter}
          Leave={handleMouseLeave}
          consoleGame={consoleGame}
        />
      </div>

      <div className="md:hidden justify-center items-center bg-white border-2 rounded-md :flex xl:flex">
        <img
          alt="apple"
          src={process.env.PUBLIC_URL + "/images/mobiles/apple.jpg"}
          style={{ width: "90%", height: "50%" }}
        />
      </div>
    </div>
  );
};

// group-hover:opacity-100 group-hover:transition group-hover:ease-in-out group-hover:delay-75

export default ConsoleGame;
