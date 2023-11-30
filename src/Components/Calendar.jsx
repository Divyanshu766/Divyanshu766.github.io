import { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";

const Calendar = () => {
  const [blockSize, setBlockSize] = useState(window.innerWidth < 700 ? 8 : 20);
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 6;
    console.log(window.innerWidth);
    return contributions.filter((activity) => {
      const date = new Date(activity.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  useEffect(() => {
    const handleResize = () => {
      setBlockSize(window.innerWidth < 700 ? 8 : 20);
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section id="calendar" className="react-activity-calendar">
      <div>
        <div id="githubHeading">Github Calendar</div>
      </div>
      <div id="gitCalendar">
        <GitHubCalendar
          colorScheme={"light"}
          blockSize={blockSize}
          username="divyanshu766"
          transformData={selectLastHalfYear}
          blockRadius="2"
        />
      </div>
    </section>
  );
};

export default Calendar;
