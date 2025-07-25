import React, { useState } from "react";
import "./App.css";
// src/App.jsx

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png",
    },
    {
      id: 2,
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png",
    },
    {
      id: 3,
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png",
    },
    {
      id: 4,
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png",
    },
    {
      id: 5,
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png",
    },
    {
      id: 6,
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png",
    },
    {
      id: 7,
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png",
    },
    {
      id: 8,
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png",
    },
    {
      id: 9,
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png",
    },
    {
      id: 10,
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png",
    },
  ]);

  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      // reduce money
      setMoney((prevState) => prevState - fighter.price);

      // shallow copy and create a arr with new reference point, then add inside the new team state arr
      setTeam((prevState) => [...prevState, fighter]);

      // create a new arr that contains the updated state that excludes the selected fighter
      const updatedFighterState = zombieFighters.filter(
        (obj) => obj.id !== fighter.id
      );
      setZombieFighters(updatedFighterState);
    } else {
      console.log("Not enough money");
    }
  };

  // Calculate total strength and agility
  const calculateTotal = team.reduce(
    (accumulator, fighter) => {
      return {
        totalStrength: accumulator.totalStrength + fighter.strength,
        totalAgilitiy: accumulator.totalAgilitiy + fighter.agility,
      };
    },
    { totalStrength: 0, totalAgilitiy: 0 }
  );

  const handleRemoveFighter = (fighter) => {
    // add back into your money
    setMoney((prevState) => prevState + fighter.price);

    // update team array
    const updatedTeamState = team.filter((obj) => obj.id !== fighter.id);
    setTeam(updatedTeamState);

    // update fighters array
    const updatedFighterState = [...zombieFighters, fighter];
    setZombieFighters(updatedFighterState);
  };

  return (
    <div>
      <h1>Zombie Fighters</h1>
      <h5>{`Money: ${money}`}</h5>
      <h5>{`Team Strength: ${calculateTotal.totalStrength}`}</h5>
      <h5>{`Team Agility: ${calculateTotal.totalAgilitiy}`}</h5>
      <h5>Team</h5>
      <ul>
        {team.length > 0
          ? team.map((obj) => {
              return (
                <li key={obj.id}>
                  <img src={obj.img} alt="image of zombie fighter" />
                  <p>{obj.name}</p>
                  <p>{obj.price}</p>
                  <p>{obj.strength}</p>
                  <p>{obj.agility}</p>
                  <button onClick={() => handleRemoveFighter(obj)}>
                    Remove
                  </button>
                </li>
              );
            })
          : "Pick some team members!"}
      </ul>
      <ul>
        {zombieFighters.map((obj) => {
          return (
            <li key={obj.id}>
              <img src={obj.img} alt="image of zombie fighter" />
              <p>{obj.name}</p>
              <p>{obj.price}</p>
              <p>{obj.strength}</p>
              <p>{obj.agility}</p>
              <button onClick={() => handleAddFighter(obj)}>Add</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
