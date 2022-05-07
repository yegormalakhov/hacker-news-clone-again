import TimeAgo from "react-timeago";

function News({ newsPost, index }) {
  const getUrlHostname = (url) => new URL(url).hostname;

  // How to format the date as x ... ago
  // 1. Do the calculations manually between the timestamp and Date.now() ❌
  // 2. Delegate a part of the calculation to a library: date-fns; still with some manual calculations: https://date-fns.org/v2.28.0/docs/differenceInMinutes 🌈
  // 3. Delegate the whole thing to the library: no manual calculations: date-fns: https://date-fns.org/v2.28.0/docs/formatDistanceToNow ✅
  // 4. There's probably someone who created an npm package for that for react:  https://www.npmjs.com/package/react-timeago 🦄

  return (
    <div className="newsContainer">
      <div className="index">{index + 1} </div>
      <div className="votearrow upvote">
        <i className="fa-solid fa-sort-up"></i>
      </div>
      <div className="newsBlock">
        <a href={newsPost.url}>
          <p>
            {newsPost.title}
            <span className="datarow  newsSource">
              ({getUrlHostname(newsPost.url)})
            </span>
          </p>
        </a>
        <br />
        <p className="datarow">
          {newsPost.points} points by
          <a href="#">
            <span className="datarow"> {newsPost.author} </span>
          </a>
          <a href="#">
            <span className="datarow">
              <TimeAgo date={newsPost.created_at} />
            </span>
          </a>
          |
          <a href="#">
            <span className="datarow"> hide </span>
          </a>
          |
          <a href="#">
            <span className="datarow">{newsPost.num_comments} comments</span>
          </a>
        </p>
      </div>
    </div>
  );
}

export default News;
