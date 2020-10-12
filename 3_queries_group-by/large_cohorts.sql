SELECT cohorts.name AS cohort_name, count(students.*) AS student_count
FROM students JOIN cohorts ON students.cohort_id = cohorts.id
GROUP BY cohorts.id
HAVING count(students.*) >= 18;