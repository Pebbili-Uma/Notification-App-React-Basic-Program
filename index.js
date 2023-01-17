const Notification = (props) => {
  //  Write your code here.
  console.log(props);
  const { content, imgUrls, name } = props;
  return (
    <div className={name}>
      <img src={imgUrls} className="image" />
      <p className="notification-heading"> {content} </p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div class="bg-container">
    <h1 class="heading"> Notifications </h1>
    <Notification
      content="Information Message"
      imgUrls="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      name="bg-primary-box"
    />
    <Notification
      content="Success Message"
      imgUrls="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      name="bg-success-box"
    />
    <Notification
      content="Warning Message"
      imgUrls="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      name="bg-warning-box"
    />
    <Notification
      content="Error Message"
      imgUrls="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      name="bg-danger-box"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
