import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import Button from './Button';
export default function OppositeContentTimeline({ data, deleteItem }) {
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.4,
        },
      }}
    >
      {data.map((item, index) => {
        return (
          <TimelineItem key={index}>
            <TimelineOppositeContent color="text.secondary">
              {item.year}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot
                sx={{
                  backgroundColor: '#33ab9f',
                }}
              />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="content flex justify-between w-[20rem]">
                {item.name}
                <Button
                  className="text-md ml-10 bg-red-400 py-0 px-2 rounded-full text-white"
                  onClick={() => deleteItem(item.id)}
                  name={'x'}
                />
              </div>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
}
