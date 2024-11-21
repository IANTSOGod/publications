export default function setIndex(value: string) {
  switch (value) {
    case "Home":
      return 0;
    case "Messages":
      return 1;
    default:
      break;
  }
}
