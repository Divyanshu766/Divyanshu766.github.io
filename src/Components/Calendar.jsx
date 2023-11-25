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
          blockSize={17}
          username="divyanshu766"
        />
      </div>
    </section>
  );
};

export default Calendar;
