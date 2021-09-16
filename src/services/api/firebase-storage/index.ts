import { cloudStorage } from "@/firebase/fireBase";
import { ref, getDownloadURL, listAll, list  } from "firebase/storage"

export default {
  // https://modularfirebase.web.app/common-use-cases/storage/
  /* eslint-disable */
  async getCloudStorage(storageURL: string) {
    return await getDownloadURL(ref(cloudStorage, storageURL));
  },
  async getListAllCloudStorage(storageURL: string) {
    return await list(ref(cloudStorage, storageURL))
  }
}
