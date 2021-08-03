import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { fetchPosts } from "../reducks/posts/operations";
// import { getPosts } from "../reducks/posts/selectors";
import TopImg from "../assets/Images/First_Image.png";
import AllImg from "../assets/Images/All.png";
import Bread1Img from "../assets/Images/Bread.jpeg";
import Bread2Img from "../assets/Images/Bread.jpg";
import BurgerImg from "../assets/Images/Burger.jpg";
import KidsImg from "../assets/Images/Kids.jpeg";
import MainImg from "../assets/Images/Main.jpg";
const Home = () => {
  const [sendMenuCount, setSendMenuCount] = useState(-1);
  

  return (
    <section>
      <section class="topmost" id="top--1">
        <img src={TopImg} class="long--image" />
        <p class="order">How to Order ?</p>
        <p class="description">
          Thank you for loading the restaurant menu using our QR code.<br />
          Now you can select the items you want to order. <br />
          You can also write reviews and check other reviews.
        </p>
        <br />
        <br />
      </section>
      <section class="menus">
        {sendMenuCount == 1 ? (
          <button class="active tab" onclick ={()=>setSendMenuCount(-1)}>ALL</button>

        ) : (<button class="active tab" onClick={() => setSendMenuCount(1)}>ALL</button>)}
        {sendMenuCount == 2 ? (
          <button class="one tab" onclick={() => setSendMenuCount(-1)}>MAIN DISHES</button>

        ) : (<button class="one tab" onClick={() => setSendMenuCount(2)}>MAIN DISHES</button>)}
        {sendMenuCount == 3 ? (
          <button class="two tab" onclick ={()=>setSendMenuCount(-1)}>KIDS MENU</button>

        ) : (<button class="two tab" onClick={() => setSendMenuCount(3)}>KIDS MENU</button>)}
        {sendMenuCount == 4 ? (
          <button class="three tab" onclick ={()=>setSendMenuCount(-1)}>BREADS</button>

        ) : (<button class="three tab" onClick={() => setSendMenuCount(4)}>BREADS</button>)}
        {sendMenuCount == 5 ? (
          <button class="four tab" onclick ={()=>setSendMenuCount(-1)}>BURGER BAR</button>

        ) : (<button class="four tab" onClick={() => setSendMenuCount(5)}>BURGER BAR</button>)}
        <br />
        <br />
        <div class="tab-content">
          
          <ul id="all" data-tab-content class="active">
            <li>
              <img src={AllImg} class="items" />
              <p class="item">Chicken Burger</p>
              <button class="uno like">
                <span id="icon1"><i class="fas fa-thumbs-up"></i></span>
                <p class="likes un">(0)</p>
              </button>
              <p class="price">$16</p>
              <div class="container">
                <button type="button" class="minus oneed">-</button>
                <input type="text" class="amount onee" value="0" />
                <button type="button" class="plus oneei">+</button>
              </div>
              <p class="check reviews">Check Reviews</p>
              <p class="write reviews">Write Reviews</p>
            </li>
            <li>
              <img src={MainImg} class="items" />
              <p class="item">Salmon</p>
              <button class="dos like">
                <span id="icon1"><i class="fas fa-thumbs-up"></i></span>
                <p class="likes deux">(0)</p>
              </button>
              <p class="price">$28</p>
              <div class="container">
                <button type="button" class="minus twood">-</button>
                <input type="text" class="amount twoo" value="0" />
                <button type="button" class="plus twooi">+</button>
              </div>
              <p class="check reviews">Check Reviews</p>
              <p class="write reviews">Write Reviews</p>
            </li>
            <li>
              <img src={KidsImg} class="items" />
              <p class="item">Macaroni</p>
              <button class="tres like">
                <span id="icon1"><i class="fas fa-thumbs-up"></i></span>
                <p class="likes trois">(0)</p>
              </button>
              <p class="price">$12</p>
              <div class="container">
                <button type="button" class="minus threeed">-</button>
                <input type="text" class="amount threee" value="0" />
                <button type="button" class="plus threeei">+</button>
              </div>
              <p class="check reviews">Check Reviews</p>
              <p class="write reviews">Write Reviews</p>
            </li>
            <li>
              <img src={Bread1Img} class="items" />
              <p class="item">Bread</p>
              <button class="cuatro like">
                <span id="icon1"><i class="fas fa-thumbs-up"></i></span>
                <p class="likes quatro">(0)</p>
              </button>
              <p class="price">$10</p>
              <div class="container">
                <button type="button" class="minus fourrd">-</button>
                <input type="text" class="amount fourr" value="0" />
                <button type="button" class="plus fourri">+</button>
              </div>
              <p class="check reviews">Check Reviews</p>
              <p class="write reviews">Write Reviews</p>
            </li>
            <li>
              <img src={Bread2Img} class="items" />
              <p class="item">Brown Bread</p>
              <button class="cinco like">
                <span id="icon1"><i class="fas fa-thumbs-up"></i></span>
                <p class="likes cinq">(0)</p>
              </button>
              <p class="price">$12</p>
              <div class="container">
                <button type="button" class="minus fiveed">-</button>
                <input type="text" class="amount fivee" value="0" />
                <button type="button" class="plus fiveei">+</button>
              </div>
              <p class="check reviews">Check Reviews</p>
              <p class="write reviews">Write Reviews</p>
            </li>
            <li class="end_first_page">
              <img src={BurgerImg} class="items" />
              <p class="item">Mega Burger</p>
              <button class="seis like">
                <span id="icon1"><i class="fas fa-thumbs-up"></i></span>
                <p class="likes sixx">(0)</p>
              </button>
              <p class="price">$22</p>
              <div class="container">
                <button type="button" class="minus sixterd">-</button>
                <input type="text" class="amount sixter" value="0" />
                <button type="button" class="plus sixteri">+</button>
              </div>
              <p class="check reviews">Check Reviews</p>
              <p class="write reviews">Write Reviews</p>
            </li>
          </ul>
          <ul id="main-dishes" data-tab-content class="second">
            <li>
              <img src={MainImg} class="items" />
              <p class="item">Salmon</p>
              <button class="siete like">
                <span id="icon1"><i class="fas fa-thumbs-up"></i></span>
                <p class="likes sept">(0)</p>
              </button>
              <p class="price">$28</p>
              <div class="container">
                <button type="button" class="minus sevennd">-</button>
                <input type="text" class="amount sevenn" value="0" />
                <button type="button" class="plus sevenni">+</button>
              </div>
              <p class="check reviews">Check Reviews</p>
              <p class="write reviews">Write Reviews</p>
            </li>
          </ul>
          <ul id="kids-menu" data-tab-content class="third">
            <li>
              <img src={KidsImg} class="items" />
              <p class="item">Macaroni</p>
              <button class="ocho like">
                <span id="icon1"><i class="fas fa-thumbs-up"></i></span>
                <p class="likes huit">(0)</p>
              </button>
              <p class="price">$12</p>
              <div class="container">
                <button type="button" class="minus eighttd">-</button>
                <input type="text" class="amount eightt" value="0" />
                <button type="button" class="plus eightti">+</button>
              </div>
              <p class="check reviews">Check Reviews</p>
              <p class="write reviews">Write Reviews</p>
            </li>
            <li>
              <img src={BurgerImg} class="items" />
              <p class="item">Mega Burger</p>
              <button class="nueve like">
                <span id="icon1"><i class="fas fa-thumbs-up"></i></span>
                <p class="likes neuf">(0)</p>
              </button>
              <p class="price">$22</p>
              <div class="container">
                <button type="button" class="minus nineed">-</button>
                <input type="text" class="amount ninee" value="0" />
                <button type="button" class="plus nineeid">+</button>
              </div>
              <p class="check reviews">Check Reviews</p>
              <p class="write reviews">Write Reviews</p>
            </li>
          </ul>
          <ul id="breads" data-tab-content class="fourth">
            <li>
              <img src={Bread1Img} class="items" />
              <p class="item">Bread</p>
              <button class="diez like">
                <span id="icon1"><i class="fas fa-thumbs-up"></i></span>
                <p class="likes dix">(0)</p>
              </button>
              <p class="price">$10</p>
              <div class="container">
                <button type="button" class="minus tennd">-</button>
                <input type="text" class="amount tenn" value="0" />
                <button type="button" class="plus tenni">+</button>
              </div>
              <p class="check reviews">Check Reviews</p>
              <p class="write reviews">Write Reviews</p>
            </li>
            <li>
              <img src={Bread2Img} class="items" />
              <p class="item">Brown Bread</p>
              <button class="once like">
                <span id="icon1"><i class="fas fa-thumbs-up"></i></span>
                <p class="likes onze">(0)</p>
              </button>
              <p class="price">$12</p>
              <div class="container">
                <button type="button" class="minus elevennd">-</button>
                <input type="text" class="amount elevenn" value="0" />
                <button type="button" class="plus elevenni">+</button>
              </div>
              <p class="check reviews">Check Reviews</p>
              <p class="write reviews">Write Reviews</p>
            </li>
            <li>
              <img src={BurgerImg} class="items" />
              <p class="item">Mega Burger</p>
              <button class="douce like">
                <span id="icon1"><i class="fas fa-thumbs-up"></i></span>
                <p class="likes douze">(0)</p>
              </button>
              <p class="price">$22</p>
              <div class="container">
                <button type="button" class="minus twelveed">-</button>
                <input type="text" class="amount twelvee" value="0" />
                <button type="button" class="plus twelveei">+</button>
              </div>
              <p class="check reviews">Check Reviews</p>
              <p class="write reviews">Write Reviews</p>
            </li>
          </ul>
          <ul id="burgers" data-tab-content class="fifth">
            <li>
              <img src={AllImg} class="items" />
              <p class="item">Chicken Burger</p>
              <button class="trece like">
                <span id="icon1"><i class="fas fa-thumbs-up"></i></span>
                <p class="likes treize">(0)</p>
              </button>
              <p class="price">$16</p>
              <div class="container">
                <button type="button" class="minus thirteennd">-</button>
                <input type="text" class="amount thirteenn" value="0" />
                <button type="button" class="plus thirteenni">+</button>
              </div>
              <p class="check reviews">Check Reviews</p>
              <p class="write reviews">Write Reviews</p>
            </li>
            <li>
              <img src={BurgerImg} class="items" />
              <p class="item">Mega Burger</p>
              <button class="catorce like">
                <span id="icon1"><i class="fas fa-thumbs-up"></i></span>
                <p class="likes quatorze">(0)</p>
              </button>
              <p class="price">$22</p>
              <div class="container">
                <button type="button" class="minus fourteennd">-</button>
                <input type="text" class="amount fourteenn" value="0" />
                <button type="button" class="plus fourteenni">+</button>
              </div>
              <p class="check reviews">Check Reviews</p>
              <p class="write reviews">Write Reviews</p>
            </li>
          </ul>
        </div>
      </section>
      <footer class="ends">
        <div class="subtotal">Subtotal : $0</div>
        <button class="checkout">Check Selected Items</button>
      </footer>
      <script src="../assets/script.js"></script>
    </section>
  );
};

export default Home;
