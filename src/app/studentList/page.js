import Link from 'next/link';
const StudentLink = () => {
    return (
        <> 
        <h1>My Students are here</h1>
        <ul>
            <li>
               <Link href="/studentList/ahmad">Ahmad </Link> 
            </li>
            <li>
               <Link href="/studentList/arshed">Arshed </Link> 
            </li>
            <li>
               <Link href="/studentList/usman">Usman </Link> 
            </li>
            <li>
               <Link href="/studentList/sem">Sem </Link> 
            </li>
        </ul>
        </>
    )
}
export default StudentLink;