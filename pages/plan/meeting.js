import Layout from '../../components/Layout';
import axiosInstance from '../../config';
import Date_FreeText from '../../components/Date_FreeText';
import Date_Calendar from '../../components/Date_Calendar';
import {useState, useEffect} from 'react';
import {useRouter} from 'next/router';

export default () => {
  const router = useRouter();

  const [whichPage, setWhichPage] = useState(0);
  const [whichSection, setWhichSection] = useState(0);
  const [pollTitle, setPollTitle] = useState('');
  const [additionalDescriptions, setAdditionalDescriptions] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [ownerEmail, setOwnerEmail] = useState('');
  const [clientID, setClientID] = useState('');

  useEffect(() => {
    router.query ? setPollTitle(router.query.meetingPollTitle) : null;
  }, [router.query]);

  const handleNextButton = () => {
    setWhichPage(1);
  };

  const filterPossibleDates = async pd => {
    let pdFilterSpaces = [];
    await pd.map(item => {
      if (item) pdFilterSpaces.push(item);
    });
    postOperation(pdFilterSpaces);
  };

  const postOperation = async possibleDates => {
    const returnedClientID = await axiosInstance.post('api/freeone', {
      pollTitle,
      additionalDescriptions,
      ownerName,
      ownerEmail,
      possibleDates,
    });
    setClientID(returnedClientID.data);
    setWhichPage(2);
  };

  const firstPage = () => (
    <Layout>
      {/* Bar which has steps to schedule meeting */}
      <div
        className="is-fullwidth has-background-white-ter"
        style={{paddingTop: '1rem', paddingBottom: '1rem'}}
      >
        <div className="columns has-text-centered">
          <div className="column" />
          <div className="column"> General information </div>
          <div className="column">
            <i className="fa fa-lg fa-chevron-right" />
          </div>
          <div className="column has-text-grey-light">
            Choose dates and times
          </div>
          <div className="column">
            <i className="fa fa-lg fa-chevron-right" />
          </div>
          <div className="column  has-text-grey-light">Invite participants</div>
          <div className="column" />
        </div>
      </div>
      <div>
        <div className="has-background-white">
          <br />
          <br />
          <div className="columns">
            <div className="column" />
            <div className="column is-5">
              <p className="title has-text-link has-text-centered has-text-weight-normal">
                Schedule a meetings
              </p>
              <div className="box" style={{backgroundColor: '#C8E4FF'}}>
                <div className="field">
                  <label className="label has-text-weight-normal">
                    Poll title:
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      value={pollTitle}
                      onChange={e => setPollTitle(e.target.value)}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label has-text-weight-normal">
                    Additional descriptions:
                  </label>
                  <div className="control has-icons-left has-icons-right">
                    <textarea
                      className="textarea"
                      rows="3"
                      value={additionalDescriptions}
                      onChange={e => setAdditionalDescriptions(e.target.value)}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label has-text-weight-normal">
                    Your name:
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      value={ownerName}
                      onChange={e => setOwnerName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label has-text-weight-normal">
                    Your email address:
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type="email"
                      value={ownerEmail}
                      onChange={e => setOwnerEmail(e.target.value)}
                    />
                  </div>
                </div>
                <span className="is-size-7 has-text-grey">
                  We will send you an email with the link to your poll and the
                  admin area.That 's all you will receive - we hate spam too.
                </span>
                <br />
                <br />
                <div className="field">
                  <div className="control">
                    <button
                      className="button is-link is-fullwidth"
                      onClick={handleNextButton}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
              {/* Box of tip */}
              <div className="box has-background-white-ter">
                <article className="media">
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <strong> Tip: </strong> If you have multiple polls you
                        can easily organize and manage them with a free Xoyondo
                        account. <a href="/register"> Sign up! </a>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <div className="column" />
          </div>
        </div>
        <br />
        <br />
      </div>
    </Layout>
  );

  const secondPage = () => (
    <Layout>
      <br />
      <br />
      <p className="title has-text-link has-text-centered has-text-weight-normal">
        Choose your dates
      </p>
      <div className="columns has-text-centered">
        <div className="column" />
        <div className="column is-4 has-background-white-ter">
          <a
            className="btn"
            onClick={e => setWhichSection(parseInt(e.target.id))}
            id="0"
          >
            calendar
          </a>
        </div>
        <div className="column is-4 has-background-white-ter">
          <a
            className="btn"
            onClick={e => setWhichSection(parseInt(e.target.id))}
            id="1"
          >
            free text
          </a>
        </div>
        <div className="column" />
      </div>
      {whichSection === 0 ? (
        <Date_Calendar />
      ) : (
        <Date_FreeText getPossibleDates={filterPossibleDates} />
      )}
    </Layout>
  );

  const thirdPage = () => (
    <Layout>
      {/* <h1>{clientID}</h1> */} <br />
      <div className="columns">
        <div className="column is-4" />
        <div className="column has-text-centered">
          <p className="title has-text-info has-text-weight-normal">
            Send invitations
          </p>
          <div className="box" style={{backgroundColor: '#C8E4FF'}}>
            <p> The link to share your poll is: </p>
            <div className="field">
              <div className="control has-text-centered">
                <input
                  className="input is-primary is-size-6 w-75"
                  type="text"
                  value={`domain.com/plan/${clientID}`}
                  readOnly
                />
              </div>
              <small className="is-size-7 text-muted">
                Everybody who has this link can participate in your poll - no
                account required.
              </small>
            </div>
            <br />
            <p> The admin link to manage your poll is: </p>
            <div className="field">
              <div className="control has-text-centered">
                <input
                  className="input is-primary is-size-6 w-75"
                  type="text"
                  value="Coming soon!"
                  disabled
                  readOnly
                />
              </div>
              <small className="is-size-7 text-muted">
                <i className="fas fa-exclamation-triangle" /> Do not send this
                link to your participants.
              </small>
            </div>
          </div>
        </div>
        <div className="column is-4" />
      </div>
      <style jsx>
        {`
          .w-75 {
            width: 75% !important;
          }
          .text-muted {
            color: #868e96 !important;
          }
        `}
      </style>
    </Layout>
  );

  const pageToShow = () => {
    if (whichPage === 0) return firstPage();
    else if (whichPage === 1) return secondPage();
    else return thirdPage();
  };

  return pageToShow();
};
