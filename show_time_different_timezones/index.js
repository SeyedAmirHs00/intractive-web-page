import * as dayjs from "dayjs";

import timezone from "dayjs/plugin/timezone";
import isoWeekday from "dayjs/plugin/isoWeek";
import utc from "dayjs/plugin/utc";
import MicroModal from "micromodal";

MicroModal.init();

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(isoWeekday);

const DAYS = [
  "Sonday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const TIMEZONES = Intl.supportedValuesOf("timeZone");

const timeOutput = document.getElementById("time");
const dateOutput = document.getElementById("date");
const timezoneOutput = document.getElementById("timezone");
const timezoneSelector = document.getElementById("timezone-selector");
const applyTimezoneButton = document.getElementById("apply-timezone");

let timezoneName = "America/New_York";
dayjs.tz.setDefault(timezoneName);

function createSelector() {
  function createOption(option) {
    return `<option value=${option}>${option}</option>`;
  }
  for (let timezone of TIMEZONES) {
    timezoneSelector.innerHTML += createOption(timezone);
  }
}
createSelector();

setInterval(updateOutput, 1000);

function updateOutput() {
  let dateTime = dayjs.tz();

  timeOutput.innerHTML = `\
    ${dateTime.hour().toString().padStart(2, "0")}:\
    ${dateTime.minute().toString().padStart(2, 0)}:\
    ${dateTime.second().toString().padStart(2, "0")}`;

  dateOutput.innerHTML = `\
    ${DAYS[dateTime.day()]},\
    ${dateTime.date()} ${MONTHS[dateTime.month()]},\
    ${dateTime.year()}
  `;

  timezoneOutput.getElementsByTagName("p")[0].innerHTML = timezoneName;
}

function applyTimezone() {
  let timezone = timezoneSelector.value;
  if (timezone) {
    timezoneName = timezone;
    dayjs.tz.setDefault(timezoneName);
  }
}
applyTimezoneButton.addEventListener("click", applyTimezone);
