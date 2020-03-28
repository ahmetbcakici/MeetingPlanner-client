import Layout from '../../components/Layout';

export default () => (
  <Layout>
    {/* Bar which has steps to generate message dashboard */}
    <div
      className="is-fullwidth has-background-white-ter"
      style={{paddingTop: '1rem', paddingBottom: '1rem'}}
    >
      <div className="columns has-text-centered">
        <div className="column"></div>
        <div className="column">Generate message board</div>
        <div className="column">
          <i className="fa fa-lg fa-chevron-right"></i>
        </div>
        <div className="column has-text-grey-light">Invite participants</div>
        <div className="column"></div>
      </div>
    </div>

    <div>
      <div className="has-background-white">
        <br />
        <br />
        <div className="columns">
          <div className="column"></div>
          <div className="column is-5">
            <p className="title has-text-link has-text-centered has-text-weight-normal">
              Generate your personal message board.
            </p>
            <p className="subtitle has-text-centered has-text-weight-normal">
              Only 2 steps are required and you can start your discussion!
            </p>
            <div className="box" style={{backgroundColor: '#C8E4FF'}}>
              <div className="field">
                <label className="label has-text-weight-normal">
                  Subject of the discussion:
                </label>
                <div className="control">
                  <input className="input" type="text" />
                </div>
              </div>

              <div className="field">
                <label className="label has-text-weight-normal">
                  Additional descriptions:
                </label>
                <div className="control has-icons-left has-icons-right">
                  <textarea className="textarea" rows="3"></textarea>
                </div>
              </div>

              <div className="field">
                <label className="label has-text-weight-normal">
                  Your name:
                </label>
                <div className="control">
                  <input className="input" type="text" />
                </div>
              </div>

              <div className="field">
                <label className="label has-text-weight-normal">
                  Your email address:
                </label>
                <div className="control">
                  <input className="input" type="email" />
                </div>
              </div>

              <span className="is-size-7 has-text-grey">
                We will send you an email with the link to your poll and the
                admin area. That's all you will receive - we hate spam too.
              </span>

              <br />
              <br />
              <div className="field">
                <div className="control">
                  <button className="button is-link is-fullwidth">Next</button>
                </div>
              </div>
            </div>

            {/* Box of tip */}
            <div className="box has-background-white-ter">
              <article className="media">
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong>Tip: </strong> If you have multiple polls you can
                      easily organize and manage them with a free Xoyondo
                      account. <a href="/register">Sign up!</a>
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <div className="column"></div>
        </div>
      </div>
      <br />
      <br />
    </div>
  </Layout>
);
