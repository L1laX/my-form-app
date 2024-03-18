import React from 'react';
import Button from '../common/Button';
import PopupModel from '../common/PopupModel';
const Guild = ({ guildInfo, setGuildInfo }) => {
  const deleteItem = (id) => {
    const newData = guildInfo.filter((data) => data.id !== id);
    setGuildInfo(newData);
  };
  const inputs = [{ name: 'name', type: 'text', label: 'GUILD' }];
  return (
    <section className="m-5 p-5 bg-white rounded-lg  mt-20 ">
      <div className="header-text">
        <h2 className="text-3xl font-bold">GUILD INFORMATION</h2>
      </div>

      <div className="add-section flex mt-5">
        <PopupModel
          name="ADD GUILD"
          inputs={inputs}
          state={guildInfo}
          setterFucntion={setGuildInfo}
          height={200}
        />
      </div>
      <div className="displayGuild flex gap-8 xl:ml-[29rem] mt-5 flex-wrap md:flex-nowrap">
        {guildInfo.map((item) => {
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

export default Guild;
