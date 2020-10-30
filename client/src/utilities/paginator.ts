/**
 * A function used for pagination when scrolling to the bottom of the page.
 * @param setMovieCount setState-method for movieCount-state
 * @param step Incrementation step, number of movies to load when we scroll down
 */
const paginator = (
  setMovieCount: React.Dispatch<React.SetStateAction<number>>,
  step: number
): void => {
  /* eslint-disable-next-line */
  window.onscroll = (e: Event) => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.scrollHeight - 200
    ) {
      setMovieCount((m: number) => m + step);
    }
  };
};

export default paginator;
