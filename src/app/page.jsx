'use client';

import UserInfo from '@/components/ui/UserInfo';
import Contact from '@/components/ui/Contact';
import Education from '@/components/ui/Education';
import { useState } from 'react';
import Experience from '@/components/ui/Experience';
import Skill from '@/components/ui/Skill';
import Interests from '@/components/ui/Interests';
import Guild from '@/components/ui/Guild';
import Button from '@/components/common/Button';
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
  const [contact, setContact] = useState({
    district: '',
    amphoe: '',
    province: '',
    zipcode: '',
    addressInfo: '',
    facebook: '',
    lineId: '',
    instagram: '',
  });
  const [educationInfo, setEducationInfo] = useState([
    { id: 1, name: 'University name', year: 1999 },
    { id: 2, name: 'University name', year: 1999 },
  ]);
  const [experienceInfo, setExperienceInfo] = useState([
    {
      id: 1,
      name: 'Coporation name',
      yearStart: 1999,
      yearEnd: 2005,
      position: 'Frontend Developer',
    },
    {
      id: 2,
      name: 'Coporation name',
      yearStart: 1999,
      yearEnd: 2005,
      position: 'Frontend Developer',
    },
  ]);
  const [skillInfo, setSkillInfo] = useState([
    { id: 1, name: 'python', level: 7 },
    { id: 2, name: 'react', level: 5 },
  ]);
  const [interestsInfo, setInterestsInfo] = useState([
    { id: 1, name: 'MUSIC' },
    { id: 2, name: 'ANIME' },
  ]);
  const [guildInfo, setGuildInfo] = useState([
    { id: 1, name: 'K-POP' },
    { id: 2, name: 'T-POP' },
  ]);
  function handleSubmit(e) {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  }
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
      <footer className=" mt-5 h-5"></footer>
    </main>
  );
}
