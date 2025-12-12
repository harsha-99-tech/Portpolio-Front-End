// Static education data - replace with your actual education qualifications

export interface Education {
  _id: string;
  id: string;
  degree: string;
  field: string;
  institution: string;
  location?: string;
  startDate: string;
  endDate: string | "Present";
  description?: string;
  gpa?: string;
  achievements?: string[];
  logo?: string | null;
}

export const educationQualifications: Education[] = [
  {
    _id: "1",
    id: "1",
    degree: "Bachelor's Degree",
    field: "Information Communication Technology (HONS)",
    institution: "University of Rajarata Faculty of Technology",
    location: "Sri Lanka",
    startDate: "2020",
    endDate: "2024",
    description: "Focused on software development, web technologies, and information systems.",
    gpa: "3.5/4.0",
    achievements: [
      "Dean's List",
      "Outstanding Academic Performance",
    ],
    logo: null, // Add institution logo path if available: "/images/education/university-logo.png"
  },
  // Add more education qualifications here
  // Example:
  // {
  //   _id: "2",
  //   id: "2",
  //   degree: "High School Diploma",
  //   field: "Science Stream",
  //   institution: "Your High School Name",
  //   location: "City, Country",
  //   startDate: "2016",
  //   endDate: "2019",
  //   description: "Completed with distinction in Mathematics and Physics.",
  //   gpa: "A+",
  //   achievements: ["Valedictorian", "Best Student Award"],
  //   logo: null,
  // },
];

