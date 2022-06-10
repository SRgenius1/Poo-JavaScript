//? INSTANCES OF COURSE
const cursoProgramacionBasica = new Course({
    name: "CURSO DE PROGRAMACION BASICA",
    isFree: true,
});

const cursoDefinitivoDeHtmlyCss = new Course ({
    name: "CURSO DEFINITIVO DE HTML Y CSS",
    lang: 'english',
});

const cursPracticoDeHtmlyCss = new Course ({
    name: "CURSO PRACTICO DE HTML Y CSS",
    isFree: false
});


//? INSTANCES OF LEARNING PATH
const EscuelaDeDesarrolloWeb = new LearningPath({
    name: "ESCUELA DE DESARROLLO WEB",
    courses: [
        cursoProgramacionBasica,
        cursoDefinitivoDeHtmlyCss,
        cursPracticoDeHtmlyCss,
    ],
});

const EscuelaDeDataScience = new LearningPath({
    name: "ESCUELA DE DATA SCIENCE",
    courses: [
        cursoProgramacionBasica,
        "curso algebra lineal",
        "curso profesional de pyton",
    ],
});

const EscuelaDeVideoJuegos = new LearningPath({
    name: "ESCUELA DE VIDEO JUEGOS",
    courses: [
        cursoProgramacionBasica,
        "curso de animaciones con unreal engine",
        "curso de unity",
    ],
});

//? INSTANCES OF STUDENT
const juan2 = new FreeStudent({
    name: "juan",
    userName: "juansita",
    email: "juasillo@gmail.com",
    twitter: "juasillo22ajhfhPRO",
    LearningPath: [
        EscuelaDeDataScience,
        EscuelaDeDesarrolloWeb
    ],
}); 

const miguelito = new BasicStudent({
    name: "miguelito",
    userName: "juansita",
    email: "juasillo@gmail.com",
    instagram: "miguelCAC",
    LearningPath: [
        EscuelaDeVideoJuegos,
        EscuelaDeDesarrolloWeb,
    ],
}); 

const FirstTeacher = new TeacherStudent({
    name: "Jorge Wiliams",
    userName: "JWS",
    email: "JorgeWILLL@gmail.com",
    instagram: "JWLSo_1",
});


//? INSTANCES OF TEACHERS

const AmyWinehouse = new Teachers({
    name: "Amy Winehouse",
    profession: "singer",
    numberOfCourses: 3,
    age: 27,
});

const DeanMartin = new Teachers({
    name: "Dean Martin",
    profession: "singer and comic",
    numberOfCourses: 23,
    age: 70,
});

//? INSTANCES OF LESSONS

const Commits = new Lessons({
    name: "Commits In Git",
    duration: "10min",
    moduleToWhichItBelongs: 1,
});

const ModuleBundler = new Lessons({
    name: "Module Bundler In Webpack",
    duration: "5min",
    moduleToWhichItBelongs: 3,
});