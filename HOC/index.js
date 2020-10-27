import React from 'react';
import HocsComponent from './hoc';
import Student from './components/students'
import Teacher from './components/teachers'
const DataStudents = [
    {id: 1, name: 'a', phone: '12333', age: 20, email: '@gmail.com'},
    {id: 2, name: 'b', phone: '12333333', age: 19, email: 'a@gmail.com'},

];
const DataTeachers = [
    {id: 1, name: 'co', phone: '12333', age: 20, email: '@gmail.com'},
    {id: 2, name: 'thay', phone: '12333333', age: 19, email: 'a@gmail.com'},

]
const NewStudent = HocsComponent(Student, DataStudents);
const NewTeacher = HocsComponent(Teacher, DataTeachers);
class AppHoc extends React.Component{
    render(){
        return(
            <>
                <NewStudent />
                <NewTeacher/>
            </>
        )
    }
}
export default AppHoc;