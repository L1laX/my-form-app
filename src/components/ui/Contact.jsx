import React from 'react';
import Input from '../common/Input';
import { useState } from 'react';
import { CreateInput } from 'thai-address-autocomplete-react';
const InputThaiAddress = CreateInput();
const Contact = ({ contact, setContact }) => {
  const handleChange = (scope) => (value) => {
    setContact((oldAddr) => ({
      ...oldAddr,
      [scope]: value,
    }));
  };

  const handleSelect = (address) => {
    setContact(address);
  };

  return (
    <section className="m-5 p-5 bg-white rounded-lg mt-20">
      <section className="header-text">
        <h2 className="text-3xl font-bold">CONTACT INFORMATION</h2>
      </section>
      <form className="mx-auto w-4/5 mt-5   mb-5">
        <label className="text-sm">ADDRESS</label>
        <Input
          type="text"
          name="addressInfo"
          onChange={(e) =>
            setContact({ ...contact, [e.target.name]: e.target.value })
          }
          value={contact?.addressInfo}
        />
        <div className="address-info flex flex-row justify-between items-center gap-5 w-full mt-6 ">
          <div className="sub-distraict  w-1/4">
            <label className="text-sm">SUB DISTRICT</label>
            <InputThaiAddress.District
              value={contact['district']}
              onChange={handleChange('district')}
              onSelect={handleSelect}
            />
          </div>
          <div className="district w-1/4">
            <label className="text-sm">DISTRICT</label>
            <InputThaiAddress.Amphoe
              value={contact['amphoe']}
              onChange={handleChange('amphoe')}
              onSelect={handleSelect}
            />
          </div>
          <div className="province  w-1/4">
            <label className="text-sm">PROVINCE</label>
            <InputThaiAddress.Province
              value={contact['province']}
              onChange={handleChange('province')}
              onSelect={handleSelect}
            />
          </div>
          <div className="ziplcode  w-1/4">
            <label className="text-sm">POSTAL CODE</label>
            <InputThaiAddress.Zipcode
              value={contact['zipcode']}
              onChange={handleChange('zipcode')}
              onSelect={handleSelect}
            />
          </div>
        </div>
        <div className="social-info mt-5 flex items-center justify-between gap-7">
          <div className="facebook w-1/3">
            <label htmlFor="facebook" className="text-sm">
              FACEBOOK
            </label>
            <Input
              type="text"
              name="facebook"
              onChange={(e) =>
                setContact({ ...contact, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="line w-1/3">
            <label htmlFor="lineId " className="text-sm">
              LINE ID
            </label>
            <Input
              type="text"
              name="lineId"
              onChange={(e) =>
                setContact({ ...contact, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="instagram w-1/3">
            <label htmlFor="instagram" className="text-sm">
              INSTAGRAM
            </label>
            <Input
              type="text"
              name="instagram"
              onChange={(e) =>
                setContact({ ...contact, [e.target.name]: e.target.value })
              }
            />
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contact;
