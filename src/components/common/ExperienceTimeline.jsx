import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Button from './Button';

const ExperienceTimeline = ({ data, deleteItem }) => {
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
          paddingLeft: 66,
        },
      }}
    >
      {data.map((item, index) => {
        return (
          <TimelineItem key={index}>
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
                <div className="top-content w-[25rem] flex  items-center">
                  <p className="w-3/6"> {item.name}</p>
                  <p className="ml-8 w-1/2">
                    {item.yearStart}-{item.yearEnd}
                  </p>
                  <Button
                    className="text-sm text-center  ml-10 bg-red-400  px-2  rounded-full text-white"
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
