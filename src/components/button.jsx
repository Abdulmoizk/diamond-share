import "./index.scss";

function ThemeButton({ submit, disabled, onClick, title }) {
  return (
    <button
      type={submit || null}
      disabled={disabled}
      style={{
        borderColor: disabled && "#a1a3a1",
        color: disabled && "#a1a3a1",
        cursor: disabled && "not-allowed",
      }}
      className="theme-btn"
      onClick={onClick}
    >
      {title}
    </button>
  );
}
export default ThemeButton;
