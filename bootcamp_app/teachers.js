const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const params = process.argv.slice('2');
console.log(params[0]);
const queryString = `
SELECT teachers.name, cohorts.name AS cohort, count(assistance_requests.*)
FROM assistance_requests JOIN students ON assistance_requests.student_id = students.id
JOIN teachers ON assistance_requests.teacher_id = teachers.id
JOIN cohorts ON students.cohort_id = cohorts.id
WHERE cohorts.name = $1
GROUP BY teachers.name, cohorts.name
ORDER BY teachers.name;
`;

const cohort = params[0];
const values = [cohort];

pool.query(queryString, values)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.cohort}: ${user.name}`);
  })})
.catch(err => console.error('query error', err.stack));
