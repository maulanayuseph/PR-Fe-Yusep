import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Lightbox from 'react-image-lightbox';
import Container from '@material-ui/core/Container';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Carousel from 'react-slick';
// eslint-disable-next-line no-unused-vars
import clsx from 'clsx';
import imgAPI from '~/public/images/imgAPI';
import { withTranslation } from '~/i18n';
import ImageThumbCard from '../Cards/ImageThumb';
import Title from '../Title';
import useStyle from './gallery-style';

const portfolio = [
  {
    img: imgAPI.unisex[1],
    title: 'Alexus Porfile',
    link: 'iluxi',
    size: 'short',
    category: 'cat1'
  },
  {
    img: imgAPI.unisex[2],
    title: 'LUDESIGN',
    link: 'Ludesign',
    size: 'long',
    category: 'cat2'
  },
  {
    img: imgAPI.unisex[3],
    title: 'HAZEL',
    link: 'Hazel',
    size: 'short',
    category: 'cat2'
  },
  {
    img: imgAPI.unisex[4],
    title: 'FLOWER',
    link: 'Flower',
    size: 'short',
    category: 'cat1'
  },
  {
    img: imgAPI.unisex[5],
    title: 'SPAREPART',
    link: 'Sparepart',
    size: 'long',
    category: 'cat2'
  },
];

function Gallery(props) {
  const classes = useStyle();
  const { t } = props;
  const [data, setData] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [isLoaded, setLoaded] = useState(true);
  const [filter, setFilter] = useState('all');

  // Image Gallery
  const [photoIndex, setPhotoIndex] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setData(portfolio);
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 1,
    arrows: false
  };

  const filterChildren = name => {
    setData([]);
    setTimeout(() => {
      if (name !== 'all') {
        const filteredData = portfolio.filter(item => item.category === name);
        setData(filteredData);
        setFilter(name);
      } else {
        setData(portfolio);
        setFilter('all');
      }
    }, 1);
  };

  function onMovePrevRequest() {
    setPhotoIndex((photoIndex + data.length - 1) % data.length);
  }

  function onMoveNextRequest() {
    setPhotoIndex((photoIndex + data.length + 1) % data.length);
  }

  function showPopup(index) {
    setOpen(true);
    setPhotoIndex(index);
  }

  return (
    <div className={classes.root}>
      {open && (
        <Lightbox
          mainSrc={data[photoIndex].img}
          nextSrc={data[(photoIndex + 1) % data.length].bg || data[(photoIndex + 1) % data.length].logo}
          prevSrc={data[(photoIndex + 1) % data.length].logo || null}
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={onMovePrevRequest}
          onMoveNextRequest={onMoveNextRequest}
        />
      )}
      <Container>
        <Title>
          {t('common:unisex-landing.gallery_title')}
          <strong>
            {t('common:unisex-landing.gallery_titleBold')}
          </strong>
        </Title>
        <div className={classes.filter}>
          <Button
            onClick={() => filterChildren('all')}
            className={filter === 'all' ? classes.selected : ''}
          >
            All
          </Button>
          <Button
            onClick={() => filterChildren('cat1')}
            className={filter === 'cat1' ? classes.selected : ''}
          >
            Landing Page
          </Button>
          <Button
            onClick={() => filterChildren('cat2')}
            className={filter === 'cat2' ? classes.selected : ''}
          >
            Website
          </Button>
        </div>
        <Hidden xsDown>
          <div className={classes.massonry}>
            {data.map((item, index) => (
              <div
                className={classes.item}
                key={index.toString()}
                id={index.toString()}
              >
                <ScrollAnimation
                  animateOnce
                  animateIn="fadeInUpShort"
                  offset={-50}
                  delay={200 + (100 * index)}
                  duration={0.3}
                >
                  <ImageThumbCard
                    img={item.img}
                    title={item.title}
                    link={item.link}
                    size={item.size}
                    openPopup={() => showPopup(index)}
                  />
                </ScrollAnimation>
              </div>
            ))}
          </div>
          {data.length < 1 && <Typography variant="button" component="p" align="center">{t('common:unisex-landing.gallery_nodata')}</Typography>}
        </Hidden>
        <Hidden smUp>
          <Carousel {...settings}>
            {data.map((item, index) => (
              <div
                className={classes.itemCarousel}
                key={index.toString()}
              >
                <ImageThumbCard
                  img={item.img}
                  title={item.title}
                  link={item.link}
                  size={item.size}
                  openPopup={() => showPopup(index)}
                />
              </div>
            ))}
          </Carousel>
        </Hidden>
      </Container>
    </div>
  );
}

Gallery.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['unisex-landing'])(Gallery);
