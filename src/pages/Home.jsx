import React from 'react';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import Card from '../components/Card.jsx';

const Home = ({ dataCourse }) => {
  return (
    <>
      <header className="w-full h-20 shadow-md flex items-center justify-between px-6 xl:px-36">
        <h2 className="font-bold text-2xl">Edkatif</h2>
        <UserCircleIcon className="w-10 text-blue-500 hover:text-blue-600 transition-colors" />
      </header>

      <main>
        <div className="w-fit xl:w-9/12 h-fit m-auto py-5 flex flex-col xl:flex-row gap-5">
          {dataCourse.map((course) => (
            <Card
              key={course.id} // Add unique key for each card
              title={course.title}
              imgLink={course.imgLink}
              desc={course.desc}
              statusCourse={course.statusCourse}
              linkModul={course.linkModul}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
