SELECT cohorts.name AS cohort_name, count(assignment_submissions.*) AS total_submissions
FROM students 
JOIN cohorts ON students.cohort_id = cohorts.id
JOIN assignment_submissions ON students.id = assignment_submissions.student_id
GROUP BY cohorts.id
ORDER BY count(assignment_submissions.*) DESC;
