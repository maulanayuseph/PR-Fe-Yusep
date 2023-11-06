import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
// eslint-disable-next-line no-unused-vars
import clsx from 'clsx';
import Header from '../components/Header';
import BannerNav from '../components/BannerNav';
import About from '../components/About';
import Timeline from '../components/Timeline';
import Counter from '../components/Counter';
import Services from '../components/Services';
// eslint-disable-next-line no-unused-vars
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import PageNav from '../components/PageNav';
import Decoration from '../components/Parallax/Decoration';
import Notification from '../components/Notification';
import brand from '../public/text/brand';

const sectionMargin = margin => (margin * 20);
const useStyles = makeStyles(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.type === 'dark' ? theme.palette.background.dark : theme.palette.background.paper,
  },
  greyBg: {
    paddingTop: theme.spacing(10)
  },
  spaceBottom: {
    marginBottom: sectionMargin(6),
    [theme.breakpoints.down('sm')]: {
      marginBottom: sectionMargin(theme.spacing() / 2)
    }
  },
  spaceBottomShort: {
    marginBottom: sectionMargin(theme.spacing() / 2)
  },
  spaceTop: {
    marginTop: sectionMargin(6),
    [theme.breakpoints.down('sm')]: {
      marginTop: sectionMargin(3)
    }
  },
  spaceTopShort: {
    marginTop: sectionMargin(theme.spacing() / 2)
  },
  containerWrap: {
    marginTop: -40,
    '& > section': {
      position: 'relative'
    }
  },
  parallaxWrap: {
    position: 'relative'
  },
  bottomDeco: {
    top: -200,
    position: 'absolute',
    width: '100%',
    height: 'calc(100% + 200px)'
  }
}));

function Landing(props) {
  const classes = useStyles();
  const { onToggleDark, onToggleDir } = props;
  return (
    <React.Fragment>
      <Head>
        <title>
          { brand.unisex.name }
          &nbsp;-&nbsp;
          { brand.unisex.logoText }
        </title>
      </Head>
      <CssBaseline />
      <section id="home" />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <section id="home">
          <BannerNav
            onToggleDark={onToggleDark}
            onToggleDir={onToggleDir}
          />
        </section>
        <section id="about">
          <About />
          <Timeline />
          <Counter />
        </section>
        <div className={classes.greyBg}>
          <div className={classes.parallaxWrap}>
            <Decoration />
            <section id="services">
              <Services />
            </section>
          </div>
          <div className={classes.parallaxWrap}>
            <div className={classes.bottomDeco}>
              <Decoration />
            </div>
            <section id="contact" className={classes.spaceTop}>
              <Footer />
            </section>
          </div>
        </div>
        <Hidden mdDown>
          <Notification />
        </Hidden>
        <Hidden smDown>
          <PageNav />
        </Hidden>
      </div>
      <script src="/scripts/vanta/three.r119.min.js" />
      <script src="/scripts/vanta/vanta.halo.min.js" />
      <script src="/scripts/particles/particles.min.js" />
      <script src="/scripts/particles/stats.min.js" />
    </React.Fragment>
  );
}

Landing.getInitialProps = async () => ({
  namespacesRequired: ['common', 'unisex-landing'],
});

Landing.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

export default Landing;
