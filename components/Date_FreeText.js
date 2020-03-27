import {useState} from 'react';

export default ({getPossibleDates}) => {
  const [possibleDates, setPossibleDates] = useState(['', '']);

  const handleDelete = e => {
    if (possibleDates.length <= 2) {
      console.log('you can not delete');
      return;
    }

    let tempPossibleDates = [...possibleDates];
    tempPossibleDates.splice(e.target.parentElement.id, 1);
    setPossibleDates(tempPossibleDates);
  };

  const generateNewItem = () => {
    setPossibleDates([...possibleDates, '']);
  };

  const onPossibleDatesChanged = e => {
    let tempPossibleDates = [...possibleDates];
    tempPossibleDates[e.target.parentElement.parentElement.id] = e.target.value;
    setPossibleDates(tempPossibleDates);
  };

  return (
    <div>
      <br />
      <div className="columns">
        <div className="column"></div>
        <div className="column is-5">
          <div className="box" style={{backgroundColor: '#C8E4FF'}}>
            <div className="field">
              <label className="label has-text-weight-normal">
                Enter possible dates below
              </label>
              <div className="field-body">
                <div className="field is-expanded">
                  {possibleDates.map((item, index) => (
                    <div key={index}>
                      <div
                        className="field has-addons possible-dates-field"
                        id={index}
                      >
                        <p className="control is-expanded">
                          <input
                            className="input possible-dates-input"
                            type="text"
                            value={item}
                            onChange={onPossibleDatesChanged}
                          />
                        </p>

                        <p className="control" onClick={handleDelete}>
                          <a className="button is-static">
                            <i className="fas fa-trash-alt"></i>
                          </a>
                        </p>
                      </div>
                      <br />
                    </div>
                  ))}

                  <p className="has-text-centered">
                    <i
                      className="fas fa-plus"
                      onClick={generateNewItem}
                      style={{cursor: 'pointer'}}
                    ></i>
                  </p>
                </div>
              </div>
            </div>

            <p className="has-text-right">
              <a
                className="button is-small is-link has-text-right"
                onClick={() => {
                  getPossibleDates(possibleDates);
                }}
              >
                Next
              </a>
            </p>
          </div>
        </div>
        <div className="column"></div>
      </div>
      <br />
      <br />
    </div>
  );
};
