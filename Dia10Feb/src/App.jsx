import { useState } from "react";
import "./App.css";
import BookInfoComponent from "./components/BookInfoComponent";
import BookStoreComponent from "./components/BookStoreComponent";
import ReviewsComponent from "./components/ReviewsComponent";
import AddReviewComponent from "./components/AddReviewComponent";

function App() {
  const [reviews, setReviews] = useState([
    "¡Excelente libro!",
    "Muy interesante y bien escrito",
    "Personajes poco convincentes, tramas llenas de clichés",
  ]);

  const addReview = (newReviews) => {
    setReviews([...reviews, newReviews]);
  };

  return (
    <>
      <h1>BadReads</h1>
      <BookInfoComponent
        title="El Gran Gatsby"
        author="F. Scott Fitzgerald"
        description="Un personaje enigmático que encarna la ambición y el deseo de ascenso social que caracterizan la mentalidad estadounidense de la era."
      />
      <BookStoreComponent
        stores={[
          {
            name: "Amazon",
            link: "https://www.amazon.es/El-gran-Gatsby-Cl%C3%A1sicos-ilustrados/dp/8418395184/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=25GRKYJFM7P6P&dib=eyJ2IjoiMSJ9._B_dgr_xp94wHF6bdKRhzVykPjv9gzj1S0SDCvIzFKPrlltZxEKtpNOrXdEd9W4d5ODh2GtSGFqJFfaaOlWyRuGQnzNsAUAtFRz8dQG9dBX7HAuRevNJHRTVl1qQhkts_XqNTdBJ5tQKphmAR_qM_W4xb31Q61GGFo0JIRI-myYCdO_S98j1bc3nADtefIGFYwudFQ5IwMM6d_R299Ug574yXUlsP_jyN6n28Oqrn8kUwyutLD5YbMsgGxUmLwPYn69CtMdLVKn9glQ10jD-UahleBweXSWFeU952KYR5qHmgHoxkr26Qti6jk41l105lMI8gT8aNo3kcXp3p5iFXgC46Tt2tc5ycIX2hI4aclZA9NVvkwylbaTezZ-DaF8vqbNX-dMIcvIuibfkrf4_VnVDbdSnvT1k1Q6usCHkXjseoarSH0RefQygy9GsCit1.5q4roE7DKu7y3ALrMrdMX1p3J2jibVxNhd1IMnJGaCM&dib_tag=se&keywords=gran+gatsby&qid=1739183892&sprefix=gran+gatsby%2Caps%2C112&sr=8-1",
          },
          {
            name: "Casa del Libro",
            link: "https://www.casadellibro.com/libro-el-gran-gatsby-edicion-conmemorativa/9788466380867/16562004",
          },
          {
            name: "Agapea",
            link: "https://www.agapea.com/F-Scott-Fitzgerald/El-gran-Gatsby-9788408294177-i.htm",
          },
        ]}
      />
      <ReviewsComponent reviews={reviews} />
      <AddReviewComponent addReview={addReview} />
    </>
  );
}

export default App;
