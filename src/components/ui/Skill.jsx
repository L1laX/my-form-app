import React from 'react';
import DeleteButton from '../common/DeleteButton';
import CustomizedProgressBars from '../common/Progressbar';
import PopupModel from '../common/PopupModel';
const Skill = ({ skillInfo, setSkillInfo }) => {
  const deleteItem = (id) => {
    const newData = skillInfo.filter((data) => data.id !== id);
    setSkillInfo(newData);
  };
  const inputs = [
    { name: 'name', type: 'text', label: 'Skill' },
    { name: 'level', type: 'number', label: 'Level *must be between 1 and 10' },
  ];
  return (
    <section className="m-5 p-5 bg-white rounded-lg  mt-20">
      <div className="header-text">
        <h2 className="text-3xl font-bold">SKILL INFORMATION</h2>
      </div>
      <div className="add-section flex mt-5">
        <PopupModel
          name="ADD SKILL"
          inputs={inputs}
          state={skillInfo}
          setterFucntion={setSkillInfo}
          height={300}
        />
      </div>
      <div className="displaySkill">
        {skillInfo.map((item) => {
          return (
            <div key={item.id} className="flex items-center text-teal-500">
              <div className="flex w-full xl:w-[50rem] xl:gap-52 justify-between xl:ml-[29rem] my-3 items-center">
                <p className="w-1/3">{item.name}</p>
                <p className="w-1/3">{item.level}</p>
                <span className="w-1/3">
                  <CustomizedProgressBars level={item.level} />
                </span>
              </div>
              <DeleteButton
                className="text-xl ml-10 bg-red-400 px-2 py-0 rounded-full text-white"
                onClick={() => deleteItem(item.id)}
                name={'x'}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skill;
