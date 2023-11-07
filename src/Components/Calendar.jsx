import GitHubCalendar from "react-github-calendar";

const Calendar = () => {
  return (
    <section id="calendar" className="react-activity-calendar">
      <div>
        <div id="githubHeading">Github Calendar</div>
      </div>
      <div id="gitCalendar">
        <GitHubCalendar
          colorScheme={"dark"}
          blockSize={22}
          username="grubersjoe"
        />
      </div>
    </section>
  );
};

export default Calendar;
