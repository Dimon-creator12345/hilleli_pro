const Wrapper = ({ dataUsers }) => {
  console.log(dataUsers)
  let users = dataUsers.map((item, index) => {
    return (
      <div className="card" key={item.id}>
        <div className="card__header">{item.name}</div>
        <div className="card__body">{item.level}</div>
      </div>
    );
  });
  return <div className="wrapper">{users}</div>;
};

export default Wrapper;
