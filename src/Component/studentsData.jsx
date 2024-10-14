const students = [
    {
        misNo: "112105001",
        studentName: "AAKANKSHA SHRINIVAS ADONI",
        sgpa: 8.87,
        cgpa: 8.50,
        subjects: {
            codes: [
                "Engineering Economics",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Renewable Energy",
                "Financial Derivatives and Structuring",
                "Environmental Studies"
            ],
            grades: ["BB", "AB", "AA", "AB", "AB", "AB", "AB", "BB", "AB", "BB", "BC", "PP"],
            pointers: ["8", "9", "10", "9", "9", "9", "9", "8", "9", "8", "7", "10"]
        }
    },
    {
        misNo: "112105002",
        studentName: "AGRE RUPALI BHAIRU",
        sgpa: 5.04,
        cgpa: 5.18,
        subjects: {
            codes: [
                "Engineering Economics",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Programmable Logic Controller and Its Applications",
                "Environmental Studies"
            ],
            grades: ["DD", "DD", "BB", "CC", "FF", "CD", "BC", "BC", "BB", "BC", "PP"],
            pointers: ["4", "4", "8", "6", "0", "5", "7", "7", "8", "7", "10"]
        }
    },
    {
        misNo: "112105003",
        studentName: "ANISH PANDITH",
        sgpa: 4.57,
        cgpa: 5.38,
        subjects: {
            codes: [
                "Industrial Psychology",
                "Embedded Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Materials and Processes for e-Mobility",
                "Environmental Studies"
            ],
            grades: ["CC", "BB", "BB", "DD", "CD", "FF", "BC", "BC", "BB", "FF", "PP"],
            pointers: ["6", "8", "8", "4", "5", "0", "7", "7", "8", "0", "10"]
        }
    },
    {
        misNo: "112105004",
        studentName: "ARYAN KANSE",
        sgpa: 8.22,
        cgpa: 7.88,
        subjects: {
            codes: [
                "Industrial Psychology",
                "Object Oriented Programming and Design",
                "Embedded Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Renewable Energy",
                "Environmental Studies"
            ],
            grades: ["AB", "BC", "AB", "AB", "BB", "BC", "BB", "AA", "BB", "AB", "BC", "PP"],
            pointers: ["9", "7", "9", "9", "8", "7", "8", "10", "8", "9", "7", "10"]
        }
    },
    {
        misNo: "112105005",
        studentName: "ATHARVA RAVINDRA JOSHI",
        sgpa: 8.61,
        cgpa: 8.31,
        subjects: {
            codes: [
                "Finance for Engineers",
                "Industrial Electrical Systems",
                "Embedded System Design",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Digital Image Processing Applications",
                "Environmental Studies"
            ],
            grades: ["AB", "AB", "BB", "AB", "AB", "BC", "AA", "AB", "BB", "AB", "CC", "PP"],
            pointers: ["9", "9", "8", "9", "9", "7", "10", "9", "8", "9", "6", "10"]
        }
    },
    {
        misNo: "112105006",
        studentName: "AWCHAR DARSHANSINGH KAWARSINGH",
        sgpa: 9.04,
        cgpa: 8.17,
        subjects: {
            codes: [
                "Finance for Engineers",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Renewable Energy",
                "Environmental Studies"
            ],
            grades: ["AB", "BC", "AB", "AA", "AA", "AA", "AA", "AB", "BB", "BC", "PP"],
            pointers: ["9", "7", "9", "10", "10", "10", "10", "9", "8", "7", "10"]
        }
    },
    {
        misNo: "112105007",
        studentName: "BAGADE ABHISHEK VIJAY",
        sgpa: 0.00,
        cgpa: 3.30,
        subjects: {
            codes: [
                "Basic Electrical Engineering",
                "Electric Machinery I",
                "Electromagnetic Fields",
                "Vector Calculus and Partial Differential Equations",
                "Engineering Graphics and Design",
                "Semiconductor Physics and Electromagnetism",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Environmental Studies"
            ],
            grades: ["FF", "FF", "FF", "FF", "FF", "FF", "NR", "NR", "NR", "NR", "NR", "NR", "NR", "PP"],
            pointers: ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "10"]
        }
    },
    {
        misNo: "112105008",
        studentName: "BAGAL DIVYA RAMKRISHNA",
        sgpa: 7.30,
        cgpa: 6.81,
        subjects: {
            codes: [
                "Industrial Psychology",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Network Protocols",
                "Materials and Processes for e-Mobility",
                "Environmental Studies"
            ],
            grades: ["CC", "BC", "AA", "BC", "CC", "BC", "AB", "BB", "BB", "FF", "BB", "PP"],
            pointers: ["6", "7", "10", "7", "6", "7", "9", "8", "8", "0", "8", "10"]
        }
    },
    {
        misNo: "112105009",
        studentName: "BEHARE PRAJWAL RAJENDRA",
        sgpa: 8.30,
        cgpa: 7.42,
        subjects: {
            codes: [
                "Engineering Economics",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Programmable Logic Controller and Its Applications",
                "Environmental Studies"
            ],
            grades: ["AB", "BB", "AA", "BB", "BC", "BB", "AA", "AB", "AB", "BB", "PP"],
            pointers: ["9", "8", "10", "8", "7", "8", "10", "9", "9", "8", "10"]
        }
    },
    {
        misNo: "112105010",
        studentName: "BHAGWAT ANUJA AVINASH",
        sgpa: 8.35,
        cgpa: 7.66,
        subjects: {
            codes: [
                "Engineering Economics",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Programmable Logic Controller and Its Applications",
                "Environmental Studies"
            ],
            grades: ["BB", "BC", "AA", "AB", "BB", "BB", "AB", "AB", "BC", "AB", "PP"],
            pointers: ["8", "7", "10", "9", "8", "8", "9", "9", "7", "9", "10"]
        }
    },
    {
        misNo: "112105011",
        studentName: "BHAGWAT ATHARVA ULHAS",
        sgpa: 8.43,
        cgpa: 7.93,
        subjects: {
            codes: [
                "Engineering Economics",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Programmable Logic Controller and Its Applications",
                "Environmental Studies"
            ],
            grades: ["BB", "BB", "AB", "BB", "BB", "BB", "AA", "AB", "AB", "AA", "PP"],
            pointers: ["8", "8", "9", "8", "8", "8", "10", "9", "9", "10", "10"]
        }
    },
    {
        misNo: "112105015",
        studentName: "DHAIT ANIKET GIRISH",
        sgpa: 6.04,
        cgpa: 6.38,
        codes: {
            codes: [
                "Engineering Economics",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Digital Image Processing Applications",
                "Environmental Studies"
            ],
            grades: ["BC", "CC", "BB", "CC", "CD", "CD", "BB", "BB", "BB", "DD", "PP"],
            pointers: ["7", "6", "8", "6", "5", "5", "8", "8", "8", "4", "10"]
        }
    },
    {
        misNo: "112105016",
        studentName: "DIKKAR RUSHIKESH GOPAL",
        sgpa: 6.14,
        cgpa: 5.58,
        subjects: {
            codes: [
                "Industrial Psychology",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Materials and Processes for e-Mobility",
                "Environmental Studies"
            ],
            grades: ["BC", "BB", "DD", "CC", "BC", "BC", "AA", "BC", "BB", "PP"],
            pointers: ["7", "8", "4", "6", "7", "7", "10", "7", "8", "10"]
        }
    },
    {
        misNo: "112105017",
        studentName: "GACCHE SANCHI MILIND",
        sgpa: 6.91,
        cgpa: 6.17,
        subjects: {
            codes: [
                "Engineering Economics",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Programmable Logic Controller",
                "Environmental Studies"
            ],
            grades: ["BC", "CD", "BB", "BC", "BC", "CD", "AB", "BB", "AA", "AB", "PP"],
            pointers: ["7", "5", "8", "7", "7", "5", "9", "8", "10", "9", "10"]
        }
    },
    {
        misNo: "112105018",
        studentName: "GADEKAR SAKSHI BHASKAR",
        sgpa: 7.17,
        cgpa: 6.70,
        subjects: {
            codes: [
                "Industrial Psychology",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Geoinformatics and Applications",
                "Environmental Studies"
            ],
            grades: ["BC", "BC", "AB", "BC", "BB", "CC", "AB", "AB", "AA", "DD", "PP"],
            pointers: ["7", "7", "9", "7", "8", "6", "9", "9", "10", "4", "10"]
        }
    },
    {
        misNo: "112105019",
        studentName: "GAGANDEEP",
        sgpa: 0.67,
        cgpa: 4.11,
        subjects: {
            codes: [
                "Vector Calculus and Partial Differential Equations",
                "Semiconductor Physics and Electromagnetism",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Geoinformatics and Applications",
                "Environmental Studies"
            ],
            grades: ["DD", "FF", "FF", "FF", "NR", "FF", "FF", "FF", "NP", "NR", "PP"],
            pointers: ["4", "0", "0", "0", "0", "0", "0", "0", "0", "0", "10"]
        }
    },
    {
        misNo: "112105020",
        studentName: "GAJANKUSH NIKIL VIJAY",
        sgpa: 7.39,
        cgpa: 5.66,
        subjects: {
            codes: [
                "Industrial Psychology",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Programmable Logic Controller",
                "Environmental Studies"
            ],
            grades: ["BB", "CC", "BB", "BB", "BC", "CC", "AB", "BB", "BB", "AB", "PP"],
            pointers: ["8", "6", "8", "8", "7", "6", "9", "8", "8", "9", "10"]
        }
    },
    {
        misNo: "112105021",
        studentName: "GHADGE TANISHQ CHANDRAKANT",
        sgpa: 6.96,
        cgpa: 6.50,
        subjects: {
            codes: [
                "Engineering Economics",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Materials and Processes for e-Mobility",
                "Environmental Studies"
            ],
            grades: ["BC", "BC", "BB", "CC", "BC", "CC", "BB", "BB", "BB", "DD", "PP"],
            pointers: ["7", "7", "8", "6", "7", "6", "8", "8", "8", "4", "10"]
        }
    },
    {
        misNo: "112105022",
        studentName: "GHAYTIDAK SHIVRAJ MANOHAR",
        sgpa: 7.74,
        cgpa: 6.94,
        subjects: {
            codes: [
                "Engineering Economics",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Programmable Logic Controller",
                "Environmental Studies"
            ],
            grades: ["BC", "BB", "AB", "BC", "BC", "BB", "AB", "AB", "AB", "BC", "PP"],
            pointers: ["7", "8", "9", "7", "7", "8", "9", "9", "9", "7", "10"]
        }
    },
    {
        misNo: "112105023",
        studentName: "GHEJI SANJAY KASHAPA",
        sgpa: 8.52,
        cgpa: 8.11,
        subjects: {
            codes: [
                "Finance for Engineers",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Financial Derivatives and Structuring",
                "Environmental Studies"
            ],
            grades: ["AB", "BB", "AB", "AB", "BB", "BB", "AB", "AB", "AA", "BC", "PP"],
            pointers: ["9", "8", "9", "9", "8", "8", "9", "9", "10", "7", "10"]
        }
    },
    {
        misNo: "112105024",
        studentName: "GIRASE MOHIT RANJITSINGH",
        sgpa: 8.87,
        cgpa: 8.60,
        subjects: {
            codes: [
                "Finance for Engineers",
                "Object Oriented Programming and Design",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Renewable Energy",
                "Environmental Studies"
            ],
            grades: ["AA", "AB", "AB", "AB", "AB", "BB", "AB", "AA", "AA", "AB", "PP"],
            pointers: ["10", "9", "9", "9", "9", "8", "9", "10", "10", "9", "10"]
        }
    },
    {
        misNo: "112105025",
        studentName: "GODBOLE ATHARVA VINAY",
        sgpa: 9.65,
        cgpa: 9.24,
        subjects: {
            codes: [
                "Finance for Engineers",
                "Object Oriented Programming and Design",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Renewable Energy",
                "Environmental Studies"
            ],
            grades: ["AA", "BB", "AA", "AB", "AA", "BB", "AA", "AA", "AA", "AA", "PP"],
            pointers: ["10", "8", "10", "9", "10", "8", "10", "10", "10", "10", "10"]
        }
    },
    {
        misNo: "112105026",
        studentName: "HOLKAR SUMIT SUDHAKAR",
        sgpa: 8.48,
        cgpa: 7.91,
        subjects: {
            codes: [
                "Engineering Economics",
                "Industrial Electrical Systems",
                "Embedded Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Digital Image Processing Applications",
                "Environmental Studies"
            ],
            grades: ["BB", "BB", "BC", "AA", "AA", "BB", "AB", "AB", "AA", "BC", "PP"],
            pointers: ["8", "8", "7", "10", "10", "8", "9", "9", "10", "7", "10"]
        }
    },
    {
        misNo: "112105027",
        studentName: "INGALE YASHWANT RAJENDRA",
        sgpa: 6.65,
        cgpa: 6.18,
        subjects: {
            codes: [
                "Engineering Economics",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Materials and Processes for e-Mobility",
                "Environmental Studies"
            ],
            grades: ["CC", "CC", "BB", "CC", "BC", "CC", "BC", "BB", "AB", "BC", "PP"],
            pointers: ["6", "6", "8", "6", "7", "6", "7", "8", "9", "7", "10"]
        }
    },
    {
        misNo: "112105028",
        studentName: "JAWALE SAMEER SANJAY",
        sgpa: 1.89,
        cgpa: 4.40,
        subjects: {
            codes: [
                "Univariate Calculus",
                "Vector Calculus and Partial Differential Equations",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Materials and Processes for e-Mobility",
                "Environmental Studies"
            ],
            grades: ["DD", "FF", "BB", "FF", "NR", "FF", "FF", "CC", "NR", "NP", "PP"],
            pointers: ["4", "0", "8", "0", "0", "0", "0", "7", "0", "0", "10"]
        }
    },

    {
        misNo: "112105029",
        studentName: "KADAM VAISHNAVEE JAYSING",
        sgpa: 8.04,
        cgpa: 7.80,
        subjects: {
            codes: [
                "Engineering Economics",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Network Protocols",
                "Renewable Energy",
                "Environmental Studies"
            ],
            grades: ["AB", "BC", "AB", "BB", "BB", "BB", "AB", "AB", "BB", "NR", "BC", "PP"],
            pointers: ["9", "7", "9", "8", "8", "8", "9", "9", "8", "0", "7", "10"]
        }
    },
    {
        misNo: "112105030",
        studentName: "KAMBLE SWARNIM SURESH",
        sgpa: 6.78,
        cgpa: 7.09,
        subjects: {
            codes: [
                "Engineering Economics",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Renewable Energy",
                "Environmental Studies"
            ],
            grades: ["BB", "BC", "BB", "CD", "CD", "BC", "AB", "BB", "AB", "BC", "PP"],
            pointers: ["8", "7", "8", "5", "5", "7", "9", "8", "9", "7", "10"]
        }
    },
    {
        misNo: "112105032",
        studentName: "KHAN IBRAHIM ANWAR",
        sgpa: 8.26,
        cgpa: 7.47,
        subjects: {
            codes: [
                "Industrial Psychology",
                "Industrial Electrical Systems",
                "Embedded Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Renewable Energy",
                "Environmental Studies"
            ],
            grades: ["AA", "BC", "AB", "AB", "BB", "BC", "AB", "AB", "AA", "AB", "PP"],
            pointers: ["10", "7", "9", "9", "8", "7", "9", "9", "10", "9", "10"]
        }
    },
    {
        misNo: "112105034",
        studentName: "KHILARI JAGJIT MARUTI",
        sgpa: 9.26,
        cgpa: 8.87,
        subjects: {
            codes: [
                "Finance for Engineers",
                "Industrial Electrical Systems",
                "Embedded Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Renewable Energy",
                "Environmental Studies"
            ],
            grades: ["AA", "AA", "AA", "AA", "AB", "AB", "AB", "AB", "AB", "AA", "BB", "PP"],
            pointers: ["10", "10", "10", "10", "9", "9", "9", "9", "9", "10", "8", "10"]
        }
    },
    {
        misNo: "112105035",
        studentName: "KHUSHI GUPTA",
        sgpa: 7.91,
        cgpa: 7.95,
        subjects: {
            codes: [
                "Engineering Economics",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Financial Derivatives and Structuring",
                "Environmental Studies"
            ],
            grades: ["BB", "BC", "AA", "AB", "BC", "CD", "AB", "AB", "AA", "BC", "PP"],
            pointers: ["8", "7", "10", "9", "7", "5", "9", "9", "10", "7", "10"]
        }
    },
    {
        misNo: "112105036",
        studentName: "KULKARNI ATHARVA MAHESH",
        sgpa: 9.17,
        cgpa: 8.69,
        subjects: {
            codes: [
                "Finance for Engineers",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Digital Image Processing Applications",
                "Environmental Studies"
            ],
            grades: ["AA", "AA", "AA", "AB", "AB", "BB", "AA", "AA", "AA", "BB", "PP"],
            pointers: ["10", "10", "10", "9", "9", "8", "10", "10", "10", "8", "10"]
        }
    },
    {
        misNo: "112105037",
        studentName: "LOKHANDE ANURAG GANESH",
        sgpa: 7.17,
        cgpa: 6.50,
        subjects: {
            codes: [
                "Engineering Economics",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Geoinformatics and Applications",
                "Environmental Studies"
            ],
            grades: ["BB", "CC", "BB", "CC", "BB", "CC", "AB", "AB", "AB", "BB", "PP"],
            pointers: ["8", "6", "8", "6", "8", "6", "9", "9", "9", "8", "10"]
        }
    },
    {
        misNo: "112105038",
        studentName: "MALAY KHARE",
        sgpa: 7.70,
        cgpa: 7.14,
        subjects: {
            codes: [
                "Industrial Psychology",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Financial Derivatives and Structuring",
                "Environmental Studies"
            ],
            grades: ["BB", "CD", "AB", "BB", "BC", "BB", "AA", "AA", "AB", "CC", "PP"],
            pointers: ["8", "5", "9", "8", "7", "8", "10", "10", "9", "6", "10"]
        }
    },
    {
        misNo: "112105039",
        studentName: "MALI SIDDHI DEVENDRA",
        sgpa: 8.30,
        cgpa: 7.80,
        subjects: {
            codes: [
                "Engineering Economics",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Renewable Energy",
                "Environmental Studies"
            ],
            grades: ["AB", "BB", "AB", "BB", "BB", "BB", "AB", "AB", "AB", "BB", "PP"],
            pointers: ["9", "8", "9", "8", "8", "8", "9", "9", "9", "8", "10"]
        }
    },
    {
        misNo: "112105040",
        studentName: "MANE SANDHYARANI RAMDAS",
        sgpa: 8.09,
        cgpa: 6.98,
        subjects: {
            codes: [
                "Industrial Psychology",
                "Industrial Electrical Systems",
                "Embedded Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Renewable Energy",
                "Environmental Studies"
            ],
            grades: ["BB", "BC", "BB", "AB", "BB", "BB", "AB", "AA", "AB", "BB", "PP"],
            pointers: ["8", "7", "8", "9", "8", "8", "9", "10", "9", "8", "10"]
        }
    },
    {
        misNo: "112105041",
        studentName: "MORE SUYASH BHASKAR",
        sgpa: 8.04,
        cgpa: 7.48,
        subjects: {
            codes: [
                "Engineering Economics",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Renewable Energy",
                "Environmental Studies"
            ],
            grades: ["BB", "BB", "AB", "BB", "BC", "BB", "AB", "AB", "BB", "BB", "PP"],
            pointers: ["8", "8", "9", "8", "7", "8", "9", "9", "8", "8", "10"]
        }
    },
    {
        misNo: "112105042",
        studentName: "NAMDE APURVA CHITTARANJAN",
        sgpa: 6.74,
        cgpa: 6.55,
        subjects: {
            codes: [
                "Industrial Psychology",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Digital Image Processing Applications",
                "Environmental Studies"
            ],
            grades: ["BB", "CD", "AB", "BC", "BC", "CD", "AB", "AB", "AB", "CD", "PP"],
            pointers: ["8", "5", "9", "7", "7", "5", "9", "9", "9", "5", "10"]
        }
    },
    {
        misNo: "112105043",
        studentName: "NANIKA KUNDAL",
        sgpa: 6.83,
        cgpa: 6.37,
        subjects: {
            codes: [
                "Industrial Psychology",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Geoinformatics and Applications",
                "Environmental Studies"
            ],
            grades: ["BC", "BC", "AB", "CC", "CC", "CC", "BB", "AB", "AB", "CC", "PP"],
            pointers: ["7", "7", "9", "6", "6", "6", "8", "9", "9", "6", "10"]
        }
    },
    {
        misNo: "112105044",
        studentName: "OM DHAWAS",
        sgpa: 5.78,
        cgpa: 6.12,
        subjects: {
            codes: [
                "Engineering Economics",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Digital Image Processing Applications",
                "Environmental Studies"
            ],
            grades: ["CC", "BC", "BB", "CD", "CD", "DD", "AB", "BB", "BB", "DD", "PP"],
            pointers: ["6", "7", "8", "5", "5", "4", "9", "8", "8", "4", "10"]
        }
    },
    {
        misNo: "112105045",
        studentName: "PARNEET PRAMODKUMAR PRASAD",
        sgpa: 7.61,
        cgpa: 6.90,
        subjects: {
            codes: [
                "Engineering Economics",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Renewable Energy",
                "Environmental Studies"
            ],
            grades: ["AB", "CC", "AB", "BB", "BC", "BC", "BB", "AB", "AB", "BC", "PP"],
            pointers: ["9", "6", "9", "8", "7", "7", "8", "9", "9", "7", "10"]
        }
    },
    {
        misNo: "112105046",
        studentName: "PATIL ATHRAV DHONDIRAM",
        sgpa: 8.65,
        cgpa: 8.08,
        subjects: {
            codes: [
                "Engineering Economics",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Renewable Energy",
                "Environmental Studies"
            ],
            grades: ["BB", "AB", "AB", "BB", "AB", "BB", "AB", "AB", "AB", "AA", "PP"],
            pointers: ["8", "9", "9", "8", "9", "8", "9", "9", "9", "10", "10"]
        }
    },
    {
        misNo: "112105047",
        studentName: "PATIL PRANAV RAJU",
        sgpa: 7.48,
        cgpa: 6.85,
        subjects: {
            codes: [
                "Engineering Economics",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Geoinformatics and Applications",
                "Environmental Studies"
            ],
            grades: ["BB", "BC", "BB", "BB", "BC", "CC", "AB", "BB", "AB", "BB", "PP"],
            pointers: ["8", "7", "8", "8", "7", "6", "9", "8", "9", "8", "10"]
        }
    },
    {
        misNo: "112105048",
        studentName: "PAWAR KUNAL PANDURANG",
        sgpa: 7.65,
        cgpa: 7.89,
        subjects: {
            codes: [
                "Engineering Economics",
                "Object Oriented Programming and Design",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Renewable Energy",
                "Environmental Studies"
            ],
            grades: ["BB", "CC", "BC", "BB", "BB", "BC", "AB", "AB", "BB", "BB", "PP"],
            pointers: ["8", "6", "7", "8", "8", "7", "9", "9", "8", "8", "10"]
        }
    },
    {
        misNo: "112105049",
        studentName: "PIYUSH PATIL",
        sgpa: 8.00,
        cgpa: 7.85,
        subjects: {
            codes: [
                "Engineering Economics",
                "Object Oriented Programming and Design",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Renewable Energy",
                "Environmental Studies"
            ],
            grades: ["BC", "BB", "BB", "AB", "BB", "BC", "BB", "AA", "AA", "AB", "AA", "PP"],
            pointers: ["7", "8", "8", "9", "8", "7", "8", "10", "10", "9", "10", "10"]
        }
    },
    {
        "misNo": "112105050",
        "studentName": "PUNDLIK VIRAJ ASHWIN",
        "sgpa": 8.65,
        "cgpa": 8.51,
        "subjects": {
            "codes": [
                "Engineering Economics",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Renewable Energy",
                "Environmental Studies"
            ],
            "grades": ["AA", "AB", "AB", "AB", "BB", "BB", "AA", "AB", "AB", "BC", "AB"],
            "pointers": ["10", "9", "9", "9", "8", "8", "10", "9", "9", "7", "9"]
        }
    },
    {
        "misNo": "112105051",
        "studentName": "RAKTATE SHAMBHURAJ VINAYAK",
        "sgpa": 8.39,
        "cgpa": 8.40,
        "subjects": {
            "codes": [
                "Engineering Economics",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Renewable Energy",
                "Environmental Studies"
            ],
            "grades": ["BB", "BB", "AB", "AB", "BB", "BB", "AB", "AA", "BB", "BB", "FF"],
            "pointers": ["8", "8", "9", "9", "8", "8", "9", "10", "8", "8", "4"]
        }
    },
    {
        "misNo": "112105052",
        "studentName": "RATHOD NIKITA SANTOSH",
        "sgpa": 8.22,
        "cgpa": 7.09,
        "subjects": {
            "codes": [
                "Engineering Economics",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Renewable Energy",
                "Environmental Studies"
            ],
            "grades": ["BB", "BB", "AB", "BB", "BB", "BB", "AB", "AB", "BB", "BB", "PP"],
            "pointers": ["8", "8", "9", "8", "8", "8", "9", "9", "8", "8", "10"]
        }
    },
    {
        "misNo": "112105053",
        "studentName": "RAUT KAJAL ASHOKKUMAR",
        "sgpa": 7.87,
        "cgpa": 6.38,
        "subjects": {
            "codes": [
                "Engineering Economics",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Renewable Energy",
                "Environmental Studies"
            ],
            "grades": ["AA", "BC", "AB", "BC", "BC", "BC", "AB", "AA", "AA", "BB", "PP"],
            "pointers": ["10", "7", "9", "7", "7", "7", "9", "10", "10", "8", "10"]
        }
    },
    {
        "misNo": "112105054",
        "studentName": "ROHIT RAJARAM RUPWATE",
        "sgpa": 6.87,
        "cgpa": 6.02,
        "subjects": {
            "codes": [
                "Engineering Economics",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Renewable Energy",
                "Environmental Studies"
            ],
            "grades": ["CC", "CD", "BB", "BC", "BC", "CC", "AB", "BB", "AB", "BB", "PP"],
            "pointers": ["6", "5", "8", "7", "7", "6", "9", "8", "9", "8", "10"]
        }
    },
    {
        "misNo": "112105055",
        "studentName": "SARDESHMUKH SHRAVANI MAYURESH",
        "sgpa": 9.52,
        "cgpa": 8.92,
        "subjects": {
            "codes": [
                "Engineering Economics",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Renewable Energy",
                "Environmental Studies"
            ],
            "grades": ["AA", "AA", "AA", "AA", "AB", "AA", "AA", "AA", "BB", "AB", "PP"],
            "pointers": ["10", "10", "10", "10", "9", "10", "10", "10", "8", "9", "10"]
        }
    },
    {
        "misNo": "112105056",
        "studentName": "SAWANT SHARVARI RAJENDRA",
        "sgpa": 8.35,
        "cgpa": 8.38,
        "subjects": {
            "codes": [
                "Engineering Economics",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Renewable Energy",
                "Environmental Studies"
            ],
            "grades": ["AB", "BB", "AA", "BB", "AB", "BC", "AB", "BB", "BB", "AB", "PP"],
            "pointers": ["9", "8", "10", "8", "9", "7", "9", "8", "8", "9", "10"]
        }
    },
    {
        "misNo": "112105057",
        "studentName": "SHAWN THOMAS GEORGE",
        "sgpa": 8.22,
        "cgpa": 8.22,
        "subjects": {
            "codes": [
                "Engineering Economics",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Renewable Energy",
                "Environmental Studies"
            ],
            "grades": ["AB", "AB", "AB", "BB", "BC", "CC", "AA", "AA", "AB", "BB", "BB"],
            "pointers": ["9", "9", "9", "8", "7", "6", "10", "10", "9", "8", "8"]
        }
    },
    {
        "misNo": "112105058",
        "studentName": "SHIRKANDE ATHARV VIKAS",
        "sgpa": 8.26,
        "cgpa": 7.66,
        "subjects": {
            "codes": [
                "Engineering Economics",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Renewable Energy",
                "Environmental Studies"
            ],
            "grades": ["BB", "BB", "AB", "AB", "AB", "BC", "AB", "AB", "AB", "BB", "PP"],
            "pointers": ["8", "8", "9", "9", "9", "7", "9", "9", "9", "8", "10"]
        }
    },
    {
        "misNo": "112105059",
        "studentName": "SHREYAS RAJENDRA DAMGUDE",
        "sgpa": 7.17,
        "cgpa": 7.72,
        "subjects": {
            "codes": [
                "Engineering Economics",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Renewable Energy",
                "Environmental Studies"
            ],
            "grades": ["BB", "CC", "AB", "AB", "CC", "CC", "AB", "AB", "AB", "DD", "PP"],
            "pointers": ["8", "6", "9", "9", "6", "6", "9", "9", "9", "5", "10"]
        }
    },
    {
        "misNo": "112105060",
        "studentName": "SIDDHARTH BHAUSAHEB TRIBHUWAN",
        "sgpa": 0.67,
        "cgpa": 3.56,
        "subjects": {
            "codes": [
                "Basic Electrical Engineering",
                "Electric Machinery I",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Renewable Energy",
                "Environmental Studies"
            ],
            "grades": ["FF", "FF", "NR", "FF", "NR", "FF", "FF", "NR", "NP"],
            "pointers": ["0", "0", "0", "0", "0", "0", "0", "0", "0"]
        }
    },
    {
        "misNo": "112105061",
        "studentName": "SOMWANSHI SHREYAS YOGESH",
        "sgpa": 4.57,
        "cgpa": 5.17,
        "subjects": {
            "codes": [
                "Engineering Economics",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Renewable Energy",
                "Environmental Studies"
            ],
            "grades": ["BC", "BB", "BB", "DD", "NR", "FF", "AB", "AB", "BB", "PP"],
            "pointers": ["7", "8", "8", "4", "0", "0", "9", "9", "8", "10"]
        }
    },
    {
        "misNo": "112105062",
        "studentName": "TEJAL SHEETAL KUMAR",
        "sgpa": 7.30,
        "cgpa": 6.44,
        "subjects": {
            "codes": [
                "Engineering Economics",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Renewable Energy",
                "Environmental Studies"
            ],
            "grades": ["AB", "BC", "BB", "BC", "BB", "CD", "AB", "AB", "AB", "BC", "PP"],
            "pointers": ["9", "7", "8", "7", "8", "5", "9", "9", "9", "7", "10"]
        }
    },
    {
        "misNo": "112105063",
        "studentName": "TEJASVI ANIL BACHHAV",
        "sgpa": 8.26,
        "cgpa": 8.21,
        "subjects": {
            "codes": [
                "Engineering Economics",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Renewable Energy",
                "Environmental Studies"
            ],
            "grades": ["BB", "DR", "AB", "BB", "AB", "BB", "AB", "AA", "AB", "BB", "PP"],
            "pointers": ["8", "0", "9", "8", "9", "8", "9", "10", "9", "8", "10"]
        }
    },
    {
        "misNo": "112105064",
        "studentName": "THUBE YASH RAJENDRA",
        "sgpa": 8.09,
        "cgpa": 7.76,
        "subjects": {
            "codes": [
                "Engineering Economics",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Renewable Energy",
                "Environmental Studies"
            ],
            "grades": ["BC", "BB", "BB", "AA", "BC", "BB", "AB", "BB", "BB", "BC", "PP"],
            "pointers": ["7", "8", "8", "10", "7", "8", "9", "8", "8", "7", "10"]
        }
    },
    {
        "misNo": "112105066",
        "studentName": "UNHALE OM VINOD",
        "sgpa": 9.04,
        "cgpa": 8.66,
        "subjects": {
            "codes": [
                "Finance for Engineers",
                "Object Oriented Programming and Design",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Renewable Energy",
                "Environmental Studies"
            ],
            "grades": ["AB", "CC", "BB", "BB", "AA", "AB", "AA", "AB", "AA", "BB", "PP"],
            "pointers": ["9", "5", "8", "8", "10", "9", "10", "9", "10", "8", "10"]
        }
    },
    {
        "misNo": "112105067",
        "studentName": "UTKARSH PRATAP PATIL",
        "sgpa": 9.17,
        "cgpa": 9.27,
        "subjects": {
            "codes": [
                "Finance for Engineers",
                "Object Oriented Programming and Design",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Renewable Energy",
                "Environmental Studies"
            ],
            "grades": ["AA", "AA", "BB", "AB", "AA", "AB", "AA", "AA", "AA", "BB", "PP"],
            "pointers": ["10", "10", "8", "9", "10", "9", "10", "10", "10", "8", "10"]
        }
    },
    {
        "misNo": "112105068",
        "studentName": "WAT VAIBHAV PRAKASH",
        "sgpa": 7.17,
        "cgpa": 7.30,
        "subjects": {
            "codes": [
                "Engineering Economics",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Renewable Energy",
                "Environmental Studies"
            ],
            "grades": ["AB", "BB", "AB", "CC", "CC", "BC", "AB", "BB", "BB", "CD", "PP"],
            "pointers": ["9", "8", "9", "6", "6", "7", "9", "8", "8", "5", "10"]
        }
    },
    {
        "misNo": "112105069",
        "studentName": "WIKEY HIWANSHI DAMODHAR",
        "sgpa": 7.17,
        "cgpa": 6.28,
        "subjects": {
            "codes": [
                "Engineering Economics",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Renewable Energy",
                "Environmental Studies"
            ],
            "grades": ["CD", "BB", "AB", "BC", "BC", "BC", "AB", "AB", "BB", "CD", "PP"],
            "pointers": ["5", "8", "9", "7", "7", "7", "9", "9", "8", "5", "10"]
        }
    },
    {
        "misNo": "112105070",
        "studentName": "AGARWAL KHUSHI",
        "sgpa": 8.39,
        "cgpa": 8.09,
        "subjects": {
            "codes": [
                "Finance for Engineers",
                "Object Oriented Programming and Design",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Renewable Energy"
            ],
            "grades": ["AB", "BB", "AB", "AB", "BB", "BB", "AB", "AB", "AB", "FF", "PP"],
            "pointers": ["9", "8", "9", "9", "8", "8", "9", "9", "9", "0", "10"]
        }
    },
    {
        "misNo": "112105071",
        "studentName": "AMAN KAMATH",
        "sgpa": 9.43,
        "cgpa": 9.18,
        "subjects": {
            "codes": [
                "Finance for Engineers",
                "Embedded Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Renewable Energy",
                "Environmental Studies"
            ],
            "grades": ["AB", "AA", "AA", "AA", "AA", "AB", "AA", "AA", "AA", "BC", "PP"],
            "pointers": ["9", "10", "10", "10", "10", "9", "10", "10", "10", "7", "10"]
        }
    },
    {
        "misNo": "112105072",
        "studentName": "PIMPRIKAR MALHAR NISHIKANT",
        "sgpa": 9.04,
        "cgpa": 8.26,
        "subjects": {
            "codes": [
                "Finance for Engineers",
                "Embedded Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Renewable Energy",
                "Environmental Studies"
            ],
            "grades": ["BB", "AA", "AA", "AB", "AB", "AB", "AB", "AB", "AB", "BB", "PP"],
            "pointers": ["8", "10", "10", "9", "9", "9", "9", "9", "9", "8", "10"]
        }
    },
    {
        "misNo": "112105303",
        "studentName": "KALE YASH DATTATRAY",
        "sgpa": 6.65,
        "cgpa": 7.02,
        "subjects": {
            "codes": [
                "Finance for Engineers",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Renewable Energy"
            ],
            "grades": ["DD", "BB", "DD", "BC", "BC", "AB", "AB", "BB"],
            "pointers": ["4", "8", "4", "7", "7", "9", "9", "8"]
        }
    },
    {
        "misNo": "142205001",
        "studentName": "CHAUHAN RAMSINGH RAJENDRASINGH",
        "sgpa": 8.78,
        "cgpa": 7.81,
        "subjects": {
            "codes": [
                "Engineering Economics",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Renewable Energy",
                "Environmental Studies"
            ],
            "grades": ["BB", "AB", "AB", "BB", "AB", "AB", "AB", "BB", "AB", "FF", "PP"],
            "pointers": ["8", "9", "9", "8", "9", "9", "9", "8", "9", "0", "10"]
        }
    },
    {
        "misNo": "142205002",
        "studentName": "DESHMUKH ANIKET NISHANT",
        "sgpa": 8.26,
        "cgpa": 7.66,
        "subjects": {
            "codes": [
                "Engineering Economics",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Renewable Energy",
                "Environmental Studies"
            ],
            "grades": ["AB", "BB", "AB", "BC", "BB", "AB", "AA", "AB", "AB", "BC", "PP"],
            "pointers": ["9", "8", "9", "7", "8", "9", "10", "9", "9", "7", "10"]
        }
    },
    {
        "misNo": "142205003",
        "studentName": "DHOTRE GAYATRI SHAILENDRA",
        "sgpa": 8.83,
        "cgpa": 8.23,
        "subjects": {
            "codes": [
                "Finance for Engineers",
                "Object Oriented Programming and Design",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Renewable Energy"
            ],
            "grades": ["AB", "AB", "AB", "BB", "AB", "AB", "AB", "AB", "AB", "FF", "PP"],
            "pointers": ["9", "9", "9", "8", "9", "9", "9", "9", "9", "0", "10"]
        }
    },
    {
        "misNo": "142205004",
        "studentName": "GULHANE ROHINI AJAY",
        "sgpa": 8.52,
        "cgpa": 8.30,
        "subjects": {
            "codes": [
                "Finance for Engineers",
                "Object Oriented Programming and Design",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Renewable Energy"
            ],
            "grades": ["AB", "BB", "AB", "BB", "AB", "BB", "AB", "AB", "AB", "FF", "PP"],
            "pointers": ["9", "8", "9", "8", "9", "8", "9", "9", "9", "0", "10"]
        }
    },
    {
        "misNo": "142205005",
        "studentName": "KALIM KHAN MURTUZA KHAN",
        "sgpa": 9.09,
        "cgpa": 8.95,
        "subjects": {
            "codes": [
                "Finance for Engineers",
                "Object Oriented Programming and Design",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Renewable Energy"
            ],
            "grades": ["AB", "AB", "AB", "AB", "AA", "AB", "AB", "AA", "AB", "BB", "PP"],
            "pointers": ["9", "9", "9", "9", "10", "9", "9", "10", "9", "8", "10"]
        }
    },
    {
        "misNo": "142205006",
        "studentName": "KOKANE PRASAD ARUN",
        "sgpa": 9.17,
        "cgpa": 8.88,
        "subjects": {
            "codes": [
                "Finance for Engineers",
                "Object Oriented Programming and Design",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Renewable Energy"
            ],
            "grades": ["AB", "AB", "AB", "AB", "AA", "AB", "AA", "AB", "AA", "AB", "PP"],
            "pointers": ["9", "9", "9", "9", "10", "9", "10", "9", "10", "9", "10"]
        }
    },
    {
        "misNo": "142205007",
        "studentName": "MESHRAM SAMIR SIDDHARTH",
        "sgpa": 6.61,
        "cgpa": 6.00,
        "subjects": {
            "codes": [
                "Engineering Economics",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Renewable Energy",
                "Environmental Studies"
            ],
            "grades": ["CC", "BB", "AB", "DD", "DD", "BC", "AA", "AB", "AB", "BC", "PP"],
            "pointers": ["6", "8", "9", "4", "4", "7", "10", "9", "9", "7", "10"]
        }
    },
    {
        "misNo": "142205008",
        "studentName": "NEHAR TANAVI KAILAS",
        "sgpa": 8.74,
        "cgpa": 8.44,
        "subjects": {
            "codes": [
                "Finance for Engineers",
                "Object Oriented Programming and Design",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Renewable Energy"
            ],
            "grades": ["BB", "AB", "AB", "BB", "AB", "AB", "AB", "AB", "AB", "AB", "PP"],
            "pointers": ["8", "9", "9", "8", "9", "9", "9", "9", "9", "9", "10"]
        }
    },
    {
        "misNo": "142205009",
        "studentName": "PAWAR ABHISHEK SURESH",
        "sgpa": 8.17,
        "cgpa": 8.20,
        "subjects": {
            "codes": [
                "Finance for Engineers",
                "Object Oriented Programming and Design",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Renewable Energy"
            ],
            "grades": ["BC", "BB", "AB", "BB", "BB", "BB", "AB", "AA", "AB", "BB", "PP"],
            "pointers": ["7", "8", "9", "8", "8", "8", "9", "10", "9", "8", "10"]
        }
    },
    {
        "misNo": "142205010",
        "studentName": "SHELKE SWARUP SUDARSHAN",
        "sgpa": 8.30,
        "cgpa": 8.09,
        "subjects": {
            "codes": [
                "Finance for Engineers",
                "Object Oriented Programming and Design",
                "Industrial Electrical Systems",
                "Mini Project",
                "Control System Engineering",
                "Power System Operation and Control",
                "Power Electronics",
                "Control System Engineering Laboratory",
                "Power Electronics Laboratory",
                "Machine Learning Laboratory",
                "Renewable Energy"
            ],
            "grades": ["BB", "BB", "AB", "BB", "AB", "BB", "AB", "AB", "AA", "BC", "PP"],
            "pointers": ["8", "8", "9", "8", "9", "8", "9", "9", "10", "7", "10"]
        }
    },
    //cs students data
    {
        "misNo": "112103001",
        "studentName": "AARYA ROHIT KAWALAY",
        "sgpa": 6.39,
        "cgpa": 6.89,
        "subjects": {
            "codes": [
                "Engineering Economics",
                "Advanced Data Structures Laboratory",
                "System Programming",
                "Mini Project",
                "Operating Systems",
                "Advanced Data Structures",
                "Data Structures and Algorithms - II Laboratory",
                "Web Systems and Technologies",
                "Big Data Analytics",
                "Microprocessor Techniques",
                "Financial Derivatives and Structuring"
            ],
            "grades": ["AB", "CC", "BC", "AB", "CD", "BC", "DD", "BC", "CC", "CD", "PP"],
            "pointers": ["9", "6", "7", "8", "5", "7", "4", "7", "6", "5", "10"]
        }
    },
    {
        "misNo": "112103002",
        "studentName": "AAYUSH SHRIKANT ATHAWALE",
        "sgpa": 5.22,
        "cgpa": 6.34,
        "subjects": {
            "codes": [
                "Engineering Economics",
                "Advanced Data Structures Laboratory",
                "System Programming",
                "Mini Project",
                "Operating Systems",
                "Advanced Data Structures",
                "Data Structures and Algorithms - II Laboratory",
                "Web Systems and Technologies",
                "Big Data Analytics",
                "Microprocessor Techniques",
                "Financial Derivatives and Structuring"
            ],
            "grades": ["BC", "CC", "DD", "AB", "DD", "DD", "FF", "DD", "DD", "FF", "PP"],
            "pointers": ["7", "6", "4", "8", "4", "4", "0", "4", "4", "0", "10"]
        }
    },
    {
        "misNo": "112103003",
        "studentName": "ABHANG ANUJ PRAVIN",
        "sgpa": 7.42,
        "cgpa": 6.94,
        "subjects": {
            "codes": [
                "Engineering Economics",
                "Advanced Data Structures Laboratory",
                "System Programming",
                "Mini Project",
                "Operating Systems",
                "Advanced Data Structures",
                "Data Structures and Algorithms - II Laboratory",
                "Web Systems and Technologies",
                "Big Data Analytics",
                "Microprocessor Techniques",
                "Financial Derivatives and Structuring"
            ],
            "grades": ["BB", "BB", "AB", "BB", "AB", "AB", "AB", "AB", "AB", "BB", "PP"],
            "pointers": ["8", "8", "9", "8", "9", "9", "9", "9", "9", "8", "10"]
        }
    },
    {
        "misNo": "112103004",
        "studentName": "ABHINAV KURULE",
        "sgpa": 8.35,
        "cgpa": 8.94,
        "subjects": {
            "codes": [
                "Engineering Economics",
                "Advanced Data Structures Laboratory",
                "System Programming",
                "Mini Project",
                "Operating Systems",
                "Advanced Data Structures",
                "Data Structures and Algorithms - II Laboratory",
                "Web Systems and Technologies",
                "Big Data Analytics",
                "Microprocessor Techniques",
                "Financial Derivatives and Structuring"
            ],
            "grades": ["AA", "AB", "AB", "AB", "AA", "AA", "AB", "AB", "AB", "AB", "PP"],
            "pointers": ["10", "9", "9", "9", "10", "10", "9", "9", "9", "9", "10"]
        }
    },
    {
        "misNo": "112103006",
        "studentName": "AISHWARYA PRAKASH KOLI",
        "sgpa": 6.30,
        "cgpa": 6.45,
        "subjects": {
            "codes": [
                "Engineering Economics",
                "Advanced Data Structures Laboratory",
                "System Programming",
                "Mini Project",
                "Operating Systems",
                "Advanced Data Structures",
                "Data Structures and Algorithms - II Laboratory",
                "Web Systems and Technologies",
                "Big Data Analytics",
                "Microprocessor Techniques",
                "Financial Derivatives and Structuring"
            ],
            "grades": ["AB", "BC", "BC", "AB", "BC", "BC", "CC", "DD", "CC", "CC", "PP"],
            "pointers": ["9", "7", "7", "9", "7", "7", "6", "5", "6", "6", "10"]
        }
    },
    {
        "misNo": "112103007",
        "studentName": "AJABE VISHAL ASHOK",
        "sgpa": 8.09,
        "cgpa": 8.41,
        "subjects": {
            "codes": [
                "Engineering Economics",
                "Advanced Data Structures Laboratory",
                "System Programming",
                "Mini Project",
                "Operating Systems",
                "Advanced Data Structures",
                "Data Structures and Algorithms - II Laboratory",
                "Web Systems and Technologies",
                "Big Data Analytics",
                "Microprocessor Techniques",
                "Financial Derivatives and Structuring"
            ],
            "grades": ["AA", "BC", "AB", "AB", "AB", "AB", "AB", "AB", "AA", "AB", "PP"],
            "pointers": ["10", "7", "9", "9", "9", "9", "9", "9", "10", "9", "10"]
        }
    },
    {
        "misNo": "112103008",
        "studentName": "AMAAN NAYEEM JAMADAR",
        "sgpa": 7.91,
        "cgpa": 8.04,
        "subjects": {
            "codes": [
                "Engineering Economics",
                "Advanced Data Structures Laboratory",
                "System Programming",
                "Mini Project",
                "Operating Systems",
                "Advanced Data Structures",
                "Data Structures and Algorithms - II Laboratory",
                "Web Systems and Technologies",
                "Big Data Analytics",
                "Microprocessor Techniques",
                "Financial Derivatives and Structuring"
            ],
            "grades": ["AB", "BB", "AB", "BB", "AB", "BB", "AB", "AB", "AB", "AB", "PP"],
            "pointers": ["8", "8", "9", "8", "9", "8", "9", "8", "9", "8", "10"]
        }
    },
    {
        "misNo": "112103009",
        "studentName": "ANANTA DINESH HATWAR",
        "sgpa": 6.74,
        "cgpa": 6.12,
        "subjects": {
            "codes": [
                "Engineering Economics",
                "Advanced Data Structures Laboratory",
                "System Programming",
                "Mini Project",
                "Operating Systems",
                "Advanced Data Structures",
                "Data Structures and Algorithms - II Laboratory",
                "Web Systems and Technologies",
                "Big Data Analytics",
                "Microprocessor Techniques",
                "Financial Derivatives and Structuring"
            ],
            "grades": ["AB", "BB", "AB", "BB", "AB", "BB", "AB", "AB", "AB", "AB", "PP"],
            "pointers": ["8", "8", "9", "8", "9", "8", "9", "8", "9", "8", "10"]
        }
    },
    {
        "misNo": "112103010",
        "studentName": "ANUSHKA VINOD MORE",
        "sgpa": 8.39,
        "cgpa": 7.79,
        "subjects": {
          "codes": [
            "Engineering Economics",
            "Advanced Data Structures Laboratory",
            "System Programming",
            "Mini Project",
            "Operating Systems",
            "Advanced Data Structures",
            "Data Structures and Algorithms - II Laboratory",
            "Web Systems and Technologies",
            "Big Data Analytics",
            "Microprocessor Techniques",
            "Financial Derivatives and Structuring"
          ],
          "grades": ["AB", "AB", "AB", "BC", "AB", "BB", "AA", "AB", "AB", "AB", "PP"],
          "pointers": ["9", "9", "9", "7", "9", "8", "10", "9", "9", "9", "0"]
        }
      },
      {
        "misNo": "112103011",
        "studentName": "APTE MOHIT PARAG",
        "sgpa": 8.91,
        "cgpa": 9.29,
        "subjects": {
          "codes": [
            "Engineering Economics",
            "Advanced Data Structures Laboratory",
            "System Programming",
            "Mini Project",
            "Operating Systems",
            "Advanced Data Structures",
            "Data Structures and Algorithms - II Laboratory",
            "Web Systems and Technologies",
            "Big Data Analytics",
            "Microprocessor Techniques",
            "Financial Derivatives and Structuring"
          ],
          "grades": ["AB", "AA", "AB", "AB", "AB", "AB", "AA", "AB", "AB", "AB", "PP"],
          "pointers": ["9", "10", "9", "9", "9", "9", "10", "9", "9", "9", "0"]
        }
      },
      {
        "misNo": "112103012",
        "studentName": "ARU PAWAN JAGANNATH",
        "sgpa": 5.70,
        "cgpa": 5.79,
        "subjects": {
          "codes": [
            "Engineering Economics",
            "Advanced Data Structures Laboratory",
            "System Programming",
            "Mini Project",
            "Operating Systems",
            "Advanced Data Structures",
            "Data Structures and Algorithms - II Laboratory",
            "Web Systems and Technologies",
            "Big Data Analytics",
            "Microprocessor Techniques",
            "Financial Derivatives and Structuring"
          ],
          "grades": ["BC", "CD", "CC", "CD", "CD", "DD", "CC", "CC", "DD", "DD", "PP"],
          "pointers": ["7", "5", "6", "5", "5", "4", "6", "6", "4", "4", "0"]
        }
      },
      {
        "misNo": "112103013",
        "studentName": "ARYAN SHIRISH THAKRE",
        "sgpa": 8.35,
        "cgpa": 7.96,
        "subjects": {
          "codes": [
            "Engineering Economics",
            "Advanced Data Structures Laboratory",
            "System Programming",
            "Mini Project",
            "Operating Systems",
            "Advanced Data Structures",
            "Data Structures and Algorithms - II Laboratory",
            "Web Systems and Technologies",
            "Big Data Analytics",
            "Microprocessor Techniques",
            "Financial Derivatives and Structuring"
          ],
          "grades": ["AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "PP"],
          "pointers": ["9", "9", "9", "9", "9", "9", "9", "9", "9", "9", "0"]
        }
      },
      {
        "misNo": "112103014",
        "studentName": "ATHARVA ASHUTOSH MUTSADDI",
        "sgpa": 9.00,
        "cgpa": 9.24,
        "subjects": {
          "codes": [
            "Engineering Economics",
            "Advanced Data Structures Laboratory",
            "System Programming",
            "Mini Project",
            "Operating Systems",
            "Advanced Data Structures",
            "Data Structures and Algorithms - II Laboratory",
            "Web Systems and Technologies",
            "Big Data Analytics",
            "Microprocessor Techniques",
            "Financial Derivatives and Structuring"
          ],
          "grades": ["AB", "AA", "AB", "AB", "AB", "AB", "AA", "AB", "AB", "AB", "PP"],
          "pointers": ["9", "10", "9", "9", "9", "9", "10", "9", "9", "9", "0"]
        }
      },
      {
        "misNo": "112103015",
        "studentName": "AYUSH SAGAR AMBHORKAR",
        "sgpa": 9.30,
        "cgpa": 9.52,
        "subjects": {
          "codes": [
            "Engineering Economics",
            "Advanced Data Structures Laboratory",
            "System Programming",
            "Mini Project",
            "Operating Systems",
            "Advanced Data Structures",
            "Data Structures and Algorithms - II Laboratory",
            "Web Systems and Technologies",
            "Big Data Analytics",
            "Microprocessor Techniques",
            "Financial Derivatives and Structuring"
          ],
          "grades": ["AB", "AA", "AB", "AB", "AB", "AB", "AA", "AB", "AB", "AB", "PP"],
          "pointers": ["9", "10", "9", "9", "9", "9", "10", "9", "9", "9", "0"]
        }
      },
      {
        "misNo": "112103016",
        "studentName": "BADARKHE HARIOM DNYANESHWAR",
        "sgpa": 6.78,
        "cgpa": 7.01,
        "subjects": {
          "codes": [
            "Engineering Economics",
            "Advanced Data Structures Laboratory",
            "System Programming",
            "Mini Project",
            "Operating Systems",
            "Advanced Data Structures",
            "Data Structures and Algorithms - II Laboratory",
            "Web Systems and Technologies",
            "Big Data Analytics",
            "Microprocessor Techniques",
            "Financial Derivatives and Structuring"
          ],
          "grades": ["BC", "CD", "CC", "CD", "CD", "BC", "CC", "BC", "CD", "BC", "PP"],
          "pointers": ["7", "5", "6", "5", "5", "7", "6", "7", "5", "7", "0"]
        }
      },
      {
        "misNo": "112103017",
        "studentName": "BADGUJAR VAISHNAVI RAVINDRA",
        "sgpa": 8.61,
        "cgpa": 8.44,
        "subjects": {
          "codes": [
            "Engineering Economics",
            "Advanced Data Structures Laboratory",
            "System Programming",
            "Mini Project",
            "Operating Systems",
            "Advanced Data Structures",
            "Data Structures and Algorithms - II Laboratory",
            "Web Systems and Technologies",
            "Big Data Analytics",
            "Microprocessor Techniques",
            "Financial Derivatives and Structuring"
          ],
          "grades": ["AB", "AA", "AB", "AB", "AB", "AB", "AA", "AB", "AB", "AB", "PP"],
          "pointers": ["9", "10", "9", "9", "9", "9", "10", "9", "9", "9", "0"]
        }
      },
      {
        "misNo": "112103018",
        "studentName": "BAVISKAR ADITYA PRAMOD",
        "sgpa": 7.48,
        "cgpa": 7.24,
        "subjects": {
          "codes": [
            "Engineering Economics",
            "Advanced Data Structures Laboratory",
            "System Programming",
            "Mini Project",
            "Operating Systems",
            "Advanced Data Structures",
            "Data Structures and Algorithms - II Laboratory",
            "Web Systems and Technologies",
            "Big Data Analytics",
            "Microprocessor Techniques",
            "Financial Derivatives and Structuring"
          ],
          "grades": ["BC", "CD", "CC", "CD", "CC", "CC", "CC", "CD", "CC", "CD", "PP"],
          "pointers": ["7", "5", "6", "5", "6", "6", "6", "5", "6", "5", "0"]
        }
      },
      {
        "misNo": "112103019",
        "studentName": "BHORE VISHAL KISHOR",
        "sgpa": 7.92,
        "cgpa": 7.65,
        "subjects": {
          "codes": [
            "Engineering Economics",
            "Advanced Data Structures Laboratory",
            "System Programming",
            "Mini Project",
            "Operating Systems",
            "Advanced Data Structures",
            "Data Structures and Algorithms - II Laboratory",
            "Web Systems and Technologies",
            "Big Data Analytics",
            "Microprocessor Techniques",
            "Financial Derivatives and Structuring"
          ],
          "grades": ["BC", "CD", "CC", "CC", "CC", "BC", "CC", "BC", "CC", "CD", "PP"],
          "pointers": ["7", "5", "6", "6", "6", "7", "6", "7", "6", "5", "0"]
        }
      },
    
];

export default students;




