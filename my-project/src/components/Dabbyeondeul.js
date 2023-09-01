export const Dabbyeondeul = (dabbyeon, i) => (
  <div className="card-content p-2">
    <div key={i}>
      {dabbyeon.sunseo +
        ". " +
        dabbyeon.naexyong +
        " [" +
        dabbyeon.voteCount +
        " / " +
        // Jilmundeul.voterCount +
        "]"}
    </div>
  </div>
);
Dabbyeondeul.displayName = "Dabbyeondeul";
