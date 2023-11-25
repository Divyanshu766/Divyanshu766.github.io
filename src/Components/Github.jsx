const Github = () => {
  return (
    <section id="github">
      <div id="githubHeading">Github</div>
      <div id="githubStat">
        <div id="github-streak">
          <a href="https://git.io/streak-stats">
            <img
              src="https://github-readme-streak-stats.herokuapp.com?user=divyanshu766&theme=transparent"
              alt="GitHub Streak"
              id="github-streak-stats"
            />
          </a>
        </div>
        <div id="github-stats">
          <picture>
            <source
              srcSet="
            https://github-readme-stats.vercel.app/api?username=divyanshu766&show_icons=true&theme=dark
          "
              media="(prefers-color-scheme: dark)"
            />
            <source
              srcSet="
            https://github-readme-stats.vercel.app/api?username=divyanshu766&show_icons=true
          "
              media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
            />
            <img
              src="https://github-readme-stats.vercel.app/api?username=divyanshu766&show_icons=true"
              id="github-stats-card"
            />
          </picture>
        </div>
        <div>
          <a href="https://github.com/divyanshu766/convoychat">
            <img
              height="200"
              align="center"
              src="https://github-readme-stats.vercel.app/api/top-langs?username=divyanshu766&layout=compact&langs_count=8&card_width=200"
              id="github-top-langs"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Github;
