import {useRouter} from 'next/router';
import {useState, useEffect} from 'react';
import Layout from '../../components/Layout';
import axiosInstance from '../../config';

const ItemDetailsPage = () => {
  const router = useRouter();
  const {itemID} = router.query;
  const [itemDetails, setItemDetails] = useState('');
  const [isThereParticipant, setIsThereParticipant] = useState(false);
  const [participantName, setParticipantName] = useState('');
  const [optionsSelected, setOptionsSelected] = useState('');
  const [senderName, setSenderName] = useState('');
  const [comment, setComment] = useState('');
  const [sendCommentSectionDisplay, setSendCommentSectionDisplay] = useState(
    'none'
  );

  useEffect(() => {
    if (itemID) getPlan(itemID);
  }, [itemID]);

  const getPlan = async itemID => {
    const doc = await axiosInstance.get('api/freeone', {params: {itemID}});
    setItemDetails(doc.data);
    if (doc.data && doc.data.participants.length > 0) {
      setIsThereParticipant(true);
    }
  };

  const postParticipant = async () => {
    const res = await axiosInstance.post(
      'api/participant',
      {participantName, optionsSelected},
      {params: {itemID}}
    );
    getPlan(itemID);
    clearFields();
  };

  const postComment = async () => {
    const res = await axiosInstance.post(
      'api/comment',
      {senderName, comment},
      {params: {itemID}}
    );
    getPlan(itemID);
  };

  const handleCheckboxVote = async e => {
    if (e.target.checked) {
      setOptionsSelected([...optionsSelected, e.target.id]);
      return;
    }
    let tempOptionsSelected = [...optionsSelected];
    const check = tempOptionsSelected.indexOf(e.target.id);
    if (check > -1) tempOptionsSelected.splice(check, 1);
    setOptionsSelected(tempOptionsSelected);
  };

  const returnVotes = item => {
    if (Array.isArray(itemDetails.possibleDates)) {
      const {possibleDates} = itemDetails;
      return possibleDates.map((option, index) => {
        const isContainIndex = item.optionsSelected.includes(index);
        if (isContainIndex)
          return (
            <td
              key={index}
              className="has-text-centered"
              style={{backgroundColor: '#b8eba4'}}
            >
              <i className="fas fa-check" style={{color: '#008623'}}></i>
            </td>
          );
        else
          return (
            <td
              key={index}
              className="has-text-centered"
              style={{backgroundColor: '#EDB7B7'}}
            >
              <i className="fas fa-times" style={{color: '#FF0000'}}></i>
            </td>
          );
      });
    }
  };

  const handleClickSendComment = () => {
    let displayValue = sendCommentSectionDisplay === '' ? 'none' : '';
    setSendCommentSectionDisplay(displayValue);
  };

  const clearFields = () => {
    const checkboxes = document.querySelectorAll('.checkbox-vote');
    checkboxes.forEach(element => {
      element.checked = false;
    });
    setOptionsSelected('');
    setParticipantName('');
  };

  return (
    <Layout>
      <div className="container">
        <br />
        <div className="columns">
          <div className="column is-1" />
          <div className="column">
            <div
              className="is-fullwidth has-background-special-blue"
              style={{padding: '.5rem'}}
            >
              {/* Owner name of the poll */}
              <p>
                Poll by <strong>{itemDetails.ownerName}</strong>
              </p>
            </div>
            <br />
            {/* Title of the poll */}
            <p className="title has-text-info has-text-weight-normal">
              {itemDetails.boardTitle}
            </p>
            {/* Description of the poll */}
            <p>
              {itemDetails.description
                ? itemDetails.description
                : "Please indicate when you are available. Then click 'Save'."}
            </p>
            <br />
            {/* List existing votes & give new votes area */}
            <div className="votes-area">
              <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                <thead>
                  <tr>
                    <th className="border-none" />

                    {/* Put possible dates as table headers */}
                    {itemDetails.possibleDates
                      ? itemDetails.possibleDates.map((element, index) => (
                          <th
                            key={index}
                            className="has-background-grey-lighter has-text-centered border-color-white possible-dates-cell"
                          >
                            {element}
                          </th>
                        ))
                      : null}
                  </tr>
                </thead>
                <tbody>
                  <tr
                    className="be-first"
                    style={{display: !isThereParticipant ? '' : 'none'}}
                  >
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
                            <td className="has-background-special-blue border-color-white">
                              {item.participantName}
                            </td>
                            {returnVotes(item)}
                          </tr>
                        );
                      })
                    : null}

                  <tr className="has-background-special-blue">
                    <td className="participant-name-cell border-color-white">
                      <div className="field">
                        <div className="control">
                          <input
                            className="input is-primary is-size-6"
                            type="text"
                            placeholder="Your name"
                            maxLength={20}
                            value={participantName}
                            onChange={e => setParticipantName(e.target.value)}
                          />
                        </div>
                      </div>
                    </td>

                    {/* Columns which has checkbox to check possible dates */}
                    {itemDetails.possibleDates
                      ? itemDetails.possibleDates.map((element, index) => (
                          <td
                            key={index}
                            className="has-text-centered border-color-white"
                          >
                            <label className="checkbox">
                              <input
                                id={index}
                                className="checkbox-vote"
                                type="checkbox"
                                style={{
                                  transform: 'scale(1.5)',
                                  border: 'none',
                                }}
                                onChange={handleCheckboxVote}
                              />
                            </label>
                          </td>
                        ))
                      : null}
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              <a
                className="button is-link has-text-right"
                onClick={postParticipant}
              >
                Save
              </a>
            </p>
            <br />
            <p>
              <i className="fas fa-eye"></i> CHANGE VIEW
            </p>
          </div>
          <div className="column is-1" />
        </div>
        {/* Comments Area */}
        <div className="columns">
          <div className="column is-1" />
          <div className="column">
            <p className="title has-text-info has-text-weight-normal">
              Comments &nbsp;
              <a onClick={handleClickSendComment}>
                <i className="fas fa-plus-circle has-text-success"></i>
              </a>
            </p>

            {/* Send comments area */}
            <div
              className="columns has-background-special-blue"
              style={{display: sendCommentSectionDisplay}}
            >
              <div className="column is-11">
                <div className="field is-inline-block">
                  <div className="control">
                    <input
                      className="input is-primary"
                      type="text"
                      placeholder="Your name"
                      onChange={e => setSenderName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <textarea
                      className="textarea"
                      rows={2}
                      placeholder="Your message"
                      onChange={e => setComment(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="column is-1">
                <button
                  className="button is-link has-text-white is-fullwidth"
                  onClick={postComment}
                >
                  Submit
                </button>
              </div>
            </div>

            <br />

            {/* List available comments area */}
            <div>
              {itemDetails
                ? itemDetails.comments.map(data => (
                    <div className="columns p-1-rem">
                      <div className="column is-1 has-text-centered">
                        <span className="dot">{data.senderName[0]}</span>
                      </div>
                      <div className="column has-background-white-ter">
                        <p>
                          <span className="is-size-7">
                            <strong>{data.senderName}</strong> &nbsp; · &nbsp;{' '}
                            <span className="text-muted">19 hours ago</span>
                          </span>
                        </p>
                        <p>{data.comment}</p>
                      </div>
                    </div>
                  ))
                : null}
            </div>
          </div>
          <div className="column is-1" />
        </div>
        <br />
      </div>

      <style jsx>
        {`
          .dot {
            color: white;
            font-size: 1.5rem;
            height: 2.5rem;
            width: 2.5rem;
            background-color: #007fff;
            border-radius: 50%;
            display: inline-block;
          }
          .has-background-special-blue {
            background-color: #c8e4ff !important;
          }
          .has-background-special-green {
            background-color: #b8eba4 !important;
          }
          .has-text-special-green {
            color: #008623 !important;
          }
          .border-none {
            border: none !important;
          }
          .border-color-white {
            border-color: white !important;
          }
          .text-muted {
            color: #868e96 !important;
          }
          .p-1-rem {
            padding-bottom: 1rem !important;
          }
          .votes-area {
            max-width: 65% !important;
          }
          .possible-dates-cell {
            min-width: 1rem;
            max-width: 3rem;
          }
          .participant-name-cell {
            max-width: 4rem;
          }
        `}
      </style>
    </Layout>
  );
};

export default ItemDetailsPage;
// 5e708dce790a493928aac6f0
