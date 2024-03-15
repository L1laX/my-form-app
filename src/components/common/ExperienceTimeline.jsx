import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import DeleteButton from './DeleteButton';

const ExperienceTimeline = ({ data, deleteItem }) => {
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.6,
        },
      }}
    >
      {data.map((item, index) => {
        return (
          <TimelineItem key={index}>
            <TimelineOppositeContent color="text.secondary"></TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot
                sx={{
                  backgroundColor: '#33ab9f',
                }}
              />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="content-box border w-fit px-4 py-1 rounded-lg">
                <div className="top-content xl:w-[25rem] flex items-center ">
                  <p className="w-3/6"> {item.name}</p>
                  <p className="xl:ml-8 w-1/2">
                    {item.yearStart}-{item.yearEnd}
                  </p>
                  <DeleteButton
                    className="text-sm text-center  ml-10 bg-red-400 px-2  rounded-full text-white"
                    onClick={() => deleteItem(item.id)}
                    name={'x'}
                  />
                </div>
                <div className="bottom-content text-sm opacity-70">
                  {item.position}
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
};

export default ExperienceTimeline;
