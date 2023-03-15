export default function Square({
  value,
  onSquareClick,
}: {
  value: any;
  onSquareClick: any;
}) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
