import { useTranslation } from "react-i18next";

function FouroFour() {
  const { t } = useTranslation();

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
        503
      </h1>
      <p className='text-gray-200 sm:mt-0'>{t('error_503_text')}</p>
    </div>
  );
}

export default FouroFour;
