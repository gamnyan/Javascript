import { useImmer } from "use-immer";

export const Form = () => {
   const [person, updatePerson] = useImmer({
      name: "Niki de Saint Phalle",
      artwork: {
         title: "Blue Nana",
         city: "Hamburg",
         image: "https://i.imgur.com/Sd1AgUOm.jpg",
      },
   });

   const handleNameChange = e =>
      updatePerson(d => {
         d.name = e.target.value;
      });

   const handleTitleChange = e =>
      updatePerson(d => {
         d.artwork.title = e.target.value;
      });

   const handleCityChange = e =>
      updatePerson(d => {
         d.artwork.city = e.target.value;
      });

   const handleImageChange = e =>
      updatePerson(d => {
         d.artwork.image = e.target.value;
      });

   return (
      <>
         <label>
            Name:
            <input value={person.name} onChange={handleNameChange}></input>
         </label>
         <br />
         <label>
            Title:
            <input value={person.artwork.title} onChange={handleTitleChange}></input>
         </label>
         <br />
         <label>
            City:
            <input value={person.artwork.city} onChange={handleCityChange}></input>
         </label>
         <br />
         <label>
            Image:
            <input value={person.artwork.image} onChange={handleImageChange}></input>
         </label>
         <p>
            <i>{person.artwork.title}</i>
            {" by "}
            {person.name}
            <br />
            (located in {person.artwork.city})
         </p>
         <img src={person.artwork.image} alt={person.artwork.title} />
      </>
   );
};

Form.displayName = Form;
