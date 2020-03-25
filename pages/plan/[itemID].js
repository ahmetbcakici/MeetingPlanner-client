import {useRouter} from 'next/router';
import {useState, useEffect} from 'react';
import Layout from '../../components/Layout';
import axiosInstance from '../../config';

const ItemDetailsPage = () => {
  const router = useRouter();
  const {itemID} = router.query;
  const [itemDetails, setItemDetails] = useState('');
  const [participantName, setParticipantName] = useState('');
  const [optionsSelected, setOptionsSelected] = useState('');

  useEffect(() => {
    if (itemID) getPlan(itemID);
  }, [itemID]); //

  const getPlan = async itemID => {
    const doc = await axiosInstance.get('api/freeone', {params: {itemID}});
    setItemDetails(doc.data);
  };

  const postParticipant = async () => {
    const res = await axiosInstance.post(
      'api/participant',
      {participantName, optionsSelected},
      {params: {itemID}}
    );
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

  const returnHTML = item => {
    if (Array.isArray(itemDetails.possibleDates)) {
      const possibleDates = itemDetails.possibleDates;
      return possibleDates.map((option, index) => {
        const isContainIndex = item.optionsSelected.includes(index);
        console.log(isContainIndex);
        if (isContainIndex) {
          return <td key={index}>X</td>;
        } else {
          return <td key={index}>yok</td>;
        }
      });
    }
  };

  return (
    <Layout>
      <div className="container">
        <br />
        <div className="columns">
          <div className="column is-1" />
          <div className="column">
            <div
              className="is-fullwidth"
              style={{padding: '.5rem', backgroundColor: '#C8E4FF'}}
            >
              <p>
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
                    <tr>
                      <th style={{border: 'none'}} />

                      {/* Put possible dates as table headers */}
                      {itemDetails.possibleDates
                        ? itemDetails.possibleDates.map((element, index) => (
                            <th key={index} className="has-background-grey-lighter has-text-centered">
                              {element}
                            </th>
                          ))
                        : null}
                    </tr>
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

                    {itemDetails.participants
                      ? itemDetails.participants.map((item, index) => {
                          return (
                            <tr key={index}>
                              <td>{item.participantName}</td>
                              {returnHTML(item)}
                            </tr>
                          );
                        })
                      : null}

                    <tr style={{backgroundColor: '#C8E4FF'}}>
                      <td style={{borderColor: 'white'}}>
                        <div className="field">
                          <div className="control">
                            <input
                              className="input is-primary"
                              type="text"
                              placeholder="Your name"
                              onChange={e => {
                                setParticipantName(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                      </td>

                      {/* Columns which has checkbox to check possible dates */}
                      {itemDetails.possibleDates
                        ? itemDetails.possibleDates.map((element, index) => (
                            <td
                              key={index}
                              style={{borderColor: 'white'}}
                              className="has-text-centered"
                            >
                              <label className="checkbox">
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
              <div className="column is-5" />
              <div className="column is-2">x</div>
            </div>
          </div>
          <div className="column is-1" />
        </div>
      </div>
    </Layout>
  );
};

export default ItemDetailsPage;
// 5e708dce790a493928aac6f0
