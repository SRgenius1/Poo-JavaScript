//! CLASS STUDENT
class Student {
    constructor ({
        name,
        email,
        userName,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.email = email;
        this.userName = userName;
        this.socialMedia = {
            twitter,
            instagram ,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    };

    postComment(content) {
        const comment = new Comment({
            content: content,
            studentName: this.name,
        });

        comment.public();
    };
};


// inheritance
class FreeStudent extends Student {
    constructor(props) {
        super(props);
    };

    approveCourse(newCourse) {
        if (newCourse.isFree) {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn('sorry this course is for paid subscriptions only');
        };
    };
};


class BasicStudent extends Student {
    constructor(props) {
        super(props);
    };

    approveCourse(newCourse) {
        if (newCourse.lang !== 'english') {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn('sorry this course is only for subscriptions for people who speak english');
        };
    };
};

class PremiumStudent extends Student {
    constructor(props) {
        super(props);
    };

    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    };
};


class TeacherStudent extends Student {
    constructor(props) {
        super(props);
    };

    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    };

    postComment(content) {
        const comment = new Comment({
            content: content,
            studentName: this.name,
            studentRole: 'Teacher',
        });

        comment.public();
    };
};