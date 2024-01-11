import Service from "@/app/services/Service";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export function D_YoutubeViewModel() {
  const [youtubeList, setyoutubeList] = useState<YoutubeInterface[]>([]);
  const [progress, setprogress] = useState(false);
  const getYoutubeList = async () => {
    const result = (await Service.GET({
      collectionName: "youtube",
    })) as YoutubeInterface[];

    if (result?.length > 0) {
      setyoutubeList(result);
    }
  };
  

  const editYoutube = async (editData: YoutubeInterface, index: number) => {
    const dataToSend= {
        videoId:editData.videoId,
        desc:editData.desc
    } as YoutubeInterface
    const res = await Service.UPDATE({
        collectionName: "youtube",
        dataToPost: dataToSend,
        docId: youtubeList[index]?.idDoc ?? ""
    });
    if (res) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  
  useEffect(() => {
    getYoutubeList();

    return () => {};
  }, [progress]);

  return {
    youtubeList,
    progress,
    setyoutubeList,
    setprogress,
    editYoutube
  };
}
