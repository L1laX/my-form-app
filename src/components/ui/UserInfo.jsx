import React from 'react';
import Input from '../common/Input';
import Image from 'next/image';
import CameraIcon from '../../assets/icons/camera.svg';
const UserInfo = ({
  userInput,
  setUserInput,
  profilePicture,
  setProfilePicture,
  coverPicture,
  setCoverPicture,
}) => {
  console.log(userInput);
  return (
    <section className="m-5 p-5 bg-white rounded-lg">
      <section className="header-text">
        <h2 className="text-3xl font-bold">USER INFORMATION</h2>
      </section>
      <form className="mx-auto w-4/5 mt-5 border rounded-lg rounded-t-lg shadow-xl mb-5">
        <div className="cover-background-image">
          {!coverPicture ? (
            <div className="bg-red-300 w-full h-52 rounded-t-lg border-2 border-red-100 relative ">
              <label className=" absolute right-4 bottom-3 w-15 h-15 bg-gray-200 rounded-lg flex items-center gap-5 p-2 hover:cursor-pointer">
                <Image
                  alt="Camara Icon"
                  src={CameraIcon}
                  height={30}
                  width={30}
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setCoverPicture(e.target.files[0])}
                  className="hidden"
                />
                <p className="text-sm">EDIT COVER PHOTO</p>
              </label>
            </div>
          ) : (
            <div className="w-full h-52 rounded-t-lg border-2  relative ">
              <Image
                className="w-full h-full rounded-t-lg  border-2  relative "
                src={
                  typeof coverPicture === 'object'
                    ? URL.createObjectURL(coverPicture)
                    : coverPicture
                }
                alt="profile picture"
                fill={true}
                objectFit="cover"
              />
              <label className=" absolute right-4 bottom-3 w-15 h-15 bg-gray-200 rounded-lg flex items-center gap-5 p-2 hover:cursor-pointer">
                <Image
                  alt="Camara Icon"
                  src={CameraIcon}
                  height={30}
                  width={30}
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setCoverPicture(e.target.files[0])}
                  className="hidden"
                />
                <p className="text-sm">EDIT COVER PHOTO</p>
              </label>
            </div>
          )}
        </div>
        <div className="buttom-section flex justify-around relative mt-5 flex-col items-center mx-auto 2xl:flex-row 2xl:items-start 2xl:mx-0">
          <div className="left-section 2xl:absolute xl:-top-20 xl:left-32 ">
            {!profilePicture ? (
              <div className="bg-gray-500 w-52 h-52 rounded-full  border-2 border-white relative ">
                <label className="absolute -right-4 bottom-9 w-15 h-15 bg-gray-200 rounded-full p-1 hover:cursor-pointer">
                  <Image
                    alt="Camara Icon"
                    src={CameraIcon}
                    height={40}
                    width={40}
                  />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setProfilePicture(e.target.files[0])}
                    className="hidden"
                  />
                </label>
              </div>
            ) : (
              <div className="bg-gray-500 w-52 h-52 rounded-full border-2  border-white relative ">
                <Image
                  className="w-52 h-52 rounded-full border-2 border-red-100 relative"
                  src={
                    typeof profilePicture === 'object'
                      ? URL.createObjectURL(profilePicture)
                      : profilePicture
                  }
                  alt="profile picture"
                  fill={true}
                  objectFit="cover"
                />
                <label className=" absolute -right-4 bottom-9 w-15 h-15 bg-gray-200 rounded-full p-1 hover:cursor-pointer">
                  <Image
                    alt="Camara Icon"
                    src={CameraIcon}
                    height={40}
                    width={40}
                  />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setProfilePicture(e.target.files[0])}
                    className="hidden"
                  />
                </label>
              </div>
            )}
          </div>
          <div className="right-section grid xl:grid-cols-2 grid-cols-1 gap-8 2xl:ml-72 mb-5 mt-5 2xl:mt-0">
            <div className="username-section">
              <label htmlFor="username" className="text-sm">
                USERNAME
              </label>
              <Input
                type="text"
                name="userName"
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    [e.target.name]: e.target.value,
                  })
                }
                className="mt-2"
                value={userInput?.userName}
              />
            </div>
            <div className="nickname-section">
              <label htmlFor="nickname" className="text-sm">
                NICKNAME
              </label>
              <Input
                type="text"
                name="nickName"
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    [e.target.name]: e.target.value,
                  })
                }
                className="mt-2"
                value={userInput?.nickName}
              />
            </div>
            <div className="first-name-section">
              <label htmlFor="firstName" className="text-sm">
                FIRST NAME
              </label>
              <Input
                type="text"
                name="firstName"
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    [e.target.name]: e.target.value,
                  })
                }
                className="mt-2"
                value={userInput?.firstName}
              />
            </div>
            <div className="last-name-section">
              <label htmlFor="lastName" className="text-sm">
                LAST NAME
              </label>
              <Input
                type="text"
                name="lastName"
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    [e.target.name]: e.target.value,
                  })
                }
                className="mt-2"
                value={userInput?.lastName}
              />
            </div>
            <div className="position-section">
              <label htmlFor="position" className="text-sm">
                POSITION
              </label>
              <select
                className="w-full p-2 border rounded-xl border-gray-200 mx-1 "
                name="position"
                value={userInput?.position}
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    [e.target.name]: e.target.value,
                  })
                }
              >
                <option value="" disabled>
                  Please Select
                </option>
                <option value="Junior Developer">Junior Developer</option>
                <option value="Senior Developer">Senior Developer</option>
                <option value="Project Developer">Project Maneger</option>
              </select>
            </div>
            <div className="nationality-section">
              <label htmlFor="nationality" className="text-sm">
                NATIONALITY
              </label>

              <Input
                type="text"
                name="nationality"
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    [e.target.name]: e.target.value,
                  })
                }
                className="mt-2"
                value={userInput?.nationality}
              />
            </div>
            <div className="telephone-section">
              <label htmlFor="telephoneNumber" className="text-sm">
                TELEPHONE NUMBER
              </label>
              <Input
                type="text"
                name="telephoneNumber"
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    [e.target.name]: e.target.value,
                  })
                }
                className="mt-2"
                value={userInput?.telephoneNumber}
              />
            </div>
            <div className="starting-date-section">
              <label htmlFor="startingDate" className="text-sm">
                STARTING DATE{' '}
              </label>
              <Input
                type="date"
                name="startingDate"
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    [e.target.name]: e.target.value,
                  })
                }
                className="mt-2"
                value={userInput?.startingDate}
              />
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default UserInfo;
