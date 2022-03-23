const Mobil = (props) => {
  return <h1>saya ingin sekali memiliki mobil {props.car} di masa depan</h1>;
};
export default function dream() {
  return (
    <div>
      <Mobil car="civic type C" />
    </div>
  );
}
