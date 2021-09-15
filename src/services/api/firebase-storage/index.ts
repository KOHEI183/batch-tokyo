import { cloudStorage } from "@/firebase/fireBase";
import { listAll, ref, ListResult } from "firebase/storage";

export default {
  // https://modularfirebase.web.app/common-use-cases/storage/
  /* eslint-disable */
  async getCloudStorage(storageURL: string): Promise<ListResult> {
    const imageRef = ref(cloudStorage, storageURL)
    return await listAll(imageRef)
  },
}
