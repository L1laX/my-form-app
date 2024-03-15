'use client';

import UserInfo from '@/components/ui/UserInfo';
import Contact from '@/components/ui/Contact';
import Education from '@/components/ui/Education';
import { useEffect, useState } from 'react';
import Experience from '@/components/ui/Experience';
import Skill from '@/components/ui/Skill';
import Interests from '@/components/ui/Interests';
import Guild from '@/components/ui/Guild';
import Button from '@/components/common/Button';
import axios from 'axios';
import { supabase } from '../libs/supabase';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
export default function Home() {
  const [userInput, setUserInput] = useState({
    userName: '',
    nickName: '',
    firstName: '',
    lastName: '',
    position: '',
    telephoneNumber: '',
    nationality: '',
    startingDate: '',
  });
  const [profilePicture, setProfilePicture] = useState(null);
  const [coverPicture, setCoverPicture] = useState(null);
  const [oldProfilePicture, setOldProfilePicture] = useState(null);
  const [oldCoverPicture, setOldCoverPicture] = useState(null);
  const [contact, setContact] = useState({
    addressInfo: '',
    district: '',
    amphoe: '',
    province: '',
    zipcode: '',
    facebook: '',
    lineId: '',
    instagram: '',
  });
  const [educationInfo, setEducationInfo] = useState([]);
  const [experienceInfo, setExperienceInfo] = useState([]);
  const [skillInfo, setSkillInfo] = useState([]);
  const [interestsInfo, setInterestsInfo] = useState([]);
  const [guildInfo, setGuildInfo] = useState([]);
  async function handleSubmit(e) {
    e.preventDefault();
    const id = toast.loading('Sending...');
    toast.update(id, {
      render: `Uploading image ...`,
    });
    const uploadedProfile = await uploadImage(profilePicture, 'profile');
    const uploadedCover = await uploadImage(coverPicture, 'cover');
    toast.update(id, {
      render: `Upload image success`,
      type: 'success',
    });
    const data = {
      userInput,
      profilePicture: uploadedProfile,
      coverPicture: uploadedCover,
      contact,
      educationInfo,
      experienceInfo,
      skillInfo,
      interestsInfo,
      guildInfo,
    };
    toast.update(id, { render: 'Sending...', type: 'info' });
    const result = await axios.put('/api', data);
    toast.update(id, {
      render: 'Success',
      type: 'success',
      isLoading: false,
      autoClose: 2000,
    });
  }

  const getData = async () => {
    const id = toast.loading('Loading...');
    const result = await axios.get('/api');
    const {
      Education,
      Experience,
      GuildsInfo,
      Interests,
      Skill,
      userProfileImage,
      userCoverImage,
      ...rest
    } = result.data.data;
    setUserInput({
      userName: rest.userName,
      nickName: rest.nickName,
      firstName: rest.firstName,
      lastName: rest.lastName,
      position: rest.position,
      telephoneNumber: rest.telephoneNumber,
      nationality: rest.nationality,
      startingDate: new Date(rest.startingDate).toISOString().slice(0, 10),
    });
    setProfilePicture(userProfileImage);
    setCoverPicture(userCoverImage);
    setOldProfilePicture(userProfileImage);
    setOldCoverPicture(userCoverImage);
    setContact({
      addressInfo: rest.addressInfo,
      district: rest.district,
      amphoe: rest.amphoe,
      province: rest.province,
      zipcode: rest.zipcode,
      facebook: rest.facebook,
      lineId: rest.lineId,
      instagram: rest.instagram,
    });
    setEducationInfo(Education);
    setExperienceInfo(Experience);
    setSkillInfo(Skill);
    setInterestsInfo(Interests);
    setGuildInfo(GuildsInfo);
    toast.update(id, {
      render: 'Success',
      type: 'success',
      isLoading: false,
      autoClose: 2000,
    });
  };
  const fileNames = (i) => {
    const item = i + '';
    const publicIndex = item.split('/').findIndex((el) => el === 'public');
    const data = item
      .split('/')
      .filter((el, i) => {
        if (i > publicIndex + 1) {
          return el;
        }
      })
      .join('/');
    return data;
  };
  const findFolder = (item) => {
    const arr = fileNames(item).split('/');
    arr.pop();
    return arr.join('/');
  };
  const uploadImage = async (inputImage, type) => {
    if (inputImage === null) {
      return;
    }
    const uploadedImage = [];
    let fileName = '';
    let folderName = '';
    const newFileName = uuidv4();
    console.log(inputImage, typeof inputImage);
    if (typeof inputImage === 'object') {
      if (!oldCoverPicture || !oldProfilePicture) {
        if (type === 'profile') {
          fileName = fileNames(oldProfilePicture);
          folderName = findFolder(oldProfilePicture);
        }
        if (type === 'cover') {
          fileName = fileNames(oldCoverPicture);
          folderName = findFolder(oldCoverPicture);
        }
        try {
          const deleteImage = await supabase.storage
            .from('Image')
            .remove(fileName);
        } catch (e) {
          console.error(e);
        }
      }
      if (!oldProfilePicture && type === 'profile') {
        folderName = 'profile';
      }
      if (!oldCoverPicture && type === 'cover') {
        folderName = 'cover';
      }
      try {
        const image = await supabase.storage
          .from('Image')
          .upload(`${folderName}/${newFileName}`, inputImage);
        if (image?.error) {
          return console.error(image.error);
        }
        const url = supabase.storage
          .from('Image')
          .getPublicUrl(image.data.path);
        uploadedImage.push(url.data.publicUrl);
      } catch (error) {
        console.error(error);
      }
    } else {
      uploadedImage.push(inputImage);
    }
    console.log(uploadedImage);

    return uploadedImage[0];
  };
  console.log(userInput.startingDate);
  useEffect(() => {
    getData();
  }, []);
  return (
    <main className="h-screen w-full bg-gray-100">
      <header className="flex w-full justify-end mt-2 pr-5">
        <Button name={`SAVE`} onClick={handleSubmit}></Button>
      </header>
      <UserInfo
        userInput={userInput}
        setUserInput={setUserInput}
        profilePicture={profilePicture}
        setProfilePicture={setProfilePicture}
        coverPicture={coverPicture}
        setCoverPicture={setCoverPicture}
      />
      <Contact contact={contact} setContact={setContact} />
      <Education
        educationInfo={educationInfo}
        setEducationInfo={setEducationInfo}
      />
      <Experience
        experienceInfo={experienceInfo}
        setExperienceInfo={setExperienceInfo}
      />
      <Skill skillInfo={skillInfo} setSkillInfo={setSkillInfo} />
      <Interests
        interestsInfo={interestsInfo}
        setInterestsInfo={setInterestsInfo}
      />
      <Guild guildInfo={guildInfo} setGuildInfo={setGuildInfo} />
      <ToastContainer position="top-center" />
      <footer className=" mt-5 h-5"></footer>
    </main>
  );
}
