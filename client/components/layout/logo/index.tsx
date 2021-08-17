import Link from '@ui/link';
import Text from '@ui/text';

import styles from './logo.module.css';

const randomEmojiArray = [
  '🌱',
  '🍭',
  '💡',
  '🥦',
  '👩‍💻',
  '🙀',
  '🦄',
  '🍀',
  '🌈',
  '🏕',
];

const Logo: React.FC = () => {
  return (
    <Link to="/" className={styles.root}>
      <Text bold size="18">
        helgastogova {randomEmojiArray[Math.floor(Math.random() * 10)]}
      </Text>
    </Link>
  );
};

export default Logo;
