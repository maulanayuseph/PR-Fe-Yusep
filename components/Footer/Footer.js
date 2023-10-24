import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import ScrollAnimation from 'react-scroll-animation-wrapper';
// eslint-disable-next-line no-unused-vars
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import { withTranslation } from '~/i18n';
import logo from '~/public/images/unisex-logo.svg';
import brand from '~/public/text/brand';
import { useText } from '~/theme/common';
import useStyles from './footer-style';
import ContactForm from '../Contact/Form';

function Footer(props) {
  const classes = useStyles();
  const text = useText();
  const { t } = props;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className={classes.root}>
      <Container maxWidth="lg" component="footer">
        <Grid container spacing={6} direction={isMobile ? 'column-reverse' : 'row'}>
          <Grid item xs={12} md={5}>
            <ScrollAnimation
              animateOnce
              animateIn="fadeInLeftShort"
              offset={100}
              delay={200}
              duration={0.3}
            >
              <div>
                <div className={classes.logo}>
                  <img src={logo} alt="logo" />
                  <Typography variant="h3" className={text.title}>
                    {brand.unisex.name}
                  </Typography>
                  <Typography variant="h4" className={text.subtitle}>
                    {brand.unisex.title}
                  </Typography>
                </div>
                <div className={classes.socmed}>
                  <Link href={brand.unisex.facebook}>
                    <IconButton aria-label="Delete" className={classes.margin} size="small">
                      <i className={clsx('ion-logo-facebook', classes.fb)} />
                    </IconButton>
                  </Link>
                  <Link href={brand.unisex.instagram}>
                    <IconButton aria-label="Delete" className={classes.margin} size="small">
                      <i className={clsx('ion-logo-instagram', classes.ig)} />
                    </IconButton>
                  </Link>
                  <Link href={brand.unisex.linkedin}>
                    <IconButton aria-label="Delete" className={classes.margin} size="small">
                      <i className={clsx('ion-logo-linkedin', classes.in)} />
                    </IconButton>
                  </Link>
                </div>
                <div className={classes.contact}>
                  <Typography className={text.paragraph}>
                    {t('common:unisex-landing.footer_contact')}
                    <br />
                    {brand.unisex.noHP}
                  </Typography>
                  <Divider className={classes.divider} />
                  <Typography className={text.paragraph}>
                    {t('common:unisex-landing.footer_hello')}
                    <br />
                    {brand.unisex.name}
                  </Typography>
                </div>
              </div>
            </ScrollAnimation>
          </Grid>
          <Grid item xs={12} md={7}>
            <ScrollAnimation
              animateOnce
              animateIn="fadeInRightShort"
              offset={100}
              delay={200}
              duration={0.3}
            >
              <div>
                <ContactForm />
              </div>
            </ScrollAnimation>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Footer.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['unisex-landing'])(Footer);
