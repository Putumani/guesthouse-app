import React from 'react';

const HeroSection = () => {
  return (
    <div
      id="booking"
      className="parallax-window flex items-center justify-center min-h-screen bg-cover"
      style={{ 
        backgroundImage: 'url(/assets/images/frontview.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative', // Added position to allow absolute positioning of the form
      }}
    >
      <div 
        className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center"
        style={{
          width: '100%', 
          maxWidth: '90%', 
          position: 'absolute', 
          maxHeight: '50%',
          bottom: '30%', 
          opacity: '0%',
          backgroundColor: 'black',
        }}
      >
        <form id="check_avail_home" method="post" action="https://shtheme.info/demosd/albertwo/send-mail/" autoComplete="off" className="w-full">
          <div className="flex flex-col md:flex-row mb-4">
            <div id="container_1" className="md:mr-4 mb-4 md:mb-0">
              <label className="mb-2 block">Arrival date</label>
              <input
                id="check_in"
                className="startDate1 form-control datepick"
                type="text"
                data-field="date"
                data-startend="start"
                data-startendelem=".endDate1"
                readOnly
                placeholder="Arrival"
                name="check_in"
              />
              <span className="input-icon">
                <i className="icon-calendar-7"></i>
              </span>
            </div>

            <div id="container_2" className="md:mr-4 mb-4 md:mb-0">
              <label className="mb-2 block">Departure date</label>
              <input
                id="check_out"
                className="startDate1 form-control datepick"
                type="text"
                data-field="date"
                data-startend="start"
                data-startendelem=".endDate1"
                readOnly
                placeholder="Departure"
                name="check_out"
              />
              <span className="input-icon">
                <i className="icon-calendar-7"></i>
              </span>
            </div>

            <div id="container_3" className="md:mr-4 mb-4 md:mb-0">
              <label className="mb-2 block">Adults</label>
              <div className="qty-buttons">
                <button className="qtyminus" type="button" name="adults">-</button>
                <input id="adults" className="qty form-control" name="adults" value="0" readOnly />
                <button className="qtyplus" type="button" name="adults">+</button>
              </div>
            </div>

            <div id="container_4" className="mb-4 md:mb-0">
              <label className="mb-2 block">Children</label>
              <div className="qty-buttons">
                <button className="qtyminus" type="button" name="children">-</button>
                <input id="children" className="qty form-control" name="children" value="0" readOnly />
                <button className="qtyplus" type="button" name="children">+</button>
              </div>
            </div>
          </div>
          {/* End group_1 and group_2 */}

          <div className="flex flex-col md:flex-row mb-4">
            <div id="container_5" className="md:mr-4 mb-4 md:mb-0">
              <label className="mb-2 block">Name</label>
              <input id="name_booking" className="form-control" type="text" name="name_booking" placeholder="Name and Last name" />
            </div>

            <div id="container_6" className="mb-4 md:mb-0">
              <label className="mb-2 block">Email</label>
              <input id="email_booking" className="form-control" type="text" name="email_booking" placeholder="Your Email" />
            </div>
          </div>
          {/* End group_3 */}

          <div id="container_7" className="text-center mt-4">
            <input id="submit-booking" className="btn_1" type="submit" value="Check availability" />
          </div>
          {/* End book_container */}
        </form>
        {/* End book_container */}
      </div>
    </div>
  );
};

export default HeroSection;