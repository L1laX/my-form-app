import React from 'react';
import Timeline from '../common/ExperienceTimeline';

import PopupModel from '../common/PopupModel';
const Experience = ({ experienceInfo, setExperienceInfo }) => {
  const deleteItem = (id) => {
    const newData = experienceInfo.filter((data) => data.id !== id);
    setExperienceInfo(newData);
  };
  const inputs = [
    { name: 'name', type: 'text', label: 'Coporation Name' },
    { name: 'yearStart', type: 'number', label: ' Year Start' },
    { name: 'yearEnd', type: 'number', label: ' Year End' },
    { name: 'position', type: 'text', label: 'Position' },
  ];
  return (
    <section className="m-5 p-5 bg-white rounded-lg  mt-20 ">
      <div className="header-text">
        <h2 className="text-3xl font-bold">EXPERIENCE INFORMATION</h2>
      </div>
      <div className="add-section flex mt-5">
        <PopupModel
          name="ADD EXPERIENCE"
          inputs={inputs}
          state={experienceInfo}
          setterFucntion={setExperienceInfo}
          height={480}
        />
      </div>
      <div className="displayExperience  ">
        <Timeline data={experienceInfo} deleteItem={deleteItem} />
      </div>
    </section>
  );
};

export default Experience;
