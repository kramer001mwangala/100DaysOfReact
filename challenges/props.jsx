import firsImageComponent from "../src/assets/evo.jpg";
import PropTypes from "prop-types";

function Header() {
  return (
    <header>
      <p>Kramer is back</p>
    </header>
  );
}
function CoreConcepts(props) {
  return (
    <li>
      <img src={props.img} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.paragraph}</p>
    </li>
  );
}

CoreConcepts.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  paragraph: PropTypes.string,
};

export default function kramer() {
  return (
    <div>
      <Header />
      <main>
        <h2>Core Concepts</h2>
        <span>
          <CoreConcepts
            title="Components"
            paragraph="Hey the paragraph is working"
            img={firsImageComponent}
          />
          <CoreConcepts title="Kramer" paragraph="Paragraph 2 of react props" />
          <CoreConcepts />
          <CoreConcepts />
        </span>
      </main>
    </div>
  );
}
