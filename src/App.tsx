import React, { useState } from "react";
import DatePicker from "react-date-picker";
import "./App.css";

const queue = [
  {
    from: new Date("2018-12-01"),
    to: new Date("2018-12-31"),
    general: 36,
    priority: 0,
  },
  {
    from: new Date("2019-01-01"),
    to: new Date("2019-01-31"),
    general: 60,
    priority: 0,
  },
  {
    from: new Date("2019-02-01"),
    to: new Date("2019-02-28"),
    general: 45,
    priority: 0,
  },
  {
    from: new Date("2019-03-01"),
    to: new Date("2019-03-31"),
    general: 48,
    priority: 0,
  },
  {
    from: new Date("2019-04-01"),
    to: new Date("2019-04-30"),
    general: 75,
    priority: 0,
  },
  {
    from: new Date("2019-05-01"),
    to: new Date("2019-05-31"),
    general: 72,
    priority: 0,
  },
  {
    from: new Date("2019-06-01"),
    to: new Date("2019-06-30"),
    general: 69,
    priority: 0,
  },
  {
    from: new Date("2019-07-01"),
    to: new Date("2019-07-31"),
    general: 63,
    priority: 0,
  },
  {
    from: new Date("2019-08-01"),
    to: new Date("2019-08-31"),
    general: 72,
    priority: 0,
  },
  {
    from: new Date("2019-09-01"),
    to: new Date("2019-09-30"),
    general: 57,
    priority: 0,
  },
  {
    from: new Date("2019-10-01"),
    to: new Date("2019-10-31"),
    general: 81,
    priority: 0,
  },
  {
    from: new Date("2019-11-01"),
    to: new Date("2019-11-30"),
    general: 297,
    priority: 0,
  },
  {
    from: new Date("2019-12-01"),
    to: new Date("2019-12-31"),
    general: 339,
    priority: 0,
  },
  {
    from: new Date("2020-01-01"),
    to: new Date("2020-01-31"),
    general: 303,
    priority: 0,
  },
  {
    from: new Date("2020-02-01"),
    to: new Date("2020-02-29"),
    general: 345,
    priority: 6,
  },
  {
    from: new Date("2020-03-01"),
    to: new Date("2020-03-31"),
    general: 474,
    priority: 12,
  },
  {
    from: new Date("2020-04-01"),
    to: new Date("2020-04-30"),
    general: 81,
    priority: 3,
  },
  {
    from: new Date("2020-05-01"),
    to: new Date("2020-05-31"),
    general: 333,
    priority: 9,
  },
  {
    from: new Date("2020-06-01"),
    to: new Date("2020-06-30"),
    general: 291,
    priority: 6,
  },
  {
    from: new Date("2020-07-01"),
    to: new Date("2020-07-31"),
    general: 321,
    priority: 6,
  },
  {
    from: new Date("2020-08-01"),
    to: new Date("2020-08-31"),
    general: 258,
    priority: 0,
  },
  {
    from: new Date("2020-09-01"),
    to: new Date("2019-09-30"),
    general: 204,
    priority: 0,
  },
  {
    from: new Date("2020-10-01"),
    to: new Date("2019-10-31"),
    general: 204,
    priority: 0,
  },
  {
    from: new Date("2020-11-01"),
    to: new Date("2019-11-30"),
    general: 249,
    priority: 3,
  },
  {
    from: new Date("2020-12-01"),
    to: new Date("2019-12-31"),
    general: 210,
    priority: 0,
  },
  {
    from: new Date("2021-01-01"),
    to: new Date("2021-01-31"),
    general: 111,
    priority: 3,
  },
  {
    from: new Date("2021-02-01"),
    to: new Date("2021-02-28"),
    general: 144,
    priority: 0,
  },
  {
    from: new Date("2021-03-01"),
    to: new Date("2021-03-31"),
    general: 165,
    priority: 3,
  },
  {
    from: new Date("2021-04-01"),
    to: new Date("2021-04-30"),
    general: 153,
    priority: 3,
  },
  {
    from: new Date("2021-05-01"),
    to: new Date("2021-05-31"),
    general: 210,
    priority: 3,
  },
  {
    from: new Date("2021-06-01"),
    to: new Date("2021-06-30"),
    general: 240,
    priority: 3,
  },
  {
    from: new Date("2021-07-01"),
    to: new Date("2021-07-31"),
    general: 240,
    priority: 3,
  },
  {
    from: new Date("2021-08-01"),
    to: new Date("2021-08-31"),
    general: 189,
    priority: 15,
  },
  {
    from: new Date("2021-09-01"),
    to: new Date("2021-09-30"),
    general: 240,
    priority: 54,
  },
  {
    from: new Date("2021-10-01"),
    to: new Date("2021-10-31"),
    general: 639,
    priority: 225,
  },
  {
    from: new Date("2021-11-01"),
    to: new Date("2021-11-30"),
    general: 613,
    priority: 183,
  },
  {
    from: new Date("2021-12-01"),
    to: new Date("2021-12-31"),
    general: 477,
    priority: 129,
  },
  {
    from: new Date("2022-01-01"),
    to: new Date("2022-01-31"),
    general: 168,
    priority: 78,
  },
  {
    from: new Date("2022-02-01"),
    to: new Date("2022-02-28"),
    general: 138,
    priority: 69,
  },
];

const rate = 130 / 14;
const updatedOn = new Date("2022-02-28");
const dayInMs = 1000 * 60 * 60 * 24;

function App() {
  const [date, setDate] = useState(new Date());

  // What was your spot in the queue on the day the data was updated.
  let spotOnUpdate = 0;

  queue.forEach((month) => {
    if (month.from.getTime() < date.getTime()) {
      if (month.to.getTime() < date.getTime()) {
        spotOnUpdate += month.priority;
      } else {
        const daysInMonth = month.to.getDate();
        spotOnUpdate += (month.priority / daysInMonth) * date.getDate();
      }
    }
  });

  const today = new Date();
  const msSinceUpdate = today.getTime() - updatedOn.getTime();
  const daysSinceUpdate = msSinceUpdate / dayInMs;

  // How many applications have been processed since the data was updated.
  const processedSinceUpdate = daysSinceUpdate * rate;

  // What is your spot in the queue right now.
  const spot = spotOnUpdate - processedSinceUpdate;

  // How many days untill your application is allocated.
  const daysLeft = spot / rate;

  // The date your application will be allocated.
  const pickupDate = new Date(today.getTime() + daysLeft * dayInMs);

  return (
    <div className="App">
      <DatePicker onChange={setDate} value={date} />
      <div>Spot in the queue as of today: {Math.round(spot)}</div>
      <div>Days until being allocated: {Math.round(daysLeft)}</div>
      <div>Estimated allocation date: {pickupDate.toDateString()}</div>
    </div>
  );
}

export default App;
