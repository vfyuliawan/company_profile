import { app, getDb, storage } from "@/app/api/firebase";
import Service from "@/app/services/Service";
import {
  CollectionReference,
  DocumentData,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { ModalForm } from "../../../../widget/modal/ModalForm";
import ReactDOM from "react-dom/server";
import ReactDOMServer from "react-dom/server";

export function D_CarsViewModel() {
  const [listCars, setListCars] = useState<
    DocumentData[] | CarsListInterface[]
  >([]);

  const [uploadCar, setUploadCar] = useState<CarsListInterface>();
  const [progress, setProgress] = useState<boolean>(false);

  const getListCars = async () => {
    const result = (await Service.GET({
      collectionName: "carsId",
    })) as CarsListInterface[];
    if (result !== null || result !== undefined) {
      setListCars(result);
    } else {
      Swal.fire({
        title: "The Internet?",
        text: "That thing is still around?",
        icon: "question",
      });
    }
  };

  const editListCars = async (docId: string, index: number) => {
    const result = await Service.UPDATE({
      collectionName: "carsId",
      dataToPost: listCars[index],
      docId: docId,
    });
    if (result === true) {
      Swal.fire({
        icon: "success",
        title: "Data Berhasil Diedit",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const openModal = () => {
    Swal.fire({
      title: "Pilih Gambar Mobil",
      input: "file",
      inputAttributes: {
        accept: "image/*",
      },
      showCancelButton: true,
      confirmButtonText: "Next",
      showLoaderOnConfirm: true,
      preConfirm: (file) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(file);
          }, 2000);
        });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed && result.value) {
        Swal.fire({
          title: "Masukan Keterangan",
          imageUrl: URL.createObjectURL(result.value),
          imageAlt: "Chosen image",
          html:
            '<input id="swal-input1" class="swal2-input" placeholder="Nama Mobil">' +
            '<input id="swal-input2" class="swal2-input" placeholder="Capacity">' +
            '<input id="swal-input3" class="swal2-input" placeholder="Price">' +
            '<input id="swal-input4" class="swal2-input" placeholder="Description">',
          preConfirm: () => {
            const image = result.value;
            const name = (
              document.getElementById("swal-input1") as HTMLInputElement
            ).value;
            const capacity = (
              document.getElementById("swal-input2") as HTMLInputElement
            ).value;
            const price = (
              document.getElementById("swal-input3") as HTMLInputElement
            ).value;
            const desc = (
              document.getElementById("swal-input4") as HTMLInputElement
            ).value;

            if (!name || !capacity) {
              Swal.showValidationMessage("Please fill in all fields");
            }

            return { name, image, capacity, price, desc };
          },
        }).then((result) => {
          if (result.isConfirmed) {
            const { name, image, capacity, price, desc } = result.value;
            setUploadCar({
              name: name,
              price: price,
              desc: desc,
              picture: image,
              capacity: parseInt(capacity),
            });
            postDataImage({
              image: image,
              dataCar: {
                name: name,
                capacity: capacity,
                desc: desc,
                price: price,
              },
            });
          }
        });
      }
    });
  };

  const postDataImage = async (props: ImageDataInterface) => {
    const storageRef = ref(storage, `images/${props?.image.name}`);
    const uploadTask = uploadBytesResumable(
      storageRef,
      props.image ?? new Blob()
    );
    uploadTask.on("state_changed", (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    });
    uploadTask
      .then((snapshot) => getDownloadURL(snapshot.ref))
      .then((downloadURL) => {
        postNewCars({
          image: props.image,
          dataCar: {
            name: props.dataCar.name,
            capacity: props.dataCar.capacity,
            desc: props.dataCar.name,
            price: props.dataCar.name,
            id: (Math.floor(Math.random() * (0 - 1000 + 1)) + 1000).toString(),
            picture: downloadURL,
          },
        });
      })
      .catch((error) => {
        console.error("cek error :", error.message);
      });
  };

  const postNewCars = async (props: ImageDataInterface) => {
    const dataToPost = props.dataCar;
    const result = await Service.POST({
      collectionName: "carsId",
      dataToPost: dataToPost,
    });
    if (result) {
        setProgress(!progress);
      Swal.fire({
        icon: "success",
        title: "Data Berhasil Ditambahkan",
        showConfirmButton: false,
        timer: 1500,
      });
    }else{
      Swal.fire({
        icon: "error",
        title: "Data Gagal Ditambahkan",
        showConfirmButton: false,
        timer: 1500,
      })
    }
  };

  const deleteCar = async (docId: string) => {
    setProgress(!progress);
    const result = await Service.DELETE({
      collectionName: "carsId",
      docId: docId,
    });
    if (result) {
      Swal.fire({
        icon: "success",
        title: "Data Berhasil Dihapus",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  useEffect(() => {
    getListCars();
  }, [progress]);

  return {
    listCars,
    setListCars,
    editListCars,
    openModal,
    deleteCar,
  };
}
