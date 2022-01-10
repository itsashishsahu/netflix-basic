import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";

ReactDOM.render(
  <>

  <h1 className="heading_style">List of top 5 web series in 2018</h1>


    {/* Sacred Games  */}
    <Card
      imgsrc="https://m.media-amazon.com/images/M/MV5BYTMzYTQ1NzAtOGY4OC00ZGM5LThiMmUtMzgzZjgzNzNjZjJmXkEyXkFqcGdeQXVyODk2ODI3MTU@._V1_.jpg"
      title="A Netflix Orginal Series"
      sname="Sacred Games"
      link="https://www.netflix.com/in/title/80115328"
    />

    {/* Narcos  */}
    <Card
      imgsrc="https://s3.gaming-cdn.com/images/products/4811/orig/game-steam-narcos-rise-of-the-cartels-cover.jpg"
      title="A Netflix Orginal Series"
      sname="Narcos"
      link="https://www.netflix.com/in/title/80025172"
    />

    {/* Sex Education  */}
    <Card
      imgsrc="https://images-na.ssl-images-amazon.com/images/I/71fh4ioikWL.jpg"
      title="A Netflix Orginal Series"
      sname="Sex Education"
      link="https://www.netflix.com/in/title/80197526"
    />

    {/* Mirzapur  */}
    <Card
      imgsrc="https://m.media-amazon.com/images/M/MV5BN2NlNGYwYTUtMTczMi00NGVjLTgwMzUtNjBkZjIyNDc2NjcxXkEyXkFqcGdeQXVyODQ5NDUwMDk@._V1_.jpg"
      title="Amazon Orginal"
      sname="Mirzapur"
      link="https://www.primevideo.com/detail/Mirzapur/0PDOKMV9CRLOMO5EUKNCUJLG4Q"
    />

    {/* Apharan  */}
    <Card
      imgsrc="https://m.media-amazon.com/images/M/MV5BODQzYjNjNTItZmU2NC00OGE1LTgwNWItZDcxMGE4MmRlMmM3XkEyXkFqcGdeQXVyODI2MzM0MTM@._V1_.jpg"
      title="ALT Balaji Orginal"
      sname="Apharan"
      link="https://www.altbalaji.com/show/apharan/246"
    />
  </>,
  document.getElementById("root")
);
