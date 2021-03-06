import {useState} from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const Index = () => {
  const [meetingPollTitle, setMeetingPollTitle] = useState('');
  const [opinionPollTitle, setOpinionPollTitle] = useState('');
  const [anonPollTitle, setAnonPollTitle] = useState('');

  return (
    <Layout>
      <div>
        {/* First Section */}
        <div className="has-background-white-ter">
          <div className="container">
            <div className="columns">
              <div className="column is-1"> </div>
              <div className="column">
                <section className="section is-medium">
                  <br />
                  <h1 className="title has-text-info is-2">
                    Schedule meetings faster!
                  </h1>
                  <h2 className="subtitle">
                    Xoyondo is the fastest way to schedule your
                    <strong> meetings </strong> and <strong> events </strong>.
                    It's free! No registration required.
                  </h2>
                  <div className="columns">
                    <div className="column is-12">
                      <div className="field">
                        <div className="control">
                          <input
                            className="input is-inline is-size-5"
                            type="text"
                            placeholder="What are you planning?"
                            value={meetingPollTitle}
                            onChange={e => setMeetingPollTitle(e.target.value)}
                          />
                          <Link
                            href={{
                              pathname: '/plan/meeting',
                              query: {meetingPollTitle},
                            }}
                            as="/plan/meeting"
                          >
                            <button className="button is-info is-size-5">
                              Plan
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="column">
                <section className="section is-medium">
                  <div className="box is-inline-block">
                    <table className="table has-background-dark has-text-light">
                      <tr>
                        <th className="has-text-light"> Firstname </th>
                        <th className="has-text-light"> Lastname </th>
                        <th className="has-text-light"> Age </th>
                        <th className="has-text-light"> Age </th>
                        <th className="has-text-light"> Age </th>
                        <th className="has-text-light"> Age </th>
                      </tr>
                      <tr>
                        <td> Jill </td> <td> Smith </td> <td> 50 </td>
                        <td> 50 </td> <td> 50 </td> <td> 50 </td>
                      </tr>
                      <tr>
                        <td> Eve </td> <td> Jackson </td> <td> 94 </td>
                        <td> 94 </td> <td> 94 </td> <td> 94 </td>
                      </tr>
                      <tr>
                        <td> Eve </td> <td> Jackson </td> <td> 94 </td>
                        <td> 94 </td> <td> 94 </td> <td> 94 </td>
                      </tr>
                      <tr>
                        <td> Eve </td> <td> Jackson </td> <td> 94 </td>
                        <td> 94 </td> <td> 94 </td> <td> 94 </td>
                      </tr>
                      <tr>
                        <td> Eve </td> <td> Jackson </td> <td> 94 </td>
                        <td> 94 </td> <td> 94 </td> <td> 94 </td>
                      </tr>
                    </table>
                  </div>
                </section>
              </div>
              {/* <div className="column is-2"></div> */}
            </div>
          </div>
        </div>
        {/* Second Section */}
        <div className="has-background-white">
          <div className="container">
            <br />
            <p className="is-size-4 has-text-centered">
              Find a date for your event that works for everybody.
            </p>
            <p className="is-size-6 has-text-centered">This is how it works:</p>
            <br />
            <br />
            <div className="columns">
              <div className="column has-text-centered">
                <img
                  src="https://xoyondo.com/img/calendar-dates-en.png"
                  alt=""
                />
                <p className="is-size-4 has-text-link">
                  Select dates and times
                </p>
                <p className="is-size-6 has-text-grey-light">
                  Select several possible dates for your event or
                  meeting.Additionally different times(e.g.2 - 3 pm, 4 - 5 pm)
                  can be specified for each day.
                </p>
              </div>
              <div className="column has-text-centered">
                <img
                  src="https://xoyondo.com/img/invite-participants.png"
                  alt=""
                />
                <p className="is-size-4 has-text-link"> Invite participants </p>
                <p className="is-size-6 has-text-grey-light">
                  Invite the participants to your meeting poll by email or
                  directly via Xoyondo.They will obtain a link to your personal
                  poll website.
                </p>
              </div>
              <div className="column has-text-centered">
                <img
                  src="https://xoyondo.com/img/meeting-poll-en-2.png"
                  alt=""
                />
                <p className="is-size-4 has-text-link">Get the optimal date</p>
                <p className="is-size-6 has-text-grey-light">
                  Each participant indicates which dates and times are
                  suitable.The optimal date for your event can now be easily
                  determined.
                </p>
              </div>
              {/* <div className="column is-2"></div> */}
            </div>
            <br />
            <br />
            <p className="has-text-centered">
              <Link href="/plan/meeting">
                <a className="button is-info"> Start your own meeting poll! </a>
              </Link>
            </p>
          </div>
        </div>
        <br />
        <br /> {/* Third Section */}
        <div className="has-background-info has-text-light has-text-centered">
          <div className="container">
            <br />
            <br />
            <p className="is-size-4 "> Features: </p> <br />
            <br />
            <div className="columns">
              <div className="column">
                <p className="is-size-3 has-text-warning">
                  <i className="fa fa-bar-chart"> </i>
                </p>
                <p className="is-size-4"> Easy scheduling and polling </p>
                <p className="is-size-6 has-text-grey-light">
                  Easily schedule meetings, create polls and message boards.
                </p>
              </div>
              <div className="column is-1"> </div>
              <div className="column">
                <p className="is-size-3 has-text-warning">
                  <i className="fa fa-check-square-o"> </i>
                </p>
                <p className="is-size-4"> Unlimited polls and participants </p>
                <p className="is-size-6 has-text-grey-light">
                  Create as many polls as you want.Invite as many participants
                  as you want.
                </p>
              </div>
              <div className="column is-1"> </div>
              <div className="column">
                <p className="is-size-3 has-text-warning">
                  <i className="fa fa-star"> </i>
                </p>
                <p className="is-size-4"> Personal Xoyondo page </p>
                <p className="is-size-6 has-text-grey-light">
                  Publish your polls on a public personal page with a URL of
                  your choice.
                </p>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <p className="is-size-3 has-text-warning">
                  <i className="fa fa-list-ol"> </i>
                </p>
                <p className="is-size-4">
                  {' '}
                  Request additional user information{' '}
                </p>
                <p className="is-size-6 has-text-grey-light">
                  Collect additional information from your participants when
                  they vote in your poll(e.g.their email address)
                </p>
              </div>
              <div className="column is-1"> </div>
              <div className="column">
                <p className="is-size-3 has-text-warning">
                  <i className="fa fa-file-o"> </i>
                </p>
                <p className="is-size-4"> Attach files </p>
                <p className="is-size-6 has-text-grey-light">
                  Upload documents and images and attach them to your polls
                </p>
              </div>
              <div className="column is-1"> </div>
              <div className="column">
                <p className="is-size-3 has-text-warning">
                  <i className="fa fa-picture-o"> </i>
                </p>
                <p className="is-size-4">
                  {' '}
                  Individual branding and poll design{' '}
                </p>
                <p className="is-size-6 has-text-grey-light">
                  Replace the Xoyondo logo with your own, create custom poll
                  designs.
                </p>
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
        {/* Fourth Section */}
        <div className="has-background-white-ter">
          <div className="container">
            <br />
            <p className="is-size-3 has-text-centered">
              Xoyondo can do more for you...
            </p>
            <p className="is-size-6 has-text-centered">
              If you don 't want to plan a meeting, we offer two more poll types
              that can be useful in various situations.
            </p>
            <br />
            <div className="columns">
              <div className="column is-1"> </div>
              <div className="column">
                <section className="section is-small">
                  <br />
                  <p className="is-size-3 has-text-link"> Opinion polls </p>
                  <p className="is-size-6 has-text-grey-light">
                    With opinion polls you and your participants can easily
                    choose the best option.
                  </p>
                  <div className="columns">
                    <div className="column is-12">
                      <div className="field">
                        <div className="control">
                          <input
                            className="input is-inline is-size-5"
                            type="text"
                            placeholder="What are you planning?"
                            value={opinionPollTitle}
                            onChange={e => setOpinionPollTitle(e.target.value)}
                          />
                          <Link
                            href={{
                              pathname: '/plan/opoll',
                              query: {opinionPollTitle},
                            }}
                            as="/plan/opoll"
                          >
                            <button className="button is-info is-size-5">
                              Plan
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="column">
                <section className="section is-small">
                  <div className="box is-inline-block">
                    <table className="table has-background-dark has-text-light">
                      <tr>
                        <th className="has-text-light"> Firstname </th>
                        <th className="has-text-light"> Lastname </th>
                        <th className="has-text-light"> Age </th>
                        <th className="has-text-light"> Age </th>
                      </tr>
                      <tr>
                        <td> Jill </td> <td> Smith </td> <td> 50 </td>
                        <td> 50 </td>
                      </tr>
                      <tr>
                        <td> Eve </td> <td> Jackson </td> <td> 94 </td>
                        <td> 94 </td>
                      </tr>
                      <tr>
                        <td> Eve </td> <td> Jackson </td> <td> 94 </td>
                        <td> 94 </td>
                      </tr>
                    </table>
                  </div>
                </section>
              </div>
            </div>
            {/* Second Row */}
            <div className="columns">
              <div className="column is-1"> </div>
              <div className="column">
                <section className="section is-small">
                  <br />
                  <div className="box is-inline-block">
                    <img src="https://xoyondo.com/img/apoll_en2.png" alt="" />
                  </div>
                </section>
              </div>
              <div className="column">
                <section className="section is-small">
                  <br />
                  <p className="is-size-3 has-text-link">Anonymous polls</p>
                  <p className="is-size-6 has-text-grey-light">
                    Anonymous polls let your participants decide on an option
                    without specifying their names.
                  </p>
                  <div className="columns">
                    <div className="column is-12">
                      <div className="field">
                        <div className="control">
                          <input
                            className="input is-inline is-size-5"
                            type="text"
                            placeholder="What are you planning?"
                            value={anonPollTitle}
                            onChange={e => setAnonPollTitle(e.target.value)}
                          />
                          <Link
                            href={{
                              pathname: '/plan/apoll',
                              query: {anonPollTitle},
                            }}
                            as="/plan/apoll"
                          >
                            <button className="button is-info is-size-5">
                              Plan
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
        {/* Fifth Section */}
        <div className="has-background-white">
          <div className="container">
            <br />
            <br />
            <section className="section is-small">
              <div className="columns">
                <div className="column is-1"> </div>
                <div className="column is-5">
                  <br />
                  <p className="is-size-3 has-text-dark">
                    All your polls in one place
                  </p>
                  <p className="is-size-5 has-text-grey-light">
                    With a free Xoyondo account you have all your polls in one
                    place.The Dashboard offers direct access to your polls and
                    lets you know about recent activities.
                  </p>
                </div>
                <div className="column has-text-centered">
                  <img src="https://xoyondo.com/img/Dashboard-en.png" alt="" />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
