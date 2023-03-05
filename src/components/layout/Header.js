import React from 'react'
// import { Link } from 'react-router-dom';
import '../../css/Header.css'

export default function Header() {
   return (

      <div className="header">
         <div className="topCenter">
            <ul className="topList">
               <li className="topListItem">ช้อปคุ้มกว่าเดิมบนแอป</li>
               <li className="topListItem">ขายสินค้ากับลาซาด้า</li>
               <li className="topListItem">ช่วยเหลือ</li>
               <li className="topListItem">ติดตามสินค้า</li>
               <li className="topListItem">ลงชื่อเข้าใช้</li>
               <li className="topListItem">สมัครสมาชิก</li>
               <li className="topListItem">CHANGE LANGUAGE</li>
            </ul>
         </div>

         <div className="Nav">
            <nav className="navthree">
               <form class="d-flex">
                  <img src="https://www.blognone.com/sites/default/files/externals/8b4f36806576a9449c130ff645f0b4db.jpg" />
                  <input className="form-control" type="text" placeholder="ค้นหาในลาซาด้า" />
                  <button className="btn" type="button">  
                     <i className="fa fa-search" ></i>
                  </button>
               </form>
               <div className="cart">
                  <i className="fa fa-shopping-cart" ></i>
               </div>

               <div className="image">
                  <img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1DcZESBr0gK0jSZFnXXbRRXXa.jpg" />
               </div>
            </nav>
         </div>
      </div>
   )
}



