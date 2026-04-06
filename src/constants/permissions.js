const { principal } = require("./roles");

const PERMISSIONS = {
    // for students
    student_view : "STUDENT_VIEW",
    student_create:"STUDENT_CREATE",
    // student_view_single : "STUDENT_VIEW_SINGLE",

    //for teachers
    teacher_view:"TEACHER_VIEW",
    teacher_create:"TEACHER_CREATE",
    // teacher_view_single:"TEACHER_VIEW_SINGlE",

    // for staff
    staff_view : "STAFF_VIEW",
    staff_create : "STAFF_CREATE",
    
    // attendance module
    attendance_mark : "ATTENDANCE_MARK",
    attendance_view : "ATTENDANCE_VIEW",

    // timetable module
    timetable_view : "TIMETABLE_VIEW",
    timetable_create : "TIMETABLE_CREATE",

    // fee module
    fee_view : "FEE_VIEW",
    
    // extra permissions
    assign_permissions : "ASSIGN_PERMISSIONS",

    parent_view : "PARENT_VIEW",
    parent_create : "PARENT_CREATE",


    // Super Admin module

    school_create : "SCHOOL_CREATE",
    school_view : "SCHOOL_VIEW",

    principal_view : "PRINCIPAL_VIEW",
    principal_create : "PRINCIPAL_CREATE",

    director_view : "DIRECTOR_VIEW",
    director_create : "DIRECTOR_CREATE",

    accountant_view : "ACCOUNTANT_VIEW",
    accountant_create : "ACCOUNTANT_CREATE",

    admin_create : "ADMIN_CREATE",
    admin_view : "ADMIN_VIEW",


}

module.exports = PERMISSIONS;