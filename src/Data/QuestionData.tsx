import { Question } from "../Types/Question";

const data : Question[] = [
    {
        id: "Q1",
        questionText: "Water... ",
        answer:
        {
            id: "A1",
            rows: [
                {
                    id: "R11",
                    options: [
                        {
                            id: "O11",
                            label: "is wet",
                            isCorrect: true
                        },
                        {
                            id: "O12",
                            label: "is dry",
                            isCorrect: false
                        }
                    ]
                },
                {
                    id: "R12",
                    options: [
                        {
                            id: "O13",
                            label: "tastes refreshing",
                            isCorrect: true
                        },
                        {
                            id: "O14",
                            label: "tastes bitter",
                            isCorrect: false
                        },
                        {
                            id: "O15",
                            label: "tastes sour",
                            isCorrect: false
                        },
                    ]
                },
                {
                    id: "R13",
                    options: [
                        {
                            id: "O16",
                            label: "is solid at room temperature",
                            isCorrect: false
                        },
                        {
                            id: "O17",
                            label: "is liquid at room temperature",
                            isCorrect: true
                        },
                        {
                            id: "O18",
                            label: "is gas at room temperature",
                            isCorrect: false
                        }
                    ]
                },
                {
                    id: "R14",
                    options: [
                        {
                            id: "O19",
                            label: "is opaque",
                            isCorrect: false
                        },
                        {
                            id: "O20",
                            label: "is transparent",
                            isCorrect: true
                        }
                    ]
                }
            ]
        }
    },
    {
        id: "Q2",
        questionText: "Fire... ",
        answer:
        {
            id: "A2",
            rows: [
                {
                    id: "R15",
                    options: [
                        {
                            id: "O21",
                            label: "is hot",
                            isCorrect: true
                        },
                        {
                            id: "O22",
                            label: "is cold",
                            isCorrect: false
                        }
                    ]
                },
                {
                    id: "R16",
                    options: [
                        {
                            id: "O23",
                            label: "burns in helium",
                            isCorrect: false
                        },
                        {
                            id: "O24",
                            label: "burns in carbon dioxide",
                            isCorrect: false
                        },
                        {
                            id: "O25",
                            label: "burns in oxygen",
                            isCorrect: true
                        }
                    ]
                },
                {
                    id: "R17",
                    options: [
                        {
                            id: "O26",
                            label: "is dangerous",
                            isCorrect: true
                        },
                        {
                            id: "O27",
                            label: "is safe",
                            isCorrect: false
                        }
                    ]
                }
            ]
        }
    },
    {
        id: "Q3",
        questionText: "Fish... ",
        answer:
        {
            id: "A3",
            rows: [
                {
                    id: "R18",
                    options: [
                        {
                            id: "O28",
                            label: "swim",
                            isCorrect: true
                        },
                        {
                            id: "O29",
                            label: "fly",
                            isCorrect: false
                        }
                    ]
                },
                {
                    id: "R19",
                    options: [
                        {
                            id: "O30",
                            label: "have feathers",
                            isCorrect: false
                        },
                        {
                            id: "O31",
                            label: "have scales",
                            isCorrect: true
                        },
                    ]
                },
                {
                    id: "R20",
                    options: [
                        {
                            id: "O32",
                            label: "have lungs",
                            isCorrect: false
                        },
                        {
                            id: "O33",
                            label: "have gills",
                            isCorrect: true
                        }
                    ]
                },
                {
                    id: "R21",
                    options: [
                        {
                            id: "O35",
                            label: "tastes good with chips",
                            isCorrect: true
                        },
                        {
                            id: "O36",
                            label: "tastes good with maple syrup",
                            isCorrect: false
                        }
                    ]
                }
            ]
        }
    }
];

export default data;
