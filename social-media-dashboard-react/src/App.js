import { useState } from "react";
const followerData = [
  {
    username: "@nathanf",
    followers: 1987,
    socialMedia: "facebook",
    type: "followers",
    today: 12,
    changeType: "up",
    socialIcon: "images/icon-facebook.svg"
  },

  {
    username: "@nathanf",
    followers: 1044,
    socialMedia: "twitter",
    type: "Followers",
    today: 99,
    changeType: "up",
    socialIcon: "images/icon-twitter.svg"
  },

  {
    username: "@realnathanf",
    followers: "11k",
    socialMedia: "instagram",
    type: "Followers",
    today: 1099,
    changeType: "up",
    socialIcon: "images/icon-instagram.svg"
  },

  {
    username: "Nathan F.",
    followers: 8239,
    socialMedia: "youtube",
    type: "Subscribers",
    today: 144,
    changeType: "down",
    socialIcon: "images/icon-youtube.svg"
  }

];

const overviewData = [

  {
    overviewTitle: "Page Views",
    count: "87",
    percent: "3%",
    changeType: "up",
    socialIcon: "images/icon-facebook.svg"
  },

  {
    overviewTitle: "Likes",
    count: "52",
    percent: "2%",
    changeType: "down",
    socialIcon: "images/icon-facebook.svg"
  },

  {
    overviewTitle: "Likes",
    count: "5462",
    percent: "2257%",
    changeType: "up",
    socialIcon: "images/icon-instagram.svg"
  },

  {
    overviewTitle: "Profile Views",
    count: "52k",
    percent: "1375%",
    changeType: "up",
    socialIcon: "images/icon-instagram.svg"
  },

  {
    overviewTitle: "Retweets",
    count: "117",
    percent: "303%",
    changeType: "up",
    socialIcon: "images/icon-twitter.svg"
  },

  {
    overviewTitle: "Likes",
    count: "507",
    percent: "553%",
    changeType: "up",
    socialIcon: "images/icon-twitter.svg"
  },

  {
    overviewTitle: "Likes",
    count: "107",
    percent: "19%",
    changeType: "down",
    socialIcon: "images/icon-youtube.svg"
  },

  {
    overviewTitle: "Total Views",
    count: "1407",
    percent: "12%",
    changeType: "down",
    socialIcon: "images/icon-youtube.svg"
  },

]

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [totalFollowers, setTotalFollowers] = useState("23,046")
  const [followers, setFollowers] = useState(followerData);
  const [overviews, setOverviews] = useState(overviewData);


  function themeSwitch() {
    const root = document.documentElement;
    if (darkTheme) {
      root.setAttribute("theme", "light")
    } else {
      root.removeAttribute('theme')
    }
    setDarkTheme(!darkTheme)
  }


  return (
    <div className="main">

      <MainHeader totalFollowers={totalFollowers} onThemeSwitch={themeSwitch} theme={darkTheme} />

      <div className="main__followers">
        {
          followers.map((follower) => <FollowerCard follower={follower} />)
        }
      </div>

      <div className="main__overview">
        <div className="main__overview--header">
          <p className="main__overview-title">
            overview - today
          </p>
        </div>

        <div className="main__overview--contents">
          {overviews.map((overview) => <OverviewCard overview={overview} />)}
        </div>

      </div>

    </div>
  );
}

function MainHeader({ totalFollowers, onThemeSwitch, theme }) {
  return (
    <div className="main__header">
      <div className="main__header--header">
        <p className="main__header--header-title">
          social media dashboard
        </p>
        <p className="main__header--header-text">
          total followers {totalFollowers}
        </p>
      </div>
      <div className="main__header--toggle">
        <div className="form__input">
          <label for="toggleTheme">{theme ? 'Dark' : 'Light'} Mode</label>
          <div className="form__input--input">
            <input type="checkbox" value={theme} id="toggleTheme" onClick={onThemeSwitch} checked={theme} />
            <label for="toggleTheme" className="spanLabel"></label>
          </div>
        </div>
      </div>
    </div>
  )
}

function FollowerCard({ follower }) {
  const [upChangeIcon, setUpChangeIcon] = useState("images/icon-up.svg")
  const [downChangeIcon, setDownChangeIcon] = useState("images/icon-down.svg")


  return (
    <div className={`follower__card ${follower.socialMedia}`}>
      <div className="follower__card--social">
        <div className="follower__card--social-media">
          <img src="socialMediaIcon" alt="" className="social_media_img" />
        </div>
        <p className="follower__card--social-username">
          {follower.username}
        </p>
      </div>

      <div className="follower__card--stats">
        <p className="follower__card--stats-value">
          {follower.followers}
        </p>
        <div className="follower__card--stats-text">
          {follower.socialMedia}
        </div>
      </div>

      <div className={`follower__card--footer ${follower.changeType}`}>
        <span className="change">
          <img src={follower.changeType === 'up' ? upChangeIcon : downChangeIcon} alt="" className="change_icon" />
        </span>
        <p className="follower__card--added">
          {follower.today} today
        </p>
      </div>
    </div >
  )
}


function OverviewCard({ overview }) {
  const [upChangeIcon, setUpChangeIcon] = useState("images/icon-up.svg");
  const [downChangeIcon, setDownChangeIcon] = useState("images/icon-down.svg");


  return (
    <div className="overview__card">
      <div className="overview__card--top">
        <p className="overview__card--top-text">
          {overview.overviewTitle}
        </p>
        <span className="overview__card--top--icon">
          <img src={overview.socialIcon} alt="" className="overview__card--img" />
        </span>
      </div>
      <div className="overview__card--bottom">
        <p className="overview__card--bottom-text">{overview.count}</p>
        <div className={`overview__card--bottom--change ${overview.changeType}`}>
          <span className="overview__card--change-icon">
            <img src={overview.changeType === 'up' ? upChangeIcon : downChangeIcon} alt="" className="change_icon" />
          </span>
          <p className="overview__card--change-percent">
            {overview.percent}
          </p>
        </div>
      </div>
    </div>
  )
}

export default App;
