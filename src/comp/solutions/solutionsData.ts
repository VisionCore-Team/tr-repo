/*import licenseplate_titleimg from '/project/car.png';*/
import port_titleimg from '/project/port.jpeg';
import health_titleimg from '/project/surgery.jpeg';
import manufacture_titleimg from '/img/manufacturing.jpeg';


/*import licenseplate_solutionimg1 from '/project/Mercedes2.png';*/
import port_solutionimg1 from '/project/Security and Surveillance.jpeg';
import port_solutionimg2 from '/project/Container and Asset Tracking.png';
import port_solutionimg3 from '/project/License Plate and Container Tracking Systems.webp';
import port_solutionimg4 from '/project/Container Damage Detection.jpeg';
import port_solutionimg5 from '/project/HAZARDOUS MATERIAL IDENTIFICATION.webp';

import health_solutionimg1 from '/project/p5.png';
import health_solutionimg2 from '/project/p1.jpeg';
import health_solutionimg3 from '/project/p2.jpeg';
import health_solutionimg4 from '/project/p3.jpeg';

import manufacture_solutionimg1 from '/project/heatmap.webp';
import manufacture_solutionimg2 from '/project/p6.png';
import manufacture_solutionimg3 from '/project/anomaly.png';
import manufacture_solutionimg4 from '/img/pree.webp';
import manufacture_solutionimg5 from '/project/helmet.webp';

import agriculture_titleimg from '/project/agriculture.jpeg';
import agriculture_solutionimg1 from '/project/sprey.png';

export interface ProblemItem {
    title?: string;
    boldText?: string;
    text: string;
}

export interface SolutionItem {
    title: string;
    problem?: ProblemItem[];
    solution: ProblemItem[];
    image: string;
}

export interface SolutionsData {
    id: string;
    title: string;
    titleText: string;
    titleImage: string;
    paragraphTitle?: string;
    paragraph?: string;
    solutionTitle?: string;
    solutions: SolutionItem[];
}

