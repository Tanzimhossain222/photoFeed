import { getDictionary } from "./dictionaries";


const HomePage = async ({params:{lang}}) => {
  const dictionary = await getDictionary(lang);
  console.log(dictionary);
  return (
    <div>

    </div>
  )
}

export default HomePage;