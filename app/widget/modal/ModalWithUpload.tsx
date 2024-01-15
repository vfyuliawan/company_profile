import Swal, { SweetAlertResult } from "sweetalert2";

interface ModalWithImageInterfacd{
  titleImage: string
  titleForm: string  
  form: string | HTMLElement | JQuery | undefined
  onConfirm: (res : SweetAlertResult) => void
}

export const MyModalWithImage = (props: ModalWithImageInterfacd) => {
  Swal.fire({
    title: props.titleImage,
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
        title: props.titleForm,
        imageUrl: URL.createObjectURL(result.value),
        imageAlt: "Gambar Dipilih",
        html: props.form,
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
          props.onConfirm(result.value)
        }
      });
    }
  });
};