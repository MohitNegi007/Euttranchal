import React from "react";
import "./Article.scss";
import Card from "./Card";
const Article = () => {
  return (
    <div className="article">
      <h1>Recent Articles</h1>
      <div className="article1">
        <Card
          imgSrc="https://www.euttaranchal.com/tourism/photos/skiing-in-dayara-bugyal-1718694.jpg"
          title="Skiing in Dayara Bugal"
          text="After the popular ski resort of Auli,the next place with
        natural slopes for skiing is at Dayara Bugyal.Though there is
        no infrastructure for skiing"
        />
        <Card
          imgSrc="https://www.euttaranchal.com/tourism/photos/pauri-sita-circuit-557355.jpg"
          title="Sita circuit in Pauri"
          text="There is a Sita Mata Temple in Phalswari-kot village in pauri garhwal,
          Recently , uttrakhand govt. has announced that they will promote and develop it "
        />
        <Card
          imgSrc="https://www.euttaranchal.com/tourism/photos/munsiyari-1892241.jpg"
          title="Treks From Munsiyari"
          text="Situated in the pithoragarh district of uttrakhand district of uttrakhand , 
          Munsiyari is probably best know for the arduous albeit thrill seeking
          treks that lead"
        />
      </div>
      <div className="article2">
        <Card
          imgSrc="https://www.euttaranchal.com/tourism/photos/burans-flower-blooming-uttarakhand-7679170.jpg"
          title="The Blooming Buransh of Uttrakhand"
          text="The onset spring brings a beautiful cheer in uttrakhand .
          and the cheer is justified with the refreshing weather at this tiem of teh year and the Buransh"
        />
        <Card
          imgSrc="https://www.euttaranchal.com/tourism/photos/restaurants-cafes-in-nainital-9999488.jpg"
          title="Resturant and Cafes in Nainital"
          text="here are some restaurants and cafes in naital know more aobut nanital "
        />
        <Card
          imgSrc="https://www.euttaranchal.com/tourism/photos/10-best-treks-of-uttarakhand-4118948.jpg"
          title="To 10 solo treks in Uttrakhand"
          text="The wide variety of solo treks in uttrakhand haev encourged weekend travelers
          to live the dream and go for meaningful exursions in the lap of nature"
        />
      </div>
    </div>
  );
};

export default Article;
