/**
 * A function used for pagination when scrolling to the bottom of the page.
 * @param setMovieCount setState-method for movieCount-state
 * @param step Incrementation step, number of movies to load when we scroll down
 */
const paginator = (setMovieCount: Function, step: number) => {
  window.onscroll = (e: object) => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.scrollHeight - 200
    ) {
      setMovieCount((m: number) => m + step);
    }
  };
};

export default paginator;
