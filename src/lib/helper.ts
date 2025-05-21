import { getCollection } from "astro:content";

export async function getUniversities() {
  const allLabs = await getCollection("labs");

  const universitiesMap = new Map();

  allLabs.forEach((lab) => {
    universitiesMap.set(lab.data.university_id, {
      id: lab.data.university_id,
      name: lab.data.university_name,
    });
  });

  return Array.from(universitiesMap.values());
}

export async function getColleges() {
  const allLabs = await getCollection("labs");
  const collegesMap = new Map();

  allLabs.forEach((lab) => {
    collegesMap.set(lab.data.college_id, {
      id: lab.data.college_id,
      name: lab.data.college_name,
      affiliated_to: lab.data.university_id,
    });
  });

  return Array.from(collegesMap.values());
}

export async function getCollegeByName(collegeName: string) {
  const colleges = await getColleges();
  for (const college of colleges) {
    if (college.name == collegeName) {
      return college;
    }
  }
  return null;
}

export async function getCourses() {
  const allLabs = await getCollection("labs");
  const coursesMap = new Map();

  allLabs.forEach((lab) => {
    if (!coursesMap.has(lab.data.course)) {
      coursesMap.set(lab.data.course, {
        name: lab.data.course,
        taught_at: new Set(),
      });
    }

    coursesMap.get(lab.data.course).taught_at.add(lab.data.college_id);
  });

  return Array.from(coursesMap.values()).map((course) => ({
    name: course.name,
    taught_at: Array.from(course.taught_at),
  }));
}

export async function getSubjects() {
  const allLabs = await getCollection("labs");
  const subjectsMap = new Map();

  allLabs.forEach((lab) => {
    if (!subjectsMap.has(lab.data.subject)) {
      subjectsMap.set(lab.data.subject, {
        name: lab.data.subject,
        taught_at: new Set(),
        courses: new Set(),
        semesters: new Set(),
      });
    }

    const subject = subjectsMap.get(lab.data.subject);
    subject.taught_at.add(lab.data.college_id);
    subject.courses.add(lab.data.course);
    subject.semesters.add(lab.data.semester);
  });

  return Array.from(subjectsMap.values()).map((subject) => ({
    name: subject.name,
    taught_at: Array.from(subject.taught_at),
    courses: Array.from(subject.courses),
    semesters: Array.from(subject.semesters),
  }));
}
