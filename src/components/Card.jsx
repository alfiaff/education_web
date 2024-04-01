import React from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { FaPlay, FaInfoCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const Card = ({ title, desc, imgLink, statusCourse, linkModul}) => {
  const navigate = useNavigate(); // Utilize useNavigate hook for navigation

  const handleMulaiClick = () => {
    if (statusCourse) {
      navigate('/course'); // Redirect to the '/course' route when "Mulai" button is clicked
    } else {
      alert("Kursus ini belum tersedia")
    }
  };

  return (
    <div className="max-w-sm max-h-96 bg-white shadow-lg rounded-md">
      <div className="w-full h-36 bg-red-500 rounded">
        <img src={imgLink} alt="thumbnail card" className="w-full h-full bg-cover" />
      </div>

      <div className="p-3 flex flex-col gap-10">
        <div className="">
          <h2 className="font-bold text-xl">{title}</h2>
          <p className="text-gray-400 break-words w-64">{desc}</p>
        </div>

        <ButtonGroup className="flex justify-between">
          <a href={linkModul}>
            <Button leftIcon={<FaInfoCircle />} colorScheme='pink' variant='solid'>
              Modul
            </Button>
          </a>
      
          <Button rightIcon={<FaPlay />} colorScheme='blue' variant='outline' onClick={handleMulaiClick}>
            Mulai
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default Card;
