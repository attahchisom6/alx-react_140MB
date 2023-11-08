const getFullYear () => {
  return new Date().getFullYear();
}

const getFooterCopy =(isIndex) => {
  if (inIndex) {
    return "Holberton School";
  } else {
    return "Holberton School main dashboard";
  }
}

export default { getFullYear, getFooterCopy };
