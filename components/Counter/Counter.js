import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CountUp from 'react-countup';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { withTranslation } from '~/i18n';
import { useText } from '~/theme/common';
import useStyles from './counter-style';

function Counter(props) {
  const classes = useStyles();
  const text = useText();
  const { t } = props;
  const [play, setPlay] = useState(false);

  const countup = (val, isPlay) => (
    <span>
      {isPlay ? <CountUp end={val} /> : 0}
    </span>
  );

  const handlePlay = visible => {
    if (visible.inViewport) {
      setTimeout(() => { setPlay(true); }, 500);
    }
  };

  return (
    <Container maxWidth="lg">
      <div className={classes.counterWrap}>
        <Container maxWidth="md">
          <Grid container justifyContent="center" alignItems="center" className={classes.root} spacing={6}>
            <Grid md={4} item>
              <ScrollAnimation
                animateOnce
                animateIn="fadeIn"
                offset={-300}
                afterAnimatedIn={handlePlay}
              >
                <div className={classes.counterItem}>
                  <div className={classes.text}>
                    <i className="ion-ios-briefcase-outline" />
                    <Typography variant="h4" className={text.title}>
                      {countup(123, play)}
                    </Typography>
                  </div>
                  <Typography variant="h6" className={text.subtitle2}>
                    {t('common:unisex-landing.counter_completed')}
                  </Typography>
                </div>
              </ScrollAnimation>
            </Grid>
            <Grid md={4} item>
              <div className={classes.counterItem}>
                <div className={classes.text}>
                  <i className="ion-ios-time-outline" />
                  <Typography variant="h4" className={text.title}>
                    {countup(4567, play)}
                  </Typography>
                </div>
                <Typography variant="h6" className={text.subtitle2}>
                  {t('common:unisex-landing.counter_hour')}
                </Typography>
              </div>
            </Grid>
            <Grid md={4} item>
              <div className={classes.counterItem}>
                <div className={classes.text}>
                  <i className="ion-ios-heart-outline" />
                  <Typography variant="h4" className={text.title}>
                    {countup(89, play)}
                  </Typography>
                </div>
                <Typography variant="h6" className={text.subtitle2}>
                  {t('common:unisex-landing.counter_happy')}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Container>
  );
}

Counter.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['unisex-landing'])(Counter);
