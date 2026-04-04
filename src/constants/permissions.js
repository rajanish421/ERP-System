
const PERMISSIONS = {
    // for students
    student_view : "STUDENT_VIEW",
    student_create:"STUDENT_CREATE",

    //for teachers
    teacher_view:"TEACHER_VIEW",
    teacher_create:"TEACHER_CREATE",

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

}

module.exports = PERMISSIONS;