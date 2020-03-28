import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GithubCorner from 'react-github-corner';

const Layout = props => (
  <div>
    <Head>
      <title>Meeting Planner</title>
      <script
        src="https://kit.fontawesome.com/5ee609cd40.js"
        crossorigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.8.0/css/bulma.css"
        integrity="sha256-XF2msWsEjJwE8ORQ0exG5nFk8jDTntTMbUZKtvPRkgU="
        crossorigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.8.0/css/bulma.css.map"
        integrity="undefined"
        crossorigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.8.0/css/bulma.min.css"
        integrity="sha256-D9M5yrVDqFlla7nlELDaYZIpXfFWDytQtiV+TaH6F1I="
        crossorigin="anonymous"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Navbar />
    <GithubCorner
      href={"https://github.com/ahmetbcakici/MeetingPlanner-client"}
      bannerColor="#151513"
      octoColor="#fff"
	  size={111}
      direction="right"
    />
    {props.children}
    <Footer />
  </div>
);

export default Layout;
