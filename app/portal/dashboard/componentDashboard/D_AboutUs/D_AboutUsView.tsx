"use client";

import { WebTheme } from "@/app/theme/webTheme";
import { D_AboutUsViewModel } from "./D_AboutUsViewModel";
import Swal from "sweetalert2";

export const D_AboutUsView = () => {
  const {
    getParagraf,
    paragrafList,
    setParagrafList,
    editParagraf,
    paragrafAdd,
    setParagrafAdd,
    setparagrafForm,
    paragrafForm,
  } = D_AboutUsViewModel();

  return (
    <div className="row" style={{ marginTop: "30px" }}>
      <div
        className=""
        style={{
          backgroundColor: WebTheme.cardGrey5,
          padding: "15px",
        }}
      >
        <div className="row">
          <div className="col-md-6">
            <h2>About Us</h2>
          </div>
          <div className="col-md-6 d-flex justify-content-end align-items-center">
            {/* <div style={{ marginRight: "5px", marginLeft: "5px" }}></div> */}
            <button
              type="button"
              className="btn btn-success btn-lg "
              style={{ display: "flex", alignItems: "center", height: "40px" }}
              onClick={() => {
                Swal.fire({
                  title: "Are you sure?",
                  text: "Syncronasi Ulang Content",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes",
                }).then((result) => {
                  if (result.isConfirmed) {
                    editParagraf();
                  }
                });
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-arrow-repeat"
                viewBox="0 0 16 16"
              >
                <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9" />
                <path
                  fillRule="evenodd"
                  d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"
                />
              </svg>
              <span style={{ marginLeft: "8px" }}>RE-SYNC</span>
            </button>
          </div>
        </div>

        <div className="mb-3" style={{ marginTop: "20px" }}>
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Paragraf ke - 1
          </label>
          <textarea
            className="form-control"
            onChange={(input) => {
              const value = input.target.value;
              setparagrafForm((prevState: any) => {
                return {
                  ...prevState,
                  paragraf1: {
                    content: value,
                    hintText: true,
                  },
                };
              });
            }}
            id="exampleFormControlTextarea1"
            rows={6}
            defaultValue={paragrafForm?.paragraf1.content}
          />
          {paragrafForm?.paragraf1.hintText ? (
            <small id="emailHelp" className="form-text text-danger">
              Lakukan Syncronasi Ulang Setelah Edit.
            </small>
          ) : null}
        </div>
        <div className="mb-3" style={{ marginTop: "20px" }}>
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Paragraf ke - 2
          </label>
          <textarea
            className="form-control"
            onChange={(input) => {
              const value = input.target.value;
              setparagrafForm((prevState: any) => {
                return {
                  ...prevState,
                  paragraf2: {
                    content: value,
                    hintText: true,
                  },
                };
              });
            }}
            id="exampleFormControlTextarea1"
            rows={6}
            defaultValue={paragrafForm?.paragraf2.content}
          />
          {paragrafForm?.paragraf2.hintText ? (
            <small id="emailHelp" className="form-text text-danger">
              Lakukan Syncronasi Ulang Setelah Edit.
            </small>
          ) : null}
        </div>
        <div className="mb-3" style={{ marginTop: "20px" }}>
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Paragraf ke - 3
          </label>
          <textarea
            className="form-control"
            onChange={(input) => {
              const value = input.target.value;
              setparagrafForm((prevState: any) => {
                return {
                  ...prevState,
                  paragraf3: {
                    content: value,
                    hintText: true,
                  },
                };
              });
            }}
            id="exampleFormControlTextarea1"
            rows={6}
            defaultValue={paragrafForm?.paragraf3.content}
          />
          {paragrafForm?.paragraf3.hintText ? (
            <small id="emailHelp" className="form-text text-danger">
              Lakukan Syncronasi Ulang Setelah Edit.
            </small>
          ) : null}
        </div>
        <div className="mb-3" style={{ marginTop: "20px" }}>
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Paragraf ke - 4
          </label>
          <textarea
            className="form-control"
            onChange={(input) => {
              const value = input.target.value;
              setparagrafForm((prevState: any) => {
                return {
                  ...prevState,
                  paragraf4: {
                    content: value,
                    hintText: true,
                  },
                };
              });
            }}
            id="exampleFormControlTextarea1"
            rows={6}
            defaultValue={paragrafForm?.paragraf4.content}
          />
          {paragrafForm?.paragraf4.hintText ? (
            <small id="emailHelp" className="form-text text-danger">
              Lakukan Syncronasi Ulang Setelah Edit.
            </small>
          ) : null}
        </div>

      </div>
    </div>
  );
};
