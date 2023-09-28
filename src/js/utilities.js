const handleDropdownAnimation = (opt) => {
  let control = 0;
  const dropDown = document.getElementById("drop-down");
  const blurElem = document.getElementById("blur-elem");

  const setAnimation = (opt) => {
    if (dropDown || blurElem) {
      if (opt) {
        dropDown.classList.add("animate");
        blurElem.classList.add("animate");
      } else {
        dropDown.classList.remove("animate");
        blurElem.classList.remove("animate");
      }
    } else {
      console.log("error");
    }
  };

  setAnimation(opt);

  if (!dropDown || !blurElem) {
    console.log("F");
    do {
      setAnimation(opt);
      control++;
      console.log(control);
    } while (control < 100);
  } else {
    console.log("error");
  }
};

export { handleDropdownAnimation };
