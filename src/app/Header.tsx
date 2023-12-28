import * as stylex from '@stylexjs/stylex';
// import type { StyleXStyles } from '@stylexjs/stylex';

const styles = stylex.create({
  header: {
    display: 'flex',
    position: 'relative',
    height: '50px',
    width: '100%',
    color: 'black',
    padding: '0 15px',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '0.5px solid black',
  },
  logo: {
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%, 0)',
  },
  navigation: {
    display: 'flex',
    gap: '15px',
    textDecoration: 'none',
    listStyleType: 'none',
  },
  links: {
    display: 'flex',
    gap: '15px',
  },
});

export const Header = () => (
  <header {...stylex.props(styles.header)}>
    <nav>
      <ul {...stylex.props(styles.navigation)}>
        <li>link 1</li>
        <li>link 2</li>
        <li>link 3</li>
      </ul>
    </nav>
    <div {...stylex.props(styles.links)}>
      <span>My account</span>
      <span>Basket</span>
    </div>
    <span {...stylex.props(styles.logo)}>Stylex Sandbox</span>
  </header>
);
