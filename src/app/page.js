import Image from "next/image";
import img1 from '../../public/imgs/img1.jpeg';
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "100",
  subsets: ['latin'],
  display: 'swap',
})
export default function Home() {
  return (
    <div>
      hello next js
      <br />
      <h1 className={roboto.className}>this is font heading</h1>
      <Image src="https://media.istockphoto.com/id/1048358188/photo/modern-building-in-paris.jpg?s=612x612&w=0&k=20&c=xQKe6UpXIZhIHQJ-pwrOMm1KIQd74Xc6haT-UcVYEMc=" alt="profile_img" width={400} height={500} />
      <img src={img1.src} />
    </div>


  );
}
