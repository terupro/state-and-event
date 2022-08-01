export const Container = ({ num, onClick }) => {
  return (
    <>
      <div>
        <h3>{`ボタンAを${num}回押しました！`}</h3>
        <button onClick={onClick}>ボタンA</button>
      </div>
    </>
  );
};
