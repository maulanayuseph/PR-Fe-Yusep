import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Carousel from 'react-slick';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import { withTranslation } from '~/i18n';
import { useText } from '~/theme/common';
import Title from '../Title';
import BlogPostCard from '../Cards/BlogPost';
import useStyle from './blog-style';
import imgApi from '~/public/images/imgAPI';

const blogData = [
  {
    img: imgApi.photo[0],
    title: 'Humas Jabar',
    desc: 'Wagub Jabar Tinjau Vaksinasi Booster di Stadion Patriot Candrabhaga',
    linkBlog: 'https://pikobar.jabarprov.go.id/articles/wagub-jabar-tinjau-vaksinasi-booster-di-stadion-patriot-candrabhaga-artcl.kz996rrw3utholnmgn8'
  },
  {
    img: imgApi.photo[1],
    title: 'Liputan 6',
    desc: 'Australia, Kanada Wajibkan Tes COVID-19 bagi Pelaku Perjalanan dari China',
    linkBlog: 'https://pikobar.jabarprov.go.id/articles/australia-kanada-wajibkan-tes-covid-19-bagi-pelaku-perjalanan-dari-china-artcl.lceioqlg7quv84mko2o'
  },
  {
    img: imgApi.photo[2],
    title: 'Humas Jabar',
    desc: 'Ridwan Kamil Apresiasi Kerja Sama dengan PWNU Jawa Barat Bangun Peradaban Jawa Barat',
    linkBlog: 'https://jabarprov.go.id/berita/ridwan-kamil-apresiasi-kerja-sama-dengan-pwnu-jawa-barat-bangun-peradaban-jawa-barat-6558'
  },
  {
    img: imgApi.photo[3],
    title: 'Admin',
    desc: 'Kinerja Sektor Jasa Keuangan Jawa Barat yang Stabil dan Semakin Bertumbuh Positif',
    linkBlog: 'https://jabarprov.go.id/berita/kinerja-sektor-jasa-keuangan-jawa-barat-yang-stabil-dan-semakin-bertumbuh-positif-2899'
  },
  {
    img: imgApi.photo[4],
    title: 'Diskominfo',
    desc: 'Fasilitasi UMKM, Pemdes Wanajaya Gelar Festival Kuliner',
    linkBlog: 'https://jabarprov.go.id/berita/fasilitasi-umkm-pemdes-wanajaya-gelar-festival-kuliner-8043'
  },
  {
    img: imgApi.photo[5],
    title: 'Humas Jabar',
    desc: 'Gubernur Ridwan Kamil Dampingi Presiden Jokowi Cek Harga Jelang Natal dan Tahun Baru di Pasar Cigombong Bogor',
    linkBlog: 'https://jabarprov.go.id/berita/gubernur-ridwan-kamil-dampingi-presiden-jokowi-cek-harga-jelang-natal-dan-tahun-baru-di-p-8029'
  },
];

function Blog(props) {
  const slider = useRef(null);
  const { t } = props;

  const theme = useTheme();
  const text = useText();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const classes = useStyle();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 4,
    arrows: false,
    pauseOnHover: true,
    variableWidth: true,
    responsive: [{
      breakpoint: 1080,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  };

  useEffect(() => {
    if (theme.direction === 'rtl') {
      const lastSlide = Math.floor(blogData.length - 2);
      slider.current.slickGoTo(lastSlide);
    }
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.floatingTitle}>
        <Title>
          {t('common:unisex-landing.blog_title')}
          &nbsp;
          <strong>
            {t('common:unisex-landing.blog_titlebold')}
          </strong>
        </Title>
        <Typography gutterBottom className={text.paragraph}>
          {t('common:unisex-landing.blog_desc')}
        </Typography>
        <Button className={classes.link} color="primary" href="#">maulanayuseph</Button>
      </div>
      <div className={classes.sliderWrap}>
        <div className={classes.carousel}>
          <IconButton
            className={clsx(classes.nav, classes.prev)}
            onClick={() => slider.current.slickPrev()}
          >
            <i className="ion-ios-arrow-back" />
          </IconButton>
          <Carousel ref={slider} {...settings}>
            {isDesktop && (
              <div className={clsx(classes.item, classes.itemPropsFirst)}>
                <div />
              </div>
            )}
            {blogData.map((item, index) => (
              <div key={index.toString()} className={classes.item}>
                <BlogPostCard
                  img={item.img}
                  title={item.title}
                  desc={item.desc}
                  link={item.linkBlog}
                />
              </div>
            ))}
            {isDesktop && (
              <div className={clsx(classes.item, classes.itemPropsLast)}>
                <div />
              </div>
            )}
          </Carousel>
          <IconButton
            className={clsx(classes.nav, classes.next)}
            onClick={() => slider.current.slickNext()}
          >
            <i className="ion-ios-arrow-forward" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

Blog.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['unisex-landing'])(Blog);
