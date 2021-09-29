import { useState } from 'react';

export default function useToggle(initial = false) {
  const [toggle, setToggle] = useState(initial);

  function changeToggle() {
    setToggle(!toggle)
  }

  return {
    toggle,
    changeToggle
  }
}