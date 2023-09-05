import { useState } from "react";

let nextId = 3;
const initialArtists = [
   { id: 0, name: "Marta Colvin Andrade" },
   { id: 1, name: "Lamidi Olonade Fakeye" },
   { id: 2, name: "Louise Nevelson" },
];
const initialList = [
   { id: 0, title: "Big Bellies" },
   { id: 1, title: "Lunar Landscape" },
   { id: 2, title: "Terracotta Army" },
];

export default function List() {
   const [name, setName] = useState("");
   const [artists, setArtists] = useState(initialArtists);
   const [list, setList] = useState(initialList);

   function handleClick() {
      const insertAt = 1; // Could be any index
      const nextArtists = [
         // Items before the insertion point:
         ...artists.slice(0, insertAt),
         // New item:
         { id: nextId++, name: name },
         // Items after the insertion point:
         ...artists.slice(insertAt),
      ];
      setArtists(nextArtists);
      setName("");
   }

   function handleClick2() {
      const nextList = [...list];
      setList(nextList.reverse());
   }

   return (
      <>
         <h1>Inspiring sculptors:</h1>
         <input value={name} onChange={e => setName(e.target.value)} />
         <button onClick={handleClick}>Insert</button>
         <ul>
            {artists.map(artist => (
               <li key={artist.id}>{artist.name}</li>
            ))}
            <button onClick={handleClick2}>Reverse</button>
            {list.map(artwork => (
               <li key={artwork.id}>{artwork.title}</li>
            ))}
         </ul>
      </>
   );
}
