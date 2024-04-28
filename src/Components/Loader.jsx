export default function Loader() {
  const styleLoader = {
    width: "100%",
    height: "70vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={styleLoader}>
      <img src="../public/loader.gif" width="70vw" />
    </div>
  );
}
