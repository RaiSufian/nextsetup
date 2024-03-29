'use client'
const Student = ({params}) => {
    console.log("our page id is",  params.student)
    return (
        <><h3>Student details</h3>
            <h5>Name : {params.student}</h5></>
    )
}
export default Student;