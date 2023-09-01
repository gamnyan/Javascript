export const GetImageUrl = (person, size = "s") =>
  `https://i.imgur.com/${person.imageId}${size}.jpg`;
