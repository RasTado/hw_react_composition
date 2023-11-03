import "../css/Widget.css";

function Widget({ title, children }) {
  return (
    <div className="widget">
      <div>{title}</div>
      {children}
    </div>
  );
}

export default Widget;
