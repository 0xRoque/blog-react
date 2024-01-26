import { useState } from "react";
import "./styles.css";
const cardList = [
  {
    id: 1,
    title: "Card 1",
    description: "Card 1 description",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    title: "Card 2",
    description: "Card 2 description",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 3,
    title: "Card 3",
    description: "Card 3 description",
    image: "https://picsum.photos/200/300",
  },
];
function CardsComponents(props) {
  return (
    <div className="exercices-card-container">
      <p>Title: {props.title}</p>
      <p>Description: {props.description}</p>
      <img src={props.img}></img>
    </div>
  );
}
export default function ExercisesPage() {
  const [inputName, setName] = useState("");
  const [inputEmail, setEmail] = useState("");
  const [inputAssunto, setAssunto] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nome: ${inputName}\nEmail: ${inputEmail}\nAssunto: ${inputAssunto}`);
  };
  return (
    <div>
      <h1>Cards 01</h1>
      <div className="exercices-card-list">
        {cardList.map((item, index) => {
          return (
            <CardsComponents
              key={`${index}-${item.title}`}
              title={item.title}
              description={item.description}
              img={item.image}
            />
          );
        })}
      </div>
      <h1>02. Contact Form</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nome</label>
            <input
              type="text"
              value={inputName}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div>
            <label>Email:</label>
            <input
              type="text"
              value={inputEmail}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div>
            <label>Assunto:</label>
            <input
              type="text"
              value={inputAssunto}
              onChange={(e) => setAssunto(e.target.value)}
            ></input>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}