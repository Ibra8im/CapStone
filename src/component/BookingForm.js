import React, { useState } from "react";

const BookingForm = () => {
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");
  const [guset, setGuest] = useState("");
  const [occasion, setOccaison] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    props.SubmitForm(e);
  };

  const handelChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };
  return (
    <header>
      <section>
        <form onSubmit={handelSubmit}>
          <fieldset>
            {/* date section */}
            <div>
              <label htmlFor="book-date">Chose Date</label>
              <input
                id="book-date"
                value={date}
                type="date"
                onChange={(e) => handelChange(e.target.value)}
                required
              />
            </div>

            {/* time section */}
            <div>
              <label htmlFor="book-time">Chose Time</label>
              <select
                id="book-time"
                value={times}
                onChange={(e) => handelChange(e.target.value)}
              >
                <option value="">Select a Time </option>
                {props.avilableTimes.avilableTimes.map((avilableTimes) => {
                  return <option key={avilableTimes}>{avilableTimes}</option>;
                })}
              </select>
            </div>

            {/* number of guest */}
            <div>
              <label htmlFor="book-guset">Number of Guset:</label>
              <input
                id="book-guset"
                min="1"
                value={guset}
                onChange={(e) => setGuest(e.target.value)}
              />
            </div>

            {/* Ocation field */}
            <div>
              
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;
