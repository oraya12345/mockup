import { colors } from '@material-ui/core';
import React from 'react';
import '../../css/Footer.css'

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-text">
        <h5>Follow Us</h5>
        <div class="col">
          <div class="container mt-2">
              <i class="	fab fa-facebook"></i>
              <i class="	fab fa-line"></i>
              <i class="	fab fa-twitter-square"></i>
              <i class="fab fa-pinterest"></i>
              <i class="	fab fa-instagram"></i>
              <i class="	fab fa-google-plus"></i>
              <i class="fab fa-tumblr-square"></i>
          </div>
          </div>
        </div>
     


      {/*<div className="">
        <ul className="footer-navbar">
          <label>หน้าแรก</label>
          <label>เกี่ยวกับเรา</label>
          <label>คลังพระเครื่อง</label>
        </ul>
  </div>*/}

    </div>
  )
}
