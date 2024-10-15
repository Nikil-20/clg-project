import React from 'react';
import 'animate.css';

function AdmissionsPage(){
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl animate__animated animate__slideInDown animate__slow 2s">
        <h1 className="text-3xl font-bold mb-4 text-center">Academics</h1>

        <p className="mb-4">
          College of Engineering, Pune follows a semester pattern, wherein the academic year is divided into two terms: the Fall term and the Spring Term.
        </p>

        <p className="mb-4">
          Each undergraduate student must complete coursework of at least 176 credits, generally spread over 8 semesters. The college also allows students to take audit courses which enable them to earn extra credits.
        </p>

        <p className="mb-4">
          In certain semesters, the college offers elective courses to the students along with their regular courses. In this, students can choose the course they would like to enroll in from a given list of choices. Inter-departmental elective courses are offered in the third and sixth semesters, whereas intra-departmental electives are offered in the seventh and eighth semesters.
        </p>

        <p className="mb-4">
          The college follows a relative grading system on a 10-point scale. Each credit course is evaluated in two parts: Continuous Internal Evaluation and Semester End Examination, both having equal weightage. Continuous Internal Evaluation includes the midterm examination along with the quizzes or tests which are conducted as per the course requirements.
        </p>

        <p className="mb-4">
          Students are graded relative to the performance of other students, and a grade is awarded accordingly. The weighted average of these grades is then the semester grade point average of the student. A cumulative grade point average is calculated by taking into account the past and present performance of the student.
        </p>

        <p className="mb-4">
          The college is also active in conducting guest lectures and workshops, which aid students in their academic pursuits.
        </p>

        <p>
          This year, the college is participating in the Wikipedia India Education Program, whereby students will edit Wikipedia pages as part of certain courses.
        </p>
      </div>
    </div>
  );
};

export default AdmissionsPage;
