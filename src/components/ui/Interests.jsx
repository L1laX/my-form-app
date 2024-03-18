import React from 'react';
import Button from '../common/Button';
import PopupModel from '../common/PopupModel';
const Interests = ({ interestsInfo, setInterestsInfo }) => {
  const deleteItem = (id) => {
    const newData = interestsInfo.filter((data) => data.id !== id);
    setInterestsInfo(newData);
  };
  const inputs = [{ name: 'name', type: 'text', label: 'INTERESTING THING' }];
  return (
    <section className="m-5 p-5 bg-white rounded-lg  mt-20">
      <div className="header-text">
        <h2 className="text-3xl font-bold">INTERESTS INFORMATION</h2>
      </div>
      <div className="add-section flex mt-5">
        <PopupModel
          name="ADD INTERESTS"
          inputs={inputs}
          state={interestsInfo}
          setterFucntion={setInterestsInfo}
          height={200}
        />
      </div>
      <div className="displayInterests flex gap-8 xl:ml-[29rem] mt-5 flex-wrap ">
        {interestsInfo.map((item) => {
          return (
            <Button
              name={item.name}
              className={'hover:bg-teal-500'}
              key={item.id}
              id={item.id}
              isDelete
              deleteItem={deleteItem}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Interests;
