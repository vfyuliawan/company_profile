"use client";
import { WebTheme } from "@/app/theme/webTheme";
import Swal from "sweetalert2";
import { D_CarsViewModel } from "./D_CarsViewModel";
import { DocumentData } from "firebase/firestore";
import { Modal, Button } from 'react-bootstrap';
import { useState } from "react";


export const D_CarsVieiw = () => {
  const { setListCars, listCars, editListCars , openModal, deleteCar, } = D_CarsViewModel();

  const cars = [1, 2, 3, 4, 5, 6, 7];
  const card = [1, 2, 3, 5, 6, 7, 8, 9];

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
            <h2>Available Cars List </h2>
          </div>
          <div className="col-md-6 d-flex justify-content-end align-items-center">
            <button
              data-toggle="modal"
              data-target="#exampleModal"
              type="button"
              className="btn btn-primary btn-lg"
              onClick={() => {
                openModal()
              }}
              style={{ display: "flex", alignItems: "center", height: "40px" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-plus-square"
                viewBox="0 0 16 16"
              >
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
              </svg>
              <span style={{ marginLeft: "8px" }}>ADD</span>
            </button>
            
            <div style={{ marginRight: "5px", marginLeft: "5px" }}></div>
            <button
              type="button"
              className="btn btn-success btn-lg "
              style={{ display: "flex", alignItems: "center", height: "40px" }}
              onClick={() => {
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
        <div className="row mt-3">
          {listCars.map(
            (item: CarsListInterface | DocumentData, index: number) => {
              return (
                <div
                  key={index + "dfasdhga"}
                  className="col-sm-4 col-md-6 col-lg-4 col-sm-12 mt-5"
                >
                  <div className="card" style={{ position: "relative" }}>
                    <button
                      type="button"
                      onClick={() => {
                        deleteCar(item.idDoc)
                      }}
                      className="btn btn-danger"
                      aria-label="Close"
                      style={{ position: "absolute", top: 0, left: 0 }}
                    >
                      {" "}
                      X{" "}
                    </button>

                    <img
                      className="card-img-top"
                      src={item.picture}
                      height={180}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label htmlFor="exampleFormControlTextarea1">
                            Nama Mobil
                          </label>
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows={1}
                            value={item.name}
                            onChange={(input) => {
                              const value = input.target.value;
                              setListCars((prevParagrafAdd) => {
                                const updatedParagrafAdd = [...prevParagrafAdd];
                                updatedParagrafAdd[index] = {
                                  ...updatedParagrafAdd[index],
                                  name: value,
                                };
                                return updatedParagrafAdd;
                              });
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label htmlFor="exampleFormControlTextarea1">
                            Capacity
                          </label>
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows={1}
                            value={item.capacity}
                            onChange={(input) => {
                              const value = input.target.value;
                              setListCars((prevParagrafAdd) => {
                                const updatedParagrafAdd = [...prevParagrafAdd];
                                updatedParagrafAdd[index] = {
                                  ...updatedParagrafAdd[index],
                                  capacity: value,
                                };
                                return updatedParagrafAdd;
                              });
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label htmlFor="exampleFormControlTextarea1">
                            Price
                          </label>
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows={1}
                            value={item.price}
                            onChange={(input) => {
                              const value = input.target.value;
                              setListCars((prevParagrafAdd) => {
                                const updatedParagrafAdd = [...prevParagrafAdd];
                                updatedParagrafAdd[index] = {
                                  ...updatedParagrafAdd[index],
                                  price: value,
                                };
                                return updatedParagrafAdd;
                              });
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label htmlFor="exampleFormControlTextarea1">
                            Description
                          </label>
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows={4}
                            value={item.desc}
                            onChange={(input) => {
                              const value = input.target.value;
                              setListCars((prevParagrafAdd) => {
                                const updatedParagrafAdd = [...prevParagrafAdd];
                                updatedParagrafAdd[index] = {
                                  ...updatedParagrafAdd[index],
                                  desc: value,
                                };
                                return updatedParagrafAdd;
                              });
                            }}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <button
                            style={{ width: "100%" }}
                            type="button"
                            className="btn btn-warning btn-lg"
                            onClick={() => {
                              Swal.fire({
                                title: "Are you sure?",
                                text: "Will Change This Data",
                                icon: "warning",
                                showCancelButton: true,
                                confirmButtonColor: "#3085d6",
                                cancelButtonColor: "#d33",
                                confirmButtonText: "Yes",
                              }).then((result) => {
                                if (result.isConfirmed) {
                                  editListCars(item.idDoc, index);
                                  Swal.fire({
                                    title: "Success!",
                                    text: "Your file has been updated.",
                                    icon: "success",
                                  });
                                }
                              });
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="currentColor"
                              className="bi bi-floppy-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0H3v5.5A1.5 1.5 0 0 0 4.5 7h7A1.5 1.5 0 0 0 13 5.5V0h.086a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5H14v-5.5A1.5 1.5 0 0 0 12.5 9h-9A1.5 1.5 0 0 0 2 10.5V16h-.5A1.5 1.5 0 0 1 0 14.5z" />
                              <path d="M3 16h10v-5.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5zm9-16H4v5.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5zM9 1h2v4H9z" />
                            </svg>
                            <span style={{ marginLeft: "8px" }}>Simpan</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};
