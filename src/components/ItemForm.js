import React from 'react';

const ItemForm = ({ fields, save }) => {

  const [values, SetValues] = React.useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    save(values);
  }

  React.useEffect(() => {
    SetValues([...fields])
  }, [fields])

  const checkboxHandler = (index, checkboxName) => {
    if (values[index].value?.includes(checkboxName)) {
      values[index]['value'] = values[index]['value'].filter((value) => value !== checkboxName)
    } else {
      values[index]['value'] = [...(values[index]?.['value'] || []), checkboxName];
      if (values[index]['multiple'] === false) {
        values[index]['value'] = [checkboxName];
      }
    }
    SetValues(() => [...values])
  }



  return (<>
    <div>Hello</div>
    <form onSubmit={handleSubmit}>
      {values?.map((item, index) => {
        switch (item.type) {
          case "text":
          case "email":
          case "number":
          case "tel":
            return <div key={index}>
              <label htmlFor={item.key} >
                {item.label}
                <input type={item.type} id={item.key} name={item.key} onChange={(e) => values[index]["value"] = e?.target?.value} />
              </label>
            </div>

          case "checkbox":
            return <div key={index}>
              <div>
                {item.label}
              </div>
              {item?.options?.map((option, ind) =>
                <label htmlFor={option.key} key={'c-' + ind + '-' + item.value?.length}>
                  <input checked={item.value?.includes(option.value)} type={item.type} id={option.value} name={option.value} onChange={(e) => {
                    checkboxHandler(index, e.target.name);
                  }} />
                  {option.label}
                </label>)}
            </div>

          case "radio":
            return <div key={index}>
              <div>
                {item.label}
              </div>
              {item?.options?.map((option, ind) =>
                <label key={'r-' + ind}>
                  <input checked={values?.[index]['value'] === option.value} type={item.type} id={option.value} name={item.key} value={option.value} onChange={(e) => {
                    values[index]['value'] = option.value;
                    SetValues([...values])
                  }} />
                  {option.label}
                </label>)}
            </div>
          default: return <></>
        }
      })}
      <input type="submit" value="Submit" />
    </form>
  </>)
}

export default ItemForm;