/* eslint-disable import/no-default-export */
/* eslint-disable react/function-component-definition */
import * as stylex from '@stylexjs/stylex';
import { ThemeButton } from './ThemeButton';
import { Header } from './Header';

const styles = stylex.create({
  main: {
    backgroundColor: '#f2f2f2',
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  wrapper: {
    fontSize: 16,
    lineHeight: 1.5,
    color: 'rgb(60,60,60)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: '100%',
  },
  highlighted: {
    color: 'rebeccapurple',
  },
  button: {
    color: 'white',
  },
});

export default function Home() {
  return (
    <main {...stylex.props(styles.main)}>
      <Header />
      <div {...stylex.props(styles.wrapper)}>
        <ThemeButton label="Click mee!!" xStyles={styles.button} />
      </div>
    </main>
  );
}
