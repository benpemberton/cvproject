import uniqid from "uniqid";

const personalExample = {
  name: "Example Name",
  address: "123 Road, City A123BC",
  email: "example@website.com",
  mobile: "07891234567",
  statement:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis est in metus ornare, a pellentesque sem fringilla. Mauris eleifend bibendum metus tempus interdum. Nullam bibendum, dui id placerat pretium, urna dolor condimentum lectus, commodo commodo augue nibh vitae erat. Mauris ultrices metus non sem volutpat, in cursus est feugiat. Nulla facilisi. Nulla at sagittis tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};

const educationExample = [
  {
    subject: "Classics",
    institution: "Another University",
    qualification: "Master's Degree",
    start: "2015-09",
    end: "2016-07",
    id: uniqid(),
  },
  {
    subject: "History",
    institution: "A University",
    qualification: "Bachelor's Degree",
    start: "2011-10",
    end: "2014-07",
    id: uniqid(),
  },
];

const experienceExample = [
  {
    title: "Department Head",
    employer: "Company 3",
    duties:
      "- Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n- Duis facilisis est in metus ornare, a pellentesque sem fringilla.\n- Mauris eleifend bibendum metus tempus interdum.",
    start: "2020-06",
    end: "2022-08",
    id: uniqid(),
  },
  {
    title: "Manager",
    employer: "Company 2",
    duties:
      "- Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n- Duis facilisis est in metus ornare, a pellentesque sem fringilla.\n- Mauris eleifend bibendum metus tempus interdum. ",
    start: "2018-05",
    end: "2020-04",
    id: uniqid(),
  },
  {
    title: "Assistant",
    employer: "Company 1",
    duties:
      "- Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n- Duis facilisis est in metus ornare, a pellentesque sem fringilla.\n- Mauris eleifend bibendum metus tempus interdum. ",
    start: "2016-10",
    end: "2018-03",
    id: uniqid(),
  },
];

export { personalExample, educationExample, experienceExample };
