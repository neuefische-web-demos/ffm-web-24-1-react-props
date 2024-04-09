import React from "react";
import "./styles.css";

export default function App() {
  function handlePet() {
    console.log("Thanks for petting me");
  }

  return (
    <div>
      {Pet({ name: "dog", sound: "Wuff", emoji: "🦮", onPet: handlePet })}

      <Pet
        name="cat"
        sound="Meaw"
        emoji="🐈"
        onPet={handlePet}
        isHungry={false}
      />
      <Pet
        name="dog"
        sound="Wuff"
        emoji="🦮"
        onPet={handlePet}
        isHungry={true}
      />
      <Pet name="mouse" sound="Squeak" emoji="🐁" onPet={handlePet} isHungry />
    </div>
  );
}

function Pet({ sound, name, emoji, onPet, isHungry }) {
  return (
    <div onClick={onPet}>
      {isHungry ? "Feed me" : sound}{" "}
      <span role="img" aria-label={name}>
        {emoji}
      </span>
    </div>
  );
}
