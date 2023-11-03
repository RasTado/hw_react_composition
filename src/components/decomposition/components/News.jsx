import "../css/News.css";
import NewsPost from "./NewsPost";

function News({ data }) {
  console.log(data);
  return (
    <div className="news">
      {data.map((item) => (
        <NewsPost content={item} key={item} />
      ))}
    </div>
  );
}

export default News;
