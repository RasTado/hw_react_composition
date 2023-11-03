import News from "./components/News";
import SearchPanel from "./components/SearchPanel";
import Poster from "./components/Poster";
import Widgets from "./components/Widgets";
import "./App.css";

const newsData = ["News 1", "News 2", "News 3", "News 4"];

export default function AppDeco() {
  return (
    <div className="app">
      <News data={newsData} />
      <SearchPanel />
      <Poster
        name="Нетология"
        url="https://promoed.ru/wp-content/uploads/2021/10/%D0%9E%D1%82%D0%B7%D1%8B%D0%B2%D1%8B-%D0%9D%D0%B5%D1%82%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F.png"
      />
      <Widgets />
    </div>
  );
}
