import PhotoDetails from "@/components/PhotoDetails";

const PhotoDetailsPage = async ({ params: { id, lang } }) => {

    return <PhotoDetails id={id} lang={lang} />
}

export default PhotoDetailsPage;