function attachEventsListeners() {
  document.querySelector("main").addEventListener("click", (e) => {
    if (e.target.type === "button") {
      let timeUnit = e.target.id;

      let inputInSeconds = Number(e.target.parentNode.children[1].value);

      switch (timeUnit) {
        case "daysBtn":
          inputInSeconds =
            Number(e.target.parentNode.children[1].value) * 86400;
          break;
        case "hoursBtn":
          inputInSeconds = Number(e.target.parentNode.children[1].value) * 3600;
          break;
        case "minutesBtn":
          inputInSeconds = Number(e.target.parentNode.children[1].value) * 60;
          break;
      }

      let timeResults = {
        seconds: inputInSeconds,
        minutes: inputInSeconds / 60,
        hours: inputInSeconds / 3600,
        days: inputInSeconds / 86400,
      };

      let result = document.querySelectorAll("main div input[type='text']");

      result[0].value = timeResults.days;
      result[1].value = timeResults.hours;
      result[2].value = timeResults.minutes;
      result[3].value = timeResults.seconds;
    }
  });
}
