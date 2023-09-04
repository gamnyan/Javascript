export const Toolbar = () => (
   <>
      <div onClick={() => alert("toolbar")}>
         <button
            onClick={e => {
               alert("movie");
               e.stopPropagation();
               alert(e.target.innerText);
            }}>
            Play Movie
         </button>
         <button
            onClick={e => {
               e.stopPropagation();
               alert("Image");
            }}>
            UploadImage
         </button>
      </div>
      <button onClick={() => alert("Lunch")}>Eat Lunch</button>
   </>
);

Toolbar.displayName = Toolbar;
