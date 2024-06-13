import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Reservation.scss";
const Reservation = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Reservation made:", formData, startDate);
  };

  return (
    <section id="reservation" className="reservation">
      <h2>Make a Reservation</h2>
      <form onSubmit={handleSubmit} className="reservation-form">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="input-field"
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="input-field"
        />
        <label>Phone:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="input-field"
        />
        <label>Date:</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          className="input-field"
        />
        <button type="submit" className="submit-btn">
          Reserve
        </button>
      </form>
    </section>
  );
};

export default Reservation;
