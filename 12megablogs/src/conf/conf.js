const conf = {
    appwriteUrl:String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId:String(import.meta.env.VITE_PROJECT_ID),
    appwritedatabaseId:String(import.meta.env.VITE_DATABASE_ID),
    appwritecollectionId:String(import.meta.env.VITE_COLLECTION_ID),
    appwritebucketI:String(import.meta.env.VITE_BUCKET_ID)
}

export default conf