import { SlideIn } from "../fade/SlideIn";

const TrustedBy = () => {
    return (
        <SlideIn delay={0.2} duration={0.8}>
            <h1
                        className="gradient-text3 text-center mb-0 sm:mb-6 text-lg sm:text-2xl md:text-4xl"
                        style={{ fontFamily: 'EuclidCircularB' }}
                    >
                        Trusted By
                    </h1>
            <div className="relative min-h-[4rem] sm:min-h-[16rem] shadow-2xl items-center rounded-md mb-0 sm:mb-6 overflow-hidden">
                {/* Arka Plan Katmanı */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-fixed"
                    style={{
                        backgroundImage: `
                            linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 10%),
                            linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 10%),
                            url('/project/mercbg.jpeg')
                        `,
                        filter: 'blur(9px)', // Arka planı bulanıklaştırır
                        pointerEvents: 'none', // Arka planın tıklanmasını engeller
                    }}
                ></div>

                {/* İçerik Katmanı */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 md:translate-y-[+25px] [">
                   
                    <a
                        href="https://nefesogullari.com.tr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transform transition-transform duration-300 ease-in-out"
                    >
                        <img
                            className="
                                rounded-lg 
                                transition 
                                duration-300 
                                ease-in-out 
                                mx-auto 
                                w-6/6 sm:w-4/6 
                                opacity-50 
                                hover:opacity-75
                                mb-10
                            "
                            src="/project/nefesogullari.png"
                            alt="Nefesogulları Mercedes"
                        />
                    </a>
                </div>
            </div>
        </SlideIn>
    );
};

export default TrustedBy;