const solutionsData: SolutionsData[] = [
    /*{
        id: "licenseplate",
        title: "licenseplate_title",
        titleText: "licenseplate_titleText",
        titleImage: licenseplate_titleimg,
        solutions: [
            {
                title: "licenseplate_solutionTitle",
                problem: [
                    {
                        title: "licenseplate_solutionProblemTitle",
                        text : "licenseplate_solutionProblemText"
                    }
                ],
                solution: [
                    {
                        text: "licenseplate_solutionSolutionText"
                    }
                ],
                image: licenseplate_solutionimg1
            },
        ]
    },*/
    {
        id: "portoperations",
        title: "port_title",
        titleText: "port_titleText",
        paragraphTitle: "port_paragraphTitle",
        paragraph: "port_paragraph",
        solutionTitle: "port_solutionTitle",
        titleImage: port_titleimg,
        solutions: [
            {
                title: "port_solution1Title",
                solution: [
                    {
                        boldText: 'port_solution1SolutionTextBold',
                        text: "port_solution1SolutionText"
                    }
                ],
                image: port_solutionimg1
            },
            {
                title: "port_solution2Title",
                solution: [
                    {
                        text: "port_solution2SolutionText"
                    }
                ],
                image: port_solutionimg2
            },
            {
                title: "port_solution3Title",
                solution: [
                    {
                        boldText: 'port_solution3SolutionTextBold',
                        text: "port_solution3SolutionText"
                    }
                ],
                image: port_solutionimg3
            },
            {
                title: "port_solution4Title",
                solution: [
                    {
                        text: "port_solution4SolutionText"
                    }
                ],
                image: port_solutionimg4
            },
            {
                title: "port_solution5Title",
                solution: [
                    {
                        text: "port_solution5SolutionText"
                    }
                ],
                image:port_solutionimg5
            },
        ]
    },
    {
        id: "health",
        title: "health_title",
        titleText: "health_titleText",
        titleImage: health_titleimg,
        paragraphTitle: "health_paragraphTitle",
        paragraph: "health_paragraph",
        solutionTitle: "health_solutionTitle",
        solutions: [
            {
                title: "health_solution1Title",
                problem: [
                    {
                        title: "health_solution1Problem1Title",
                        text: "health_solution1Problem1Text"
                    }
                ],
                solution: [
                    {
                        title: "health_solution1Solution1Title",
                        text: "health_solution1Solution1Text"
                    },
                    {
                        title: "health_solution1Solution2Title",
                        text: "health_solution1Solution2Text"
                    }
                ],
                image: health_solutionimg1
            },
            {
                title: "health_solution2Title",
                solution: [
                    {
                        title: "health_solution2Solution1Title",
                        text: "health_solution2Solution1Text"
                    },
                    {
                        title: "health_solution2Solution2Title",
                        text: "health_solution2Solution2Text"
                    }
                ],
                image: health_solutionimg2
            },
            {
                title: "health_solution3Title",
                problem: [
                    {
                        text: "health_solution3Problem1Text"
                    },
                ],
                solution: [
                    {
                        text: "health_solution3Solution1Text"
                    },
                ],
                image: health_solutionimg3
            },
            {
                title: "health_solution4Title",
                problem: [
                    {
                        text: "health_solution4Problem1Text"
                    },
                ],
                solution: [
                    {
                        text: "health_solution4Solution1Text"
                    },
                ],
                image: health_solutionimg4
            },
        ]
    },
    {
        id: "manufacturing",
        title: "manufacture_title",
        titleText: "manufacture_titleText",
        titleImage: manufacture_titleimg,
        paragraphTitle: "manufacture_paragraphTitle",
        paragraph: "manufacture_paragraph",
        solutionTitle: "manufacture_solutionTitle",
        solutions: [
            {
                title: "manufacture_solution1Title",
                problem: [
                    {
                        text: "manufacture_solution1Problem1Text"
                    }
                ],
                solution: [
                    {
                        text: "manufacture_solution1Solution1Text"
                    },
                ],
                image: manufacture_solutionimg1
            },
            {
                title: "manufacture_solution2Title",
                problem: [
                    {
                        title: "manufacture_solution2Problem1Title",
                        text: "manufacture_solution2Problem1Text"
                    },
                    {
                        title: "manufacture_solution2Problem2Title",
                        text: "manufacture_solution2Problem2Text"
                    },
                ],
                solution: [
                    {
                        title: "manufacture_solution2Solution1Title",
                        text: "manufacture_solution2Solution1Text"
                    },
                    {
                        title: "manufacture_solution2Solution2Title",
                        text: "manufacture_solution2Solution2Text"
                    }
                ],
                image: manufacture_solutionimg2
            },
            {
                title: "manufacture_solution3Title",
                problem: [
                    {
                        text: "manufacture_solution3Problem1Text"
                    },
                ],
                solution: [
                    {
                        text: "manufacture_solution3Solution1Text"
                    },
                ],
                image: manufacture_solutionimg3
            },
            {
                title: "manufacture_solution4Title",
                problem: [
                    {
                        text: "manufacture_solution4Problem1Text"
                    },
                ],
                solution: [
                    {
                        text: "manufacture_solution4Solution1Text"
                    },
                ],
                image: manufacture_solutionimg4
            },
            {
                title: "manufacture_solution5Title",
                problem: [
                    {
                        text: "manufacture_solution5Problem1Text"
                    },
                ],
                solution: [
                    {
                        text: "manufacture_solution5Solution1Text"
                    },
                ],
                image: manufacture_solutionimg5
            },
        ]
    },
    {
        id: "agriculture",
        title: "agriculture_title",
        titleText: "agriculture_titleText",
        titleImage: agriculture_titleimg,
        solutions: [
            {
                title: "agriculture_solution1Title",
                problem: [
                    {
                        text: "agriculture_solution1Problem1Text"
                    }
                ],
                solution: [
                    {
                        text: "agriculture_solution1Solution1Text"
                    },
                ],
                image: agriculture_solutionimg1
            },
            
        ]
    }
];

export default solutionsData;