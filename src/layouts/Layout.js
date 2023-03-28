import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import 'bootstrap-italia/dist/css/bootstrap-italia.min.css';
import './main.scss';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  icon: {
    composes: 'd-none d-lg-inline',
    backgroundColor: 'var(--white)',
    borderRadius: '100%',
    fill: 'var(--primary)',
    height: '2.6rem',
    padding: '0.8rem',
    width: '2.6rem',
  },
});

export const Layout = ({ children }) => {
  const classes = useStyles();

  return (
<html className="no-js acfxch idc0_343" prefix="og: http://ogp.me/ns#" lang="it"><head>
  <meta charSet="utf-8"/>
  <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>

  <title>
    Interoperabilità
  </title>

<meta property="og:title" content="API" />
<meta name="author" content="Dipartimento per la Trasformazione Digitale e AgID"/>
<meta property="og:locale" content="it"/>
<meta name="description" content="Sviluppiamo i servizi pubblici, insieme"/>
<meta property="og:description" content="Sviluppiamo i servizi pubblici, insieme"/>
<link rel="canonical" href="https://next.developers.italia.it/it/api.html"/>
<meta property="og:site_name" content="Developers Italia"/>
<meta name="twitter:card" content="summary"/>
<meta property="twitter:title" content="API"/>
<meta name="twitter:site" content="@developersITA"/>
<meta name="twitter:creator" content="@Dipartimento per la Trasformazione Digitale e AgID"/>

  <link rel="alternate" type="application/atom+xml" title="Developers Italia (it)" href="https://developers.italia.it/it/news/feed.atom"/>
  <link rel="alternate" type="application/atom+xml" title="Developers Italia (en)" href="https://developers.italia.it/en/news/feed.atom"/>

  <link rel="apple-touch-icon" sizes="180x180" href="/assets/icons/apple-touch-icon.png"/>
  <link rel="icon" type="image/png" href="/assets/icons/favicon-32x32.png" sizes="32x32"/>
  <link rel="icon" type="image/png" href="/assets/icons/favicon-16x16.png" sizes="16x16"/>
  <link rel="manifest" href="https://developers.italia.it/manifest.json"/>
  <link rel="mask-icon" href="/assets/icons/safari-pinned-tab.svg"/>
  <link rel="shortcut icon" href="/assets/icons/favicon.ico"/>
  <meta name="apple-mobile-web-app-title" content="Developers Italia"/>
  <meta name="application-name" content="Developers Italia"/>
  <meta name="msapplication-config" content="/assets/icons/browserconfig.xml"/>
  <meta name="theme-color" content="#0066cc"/>

  <script>
    window.lang = "it";
  </script>
</head>

<body className="layout-api">

<div className="u-background-95">
  <div id="main" className="u-layout-wide u-layoutCenter">

<header className="primary-bg">
  <div className="Header-banner primary-bg-a7 position-relative">
    <div className="Header-owner Headroom-hideme u-flex u-flexJustifyBetween u-flexAlignItemsCenter">
      <div className="Header-owner__institutions container d-flex flex-row px-4 px-md-0">

        <div className="d-flex align-items-center">
          <a href="https://innovazione.gov.it/dipartimento/" className="py-2 d-inline-block">
            <span className="d-inline-block d-md-none d-lg-none white-color">
              DTD
            </span>
            <span className="d-none d-md-inline-block white-color">
              Dipartimento per la Trasformazione Digitale
            </span>
          </a>
          <span className="white-color py-2 d-inline-block">&nbsp;+&nbsp;</span>
          <a href="https://www.agid.gov.it" className="py-2 d-inline-block">
            <span className="d-inline-block white-color">
              AgID
            </span>
          </a>
          <a href="#" className="d-inline-block d-lg-none py-2 text-white" aria-label="External links" data-activeid="slimDropdown" role="button" data-activate-element="">
            <svg className="icon icon-white icon-sm">
              <use xlinkHref="/assets/sprite.svg#it-expand"></use>
            </svg>
          </a>
        </div>

<ul className="list-inline mt-0 mb-0 ml-auto Header-external d-none d-lg-flex">

    <li className="list-inline-item m-0 py-2 px-3 d-flex align-items-center delimiter first-delimiter">

        <a target="_blank" href="https://pianotriennale-ict.italia.it">Piano Triennale</a>

    </li>

    <li className="list-inline-item m-0 py-2 px-3 d-flex align-items-center label ">

        <span>Le community</span>

    </li>

    <li className="list-inline-item m-0 py-2 px-3 d-flex align-items-center current ">

        <a target="_blank" href="https://developers.italia.it/">Developers</a>

    </li>

    <li className="list-inline-item m-0 py-2 px-3 d-flex align-items-center delimiter ">

        <a target="_blank" href="https://designers.italia.it">Designers</a>

    </li>

    <li className="list-inline-item m-0 py-2 px-3 d-flex align-items-center label ">

        <span>Gli strumenti</span>

    </li>

    <li className="list-inline-item m-0 py-2 px-3 d-flex align-items-center  ">

        <a target="_blank" href="https://forum.italia.it/">Forum</a>

    </li>

    <li className="list-inline-item m-0 py-2 px-3 d-flex align-items-center  ">

        <a target="_blank" href="https://docs.italia.it/">Docs</a>

    </li>

    <li className="list-inline-item m-0 py-2 px-3 d-flex align-items-center delimiter ">

        <a target="_blank" href="https://github.com/italia/">GitHub</a>

    </li>

</ul>


<div className="Header-lang_switch dropdown d-inline ml-auto ml-lg-0">
  <a href="#" id="languagesDropButton" role="button" className="Header-language d-flex align-items-center text-white py-2 pl-0 pl-md-3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span className="">ITA</span>
    <span className="sr-only">lingua attiva:</span>
    <svg className="icon icon-white icon-sm">
      <use xlinkHref="/assets/sprite.svg#it-expand"></use>
    </svg>
  </a>

  <ul id="languages" className="dropdown-menu list-unstyled" aria-labelledby="languagesDropButton">
      <li className="active">
        <a href="/it/api.html"><span lang="it">italiano</span>

        <svg className="icon icon-sm float-right">
          <use xlinkHref="/assets/sprite.svg#it-check"></use>
        </svg>

        </a>
      </li>
  </ul>

</div>


      </div>
    </div>
    <div className="deactive Header-external-wrapper d-block d-lg-none primary-bg-a7  position-absolute primary-bg-a7 w-100 h-100vh z-10" data-activatedby="slimDropdown">



<ul className="Header-external--mobile container">

    <li className=" delimiter first-delimiter">

        <a target="_blank" href="https://pianotriennale-ict.italia.it">Piano Triennale</a>

    </li>

    <li className=" label ">

        <span>Le community</span>

    </li>

    <li className=" current ">

        <a target="_blank" href="https://developers.italia.it/">Developers</a>

    </li>

    <li className=" delimiter ">

        <a target="_blank" href="https://designers.italia.it">Designers</a>

    </li>

    <li className=" label ">

        <span>GLi strumenti</span>

    </li>

    <li className="  ">

        <a target="_blank" href="https://forum.italia.it/">Forum</a>

    </li>

    <li className="  ">

        <a target="_blank" href="https://docs.italia.it/">Docs</a>

    </li>

    <li className=" delimiter ">

        <a target="_blank" href="https://github.com/italia/">GitHub</a>

    </li>

</ul>

    </div>
  </div>

  <div className="Header-navbar ">
    <div className="container d-flex align-items-center">
      <div className="Header-hamb ml-3 mr-3 d-block d-lg-none">
        <a href="#" data-activate-element="" data-activate-noscroll="true" data-activeid="offcanvasMenu"><img className="Header-hamb__icon" alt="Menu" src="/assets/icons/hamburger-icon.svg" /></a>
      </div>
      <div className="Header-logo mr-2 mr-md-3" aria-hidden="true">
        <a href="/" tabIndex="-1">
          <img src="/assets/icons/logo-it.svg" alt=""/>
        </a>
      </div>

      <div className="Header-title mr-auto">
        <h1 className="Header-titleLink">
          <a href="/">Developers Italia

          </a>
          <span className="d-none d-lg-block Header-subtitle">Sviluppiamo i servizi pubblici, insieme</span>
        </h1>
      </div>

      <div className="Header-utils mr-2 mr-md-4 d-none d-lg-block">
        <div className="Header-social ">
          <span className="text-white mr-3 float-left">Seguici su</span>
<ul className="follow-us-icons d-inline-block list-inline mb-0">
  <li className="list-inline-item">
    <a className="icon feed" href="/it/news/feed.atom" title="feed">
      <svg className="icon icon-white">
        <use xlinkHref="/assets/icons/feed.svg#rss"></use>
      </svg>
    </a>
  </li>


  <li className="list-inline-item">
    <a className="icon" href="https://mastodon.uno/@developersITA" title="mastodon" rel="me">
      <svg className="icon icon-white">
        <use xlinkHref="/assets/icons/mastodon.svg#mastodon"></use>
      </svg>
    </a>
  </li>


  <li className="list-inline-item">
    <a className="icon" href="https://twitter.com/developersITA" title="twitter" rel="me">
      <svg className="icon icon-white">
        <use xlinkHref="/assets/sprite.svg#it-twitter"></use>
      </svg>
    </a>
  </li>


  <li className="list-inline-item">
    <a className="icon" href="https://medium.com/developers-italia" title="medium" rel="me">
      <svg className="icon icon-white">
        <use xlinkHref="/assets/sprite.svg#it-medium"></use>
      </svg>
    </a>
  </li>

</ul>

        </div>
      </div>

      <div className="Header-search ml-4 mb-0" id="header-search">
        <custom-search><div className="d-flex align-items-center pr-2" role="button" data-testid="search-button"><span className="text-white mr-3 d-none d-lg-inline">Cerca</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={classes.icon}><path d="M21.9 21.1L16 15.3a8.3 8.3 0 002-5.3 8 8 0 10-8 8 8.3 8.3 0 005.3-2l5.8 5.9zM10 17a7 7 0 117-7 7 7 0 01-7 7z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon d-inline d-lg-none icon-white"><path d="M21.9 21.1L16 15.3a8.3 8.3 0 002-5.3 8 8 0 10-8 8 8.3 8.3 0 005.3-2l5.8 5.9zM10 17a7 7 0 117-7 7 7 0 01-7 7z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg></div></custom-search>
      </div>

    </div>
  </div>

</header>

    <section className="primary-bg" id="menu">
  <h2 className="sr-only">Menu di navigazione</h2>
  <div className="container">
    <nav>

  <ul className="Linklist Linklist--padded-top d-none d-lg-flex flex-row list-unstyled Treeview Treeview--default js-Treeview">

    <li className=" ">

      <a href="https://developers.italia.it/it/piattaforme" className="Linklist-link ">

        Piattaforme

      </a>

    </li>


    <li className=" ">


      <a href="https://developers.italia.it/it/software" className="Linklist-link ">

        Software

      </a>

    </li>


    <li className=" active">
      <Link to="/it/interoperabilita" className="Linklist-link ">
        Interoperabilità
      </Link>
    </li>


    <li className=" ">
      <a href="https://developers.italia.it/it/come-lo-uso" className="Linklist-link ">
        Come lo uso
      </a>
    </li>


    <li className=" ">


      <a href="https://developers.italia.it/it/come-partecipo" className="Linklist-link ">

        Come partecipo

      </a>

    </li>


    <li className=" ">


      <a href="https://developers.italia.it/it/news" className="Linklist-link ">

        News

      </a>

    </li>


    <li className=" ">


      <a href="https://developers.italia.it/it/contatti" className="Linklist-link ">

        Contatti

      </a>

    </li>

  </ul>

      <div className="Offcanvas-menu d-flex deactive" data-activatedby="offcanvasMenu">
        <div className="Offcanvas-menu__inner">
          <div className="Offcanvas-menu__header d-flex">
          <a href="/" tabIndex="-1">
            <img src="/assets/icons/logo-it-blue.svg" className="Offcanvas-menu__logo" alt="Developers Italia"/>
          </a>
          <a href="/" className="Offcanvas-menu__title">Developers Italia</a>
          </div>


<ul>



    <li className=" ">


      <a href="https://developers.italia.it/it/piattaforme" className="Linklist-link ">

        Piattaforme

      </a>

    </li>


    <li className=" ">


      <a href="https://developers.italia.it/it/software" className="Linklist-link ">

        Software

      </a>

    </li>


    <li className=" active">


      <a href="/it/api" className="Linklist-link ">

        API

      </a>

    </li>


    <li className=" ">


      <a href="https://developers.italia.it/it/come-lo-uso" className="Linklist-link ">

        Come lo uso

      </a>

    </li>


    <li className=" ">


      <a href="https://developers.italia.it/it/come-partecipo" className="Linklist-link ">

        Come partecipo

      </a>

    </li>


    <li className=" ">


      <a href="https://developers.italia.it/it/news" className="Linklist-link ">

        News

      </a>

    </li>


    <li className=" ">


      <a href="https://developers.italia.it/it/contatti" className="Linklist-link ">

        Contatti

      </a>

    </li>

  </ul>

        </div>
        <div className="Offcanvas-menu__extra" data-activate-element="" data-activate-noscroll="true" data-activeid="offcanvasMenu">
        </div>
      </div>
    </nav>
  </div>
</section>

<div className="apilist">
  <div className="container">
    <section className="apilist__content mt-2 mt-md-5 pt-2 pt-md-4 pb-2">
      {children}
    </section>
  </div>
</div>

  </div>
</div>

<a href="#" title="torna all'inizio dei contenuti" className="ScrollTop js-scrollTop js-scrollTo">
  <i className="ScrollTop-icon Icon-collapse" aria-hidden="true"></i>
  <span className="sr-only">torna all'inizio dei contenuti</span>
</a>

<div id="root"></div>

<div className="u-background-95">
  <div className="u-layout-wide u-layoutCenter u-layout-r-withGutter u-hiddenPrint">
    <footer className="footer pt-2 pt-md-5 pb-2 pb-md-5">
  <div className="container">
    <div className="row mt-4 mt-md-0 justify-content-lg-between">
      <div className="footer-collaboration col-md-5 col-lg-4 py-2 px-3 p-md-0">
        <p className="d-block d-md-none mt-2 footer-collaboration-with small">
          Progetto di</p>
        <div>
          <a href="https://innovazione.gov.it/dipartimento/">
            <img src="/assets/governo.svg" alt="" />
            <img src="/assets/icons/logo-mid-white.svg" alt="Dipartimento per la Trasformazione Digitale"/>
          </a>
        </div>
      </div>
      <div className="footer-team align-items-center col-md-4 py-2 px-3 p-md-0">
        <p className="d-block d-md-none mt-2 footer-collaboration-with small">
          In collaborazione con</p>
        <a href="https://www.agid.gov.it">
          <div className="d-flex">
            <div className="d-flex">
              <img src="/assets/agid-logo-bb.svg" alt=""/>
            </div>
          </div>
        </a>
      </div>
      <div className="footer-social text-right px-3 px-md-0">
        <span className="text-white mr-3 float-left">Seguici su</span>
<ul className="follow-us-icons d-inline-block list-inline mb-0">
  <li className="list-inline-item">
    <a className="icon feed" href="/it/news/feed.atom" title="feed">
      <svg className="icon icon-white">
        <use xlinkHref="/assets/icons/feed.svg#rss"></use>
      </svg>
    </a>
  </li>


  <li className="list-inline-item">
    <a className="icon" href="https://mastodon.uno/@developersITA" title="mastodon" rel="me">
      <svg className="icon icon-white">
        <use xlinkHref="/assets/icons/mastodon.svg#mastodon"></use>
      </svg>
    </a>
  </li>


  <li className="list-inline-item">
    <a className="icon" href="https://twitter.com/developersITA" title="twitter" rel="me">
      <svg className="icon icon-white">
        <use xlinkHref="/assets/sprite.svg#it-twitter"></use>
      </svg>
    </a>
  </li>

  <li className="list-inline-item">
    <a className="icon" href="https://medium.com/developers-italia" title="medium" rel="me">
      <svg className="icon icon-white">
        <use xlinkHref="/assets/sprite.svg#it-medium"></use>
      </svg>
    </a>
  </li>

</ul>

      </div>
    </div>

    <ul className="footer-links px-2 px-md-0">

      <li><a href="https://developers.italia.it/it/privacy-policy">Privacy policy</a></li>

      <li><a href="https://developers.italia.it/it/note-legali">Note legali</a></li>

      <li><a href="https://developers.italia.it/it/dashboard">Dashboard</a></li>

    </ul>
  </div>

</footer>
  </div>
</div>

</body></html>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
