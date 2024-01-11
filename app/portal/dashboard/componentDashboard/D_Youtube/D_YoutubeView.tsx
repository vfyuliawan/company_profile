"use client";

import { WebTheme } from "@/app/theme/webTheme";
import TextInputWidget from "../../widget/textInput/WidgetTextInput";
import ButtonWidget from "../../widget/button/ButtonWidgte";
import { D_YoutubeViewModel } from "./D_YoutubeViewModel";
import { ChangeEvent, ClipboardEvent } from "react";
import WidgetSizeBox from "../../widget/sizedBox/SizedBoxWidget";
import WidgetYoutube from "../../widget/youtube/WidgetYoutube";
import WidgetTextInputButton from "../../widget/textInputButton/WidgetTextInputButton";
import InputWithPasteButton from "../../widget/textInputButton/WidgetTextInputButton";
import WidgetTextArea from "../../widget/textArea/WidgetTextArea";

function D_YoutubeView() {
  const vid = [1, 2];
  const { progress, youtubeList, setprogress, setyoutubeList, editYoutube } =
    D_YoutubeViewModel();
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
            <h2>Youtube</h2>
          </div>
          <div className="col-md-6 d-flex justify-content-end align-items-center">
            <ButtonWidget
              class={"btn btn-primary"}
              size={"btn-lg"}
              icon={true}
              iconSvg={
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
              }
              type={"button"}
              text={"ADD"}
              onClick={function (): void {}}
            />
            <WidgetSizeBox top={""} bottom={""} left={"3px"} raight={"3px"} />
            <ButtonWidget
              class={"btn btn-success"}
              size={"btn-lg"}
              icon={true}
              iconSvg={
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
              }
              type={"button"}
              text={"RE-SYNC"}
              onClick={function (): void {}}
            />
          </div>
        </div>
        <div className="row mt-5">
          {youtubeList.map((item: YoutubeInterface, index: number) => (
            <div
              key={"dfasdhga" + index}
              className="col-md-12 col-lg-6 d-flex justify-content-center"
            >
              <div>
                <WidgetYoutube height="300" width="125" vidId={item.videoId} />
                <WidgetTextInputButton
                  label={"Video Url"}
                  id={"123"}
                  type={"text"}
                  disable={false}
                  placeHolder={item.videoId}
                  value={item.videoId}
                  onChange={function (event: any): void {
                    setyoutubeList((prevState) => {
                      const update = [...prevState];
                      update[index].videoId = event?.target?.value;
                      return update;
                    });
                  }}
                  buttonText={"Paste"}
                  onPaste={function (): void {
                    navigator.clipboard.readText().then((pastedText) => {
                      setyoutubeList((prevState) => {
                        const update = [...prevState];
                        update[index].videoId = pastedText;
                        return update;
                      });
                    });
                  }}
                />

                <WidgetSizeBox top={"2"} bottom={"2"} />
                <WidgetTextArea
                  label={"Deskiripsi"}
                  id={"desc"}
                  type={"button"}
                  disable={false}
                  row={3}
                  value={item?.desc}
                  defValue={item?.desc}
                  onChange={function (
                    event: ChangeEvent<HTMLTextAreaElement>
                  ): void {
                    setyoutubeList((prevState) => { 
                      const update = [...prevState];
                      update[index].desc = event?.target?.value;
                      return update;
                    });
                  }}
                />
                <WidgetSizeBox top={"2"} bottom={"2"} />

                <ButtonWidget
                  size="btn-lg"
                  icon
                  iconSvg={
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
                  }
                  type={"button"}
                  class={"btn btn-warning"}
                  text={" Save"}
                  onClick={function (): void {
                    editYoutube(youtubeList[index], index);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default D_YoutubeView;
