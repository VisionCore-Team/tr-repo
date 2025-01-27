import { useTranslation } from "react-i18next";
import { FadeUp } from "../../../helpers/fade/FadeUp";
import { SlideIn } from "../../../helpers/fade/SlideIn";
import Chart from "./chartbar/chartbar";
import './operations_translate';

const Operations = () => {
    const { t } = useTranslation();
    const data = [
        {
            title: t('operations_element_title_1'),
            source: "//images.ctfassets.net/zi2yef4nw297/55IgiMbZTUnzClTCNDDf8i/0d1dd19b845ae5bb3f553a9e3097dd1b/analytics.svg",
            text: t('operations_element_text_1')
        },
        {
            title: t('operations_element_title_2'),
            source: "//images.ctfassets.net/zi2yef4nw297/5yoHVAi7MbTb2l06IbU2yg/5a8046ae87cdc124f277267d225938dc/process.svg",
            text: t('operations_element_text_2')
        },
        {
            title: t('operations_element_title_3'),
            source: "//images.ctfassets.net/zi2yef4nw297/5kzRnOp98IPwkc8Kl6MlYk/b32e0787996f7cb7e7ef05320a5fde34/money.svg",
            text: t('operations_element_text_3')
        },
        {
            title: t('operations_element_title_4'),
            source: "//images.ctfassets.net/zi2yef4nw297/1YgBcdR3qmWhI0eriJNK5H/37f1b3a4a597fa2e8c03c861f8ba3710/safety.svg",
            text: t('operations_element_text_4')
        },
    ]

    return (
        <div className="project-container relative bg-cover bg-center scroll-mt-[124px]">
            <div className="lg:space-y-6">
                <FadeUp delay={0.2} duration={0.8}>
                    <h2 className="mx-auto max-w-5xl px-6 text-white text-center text-2xl lg:text-6xl mb-8">{t('operations_heading')}</h2>
                    <p className="mx-auto max-w-6xl px-6 text-gray-500 text-center text-base lg:text-xl">{t('operations_text')}</p>
                </FadeUp>
                <SlideIn delay={0.2} duration={0.8}>
                    <div className="mx-auto flex max-w-7xl flex-wrap flex-row justify-center gap-2 lg:gap-4">
                        {data.map((el, index) => (
                            <div key={index} className="relative flex items-center justify-center p-2 w-full sm:w-1/2 lg:w-1/5">
                                <div className="z-10 flex h-full w-full flex-col rounded-lg transition-all text-white bg-[#0D1225]">
                                    <div className="flex-1 items-center justify-center text-center flex w-full flex-col space-y-4 p-[16px]">
                                        <div className="flex items-center">
                                            <img
                                                src={el.source}
                                                alt={el.title}
                                            />
                                        </div>
                                        <h4 className={"break-words"} >{el.title}</h4>
                                        <p className="text-base leading-6 opacity-80">{el.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </SlideIn>
            </div>
            <Chart />
        </div>
    )
}

export default Operations;