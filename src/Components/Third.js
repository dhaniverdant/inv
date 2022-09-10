import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../Assets/Styles/Third.css';
import calendar from '../Assets/Images/u_calendar-alt.svg';
import clock from '../Assets/Images/u_clock-seven.svg';
import clockNine from '../Assets/Images/u_clock-nine.svg';
import marker from '../Assets/Images/u_map-marker.svg';

const Third = () => {
  return (
    <div id='third' className='third-wrapper'>
      <div className='our-agenda-title'>Acara Kami</div>
      <div className='agenda-map-wrapper'>
        <div className='agenda-title'>Akad Nikah</div>
        <div className='agenda-wrapper'>
          <div className='width-eighteen'>
            <img src={calendar} />
            <img className='margin-top-ten' src={clock} />
            <img className='margin-top-ten' src={marker} />
          </div>
          <div>
            <div>Jum'at, 23 September 2022</div>
            <div className='margin-top-twelve'>07.00 WITA - 08.00 WITA</div>
            <div className='margin-top-twelve'>Rumah Mempelai Wanita, Dsn. Aimual RT 001/RW 003</div>
          </div>
        </div>
        <a href='https://maps.app.goo.gl/Sasy9shtwuqSPA2v7?g_st=it'
          target="_blank"
          type='button'
          className='btn btn-success btn-block mt-2'
        >Lihat Peta</a>
      </div>

      <div className='mt-4 agenda-map-wrapper'>
        <div className='agenda-title'>Resepsi Nikah</div>
        <div className='agenda-wrapper'>
          <div className='width-fifteen'>
            <img src={calendar} alt='calendar' />
            <img className='margin-top-ten' src={clockNine} />
            <img className='margin-top-ten' src={marker} />
          </div>
          <div>
            <div>Sabtu, 24 September 2022</div>
            <div className='margin-top-twelve'>09.00 WITA - 12.00 WITA</div>
            <div className='margin-top-twelve'>Balai Pertemuan Dsn. Aimual Lab. Kuris Lape</div>
          </div>
        </div>
        <a href='https://maps.app.goo.gl/2hcTBexWEarecYvb8?g_st=it'
          target="_blank"
          type='button'
          className='btn btn-success btn-block mt-2'
        >Lihat Peta</a>
      </div>
    </div>
  );
}

export default Third;