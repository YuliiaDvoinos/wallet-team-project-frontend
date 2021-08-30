import './Chart.scss';
export default function Chart({ statistics: { totalSpend } }) {
  return (
    <>
      <div className="chart">
        <div className="chart__contents">
          <span className="chart__ballance">&#8372; {totalSpend}</span>
        </div>
      </div>
    </>
  );
}
