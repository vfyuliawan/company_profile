"use client";

import { WebTheme } from "@/app/theme/webTheme";
import { D_AboutUsViewModel } from "./D_AboutUsViewModel";

export const D_AboutUsView = () => {
  const {
    getParagraf,
    paragrafList,
    setParagrafList,
    editParagraf,
    paragrafAdd,
    setParagrafAdd,
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
        <div
          style={{
            flexDirection: "column",
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          <h2>About Us</h2>
        </div>
        <div
          style={{
            flexDirection: "column",
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <button
            type="button"
            className="btn btn-primary btn-lg"
            style={{ display: "flex", alignItems: "center", height: "40px" }}
            onClick={() => {
              editParagraf(paragrafAdd);
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
            {"      "}
            <text style={{ marginLeft: "8px" }}>RE-SYNC</text>
          </button>
        </div>
        <div className="mb-3" style={{ marginTop: "20px" }}>
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Paragraf ke - 1
          </label>
          <textarea
            className="form-control"
            onChange={(input) => {
              const value = input.target.value;
              setParagrafList((prevParagrafAdd) => {
                const updatedParagrafAdd = [...prevParagrafAdd];
                updatedParagrafAdd[0] = {
                  ...updatedParagrafAdd[0],
                  paragraf1: value,
                };
                return updatedParagrafAdd;
              });
            }}
            id="exampleFormControlTextarea1"
            rows={6}
            defaultValue={paragrafList[0]?.paragraf1}
          />
        </div>
        <div className="mb-3" style={{ marginTop: "20px" }}>
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Paragraf ke - 2
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={6}
            defaultValue={""}
            value={paragrafList[0]?.paragraf2}
            onChange={(input) => {
              const value = input.target.value;
              setParagrafList((prevParagrafAdd) => {
                const updatedParagrafAdd = [...prevParagrafAdd];
                updatedParagrafAdd[0] = {
                  ...updatedParagrafAdd[0],
                  paragraf2: value,
                };
                return updatedParagrafAdd;
              });
            }}
          />
        </div>
        <div className="mb-3" style={{ marginTop: "20px" }}>
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Paragraf ke - 3
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={6}
            defaultValue={""}
            value={paragrafList[0]?.paragraf3}
            onChange={(input) => {
              const value = input.target.value;
              setParagrafList((prevParagrafAdd) => {
                const updatedParagrafAdd = [...prevParagrafAdd];
                updatedParagrafAdd[0] = {
                  ...updatedParagrafAdd[0],
                  paragraf3: value,
                };
                return updatedParagrafAdd;
              });
            }}
          />
        </div>
        <div className="mb-3" style={{ marginTop: "20px" }}>
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Paragraf ke - 4
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={6}
            defaultValue={""}
            value={paragrafList[0]?.paragraf4}
            onChange={(input) => {
              const value = input.target.value;
              setParagrafList((prevParagrafAdd) => {
                const updatedParagrafAdd = [...prevParagrafAdd];
                updatedParagrafAdd[0] = {
                  ...updatedParagrafAdd[0],
                  paragraf4: value,
                };
                return updatedParagrafAdd;
              });
            }}
          />
        </div>
      </div>
    </div>
  );
};
