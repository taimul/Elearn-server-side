const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./Data/categories.json');
const courses = require('./Data/courses.json');

app.get('/', (req, res) => {
    res.send('Learn api running');
})
app.get('/course-categories', (req, res) => {
    res.send(categories);
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === '05') {
        res.send(courses);
    } else {
        const categoryCourses = courses.filter(n => n.category_id === id);
        res.send(categoryCourses);
    }
})

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourses = courses.find(n => n._id === id);
    res.send(selectedCourses);
})

app.listen(port, () => {
    console.log('Learn server running', port);
})