function FouroFour() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100vw",
      height: "100dvh",
      flexDirection: "column"
    }}>
      <h1 className='text-gray-200 mb-1 sm:mt-0' style={{ fontWeight: "bold", fontFamily: "Jockey One", fontSize: "78px" }}>
        404
      </h1>
      <p className='text-gray-200 sm:mt-0'>We couldn't find the page you were looking for :(</p>
    </div>
  );
}

export default FouroFour;
