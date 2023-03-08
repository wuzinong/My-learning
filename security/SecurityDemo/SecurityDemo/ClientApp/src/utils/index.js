export function getCoookie(name) {
  const cookieArr = document.cookie?.split(";");
  for (let i = 0; i < cookieArr.length; i++) {
    const cookiePair = cookieArr[i].split("=");
    if (name === cookiePair[0].trim()) {
      return cookiePair[1];
    }
  }
  return "";
}
