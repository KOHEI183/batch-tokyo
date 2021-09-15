import { cloudStorage } from "@/firebase/fireBase";
import { ref, getDownloadURL } from "firebase/storage";

export default {
  // https://modularfirebase.web.app/common-use-cases/storage/
  /* eslint-disable */
  async getCloudStorage(storageURL: string) {
    const imageRef = ref(cloudStorage, storageURL)
    return await getDownloadURL(imageRef)
  },
}
