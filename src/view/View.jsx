import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { CounterKutu } from "../components/CounterKutu";
import { PersonCard } from "../components/PersonCard";
import { ServicesItem } from "../components/ServicesItem";
import React, { Component } from "react";
import Slider from "react-slick";
import { InfoArea } from "../components/InfoArea";
var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true  
      }
    },
    {
      breakpoint: 684,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
export const View = () => {
  
  return (
    <>
      <Navigation />
      <CounterKutu />
      
      <div class="contain-2">
      <h2 class="contain-2 heading" align="center">SPEAKERS</h2>
      <div class="button-controller">
      	 <button class="btn">Wednesday, 25 February 2021</button>
      	 <button class="btn2">Wednesday, 25 February 2021</button>
      </div>
      <div className="wrapper-flex">
        
        <PersonCard
          buttonText="See sBio"
          description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem."
          name="Dr. Name Surname"
          img="https://raw.githubusercontent.com/secularemil34/resim2/main/Ellipse%2017.png"
        />
        <PersonCard
          buttonText="See Bio"
          description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem."
          name="Anna Marie"
          img="https://raw.githubusercontent.com/secularemil34/resim2/main/Ellipse%2017-1.png"
        />
        <PersonCard
          buttonText="See Bio"
          description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem."
          name="Anna Marie"
          img="https://raw.githubusercontent.com/secularemil34/resim2/main/Ellipse%2017-2.png"
        />
        <PersonCard
          buttonText="See Bio"
          description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem."
          name="Anna Marisse"
          img="https://raw.githubusercontent.com/secularemil34/resim2/main/Ellipse%2017-3.png"
        />
        <PersonCard
          buttonText="See Bio"
          description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem."
          name="Anna Marie"
          img="https://raw.githubusercontent.com/secularemil34/resim2/main/Ellipse%2017-4.png"
        />
        <PersonCard
          buttonText="See Bio"
          description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem."
          name="Anna Marie"
          img="https://raw.githubusercontent.com/secularemil34/resim2/main/Ellipse%2017-5.png"
        />
        <PersonCard
          buttonText="See Bio"
          description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem."
          name="Anna Marie"
          img="https://raw.githubusercontent.com/secularemil34/resim2/main/Ellipse%2017-6.png"
        />
        <PersonCard
          buttonText="See Bio"
          description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem."
          name="Anna Marie"
          img="https://raw.githubusercontent.com/secularemil34/resim2/main/Ellipse%2017-7.png"
        />
      </div>
      </div>

      <InfoArea 
      title="WHAT IS VISTREAM WEBINAR PORTAL"
      description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto."
      />
      
      <section className="contain-4">
        <ServicesItem
          img2="https://raw.githubusercontent.com/secularemil34/resim2/main/Ellipse%209.png"
          description="Eabore etsu dolore magn aliqua enim ad minim veniam quis nostrud exercitas tion ullamco ipsum laboris."
          name="Certified Speakers"
          img="https://raw.githubusercontent.com/secularemil34/resim2/main/001-certificate.png"
        />
        <ServicesItem
          img2="https://raw.githubusercontent.com/secularemil34/resim2/main/Ellipse%209.png"
          description="Eabore etsu dolore magn aliqua enim ad minim veniam quis nostrud exercitas tion ullamco ipsum laboris."
          name="Connecting People"
          img="https://raw.githubusercontent.com/secularemil34/resim2/main/002-group.png"
        />
        <ServicesItem
          img2="https://raw.githubusercontent.com/secularemil34/resim2/main/Ellipse%209.png"
          description="Eabore etsu dolore magn aliqua enim ad minim veniam quis nostrud exercitas tion ullamco ipsum laboris."
          name="Latest Updates"
          img="https://raw.githubusercontent.com/secularemil34/resim2/main/003-world.png"
        />
      </section>

      <section className="contain-5">
        <h2 align="center">UPCOMING EVENTS</h2>
        <Slider {...settings}>
        <div className="card">
            <div className="card-title">
            Monday, 15 February 2020
            </div>
            <div className="card-desc">
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
              <hr style={{marginTop: '6px'}} />
              <div className="author">Speaker Name</div>
              <div className="butonlar">
                <button className="card-buton-reg">REGISTER</button>
                <button className="card-buton">ADD TO CALENDAR</button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-title">
            Monday, 15 February 2020
            </div>
            <div className="card-desc">
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
              <hr style={{marginTop: '6px'}} />
              <div className="author">Speaker Name</div>
              <div className="butonlar">
              <button className="card-buton2">MORE TEDAILS COMING SOON</button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-title">
            Monday, 15 February 2020
            </div>
            <div className="card-desc">
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
              <hr style={{marginTop: '6px'}} />
              <div className="author">Speaker Name</div>
              <div className="butonlar">
                <button className="card-buton-reg">REGISTER</button>
                <button className="card-buton">ADD TO CALENDAR</button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-title">
            Monday, 15 February 2020
            </div>
            <div className="card-desc">
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
              <hr style={{marginTop: '6px'}} />
              <div className="author">Speaker Name</div>
              <div className="butonlar">
              <button className="card-buton2">MORE TEDAILS COMING SOON</button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-title">
            Monday, 15 February 2020
            </div>
            <div className="card-desc">
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
              <hr style={{marginTop: '6px'}} />
              <div className="author">Speaker Name</div>
              <div className="butonlar">
                <button className="card-buton-reg">REGISTER</button>
                <button className="card-buton">ADD TO CALENDAR</button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-title">
            Monday, 15 February 2020
            </div>
            <div className="card-desc">
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
              <hr style={{marginTop: '6px'}} />
              <div className="author">Speaker Name</div>
              <div className="butonlar">
                <button className="card-buton-reg">REGISTER</button>
                <button className="card-buton">ADD TO CALENDAR</button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-title">
            Monday, 15 February 2020
            </div>
            <div className="card-desc">
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
              <hr style={{marginTop: '6px'}} />
              <div className="author">Speaker Name</div>
              <div className="butonlar">
              <button className="card-buton2">MORE TEDAILS COMING SOON</button>
              </div>
            </div>
          </div>
        </Slider>
      </section>
      <Footer note="Footer Note" />
    </>
  );
};

