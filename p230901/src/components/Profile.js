import { GetImageUrl } from "./Uutils.js";

export const Profile = () => (
  <Card>
    <Avatar
      size={100}
      person={{ name: "Katsuko Saruhashi", imageId: "YfeOqp2" }}
    />
  </Card>
);
const Card = ({ children }) => <div className="photos">{children}</div>;
const Avatar = ({ person, size }) => (
  <div className="imgbox">
    <img
      className="photo"
      src={GetImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  </div>
);

// export default Profile;
