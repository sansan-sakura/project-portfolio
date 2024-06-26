import { whiteColorText } from '../../../styles/styleVariable';
import { Heading } from '../../ui/Heading';
import { skillsData as data } from '../../../statics/skillsData';

import styles from './Skills.module.scss';
import { ObserverWrapper } from '../../ui/ObserverWrapper';

export default function Skills() {
  return (
    <section className={styles.skills_section}>
      <ObserverWrapper>
        <div className={styles.skills_inner}>
          <Heading color={whiteColorText} alignStart="center">
            Skills
          </Heading>
          <div className={styles.skills_card_wrapper}>
            {data.map((el) => (
              <SkillCard props={el} key={el.tag} />
            ))}
          </div>
        </div>
      </ObserverWrapper>
    </section>
  );
}

function SkillCard(props) {
  const { color, tag, skills } = props.props;

  return (
    <div className={styles.skill_card}>
      <Tag background={color} text={tag} />
      <ul className={styles.skills_ul}>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

function Tag({ text, background }) {
  return (
    <p className={styles.tag_wrapper} style={{ backgroundColor: background }}>
      {text}
    </p>
  );
}
