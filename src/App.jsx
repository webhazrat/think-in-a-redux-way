import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import BookingPreview from "./components/BookingPreview";
import { useState } from "react";
import { book } from "./redux/flightBooking/actions";

function App() {
  const booking = useSelector((state) => state);
  const dispatch = useDispatch();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(0);
  const [className, setClassName] = useState("");

  // booking submit form
  const bookingSubmit = (e) => {
    e.preventDefault();
    dispatch(
      book({
        from,
        to,
        date,
        guests,
        className,
      })
    );
    // reset the form after submit
    e.target.reset();
  };
  return (
    <>
      <Header />
      <section>
        {/* <!-- Input Data --> */}
        <div className="mt-[160px] mx-4 md:mt-[160px] relative">
          <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
            <form className="first-hero lws-inputform" onSubmit={bookingSubmit}>
              {/* <!-- From --> */}
              <div className="des-from">
                <p>Destination From</p>
                <div className="flex flex-row">
                  <img src="./icons/Frame.svg" alt="" />
                  <select
                    className="outline-none px-2 py-2 w-full"
                    name="from"
                    id="lws-from"
                    required
                    onChange={(e) => setFrom(e.target.value)}
                  >
                    <option value={from} hidden>
                      Please Select
                    </option>
                    <option>Dhaka</option>
                    <option>Sylhet</option>
                    <option>Saidpur</option>
                    <option>Cox&apos;s Bazar</option>
                  </select>
                </div>
              </div>

              {/* <!-- To --> */}
              <div className="des-from">
                <p>Destination To</p>
                <div className="flex flex-row">
                  <img src="./icons/Frame.svg" alt="" />
                  <select
                    className="outline-none px-2 py-2 w-full"
                    name="to"
                    id="lws-to"
                    required
                    onChange={(e) => setTo(e.target.value)}
                  >
                    <option value={to} hidden>
                      Please Select
                    </option>
                    <option>Dhaka</option>
                    <option>Sylhet</option>
                    <option>Saidpur</option>
                    <option>Cox&apos;s Bazar</option>
                  </select>
                </div>
              </div>

              {/* <!-- Date --> */}
              <div className="des-from">
                <p>Journey Date</p>
                <input
                  type="date"
                  className="outline-none px-2 py-2 w-full date"
                  name="date"
                  id="lws-date"
                  required
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              {/* <!-- Guests --> */}
              <div className="des-from">
                <p>Guests</p>
                <div className="flex flex-row">
                  <img src="./icons/Vector (1).svg" alt="" />
                  <select
                    className="outline-none px-2 py-2 w-full"
                    name="guests"
                    id="lws-guests"
                    required
                    onChange={(e) => setGuests(e.target.value)}
                  >
                    <option value={guests} hidden>
                      Please Select
                    </option>
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="3">3 Persons</option>
                    <option value="4">4 Persons</option>
                  </select>
                </div>
              </div>

              {/* <!-- className --> */}
              <div className="des-from !border-r-0">
                <p>className</p>
                <div className="flex flex-row">
                  <img src="./icons/Vector (3).svg" alt="" />
                  <select
                    className="outline-none px-2 py-2 w-full"
                    name="ticketclassName"
                    id="lws-ticketclassName"
                    required
                    onChange={(e) => setClassName(e.target.value)}
                  >
                    <option value={className} hidden>
                      Please Select
                    </option>
                    <option>Business</option>
                    <option>Economy</option>
                  </select>
                </div>
              </div>

              <button
                className="addCity"
                type="submit"
                id="lws-addCity"
                disabled={booking.length >= 3}
              >
                <svg
                  width="15px"
                  height="15px"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                <span className="text-sm">Book</span>
              </button>
            </form>
          </div>
        </div>

        {booking.length > 0 && (
          <BookingPreview booking={booking} dispatch={dispatch} />
        )}
      </section>
    </>
  );
}

export default App;
