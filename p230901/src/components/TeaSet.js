const Cup = ({ guest }) => {
  return <h1>Tea cup for guest #{guest}</h1>;
};

export const TeaSet = () => {
  let cups = [];
  for (let i = 1; i <= 12; i++) {
    cups.push(<Cup key={i} guest={i} />);
  }
  return cups;
};
TeaSet.displayName = "TeaSet";
