import React, { useState } from 'react';
import ProfileInfo from './ProfileInfo';
import BookingForm from './BookingForm';

const ProfilePage = () => {
  const [bookingData, setBookingData] = useState(null);

  const handleBookingSubmit = (data) => {
    setBookingData(data);
  };

  return (
    <div className="profile-page">
      <h1>User Profile</h1>
      <ProfileInfo /> {/* This component shows user information */}
      <hr />
      <h2>Book a Stay</h2>
      <BookingForm onSubmit={handleBookingSubmit} /> {/* Booking form */}
      {bookingData && (
        <div className="booking-confirmation">
          <h3>Booking Confirmation</h3>
          <p>Check-in: {bookingData.checkIn}</p>
          <p>Check-out: {bookingData.checkOut}</p>
          {/* Other booking details */}
        </div>
      )}
    </div>
  );
};
export default ProfilePage;