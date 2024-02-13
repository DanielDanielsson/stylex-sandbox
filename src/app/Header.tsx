import * as stylex from '@stylexjs/stylex';
import { colors } from '../config/tokens.stylex';

const styles = stylex.create({
  header: {
    display: 'flex',
    position: 'relative',
    height: '50px',
    width: '100%',
    color: colors.mainText,
    padding: '0 15px',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: `0.5px solid ${colors.mainText}`,
    backgroundColor: colors.mainBackground,
  },
  logo: {
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%, 0)',
  },
  navigation: {
    display: 'flex',
    gap: '15px',
  },
  linkWrapper: {
    display: 'flex',
    gap: '15px',
    listStyleType: 'none',
    textDecoration: 'none',
  },
  links: {
    cursor: 'pointer',
    padding: '15px 10px',
  },
});

export const Header = () => (
  <header {...stylex.props(styles.header)}>
    <nav>
      <ul {...stylex.props(styles.linkWrapper)}>
        <li {...stylex.props(styles.links)}>link 1</li>
        <li {...stylex.props(styles.links)}>link 2</li>
        <li {...stylex.props(styles.links)}>Link 3</li>
        <li {...stylex.props(styles.links)}>Link 4</li>
      </ul>
    </nav>
    <div {...stylex.props(styles.linkWrapper)}>
      <span>My account</span>
      <span>Basket</span>
    </div>
    <span {...stylex.props(styles.logo)}>Stylex Sandbox</span>
  </header>
);
