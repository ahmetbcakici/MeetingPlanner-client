import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import axiosInstance from "../../config";

const ItemDetailsPage = () => {

  const router = useRouter();
  const { itemID } = router.query;
  const [itemDetails, setItemDetails] = useState("");
  const [partipicantName, setPartipicantName] = useState("");
  const [optionsSelected, setOptionsSelected] = useState("");

  useEffect(() => {
    if(itemID) {
      getPlan(itemID);
    }
  },[itemID]);

  const getPlan = async (itemID) => {
    const doc = await axiosInstance.get("api/freeone", { params: { itemID } });
    setItemDetails(doc.data);
  };

  const postParticipant = async () => {
    const doc = await axiosInstance.post(
      "api/participant",
      { partipicantName, optionsSelected },
      { params: { itemID } }
    );
    // const doc = await axiosInstance.post('api/participant', { params: { itemID } });
    console.log(doc);
  };

  const checkboxTest = async e => {
    if (e.target.checked) {
      setOptionsSelected([...optionsSelected, e.target.id]);
      return;
    }
    let tempOptionsSelected = [...optionsSelected];
    const check = tempOptionsSelected.indexOf(e.target.id);
    if (check > -1) tempOptionsSelected.splice(check, 1);
    setOptionsSelected(tempOptionsSelected);
  };

  return (
    <Layout>
      <div className="container">
        <br />
        <div className="columns">
          <div className="column is-1"></div>
          <div className="column">
            <div
              className="is-fullwidth"
              style={{ padding: ".5rem", backgroundColor: "#C8E4FF" }}
            >
              <p
                onClick={() => {
                  console.log(optionsSelected);
                }}
              >
                Poll by <strong>{itemDetails.nameGenerater}</strong>
              </p>
            </div>
            <br />
            <div className="columns">
              <div className="column is-5">
                <p className="title has-text-info has-text-weight-normal">
                  {itemDetails.boardTitle}
                </p>
                <p>
                  {itemDetails.description
                    ? itemDetails.description
                    : "Please indicate when you are available. Then click 'Save'."}
                </p>
                <br />
                <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                  <thead>
                    <th style={{ border: "none" }}></th>

                    {/* Put possible dates as table headers */}
                    {itemDetails.possibleDates
                      ? itemDetails.possibleDates.map((element, index) => (
                          <th className="has-background-grey-lighter has-text-centered">
                            {element}
                          </th>
                        ))
                      : null}
                  </thead>
                  <tbody>
                    <tr className="be-first">
                      <td
                        className="has-background-primary has-text-white"
                        colSpan="100%"
                      >
                        Be the first to vote in this poll!
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: "#C8E4FF" }}>
                      <td style={{ borderColor: "white" }}>
                        <div class="field">
                          <div class="control">
                            <input
                              class="input is-primary"
                              type="text"
                              placeholder="Your name"
                              onChange={e => {
                                setPartipicantName(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                      </td>

                      {/* Columns which has checkbox to check possible dates*/}
                      {itemDetails.possibleDates
                        ? itemDetails.possibleDates.map((element, index) => (
                            <td
                              style={{ borderColor: "white" }}
                              className="has-text-centered"
                            >
                              <label class="checkbox">
                                <input
                                  type="checkbox"
                                  id={index}
                                  onChange={checkboxTest}
                                />
                              </label>
                            </td>
                          ))
                        : null}
                    </tr>
                  </tbody>
                </table>
                <p>
                  <a
                    className="button is-link has-text-right"
                    onClick={postParticipant}
                  >
                    Save
                  </a>
                </p>
                <br />
              </div>
              <div className="column is-5"></div>
              <div className="column is-2">x</div>
            </div>
          </div>
          <div className="column is-1"></div>
        </div>
      </div>
    </Layout>
  );
};

export default ItemDetailsPage;
// 5e708dce790a493928aac6f0
