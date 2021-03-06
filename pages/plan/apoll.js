import {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import Layout from '../../components/Layout';
import MoreOptions from '../../components/MoreOptions';

export default () => {
  const router = useRouter();

  const [pollTitle, setPollTitle] = useState('');

  useEffect(() => {
    router.query ? setPollTitle(router.query.anonPollTitle) : null;
  }, [router.query]);

  return (
    <Layout>
      {/* Bar which has steps to generate opinion poll */}
      <div
        className="is-fullwidth has-background-white-ter"
        style={{paddingTop: '1rem', paddingBottom: '1rem'}}
      >
        <div className="columns has-text-centered">
          <div className="column" />
          <div className="column">Generate polls</div>
          <div className="column">
            <i className="fa fa-lg fa-chevron-right" />
          </div>
          <div className="column has-text-grey-light">Invite participants</div>
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
                Generate an anonymous poll
              </p>

              <div className="box" style={{backgroundColor: '#C8E4FF'}}>
                <div className="field">
                  <label className="label has-text-weight-normal">
                    {' '}
                    Poll question / title:{' '}
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
                    Poll answers
                  </label>
                  <div className="field-body">
                    <div className="field is-expanded">
                      <div className="field has-addons">
                        <p className="control is-expanded">
                          <input className="input" type="text" />
                        </p>

                        <p className="control">
                          <a className="button is-static">
                            <i className="fas fa-trash-alt" />
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="field">
                  <label
                    className="checkbox is-block is-size-6"
                    style={{paddingBottom: '.5rem'}}
                  >
                    &nbsp;
                    <input type="checkbox" />
                    &nbsp;Allow participants to make multiple choices
                  </label>

                  <label
                    className="checkbox is-block is-size-6"
                    style={{paddingBottom: '.5rem'}}
                  >
                    &nbsp;
                    <input type="checkbox" />
                    &nbsp;Allow multiple votes from the same IP address
                  </label>
                </div>

                <MoreOptions options={['Show result', 'Show votes']} />
              </div>
              <br />

              <p>
                {' '}
                When your poll is ready, fill in the fields below and proceed.{' '}
              </p>
              <div className="box" style={{backgroundColor: '#C8E4FF'}}>
                <div className="field">
                  <label className="label has-text-weight-normal">
                    {' '}
                    Your name:{' '}
                  </label>
                  <div className="control">
                    <input className="input" type="text" />
                  </div>
                </div>

                <div className="field">
                  <label className="label has-text-weight-normal">
                    {' '}
                    Your email address:{' '}
                  </label>
                  <div className="control">
                    <input className="input" type="text" />
                  </div>
                </div>

                <span className="is-size-7 has-text-grey">
                  We will send you an email with the link to your poll and the
                  admin area. That's all you will receive - we hate spam too.
                </span>

                <br />
                <br />

                <MoreOptions apoll />

                <div className="field">
                  <div className="control">
                    <button className="button is-link is-fullwidth">
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
                        <strong>Tip: </strong> If you have multiple polls you
                        can easily organize and manage them with a free Xoyondo
                        account.{' '}
                        <Link href="/register">
                          <a>Sign up!</a>
                        </Link>
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

      <style jsx>{`
        .passive {
          visibility: 'hidden';
          opacity: 0;
          height: 0;
        }

        .active {
          visibility: 'visible';
          opacity: 1;
          height: 120px;
        }
      `}</style>
    </Layout>
  );
};
