import PhotoList from "@/components/PhotoList";
import { getDictionary } from "./dictionaries";


const HomePage = async ({params:{lang}}) => {
  const dictionary = await getDictionary(lang);

  const response = await fetch(`${process.env.BASE_API_URL}/photos`);
  const photos = await response.json();
  
 
  return (
    <div>
<PhotoList photos={photos} />
    </div>
  )
}

export default HomePage;