import React from 'react'
import '../../css/Home.css'

export default function Home() {
    return (
        <div>
            <div id="demo" class="carousel slide" data-ride="carousel">
                <ul class="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" class="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                    <li data-target="#demo" data-slide-to="3"></li>
                    <li data-target="#demo" data-slide-to="4"></li>
                    <li data-target="#demo" data-slide-to="5"></li>
                    <li data-target="#demo" data-slide-to="6"></li>
                    <li data-target="#demo" data-slide-to="7"></li>
                </ul>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://icms-image.slatic.net/images/ims-web/faa627e3-5ec5-4bfe-8d95-6c46c9173e54.jpg" width="1500" height="400" border-radius= "10px"/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://lzd-img-global.slatic.net/g/icms/images/ims-web/7bf474b5-c477-404d-a7a7-01761965e818.jpg_2200x2200q90.jpg_.webp" width="1500" height="400" />
                    </div>
                    <div class="carousel-item">
                        <img src="https://lzd-img-global.slatic.net/g/icms/images/ims-web/4a936151-a2fd-4dd1-90fd-97b65535b6e1.jpg_2200x2200q90.jpg_.webp" width="1500" height="400" />
                    </div>
                    <div class="carousel-item">
                        <img src="https://lzd-img-global.slatic.net/g/icms/images/ims-web/c3063e74-fa3a-4125-a16e-ffd3048d7e00.jpg_2200x2200q90.jpg_.webp" width="1500" height="400" />
                    </div>
                    <div class="carousel-item">
                        <img src="https://lzd-img-global.slatic.net/g/icms/images/ims-web/6e9a6d53-cb8b-4bbf-9ffa-9eb327073d5b.jpg_2200x2200q90.jpg_.webp" width="1500" height="400" />
                    </div>
                    <div class="carousel-item">
                        <img src="https://lzd-img-global.slatic.net/g/icms/images/ims-web/1635754b-15d4-48d3-9175-db7b66cfd2aa.jpg_2200x2200q90.jpg_.webp" width="1500" height="400" />
                    </div>
                    <div class="carousel-item">
                        <img src="https://lzd-img-global.slatic.net/g/icms/images/ims-web/69e70cdf-129f-408c-92cf-d11619db986e.jpg_2200x2200q90.jpg_.webp" width="1500" height="400" />
                    </div>
                    <div class="carousel-item">
                        <img src="https://lzd-img-global.slatic.net/g/icms/images/ims-web/22ee8a0d-a75d-4484-99fb-d289989bd5c7.jpg_2200x2200q90.jpg_.webp" width="1500" height="400" />
                    </div>
                </div>

                <a class="carousel-control-prev" href="#demo" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next" href="#demo" data-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </a>


            </div>


            <div className="text-contect">
                <div className="single-btn">
                    <button><img src="https://icms-image.slatic.net/images/ims-web/9d78cd14-05ee-43ba-a360-61f895a70aef.png" />LazMall</button>
                    <button><img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB12wVshUT1gK0jSZFhXXaAtVXa.png" />คูปองลดเพิ่ม</button>
                    <button><img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB11DFthO_1gK0jSZFqXXcpaXXa.png" />เติมเงิน&อาหาร</button>
                    <button><img src="https://icms-image.slatic.net/images/ims-web/a13d12e1-91d1-4240-b22f-46233a012e89.png" />LazBlog</button>
                    <button><img src="https://img.alicdn.com/imgextra/i1/O1CN01yvjCS71LsB10MJoJt_!!6000000001354-2-tps-150-150.png" />ร้านค้าแนะนำ</button>
                </div>

                <div class="Image">
                    <h4>Flash Sale</h4>

                    <div class="row">
                        <div class="col">
                            <div class="container mt-2">
                                <img src="https://lzd-img-global.slatic.net/g/p/8d827e96af0f63985822610fff65f193.jpg_400x400q80.jpg_.webp" />
                                <div class="card-body">
                                    <p class="card-text"> โทรศัพท์ realme Narzo 50i Prime 4+64</p>
                                    <h4 class="card-title">฿3,365.00</h4>
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="container mt-2">
                                <img src="https://lzd-img-global.slatic.net/g/p/fbfce82abbbae60af89fd65a8d8ab880.jpg_400x400q80.jpg_.webp" />
                                <div class="card-body">
                                    <p class="card-text">คอนเเทคเลนส์ บิ๊กอายตาโต</p>
                                    <h4 class="card-title">฿43.00</h4>
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="container mt-2">
                                <img src="https://lzd-img-global.slatic.net/g/p/cf2971a91cda86f7744097853e65f851.jpg_400x400q80.jpg_.webp" />
                                <div class="card-body">
                                    <p class="card-text">SAMSUNG เครื่องซักผ้าฝาบน</p>
                                    <h4 class="card-title">฿8,490.00</h4>
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="container mt-2">
                                <img src="https://lzd-img-global.slatic.net/g/p/7f9811169ba1f345e63bb75f34718d73.png_400x400q80.jpg_.webp" />
                                <div class="card-body">
                                    <p class="card-text">GIANTSHOP เสื้อฮาวาย เสื้อเชิ้ต</p>
                                    <h4 class="card-title">฿99.00</h4>
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="container mt-2">
                                <img src="https://lzd-img-global.slatic.net/g/p/dbf510715d9cb19ae412eadb187fe284.jpg_400x400q80.jpg_.webp" />
                                <div class="card-body">
                                    <p class="card-text">รองเท้าเตะแบบหูหนีบผู้ชาย</p>
                                    <h4 class="card-title">฿2,020.00</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    )
}

