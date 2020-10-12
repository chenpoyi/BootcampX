SELECT sum(duration) AS total_duration
FROM students join assignment_submissions on students.id = assignment_submissions.student_id
WHERE students.name = 'Ibrahim Schimmel';