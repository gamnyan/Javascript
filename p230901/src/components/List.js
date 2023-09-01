import people from "../data/data.json";
import { GetImageUrl } from "./Uutils";

export const List = () => {
  const chemistList = people.filter(
    (person) => person.profession === "chemist"
  );
  const listItems = chemistList.map((person, i) => (
    <li key={i}>
      <img src={GetImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        know for {person.accomplishment}
      </p>
    </li>
  ));
  return listItems;
};
