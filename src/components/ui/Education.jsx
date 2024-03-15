import React from 'react';
import OppositeContentTimeline from '../common/Timeline';
import PopupModel from '../common/PopupModel';
const Education = ({ educationInfo, setEducationInfo }) => {
  const deleteItem = (id) => {
    const newData = educationInfo.filter((data) => data.id !== id);
    setEducationInfo(newData);
  };
  const inputs = [
    { name: 'year', type: 'number', label: 'Year' },
    { name: 'name', type: 'text', label: 'University Name' },
  ];
  return (
    <section className="m-5 p-5 bg-white rounded-lg mt-20 mx-auto">
      <div className="header-text">
        <h2 className="text-3xl font-bold">EDUCATIONAL INFORMATION</h2>
      </div>
      <div className="add-section flex mt-5">
        <PopupModel
          name="ADD EDUCATION"
          inputs={inputs}
          state={educationInfo}
          setterFucntion={setEducationInfo}
          height={300}
        />
      </div>
      <div className="displayEducation ">
        <OppositeContentTimeline data={educationInfo} deleteItem={deleteItem} />
      </div>
    </section>
  );
};

export default Education;
