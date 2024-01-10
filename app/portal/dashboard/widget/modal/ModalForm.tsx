import { Interface } from "readline";
import Swal, { SweetAlertResult } from "sweetalert2";

interface ModalFormInterface {
  titleForm: string;
  bodyForm: string | JSX.Element | HTMLElement | JQuery | undefined ;
  onConfirm: (res: SweetAlertResult) => void;
  hgfkjhg?: Interface
}

export const ModalForm = (props: ModalFormInterface) => {
  console.log(props.bodyForm);

  Swal.fire({
    title: props.titleForm,
    html: props.bodyForm,
    preConfirm: () => {
      const inputs = Swal?.getPopup()?.querySelectorAll(
        ".form-control"
      ) as NodeListOf<HTMLInputElement>;
      if (!inputs) {
        return Promise.reject("Inputs not found");
      }
      let values = [];
      for (let index = 0; index < inputs.length; index++) {
        const val = {
          key: inputs[index].placeholder,
          value: inputs[index].value,
        };
        values.push(val);
      }
      return values;
    },
  }).then((result) => {
    if (result.isConfirmed) {
      console.log("cek val", result.value);
      props.onConfirm(result.value);
    }
  });
};
