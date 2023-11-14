import evo from "./assets/evo.jpg";
import config from "./assets/config.jpg";
import jsxImg from "./assets/jsx-ui.png";
import OIP from "./assets/OIP.jpg";

export const CORE_CONCEPTS = [
  {
    image: evo,
    title: "Components",
    description:
      "The core UI building block - compose the user interface by combining multiple components.",
  },
  {
    image: jsxImg,
    title: "JSX",
    description:
      "Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.",
  },
  {
    image: config,
    title: "Props",
    description:
      "Make components configurable (and therefore reusable) by passing input data to them.",
  },
  {
    image: OIP,
    title: "State",
    description:
      "React-managed data which, when changed, causes the component to re-render & the UI to update.",
  },
];
