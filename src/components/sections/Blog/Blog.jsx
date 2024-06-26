import { Link } from 'react-router-dom';

import { Heading } from '../../ui/Heading';
import { ImageFrame } from '../../ui/ImageFrame';
import { Label } from '../../ui/Label';
import { Title } from '../../ui/Title';
import { Button } from '../../ui/Button';
import { ObserverWrapper } from '../../ui/ObserverWrapper';
import { primaryColorText, secondaryColorText, yellowColor } from '../../../styles/styleVariable';
import { blogsData as data } from '../../../statics/blogsData';

import styles from './Blog.module.scss';

export default function Blog() {
  return (
    <section className={styles.blog_section}>
      <ObserverWrapper>
        <div className={styles.wave_box}></div>
        <div className={styles.blog_inner}>
          <Heading color={primaryColorText}>My Words</Heading>
          <div className={styles.blogs_wrapper}>
            {data.map((blog) => (
              <Post blog={blog} key={blog.id} />
            ))}
          </div>
        </div>
      </ObserverWrapper>
    </section>
  );
}

function Post({ blog }) {
  const { text, title, date, url, imagePath, imageDescription, id } = blog;
  return (
    <article className={styles.post_card}>
      <div className={styles.image_wrapper}>
        <ImageFrame
          imagePath={imagePath}
          borderColor={primaryColorText.color}
          description={imageDescription}
        />
      </div>
      <Label labelText={date} />
      <Title text={title} />
      <p className={styles.post_text}>{text.split(' ').slice(0, 40).join(' ')}...</p>
      {/* <Link to={`/blog/${id}/`}> */}
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Button
          iconPath="/icons/doc.svg"
          hoverColor={yellowColor.color}
          altText="read article icon image"
        >
          Read Article
        </Button>
      </a>
      {/* </Link> */}
    </article>
  );
}
