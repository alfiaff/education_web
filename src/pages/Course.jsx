import BgImage from '../assets/img/bg_game.jpg';
import React, { useState } from 'react';
import Fish from "../assets/img/fish.png";
import Apple  from "../assets/img/apple.png";
import Medicine from "../assets/img/medicine.png";
import IceCream from "../assets/img/ice_cream.png";
import Shrimp from "../assets/img/shrimp.png";

import ALetter from "../assets/img/a.png";
import ILetter from "../assets/img/i.png";
import ULetter from "../assets/img/u.png";
import ELetter from "../assets/img/e.png";
import OLetter from "../assets/img/o.png";


const Course = () => {
  const dataCourse = [
    {
      no: 1,
      question: "Hewan ini berawal dari huruf?",
      img: Fish,
      option: ['A', 'I', 'U'],
      correctOption: 'I',
      imgOption: [ALetter, ILetter, ULetter],
    },
    {
      no: 2,
      question: "Makanan ini berawal dari huruf?",
      img: IceCream,
      option: ['I', 'E', 'O'],
      correctOption: 'E',
      imgOption: [ILetter, ELetter, OLetter],
    },
    {
      no: 3,
      question: "Hewan ini berasal dari huruf?",
      img: Shrimp,
      option: ["E", "U", "A"],
      correctOption: "U",
      imgOption: [ELetter, ULetter, ALetter],
    },
    {
      no: 4,
      question: "Seseorang yang sedang sakit harus mengkonsumsi?",
      img: "", 
      option: ["Obat", "Apel", "Ice cream"], 
      correctOption: "Obat", 
      imgOption: [Medicine, Apple, Fish],
    },
    {
      no: 5,
      question: "Makanan yang dingin adalah....",
      img: "", 
      option: ["Ikan", "Udang", "Es krim"], 
      correctOption: "Es krim", 
      imgOption: [Apple, Fish, IceCream],
    },
  ];
  const [userChoice, setUserChoice] = useState(null);
  const [randomIndex, setRandomIndex] = useState(getRandomIndex(dataCourse)()); // Initialize with a random index
  const [currentCourse, setCurrentCourse] = useState(dataCourse[randomIndex]);
  
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function getRandomIndex(dataCourse) {
    const shuffledIndexes = shuffleArray([...Array(dataCourse.length).keys()]);
    return () => shuffledIndexes.pop();
  }

  //const randomIndex = getRandomIndex(dataCourse);
  //let currentCourse = dataCourse[randomIndex()];
 
  function answer(choice) {
    if (choice == currentCourse.correctOption) {
       alert("Benar");
    } else {
      alert("Opps salah...")
      window.open("https://youtube.com/playlist?list=PLbb0N3WDd_SOWcL9NXwsj2-jzv2Aym_kC&si=uc70_vAMwMK6HtQ7")
    }
    
    setRandomIndex(getRandomIndex(dataCourse)());
    setCurrentCourse(dataCourse[randomIndex]);
  }

  
  return (
    <div
      className={`bg-cover bg-no-repeat h-fit flex items-center justify-center w-full py-10`} // Tailwind classes
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div className="w-10/12 xl:w-7/12 h-fit">
          <div className="w-full h-80 shadow-lg flex items-center justify-center flex-col gap-2 p-3">
              <img src={currentCourse.img} className="w-40"/>
              <p className="font-bold text-white">{currentCourse.question}</p>
          </div>
          <div className=" py-3 flex gap-3 justify-center items-center flex-wrap">
              {
                 currentCourse.imgOption.map((option, index) => {
                  return (
                      <div className="w-40 h-40 bg-white flex items-center justify-center" onClick={() => answer(currentCourse.option[index])}>
                        <img src={option} className="w-32"/>
                        
                      </div>
                  )
                })
              }
          </div>  
          
      </div>
    </div>
  );
};

export default Course;
