import { app, getDb } from "@/app/api/firebase";
import Service from "@/app/services/Service";
import {
  CollectionReference,
  DocumentData,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export function D_AboutUsViewModel() {
  const [paragrafAdd, setParagrafAdd] = useState<ParagrafListInterface>({
    paragraf1: "",
    paragraf2: "",
    paragraf3: "",
    paragraf4: "",
    idDoc:''
  });

  const [paragrafList, setParagrafList] = useState<DocumentData[]>([]);
  const [paragrafForm, setparagrafForm] = useState<ParagrafListInterfaceForm>();
  const [docId, setdocId] = useState<string>("");

  const getParagraf = async () => {
    const result = (await Service.GET({
      collectionName: "aboutUs",
    })) as ParagrafListInterface[];
    if (result !== null) {
        setdocId(result?.[0].idDoc)
      setparagrafForm({
        paragraf1: {
          content: result?.[0].paragraf1,
          hintText: false,
        },
        paragraf2: {
          content: result?.[0].paragraf2,
          hintText: false,
        },
        paragraf3: {
          content: result?.[0].paragraf3,
          hintText: false,
        },
        paragraf4: {
          content: result?.[0].paragraf4,
          hintText: false,
        },
      });
    }
  };

  const editParagraf = async () => {
    const dataToPost = {
      paragraf1: paragrafForm?.paragraf1.content,
      paragraf2: paragrafForm?.paragraf2.content,
      paragraf3: paragrafForm?.paragraf3.content,
      paragraf4: paragrafForm?.paragraf4.content,
    } as ParagrafListInterface;    
    const result = await Service.UPDATE({
      docId: docId,
      collectionName: "aboutUs",
      dataToPost: dataToPost,
    });
    if (result) {
      Swal.fire({
        title: "Update!",
        text: "Content Berhasil Diupdate",
        icon: "success",
      });
    }
  };

  useEffect(() => {
    getParagraf();
    return () => {};
  }, []);

  return {
    setparagrafForm,
    setParagrafList,
    paragrafAdd,
    setParagrafAdd,
    editParagraf,
    paragrafList,
    getParagraf,
    paragrafForm,
  };
}
