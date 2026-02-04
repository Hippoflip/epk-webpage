import {FC, memo} from 'react';

// import {education, experience, SectionId, skills} from '../../../data/data';
import {SectionId} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
// import {SkillGroup} from './Skills';
// import TimelineItem from './TimelineItem';

const Resume: FC = memo(() => {
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Resume}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <ResumeSection title="Music">
          <p>
            <iframe
              allow="autoplay"
              height="166"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2248504964&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
              width="100%"></iframe>
          </p>
          <p>
            <iframe
              allow="autoplay"
              height="166"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1689568737&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
              width="100%"></iframe>
          </p>
          <p>
            <iframe
              allow="autoplay"
              height="166"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1922931497&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
              width="100%"></iframe>
          </p>
          <p>
            <iframe
              allow="autoplay"
              height="166"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1358193403&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
              width="100%"></iframe>
          </p>
          <p>
            <iframe
              allow="autoplay"
              height="166"
              scrolling="no"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1239784300&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
              width="100%"></iframe>
          </p>
          {/* {education.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title="Photos">
          
          {experience.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title="Videos">
        <iframe width="357" height="634" src="https://www.youtube.com/embed/kh3CM0ZlSAk" title="Hippoflip - Monsters EP (Teaser)" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        <iframe width="357" height="634" src="https://www.youtube.com/embed/Nlf1tRZ7FDc" title="Chimera remix clip" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        <iframe width="357" height="634" src="https://www.youtube.com/embed/VAqgAUUJ3Z0" title="Otherworldly" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skills.map((skillgroup, index) => (
              <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
            ))}
          </div> */}
        </ResumeSection>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
