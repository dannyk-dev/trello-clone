import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
  if (!file) return;

  const fileUploaded = await storage.createFile(
    "64827319e5b8484915b3",
    ID.unique(),
    file
  );

  return fileUploaded;
};

export default uploadImage;
