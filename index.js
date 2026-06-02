const express = require('express')
const app = express()

app.use(express.json())
const students = [
  { id: 1, name: "Ali", course: "Backend" },
  { id: 2, name: "Sara", course: "Frontend" }
]

app.get('/students', (req, res) => {
  res.status(200).json({
    success: true,
    data: students
  })
})
app.post('/students', (req, res) => {
  const { name, course } = req.body

  if (!name || !course) {
    return res.status(400).json({
      success: false,
      message: "name aur course dono chahiye!"
    })
  }

  const newStudent = {
    id: students.length + 1,
    name,
    course
  }

  students.push(newStudent)

  res.status(201).json({
    success: true,
    message: "Student add ho gaya!",
    data: newStudent
  })
})
const PORT = 3000

app.listen(PORT, () => {
  console.log(`Server chal raha hai: http://localhost:${PORT}`)
})