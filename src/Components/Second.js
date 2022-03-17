import React from 'react';
import user from '../Assets/Images/user.jpg';

const Second = () => {
  return (
    <div id="second" style={{ height: "100vh" }}>
      <h2>Marriage</h2>
      <p>Assalamu`alaikum Warahmatullaahi Wabarakaatuh</p>
      <p>Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan.<br />
        Ya Allah semoga ridho-Mu tercurah mengiringi pernikahan kami</p>
      <div>
        <img src={user} alt="icon" style={{ width: "180px", height: "180px" }} />
        <img src={user} alt="icon" style={{ width: "180px", height: "180px" }} />
      </div>
    </div>
  );
}

export default Second;