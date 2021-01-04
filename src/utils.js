const timeConversion = (ms) => {
  let hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
  let min = Math.floor((ms / (1000 * 60)) % 60);
  let sec = Math.floor((ms / 1000) % 60);

  if (hours < 24) {
    console.log("ms", ms, hours);
    return hours + " hrs ago";
  } else if (min < 60) {
    return min + " min ago";
  } else if (sec < 60) {
    return sec + " sec ago";
  }
};

const getHostname = (url) => {
  return url ? new URL(url).hostname : "";
};

const getCurrentPage = (url, searchKey) => {
  const value = Number(new URLSearchParams(url).get(searchKey));
  return value ? value : 1;
};

export { timeConversion, getHostname, getCurrentPage };
