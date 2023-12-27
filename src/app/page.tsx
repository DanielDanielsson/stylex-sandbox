import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  base: {
    fontSize: 16,
    lineHeight: 1.5,
    color: 'rgb(60,60,60)',
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  },
  highlighted: {
    color: 'rebeccapurple',
  },
});

export default function Home() {
  return (
    <main>
      <div {...stylex.props(styles.base, styles.highlighted)}><div>StyleX</div></div>
    </main>
  )
}
